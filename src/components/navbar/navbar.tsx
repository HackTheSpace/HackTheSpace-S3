"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "PRIZES", href: "#prizes" },
  { label: "TRACKS", href: "#tracks" },
  { label: "FAQs", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 shrink-0"
            >
              <Image
                src="/assets/logo/Color/logo.png"
                alt="HackTheSpace Logo"
                width={100}
                height={100}
                className="w-9 h-9 md:w-28 md:h-28 object-contain"
              />
            </Link>

            {/* Desktop Nav Links */}
            <ul
              className={`hidden md:flex items-center gap-8 px-8 py-3.5 rounded-full transition-all duration-500 border ${
                scrolled
                  ? "bg-white/10 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-white/20"
                  : "bg-transparent border-transparent"
              }`}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-[12px] font-poppins font-semibold tracking-[0.15em] text-gray-900 hover:text-black transition-colors duration-200 group cursor-pointer"
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg,#1fbcd7,#feb449,#fe5c36)",
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className="w-28"></div>

            {/* Mobile: Hamburger button */}
            <button
              id="navbar-hamburger"
              className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Sidebar Overlay ── */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Drawer */}
        <aside
          className={`absolute top-0 right-0 h-full w-[75vw] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar header */}
          <div
            className="flex items-center justify-between px-6 py-5 border-b border-gray-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(31,188,215,0.08), rgba(254,180,73,0.06))",
            }}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo/Color/logo.png"
                alt="HackTheSpace Logo"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
              />
              <span
                className="text-xs font-poppins font-bold tracking-widest uppercase"
                style={{
                  background: "linear-gradient(135deg,#1fbcd7,#feb449,#fe5c36)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                HackTheSpace
              </span>
            </div>
            {/* Close button */}
            <button
              id="navbar-sidebar-close"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L14 14M14 2L2 14"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col px-4 py-6 gap-1 flex-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <button
                  id={`navbar-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-sm font-poppins font-semibold tracking-[0.12em] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center gap-3 group cursor-pointer"
                  style={{
                    transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                  }}
                >
                  {/* Gradient dot accent */}
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background:
                        "linear-gradient(135deg,#1fbcd7,#feb449,#fe5c36)",
                    }}
                  />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Bottom brand strip */}
          <div
            className="h-1 w-full"
            style={{
              background: "linear-gradient(90deg,#1fbcd7,#feb449,#fe5c36)",
            }}
          />
        </aside>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
