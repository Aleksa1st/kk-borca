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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const enquiry = String(form.get("enquiry") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(
      `Kontakt sa sajta KK Borča — ${enquiry}`
    );

    const body = encodeURIComponent(
      [
        `Ime i prezime: ${name}`,
        `Email: ${email}`,
        `Telefon: ${phone || "Nije unet"}`,
        `Tema: ${enquiry}`,
        "",
        "Poruka:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:kkborca96@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
            className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
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
            className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
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
            className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
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
            className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
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
          className="mt-3 w-full resize-none rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
          placeholder="Napišite kako možemo da vam pomognemo..."
        />
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 transition hover:bg-yellow-300"
      >
        <Send size={20} />
        Pošalji poruku
      </button>

      {submitted && (
        <p className="mt-5 text-sm font-semibold text-slate-600">
          Otvoren je vaš email program sa pripremljenom porukom.
        </p>
      )}
    </form>
  );
}