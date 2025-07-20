import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import FadeInWrapper from "../components/FadeInWrapper";
import ScrollFadeIn from "../components/ScrollFadeIn";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaPlay, FaStar, FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = useCallback(
    () => [
      {
        url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        title: "Authentic Indian Flavors",
        subtitle: "Experience the true taste of India"
      },
      {
        url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        title: "Fresh & Aromatic Spices",
        subtitle: "Every dish tells a story of tradition"
      },
      {
        url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        title: "Warm & Inviting Atmosphere",
        subtitle: "Where every meal becomes a celebration"
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages().length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages().map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), url(${image.url})`,
            }}
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-6xl">
          {/* Main Heading */}
          <FadeInWrapper>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-4 leading-tight">
                <span className="text-[#FEB64C] drop-shadow-lg">Spicy Indian</span>
                <br />
                <span className="text-white drop-shadow-lg">Flavours</span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FaStar className="text-[#FEB64C]" />
                  <span className="text-white font-semibold">4.9/5</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FaMapMarkerAlt className="text-[#FEB64C]" />
                  <span className="text-white font-semibold">York, ON</span>
                </div>
              </div>
            </motion.div>
          </FadeInWrapper>

          {/* Subtitle with Typewriter */}
          <ScrollFadeIn delay={0.2}>
            <div className="mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-body font-medium max-w-4xl mx-auto leading-relaxed">
                <Typewriter
                  words={[
                    "Savor rich flavors born in Indian kitchens",
                    "Crafted with heritage, served with warmth",
                    "Where every dish tells a story of tradition",
                    "Spices that awaken memories of home",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={70}
                  delaySpeed={2000}
                />
              </p>
            </div>
          </ScrollFadeIn>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <ScrollFadeIn delay={0.3}>
              <Link to="/menu">
                <motion.button 
                  className="bg-[#FEB64C] hover:bg-[#FEB64C]/90 text-[#6E1E00] font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay className="text-sm" />
                  Browse Menu
                </motion.button>
              </Link>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.4}>
              <Link to="/contact">
                <motion.button 
                  className="border-2 border-[#FEB64C] bg-white/10 backdrop-blur-md hover:bg-[#FEB64C] text-[#FEB64C] hover:text-[#6E1E00] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg transform flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaClock className="text-sm" />
                  Book a Table
                </motion.button>
              </Link>
            </ScrollFadeIn>
          </div>

          {/* Quick Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <FaClock className="text-[#FEB64C]" />
              <span>Open Daily 8:30 AM - 8:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#FEB64C]" />
              <span>(+1) 289-308-6626</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroImages().map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-[#FEB64C]"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>


      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 right-10 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-center text-white">
          <div className="text-2xl font-bold text-[#FEB64C]">15+</div>
          <div className="text-sm">Years Experience</div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 left-10 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-center text-white">
          <div className="text-2xl font-bold text-[#FEB64C]">500+</div>
          <div className="text-sm">Happy Customers</div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;