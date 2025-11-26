import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    })
  };

  return (
    <div className="relative w-full h-screen bg-[#0B1121] text-white overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-transparent to-[#0B1121] z-0 pointer-events-none" />

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div 
          className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlideIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="w-full h-full absolute top-0 left-0"
          >
            <SlideRenderer data={SLIDES[currentSlideIndex]} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-0 w-full px-8 md:px-12 flex justify-between items-end z-50 pointer-events-none">
        <div className="text-slate-500 font-mono text-xs pointer-events-auto flex items-center gap-2">
           <span className="font-bold text-cyan-500">SLIDE {currentSlideIndex + 1}</span> 
           <span className="opacity-30">/</span> 
           <span>{SLIDES.length}</span>
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className={`p-3 rounded-lg border border-slate-700 transition-all duration-300 group ${
              currentSlideIndex === 0 
                ? 'opacity-30 cursor-not-allowed' 
                : 'bg-slate-900/50 hover:bg-cyan-500/10 hover:border-cyan-500/50 text-white'
            }`}
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className={`p-3 rounded-lg border border-slate-700 transition-all duration-300 group ${
              currentSlideIndex === SLIDES.length - 1 
                ? 'opacity-30 cursor-not-allowed' 
                : 'bg-slate-900/50 hover:bg-cyan-500/10 hover:border-cyan-500/50 text-white'
            }`}
          >
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}