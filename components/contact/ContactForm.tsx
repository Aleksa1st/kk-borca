"use client";

import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

const enquiryTypes = [
  "Probni trening",
  "Članstvo",
  "Partnerstvo",
  "Mediji",
  "Ostalo",
];

type FormStatus = "idle" | "sending" | "success" | "error";

type TurnstileInstance = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "compact" | "flexible";
    }
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileInstance;
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (
      !scriptLoaded ||
      !siteKey ||
      !window.turnstile ||
      !turnstileContainerRef.current ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: siteKey,
        theme: "light",
        size: "flexible",
        callback: (token: string) => {
          setTurnstileToken(token);
          setStatusMessage("");
        },
        "expired-callback": () => {
          setTurnstileToken("");
          setStatus("error");
          setStatusMessage(
            "Bezbednosna provera je istekla. Molimo pokušajte ponovo."
          );
        },
        "error-callback": () => {
          setTurnstileToken("");
          setStatus("error");
          setStatusMessage(
            "Bezbednosna provera trenutno nije dostupna. Osvežite stranicu i pokušajte ponovo."
          );
        },
      }
    );

    return () => {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [scriptLoaded, siteKey]);

  function resetTurnstile() {
    setTurnstileToken("");

    if (window.turnstile && widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!siteKey) {
      setStatus("error");
      setStatusMessage("Bezbednosna provera nije pravilno podešena.");
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setStatusMessage("Molimo završite bezbednosnu proveru.");
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      enquiry: String(formData.get("enquiry") ?? ""),
      message: String(formData.get("message") ?? ""),
      turnstileToken,
    };

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error || "Poruka trenutno nije mogla biti poslata."
        );
      }

      setStatus("success");
      setStatusMessage(
        result.message || "Poruka je uspešno poslata. Hvala vam!"
      );

      formElement.reset();
      resetTurnstile();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Došlo je do greške prilikom slanja poruke."
      );

      resetTurnstile();
    }
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-white p-8 shadow-2xl md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-black uppercase tracking-wide text-blue-950"
            >
              Ime i prezime
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              disabled={status === "sending"}
              className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
              placeholder="Vaše ime i prezime"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-black uppercase tracking-wide text-blue-950"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              disabled={status === "sending"}
              className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
              placeholder="ime@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-black uppercase tracking-wide text-blue-950"
            >
              Telefon
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={50}
              disabled={status === "sending"}
              className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
              placeholder="06..."
            />
          </div>

          <div>
            <label
              htmlFor="enquiry"
              className="text-sm font-black uppercase tracking-wide text-blue-950"
            >
              Tema
            </label>

            <select
              id="enquiry"
              name="enquiry"
              required
              defaultValue="Probni trening"
              disabled={status === "sending"}
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
            >
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="text-sm font-black uppercase tracking-wide text-blue-950"
          >
            Poruka
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={7}
            maxLength={5000}
            disabled={status === "sending"}
            className="mt-3 w-full resize-none rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
            placeholder="Napišite kako možemo da vam pomognemo..."
          />
        </div>

        <div className="mt-7">
          <p className="mb-3 text-sm font-black uppercase tracking-wide text-blue-950">
            Bezbednosna provera
          </p>

          {siteKey ? (
            <div ref={turnstileContainerRef} className="min-h-[65px]" />
          ) : (
            <div className="rounded-2xl bg-red-50 px-5 py-4 font-semibold text-red-700">
              Turnstile Site Key nije konfigurisan.
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending" || !turnstileToken}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={20} />
          {status === "sending" ? "Slanje..." : "Pošalji poruku"}
        </button>

        {statusMessage && (
          <div
            className={`mt-6 rounded-2xl px-5 py-4 font-semibold ${
              status === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-700"
            }`}
            role="status"
          >
            {statusMessage}
          </div>
        )}
      </form>
    </>
  );
}