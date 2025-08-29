"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OmnioHospital = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardHover = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const cards = [
    {
      title: "60+ Years of Excellence",
      desc: "Decades of trusted care, prioritizing your health and well-being.",
      img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    },
    {
      title: "1000+ Expert Medical Care",
      desc: "A team of professionals committed to your health and well-being.",
      img: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
    },
    {
      title: "Advanced Medical Technology",
      desc: "Medical technology for accurate diagnosis and effective treatment.",
      img: "https://images.pexels.com/photos/4225881/pexels-photo-4225881.jpeg",
    },
    {
      title: "98% Happy Patients",
      desc: "We take pride in creating a positive experience for every patient.",
      img: "https://images.pexels.com/photos/5452204/pexels-photo-5452204.jpeg",
    },
    {
      title: "40+ Years Trusted Pharmacy",
      desc: "We deliver trusted pharmacy solutions with quality care and reliability.",
      img: "https://images.pexels.com/photos/3683071/pexels-photo-3683071.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="px-6 py-12 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-[#1f2b5b]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose <span className="text-[#3dbdec]">Omnio Hospital?</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At Omnio Hospital, we blend expert medical care with compassion, offering personalized treatment to ensure every patient feels supported and valued throughout their healing journey.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="px-6 pb-12">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-200">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OmnioHospital;