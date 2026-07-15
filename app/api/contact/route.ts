import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  enquiry?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email servis nije konfigurisan." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const phone = body.phone?.trim() ?? "";
    const enquiry = body.enquiry?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !enquiry || !message) {
      return NextResponse.json(
        { error: "Popunite sva obavezna polja." },
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
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Uneti podaci su predugački." },
        { status: 400 }
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
      { success: true, message: "Poruka je uspešno poslata." },
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