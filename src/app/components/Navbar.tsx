'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

const navbarConfig = {
  brand: {
    name: 'Sahaj Swastha',
    logo: '/logomain.png',
    href: '/',
  },
  links: [
    { label: 'About Us', href: '/aboutus' },
    { label: 'Services', href: '/services' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Membership', href: '/membership' },
  ],
  cta: {
    label: 'Book Now',
    href: '/contact',
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-1 z-50 bg-gradient-to-t from-white/0 to-white/50">
        {/* Left side: Links + Logo */}
        <div className="flex items-center gap-6">
                    {/* Logo */}
          <Link href={navbarConfig.brand.href} className="flex items-center h-[100px] w-[100px] overflow-hidden">
            <Image
              src={navbarConfig.brand.logo}
              alt={navbarConfig.brand.name}
              width={1000}
              height={1000}
              className="object-contain h-[250px] w-[150px]"
            />
          </Link>
          {/* Nav Links */}
          <div className="hidden md:flex gap-6">
            {navbarConfig.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>

        {/* Right side: Search + CTA + Menu */}
        <div className="flex items-center gap-6">
          {/* Search Box */}
          <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow">
            <FiSearch size={18} className="text-gray-800" />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm text-gray-700"
            />
          </div>

          {/* CTA */}
          <Link href={navbarConfig.cta.href}>
            <button className="bg-black text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition">
              {navbarConfig.cta.label}
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-white rounded-full p-2 shadow text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          {/* Brand */}
          <span className="text-2xl font-bold text-blue-600 border-b pb-3">
            {navbarConfig.brand.name}
          </span>

          {/* Links */}
          <div className="flex flex-col space-y-4">
            {navbarConfig.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 font-medium hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <Link href={navbarConfig.cta.href} onClick={() => setIsMenuOpen(false)}>
              <button className="w-full px-5 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
                {navbarConfig.cta.label}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
