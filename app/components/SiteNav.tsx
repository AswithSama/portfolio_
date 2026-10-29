"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact Me", href: "/#contact" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      if (menuRootRef.current && !menuRootRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuRootRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4 sm:px-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 rounded-full border border-white/20 bg-[#111723]/95 px-3 py-2.5 shadow-[0_12px_48px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.06] backdrop-blur-2xl sm:px-5">
        <div ref={menuRootRef} className="relative shrink-0">
          <button
            type="button"
            aria-label={menuOpen ? "Close section menu" : "Open section menu"}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-controls="portfolio-section-menu"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-extrabold tracking-tight text-black shadow-sm transition hover:scale-105 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            AS
          </button>

          {menuOpen && (
            <div
              id="portfolio-section-menu"
              role="group"
              aria-label="Portfolio sections"
              className="absolute left-0 top-[calc(100%+14px)] z-50 w-[min(290px,calc(100vw-32px))] rounded-2xl border border-white/20 bg-[#131a27] p-2 shadow-[0_24px_65px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.04]"
            >
              <p className="px-4 pb-2 pt-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/75">Explore portfolio</p>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <Link href="/about" className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white">About</Link>
          <Link href="/#projects" className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white">Projects</Link>
          <Link href="/#experience" className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white">Experience</Link>
          <Link href="/#skills" className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white">Skills</Link>
          <Link href="/#contact" className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">Contact</Link>
        </div>
        <span className="pr-3 text-xs font-semibold tracking-[0.16em] text-gray-300 md:hidden">EXPLORE MY WORK</span>
      </div>
    </nav>
  );
}
