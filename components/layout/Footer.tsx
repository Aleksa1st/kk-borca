import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const quickLinks = [
  { title: "Početna", href: "/" },
  { title: "O klubu", href: "/o-klubu" },
  { title: "Timovi", href: "/timovi" },
  { title: "Galerija", href: "/galerija" },
  { title: "Takmičenja", href: "/takmicenja" },
  { title: "Vesti", href: "/vesti" },
  { title: "Partneri", href: "/partneri" },
  { title: "Postani član", href: "/postani-clan" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#032B63] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-3">
          {/* LEVA KOLONA */}
          <div>
            <Link
              href="/"
              aria-label="KK Borča – početna stranica"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/images/home/logo.jpg"
                alt="Grb KK Borča"
                width={78}
                height={78}
                className="h-[78px] w-[78px] rounded-full object-contain"
              />

              <h2 className="text-4xl font-black tracking-wide">
                KK <span className="text-yellow-400">Borča</span>
              </h2>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-blue-100">
              Košarkaški klub Borča od 1996. godine razvija mlade sportiste
              kroz kvalitetan stručni rad, disciplinu, obrazovanje i ljubav
              prema košarci.
            </p>

            <Link
              href="/postani-clan"
              className="mt-8 inline-flex rounded-full bg-yellow-400 px-7 py-3 font-bold text-blue-950 transition duration-300 hover:bg-yellow-300"
            >
              Besplatan probni trening
            </Link>
          </div>

          {/* SREDNJA KOLONA */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400">
              Navigacija
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 transition duration-300 hover:text-yellow-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DESNA KOLONA */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400">
              Kontakt
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-yellow-400" />

                <span className="text-blue-100">
                  Vizeljska 1
                  <br />
                  11211 Borča, Beograd
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-yellow-400" />

                <a
                  href="tel:+381642259373"
                  className="text-blue-100 transition hover:text-yellow-300"
                >
                  +381 64 225 9373
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-yellow-400" />

                <a
                  href="mailto:kkborca96@gmail.com"
                  className="break-all text-blue-100 transition hover:text-yellow-300"
                >
                  kkborca96@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={20} className="shrink-0 text-yellow-400" />

                <a
                  href="https://kkborca.rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 transition hover:text-yellow-300"
                >
                  kkborca.rs
                </a>
              </div>

              <div className="pt-4">
                <p className="mb-4 font-semibold text-yellow-400">
                  Pratite nas
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/1CwBRnqDFt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-yellow-400 hover:text-blue-950"
                    aria-label="KK Borča na Facebooku"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  <a
                    href="https://www.instagram.com/kkborca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-yellow-400 hover:text-blue-950"
                    aria-label="KK Borča na Instagramu"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-blue-200 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} KK Borča. Sva prava zadržana.
          </p>

          <p>
            KK Borča • PIB: 102680006
          </p>

          <p>
            Osnovan 1996 • Borča • Beograd
          </p>
        </div>
      </div>
    </footer>
  );
}