"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { title: "Početna", href: "/" },
  { title: "O nama", href: "/o-klubu" },
  { title: "Timovi", href: "/timovi" },
  { title: "Život u klubu", href: "/galerija" },
  { title: "Rezultati", href: "/takmicenja" },
  { title: "Partneri", href: "/partneri" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="relative -mb-2">
            <Image
              src="/images/home/logo.jpg"
              alt="KK Borča"
              width={76}
              height={76}
              priority
              className="h-[76px] w-[76px] object-contain drop-shadow-lg"
            />
          </div>

          <span className="text-3xl font-black tracking-tight">
            <span className="text-blue-700">KK </span>
            <span className="text-yellow-500">Borča</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
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

        {/* Button */}
        <Link
          href="/postani-clan"
          className="rounded-full bg-yellow-400 px-7 py-3 text-sm font-black text-blue-950 shadow-sm transition hover:bg-yellow-300"
        >
          Pridruži se
        </Link>
      </nav>
    </header>
  );
}