"use client";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Web Developer", 
    "Frontend Developer", 
    "UI Designer", 
    "React Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
     
      <div className="bg-clip-border z-10 min-h-dvh flex flex-col justify-center items-center text-2xl">
        <div className="justify-start">Hi I am</div>
        <div className="font-typographica text-7xl items-center text-center
          bg-gradient-to-r from-purple to-danger bg-clip-text text-transparent">
          SAROLANDA
        </div>
        
        {/* Texto na mesma linha */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xl md:text-2xl">
    
          <div className="relative h-10 inline-flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block "
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}