"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/about", label: "About WAM" },
    { href: "/programmes", label: "Programs" },
    { href: "/announcements", label: "Announcements" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-200/20 bg-[#062f24] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:py-4">
        {/* Institution Brand */}
        <Link href="/" className="flex min-w-0 items-center space-x-2 sm:space-x-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#a7d9a7] text-xl font-bold text-[#062f24] shadow sm:h-10 sm:w-10">
            W
          </div>
          <div className="min-w-0">
            <span className="block truncate text-base font-bold leading-tight tracking-wide sm:text-xl">
              WAM INSTITUTE
            </span>
            <span className="block truncate text-[10px] uppercase tracking-wider text-emerald-200 sm:text-xs">
              Online Institute
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#a7d9a7]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/login"
            className="bg-[#a7d9a7] px-3 py-2 text-xs font-semibold text-[#062f24] shadow-sm transition-colors hover:bg-white sm:px-5 sm:text-sm"
          >
            Portal Login
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center text-emerald-100 hover:bg-emerald-900 lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="border-t border-emerald-100/15 px-4 py-2 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-emerald-100/10 py-3 text-sm font-medium text-emerald-50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}