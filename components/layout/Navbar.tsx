"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full overflow-visible transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/90 shadow-sm backdrop-blur-md"
      }`}
    >
      <nav className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="KK Borča – početna stranica"
          className="relative z-20 flex min-w-0 items-center gap-4"
          onClick={closeMobileMenu}
        >
          <div className="relative h-24 w-[100px] shrink-0 md:w-[150px]">
            <Image
              src="/images/home/logo.jpg"
              alt="Grb KK Borča"
              width={148}
              height={148}
              loading="eager"
              fetchPriority="high"
              sizes="148px"
              className="absolute left-0 top-2 h-[110px] w-[110px] rounded-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 md:h-[148px] md:w-[148px]"
            />
          </div>

          <span className="hidden whitespace-nowrap text-3xl font-black tracking-tight md:block">
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

        <div className="relative z-20 flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/postani-clan"
            className="hidden rounded-full bg-yellow-400 px-5 py-3 text-sm font-black text-blue-950 shadow-sm transition hover:bg-yellow-300 hover:shadow-md sm:inline-flex lg:px-7"
            onClick={closeMobileMenu}
          >
            Pridruži se
          </Link>

          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Zatvori navigacioni meni"
                : "Otvori navigacioni meni"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-950 shadow-sm transition hover:bg-blue-50 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" className="h-7 w-7" />
            ) : (
              <Menu aria-hidden="true" className="h-7 w-7" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-24 z-40 bg-blue-950/55 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="max-h-[calc(100vh-6rem)] overflow-y-auto rounded-b-3xl bg-white px-6 pb-8 pt-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="border-b border-slate-100 py-4 text-lg font-bold text-blue-950 transition hover:text-blue-700"
                >
                  {link.title}
                </Link>
              ))}

              <Link
                href="/postani-clan"
                onClick={closeMobileMenu}
                className="mt-6 rounded-full bg-yellow-400 px-8 py-4 text-center text-base font-black text-blue-950 shadow-md transition hover:bg-yellow-300"
              >
                Pridruži se treningu
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}