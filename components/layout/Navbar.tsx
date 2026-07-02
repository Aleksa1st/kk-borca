import Link from "next/link";

const menuItems = [
  { title: "Početna", href: "/" },
  { title: "O klubu", href: "/o-klubu" },
  { title: "Timovi", href: "/timovi" },
  { title: "Takmičenja", href: "/takmicenja" },
  { title: "Vesti", href: "/vesti" },
  { title: "Galerija", href: "/galerija" },
  { title: "Partneri", href: "/partneri" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="text-2xl font-bold text-blue-900">
          KK <span className="text-yellow-500">Borča</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="font-medium text-slate-700 hover:text-blue-700 transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/postani-clan"
          className="rounded-full bg-yellow-400 hover:bg-yellow-500 px-6 py-3 font-semibold transition-colors"
        >
          Pridruži se
        </Link>

      </nav>
    </header>
  );
}