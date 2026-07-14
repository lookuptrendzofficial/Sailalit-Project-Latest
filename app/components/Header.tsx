"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const logo =
    "https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={logo}
            alt="Sai Lalit"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-[16px] font-semibold">

          <Link
            href="/"
            className="text-red-600 border-b-2 border-red-600 pb-1"
          >
            Home
          </Link>

          <Link href="/about" className="hover:text-red-600">
            About Us
          </Link>

          <Link href="/services" className="hover:text-red-600">
            Services
          </Link>

          <Link href="/projects" className="hover:text-red-600">
            Projects
          </Link>

          <Link href="/clients" className="hover:text-red-600">
            Our Clients
          </Link>

          <Link href="/contact" className="hover:text-red-600">
            Contact Us
          </Link>

        </nav>

        {/* Phone Button */}
        <a
          href="tel:8106406999"
          className="hidden lg:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          <Phone size={18} />
          81064 06999
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">

          <nav className="flex flex-col px-6 py-6 gap-5 font-medium">

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>

            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link href="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>

            <Link href="/clients" onClick={() => setMenuOpen(false)}>
              Our Clients
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>

            <a
              href="tel:8106406999"
              className="bg-red-600 text-white rounded-md py-3 text-center font-semibold"
            >
              81064 06999
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}
