"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const enquiryTypes = [
  "Probni trening",
  "Članstvo",
  "Partnerstvo",
  "Mediji",
  "Ostalo",
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      enquiry: String(formData.get("enquiry") ?? ""),
      message: String(formData.get("message") ?? ""),
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
    } catch (error) {
      setStatus("error");

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Došlo je do greške prilikom slanja poruke."
      );
    }
  }

  return (
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

      <button
        type="submit"
        disabled={status === "sending"}
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
  );
}