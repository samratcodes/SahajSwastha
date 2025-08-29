import React from 'react'
import { FaUserMd } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi'
import { motion } from 'framer-motion'
const HospitalCard = () => {
      const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
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
      </>
  )
}

export default HospitalCard
