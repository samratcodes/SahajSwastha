"use client";
import { FiArrowRight, FiSearch, FiCalendar, FiClock } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaFacebook, FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Mainsection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#3dbdec] to-[#1f2b5b] overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 z-10">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl"
        >
          Sahaj Swastha – From Care to Comfort
        </motion.h1>
        
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-white/90 mt-6 max-w-2xl text-lg md:text-xl leading-relaxed"
        >
          Health services made easy. Access reports across multiple hospitals, manage your care, and book services effortlessly. Care that begins with simplicity.
        </motion.p>

        {/* CTA Button */}
        <motion.button 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 flex items-center gap-3 bg-white text-[#1f2b5b] px-8 py-4 rounded-full shadow-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
        >
          Get Started
          <FiArrowRight size={24} />
        </motion.button>
      </section>

      {/* Left Card - For Hospitals */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
        transition={{ delay: 0.6 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 w-80 border-l-4 border-[#1f2b5b] z-20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#1f2b5b] flex items-center justify-center">
            <FaUserMd className="text-white text-xl" />
          </div>
          <h3 className="font-bold text-[#1f2b5b] text-lg">For Hospitals</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Simplify operations, connect with patients, and deliver seamless care through an easy-to-use management system.
        </p>
        
        <div className="bg-blue-50 p-3 rounded-lg mb-4">
          <div className="flex items-center gap-2 text-sm text-[#1f2b5b] font-medium">
            <FiSearch className="text-[#1f2b5b]" />
            <span>Search by specialist</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {['Cardiologist', 'Neurologist', 'Pediatrician', 'Dermatologist'].map((specialty, index) => (
            <div key={index} className="bg-gray-100 rounded-lg px-3 py-2 text-xs text-center">
              {specialty}
            </div>
          ))}
        </div>
        
        <button className="w-full bg-[#1f2b5b] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#2a3a75] transition-colors">
          Manage Specialists
        </button>
      </motion.div>

      {/* Right Card - For Patients */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInRight}
        transition={{ delay: 0.8 }}
        className="absolute right-4 md:right-8 top-1/2 translate-y-8 bg-white rounded-2xl shadow-2xl p-6 w-80 border-l-4 border-[#3dbdec] z-20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#3dbdec] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-[#1f2b5b] text-lg">For Patients</h3>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 text-sm mb-2">Hospital appointment</h4>
          <div className="flex items-center justify-between bg-blue-50 p-2 rounded-lg">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-[#3dbdec]" />
              <span className="text-sm">March 2023</span>
            </div>
            <div className="text-xs bg-[#3dbdec] text-white px-2 py-1 rounded-full">Confirmed</div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <FiClock className="text-[#3dbdec]" />
            <span>1:30 PM</span>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="font-medium text-sm">Dr. Nadine - S. 50-OD</div>
            <div className="text-xs text-gray-600">F Lincoln Medical Center</div>
          </div>
        </div>
        
        <button className="w-full bg-[#3dbdec] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#2aa9d6] transition-colors">
          Book Appointment
        </button>
      </motion.div>

      {/* Bottom Left Badge */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-4 md:left-8 bg-[#1f2b5b] text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3 z-20"
      >
        <div className="flex -space-x-2">
          <Image
            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
            alt="User 1"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
            alt="User 2"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
            alt="User 3"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
        </div>
        <span className="text-sm font-medium">
          Trusted by 10,000+ patients & hospitals
        </span>
      </motion.div>

      {/* Social Media Buttons */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInRight}
        transition={{ delay: 1.2 }}
        className="absolute right-4 md:right-8 top-1/4 flex flex-col gap-3 z-20"
      >
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#0077b5] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          <FaLinkedin size={20} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#1da1f2] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          <FaTwitter size={20} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#1877f2] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          <FaFacebook size={20} />
        </motion.button>
      </motion.div>

      {/* Bottom Right Get the App */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 1.4 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-6 right-4 md:right-8 flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-xl z-20 transition-transform duration-300"
      >
        <span className="font-semibold text-[#1f2b5b]">Download the App</span>
        <div className="flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
            alt="App Store"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
            alt="Play Store"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Background decorative elements with floating animation */}
      <motion.div 
        animate="animate"
        className="absolute top-20 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
      ></motion.div>
      <motion.div 
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"
      ></motion.div>
      <motion.div 
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg"
      ></motion.div>
    </main>
  );
}