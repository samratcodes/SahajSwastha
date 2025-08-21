"use client";

import { FiSearch, FiArrowRight } from "react-icons/fi";

export default function Mainsection() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400">
      {/* Top Navbar */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <button className="text-gray-700 font-medium">About Us</button>
          <button className="text-gray-700 font-medium">Services</button>
          <button className="text-gray-700 font-medium">Facilities</button>
          <button className="text-gray-700 font-medium">Membership</button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow">
            <FiSearch size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm"
            />
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full shadow">
            Book Now
          </button>
          <button className="bg-white rounded-full p-2 shadow">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          Discover Hospitals, Access Care, & Find Trusted Services Nearby
        </h1>
        <p className="text-white/80 mt-4 max-w-xl">
          Search trusted hospitals for top-notch care and easy appointments
          and find the best hospitals near you in seconds!
        </p>

        {/* CTA Button */}
        <button className="mt-8 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-100 transition">
          Find Hospital
          <FiArrowRight size={20} />
        </button>
      </section>

      {/* Left Card */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 w-60">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>
        <p className="text-gray-700 text-sm">
          We’re committed to delivering a high-quality experience in a welcoming
          and supportive atmosphere.
        </p>
      </div>

      {/* Bottom Left Badge */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
        </div>
        <span className="text-sm font-medium text-gray-700">
          25K+ Satisfied Client With Us
        </span>
      </div>

      {/* Right Side Buttons */}
      <div className="absolute right-6 top-1/3 flex flex-col gap-3">
        <button className="bg-white p-2 rounded-full shadow">Instagram</button>
        <button className="bg-white p-2 rounded-full shadow">Twitter</button>
        <button className="bg-white p-2 rounded-full shadow">Facebook</button>
      </div>

      {/* Bottom Right Get the App */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
        <span className="font-medium text-gray-700">Get the app</span>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>
      </div>
    </main>
  );
}
