import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = [
  { title: "Početna", href: "/" },
  { title: "O klubu", href: "/o-klubu" },
  { title: "Timovi", href: "/timovi" },
  { title: "Takmičenja", href: "/takmicenja" },
  { title: "Partneri", href: "/partneri" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-2xl font-black">
            KK <span className="text-yellow-300">Borča</span>
          </h2>

          <p className="mt-4 text-blue-100">
            Od 1996. godine razvijamo decu kroz košarku,
            karakter, obrazovanje i zajedništvo.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-yellow-300">
            Brza navigacija
          </h3>

          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-yellow-300">
            Kontakt
          </h3>

          <div className="mt-4 space-y-4">

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Borča, Beograd</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>Telefon: uskoro</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>Email: uskoro</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={18} />
              <span>Društvene mreže uskoro</span>
            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-blue-200">
        © 2026 KK Borča • Više od košarke.
      </div>
    </footer>
  );
}