import Link from "next/link";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "O klubu", href: "#about" },
  { label: "Timovi", href: "#teams" },
  { label: "Rezultati", href: "#results" },
  { label: "Sponzori", href: "#sponsors" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-blue-950/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight text-white">
          KK <span className="text-yellow-300">BORČA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-blue-100 transition hover:text-yellow-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Pridruži se</Button>
        </div>
      </div>
    </header>
  );
}