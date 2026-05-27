"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiStarfighter } from "react-icons/gi";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = docHeight - winHeight;

      if (totalScrollable <= 0) {
        setProgress(0);
        setIsVisible(false);
        return;
      }

      // Calculate progress percentage
      const progressPercentage = (scrolled / totalScrollable) * 100;
      setProgress(Math.min(progressPercentage, 100));

      // Show button if scrolled more than 300px
      setIsVisible(scrolled > 300);
    };

    // Initialize progress on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle calculations
  const radius = 24;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full cursor-pointer focus:outline-none group shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-white/90 backdrop-blur-md transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] border border-gray-100"
          aria-label="Back to top"
        >
          {/* Circular progress SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 60 60">
            <defs>
              <linearGradient id="backToTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1fbcd7" />
                <stop offset="50%" stopColor="#feb449" />
                <stop offset="100%" stopColor="#fe5c36" />
              </linearGradient>
            </defs>

            {/* Background circle track */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              fill="none"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth={strokeWidth}
            />

            {/* Foreground circle with scroll progress */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              fill="none"
              stroke="url(#backToTopGradient)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-75 ease-out"
            />
          </svg>

          {/* Premium Hover Inner highlight */}
          <div className="absolute inset-1 rounded-full bg-transparent group-hover:bg-gradient-to-br group-hover:from-[#1fbcd7]/5 group-hover:to-[#fe5c36]/5 transition-colors duration-300" />

          {/* Arrow Up Icon */}
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="z-10 flex items-center justify-center"
          >
            <GiStarfighter
              className="w-5 h-5 text-gray-700 group-hover:text-[#fe5c36] transition-colors duration-300" 
              strokeWidth={3}
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
