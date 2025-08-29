// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HealthServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');


  // Sample data for services
  const services = [
    { id: 1, title: 'Book Doctors', icon: '👨‍⚕️', description: 'Schedule appointments with specialists' },
    { id: 2, title: 'See Reports', icon: '📊', description: 'Access your medical test results' },
    { id: 3, title: 'Exercises', icon: '🏃', description: 'Personalized exercise recommendations' },
    { id: 4, title: 'Track Records', icon: '📈', description: 'Monitor your health progress' },
    { id: 5, title: 'Billing', icon: '💰', description: 'View and pay medical bills' },
    { id: 6, title: 'Generate Reports', icon: '📋', description: 'Create health summary reports' },
  ];

  // Sample data for carousel
  const carouselItems = [
    { id: 1, title: 'Complete Health Checkup', description: 'Comprehensive health assessment with advanced diagnostics', image: '/api/placeholder/600/300' },
    { id: 2, title: 'Emergency Services', description: '24/7 emergency care with expert medical staff', image: '/api/placeholder/600/300' },
    { id: 3, title: 'Telemedicine', description: 'Virtual consultations from the comfort of your home', image: '/api/placeholder/600/300' },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#3dbdec] to-[#2aa8d0] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Health Services with Easy Access and Best Service</h1>
            <p className="text-lg mb-6">Get quality medical care with a variety of services designed for your comfort and health needs.</p>
            
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search hospital, clients essential or server..."
                className="w-full py-3 px-4 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3dbdec]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1f2b5b] text-white p-2 rounded-full">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img src="/api/placeholder/500/400" alt="Healthcare professionals" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>


      {/* Carousel Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-xl shadow-lg h-64">
            <AnimatePresence>
              {carouselItems.map((item, index) => (
                index === currentSlide && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="relative z-10 text-white p-8 max-w-xl">
                      <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                      <p className="text-lg mb-4">{item.description}</p>
                      <button className="bg-[#3dbdec] hover:bg-[#2aa8d0] text-white px-6 py-2 rounded-full font-medium transition-colors">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Carousel Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#3dbdec]' : 'bg-white'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentSlide(currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-[#1f2b5b] p-2 rounded-full z-20"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button 
              onClick={() => setCurrentSlide(currentSlide === carouselItems.length - 1 ? 0 : currentSlide + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-[#1f2b5b] p-2 rounded-full z-20"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1f2b5b] mb-2 text-center">Our Services</h2>
          <p className="text-gray-600 text-center mb-12">Comprehensive healthcare solutions for patients and hospitals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#3dbdec] transition-colors"
              >
                <div className="text-4xl text-[#3dbdec] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#1f2b5b] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1f2b5b] to-[#3a4a7c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Make an Appointment with Choice Doctor</h2>
          <p className="text-xl mb-8">Choose a specialist doctor and arrange consultation schedule easily</p>
          <button className="bg-[#3dbdec] hover:bg-[#2aa8d0] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2b5b] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HealthPlus</h3>
              <p className="text-gray-300">Providing quality healthcare services with compassion and excellence.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Doctors</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Appointments</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Emergency Care</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Diagnostics</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Surgery</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Therapy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-300 not-italic">
                <p>123 Medical Center Drive</p>
                <p>Healthcare City, HC 12345</p>
                <p className="mt-2">Phone: (123) 456-7890</p>
                <p>Email: info@healthplus.com</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} HealthPlus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}