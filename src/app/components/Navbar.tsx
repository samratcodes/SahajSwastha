'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const navbarConfig = {
  brand: {
    name: 'Sahaj Swastha',
    logo: '/logo.png', // replace with actual logo path
    href: '/',
  },
  links: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/aboutus' },
    { label: 'Services', href: '/services' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: {
    label: 'Free Consultation',
    href: '/contact',
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 h-16 flex items-center px-6 md:px-12">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href={navbarConfig.brand.href} className="flex items-center gap-2">
            {navbarConfig.brand.logo && (
              <Image src={navbarConfig.brand.logo} alt="Logo" width={32} height={32} />
            )}
            <span className="text-xl font-bold text-blue-600">
              {navbarConfig.brand.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navbarConfig.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-gray-800 hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link href={navbarConfig.cta.href}>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-green-600 transition">
                {navbarConfig.cta.label}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
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
              <button className="w-full px-5 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-green-600 transition">
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
