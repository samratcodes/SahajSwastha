
import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock } from 'react-icons/fi'
const PatientsCard = () => {
      const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  return (
    <div>
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
    </div>
  )
}

export default PatientsCard
