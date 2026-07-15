"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../component/assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/program" },
    { name: "Donate", href: "/donate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-xs fixed top-0 left-0 z-50 p-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Image src={logo} alt="Fusion Unity Foundation logo" width={120} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#2F2E31] hover:text-[#1C3D60] transition font-medium text-base"
              >
                {link.name}
              </a>
            ))}

            {/* Donate Button */}
            <a
              href="/donate"
              className="ml-4 px-4 py-2 bg-[#1C3D60] text-white rounded-full hover:bg-[#2F2E31] transition font-medium text-base"
            >
              Donate Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} aria-label="Menu" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-3">
          <nav className="flex flex-col space-y-3 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#2F2E31] hover:text-[#1C3D60] transition font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Donate Button (Mobile) */}
            <a
              href="/donate"
              className="mt-2 px-4 py-2 bg-[#1C3D60] text-white rounded-lg text-center hover:bg-[#2F2E31] transition font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
