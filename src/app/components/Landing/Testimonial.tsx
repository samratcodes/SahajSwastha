"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      title: "Exceptional Care and Support",
      content: "The doctors and staff at Omnio Hospital were incredibly supportive throughout my treatment. I couldn't ask for better care. Their attention to detail and genuine concern for my wellbeing made all the difference in my recovery journey.",
      author: "Sarah Englever",
      role: "Heart Surgery Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      title: "Professional Excellence",
      content: "The level of professionalism and care I received exceeded all my expectations. From the moment I walked in, I felt valued and heard. The medical expertise combined with compassionate care is truly remarkable.",
      author: "Michael Chen",
      role: "Orthopedic Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      title: "Outstanding Results",
      content: "Thanks to the amazing team at Omnio Hospital, I'm back to living my life to the fullest. The comprehensive treatment plan and post-operative care ensured my complete recovery. Grateful beyond words.",
      author: "Maria Rodriguez",
      role: "Neurology Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      id: 4,
      title: "Life-Changing Experience",
      content: "I was nervous about my surgery, but the team at Omnio made me feel completely at ease. Their expertise and kindness transformed what could have been a frightening experience into a journey of healing and hope.",
      author: "James Wilson",
      role: "Cancer Survivor",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      id: 5,
      title: "Beyond Expectations",
      content: "Every aspect of my care was handled with precision and compassion. The state-of-the-art facilities combined with the warmth of the staff created an environment where healing truly happens.",
      author: "Emily Thompson",
      role: "Maternity Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    {
      id: 6,
      title: "Trusted Healthcare Partner",
      content: "Omnio Hospital has been our family's healthcare partner for years. Their consistent quality of care, advanced treatments, and patient-first approach make them our first choice for any medical needs.",
      author: "Robert Kim",
      role: "Long-term Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

interface TestimonialItem {
    id: number;
    title: string;
    content: string;
    author: string;
    role: string;
    rating: number;
    image: string;
}

interface StatIndicator {
    number: string;
    label: string;
}

const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
};

  return (
    <div className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 px-6 py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-white text-sm font-medium">Patient Stories</span>
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Voices of <span className="text-yellow-300">Trust</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Real stories from our patients about their journey to healing and recovery at Omnio Hospital
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 h-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="w-10 h-10 text-blue-500/20 fill-blue-500/20" />
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="font-bold text-gray-800 text-lg mb-3">
                      {testimonial.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-4">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-blue-500/20"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-white rounded-full'
                    : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/70'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "15,000+", label: "Happy Patients" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "50+", label: "Expert Doctors" },
            { number: "24/7", label: "Emergency Care" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;