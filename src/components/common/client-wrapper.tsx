"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./loader";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Mount check for safe SSR handling
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Suppress scroll and manage page height while loader is active
  useEffect(() => {
    if (!isMounted) return;

    if (isLoading) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isLoading, isMounted]);

  if (!isMounted) {
    // Return empty shell during SSR, but render children hidden to keep next.js content happy
    return (
      <div style={{ opacity: 0 }} className="min-h-screen">
        {children}
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-[99999]"
          >
            <Loader onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main website content rendered behind the scenes */}
      <motion.div
        animate={{
          opacity: isLoading ? 0 : 1,
          scale: isLoading ? 0.96 : 1,
          y: isLoading ? 20 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for smooth inertia zoom
          delay: 0.1, // Slight delay to sync with loader zoom-out
        }}
        className="min-h-screen w-full origin-center"
        style={{
          // Prevent interactions while loading
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
