"use client";

import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function Mainsection() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#3dbdec] to-[#1f2b5b]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          Sahaj Swastha – From Care to Comfort
        </h1>
        <p className="text-white/90 mt-4 max-w-xl text-lg">
          Health services made easy.  
          Access reports across multiple hospitals, manage your care, and book services effortlessly.  
          Care that begins with simplicity.
        </p>

        {/* CTA Button */}
        <button className="mt-8 flex items-center gap-2 bg-white text-[#1f2b5b] px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-100 transition">
          Get Started
          <FiArrowRight size={20} />
        </button>
      </section>

      {/* Left Card */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-5 w-64 border-l-4 border-[#1f2b5b]">
        <h3 className="font-semibold text-[#1f2b5b] mb-2">For Hospitals</h3>
        <p className="text-gray-700 text-sm">
          Simplify operations, connect with patients, and deliver seamless care 
          through an easy-to-use management system.
        </p>
      </div>

      {/* Bottom Left Badge */}
      <div className="absolute bottom-6 left-6 bg-[#1f2b5b] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-[#1f2b5b]" />
          <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-[#1f2b5b]" />
          <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-[#1f2b5b]" />
        </div>
        <span className="text-sm font-medium">
          Trusted by thousands of patients & hospitals
        </span>
      </div>

      {/* Right Side Buttons */}
      <div className="absolute right-6 top-1/3 flex flex-col gap-3">
        <button className="bg-white text-[#1f2b5b] px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
          LinkedIn
        </button>
        <button className="bg-white text-[#1f2b5b] px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
          Twitter
        </button>
        <button className="bg-white text-[#1f2b5b] px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
          Facebook
        </button>
      </div>

      {/* Bottom Right Get the App */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-lg">
        <span className="font-medium text-[#1f2b5b]">Download the App</span>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#3dbdec]" />
          <div className="w-8 h-8 rounded-full bg-[#3dbdec]" />
        </div>
      </div>
    </main>
  );
}
