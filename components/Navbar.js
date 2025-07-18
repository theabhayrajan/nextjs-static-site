import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-30 mt-7">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/header-logo.png"
            alt="Site Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Cases</Link>
          <Link href="#">Pages</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>

          <button className="ml-4" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              />
            </svg>
          </button>

          <button className="ml-2" aria-label="Shopping Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 4h14M10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
          </button>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-opacity-50 z-40"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-teal-700 text-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-teal-600">
          <Image
            src="/images/header-logo.png"
            alt="Site Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-6 py-6 space-y-6 font-medium text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">
            Home
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">
            About
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">
            Services
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">
            Cases
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">
            Pages
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">
            Blog
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-teal-300">
            Contact
          </Link>
          {/* rest of the code */}
        </nav>

      </div>
    </header>
  );
}
