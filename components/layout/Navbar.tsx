"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { title: "O nama", href: "/o-klubu" },
  { title: "Timovi", href: "/timovi" },
  { title: "Život u klubu", href: "/galerija" },
  { title: "Rezultati", href: "/takmicenja" },
  { title: "Vesti", href: "/vesti" },
  { title: "Partneri", href: "/partneri" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full overflow-visible transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/90 shadow-sm backdrop-blur-md"
      }`}
    >
      <nav className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          aria-label="KK Borča – početna stranica"
          className="relative z-20 flex items-center gap-5"
        >
          <div className="relative h-24 w-[150px] shrink-0">
            <Image
              src="/images/home/logo.jpg"
              alt="Grb KK Borča"
              width={148}
              height={148}
              priority
              className="absolute left-0 top-2 h-[148px] w-[148px] rounded-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          <span className="hidden text-3xl font-black tracking-tight sm:block">
            <span className="text-blue-700">KK </span>
            <span className="text-yellow-500">Borča</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-blue-950 transition hover:text-blue-700"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <Link
          href="/postani-clan"
          className="rounded-full bg-yellow-400 px-7 py-3 text-sm font-black text-blue-950 shadow-sm transition hover:bg-yellow-300 hover:shadow-md"
        >
          Pridruži se
        </Link>
      </nav>
    </header>
  );
}