import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  enquiry?: string;
  message?: string;
  turnstileToken?: string;
};

type TurnstileVerificationResponse = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "";
  }

  return request.headers.get("x-real-ip") ?? "";
}

async function verifyTurnstileToken(
  token: string,
  clientIp: string
): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured.");
    return false;
  }

  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);

  if (clientIp) {
    formData.append("remoteip", clientIp);
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Turnstile verification request failed:",
        response.status
      );
      return false;
    }

    const result =
      (await response.json()) as TurnstileVerificationResponse;

    if (!result.success) {
      console.error(
        "Turnstile verification failed:",
        result["error-codes"] ?? []
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email servis nije konfigurisan." },
        { status: 500 }
      );
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Bezbednosna provera nije konfigurisana." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const phone = body.phone?.trim() ?? "";
    const enquiry = body.enquiry?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const turnstileToken = body.turnstileToken?.trim() ?? "";

    if (!name || !email || !enquiry || !message) {
      return NextResponse.json(
        { error: "Popunite sva obavezna polja." },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Završite bezbednosnu proveru." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Unesite ispravnu email adresu." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 200 ||
      phone.length > 50 ||
      enquiry.length > 100 ||
      message.length > 5000 ||
      turnstileToken.length > 2048
    ) {
      return NextResponse.json(
        { error: "Uneti podaci su predugački." },
        { status: 400 }
      );
    }

    const clientIp = getClientIp(request);

    const turnstileValid = await verifyTurnstileToken(
      turnstileToken,
      clientIp
    );

    if (!turnstileValid) {
      return NextResponse.json(
        {
          error:
            "Bezbednosna provera nije uspela. Osvežite stranicu i pokušajte ponovo.",
        },
        { status: 403 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Nije unet");
    const safeEnquiry = escapeHtml(enquiry);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from: "KK Borča sajt <kontakt@send.kkborca.rs>",
      to: ["kkborca96@gmail.com"],
      replyTo: email,
      subject: `Kontakt sa sajta KK Borča — ${enquiry}`,
      text: [
        `Ime i prezime: ${name}`,
        `Email: ${email}`,
        `Telefon: ${phone || "Nije unet"}`,
        `Tema: ${enquiry}`,
        "",
        "Poruka:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="color: #1d4ed8;">Nova poruka sa sajta KK Borča</h2>

          <p><strong>Ime i prezime:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Telefon:</strong> ${safePhone}</p>
          <p><strong>Tema:</strong> ${safeEnquiry}</p>

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

          <p><strong>Poruka:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Poruka trenutno nije mogla biti poslata." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Poruka je uspešno poslata.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Došlo je do greške prilikom slanja poruke." },
      { status: 500 }
    );
  }
}