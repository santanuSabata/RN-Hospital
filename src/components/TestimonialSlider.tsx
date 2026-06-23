/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlay) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isAutoPlay]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div 
      className="relative mx-auto max-w-4xl bg-slate-50 dark:bg-slate-950/40 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 sm:p-12 shadow-sm transition-colors duration-300"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
      id="testimonial-slider"
    >
      
      {/* Decorative Quote Mark */}
      <div className="absolute top-6 right-8 text-blue-100 dark:text-slate-800 shrink-0 pointer-events-none">
        <Quote className="h-16 w-16 fill-current rotate-180 opacity-50" />
      </div>

      <div className="relative min-h-[220px] overflow-hidden flex flex-col justify-between">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex flex-col gap-6"
          >
            {/* Stars Rating and Verified Recovery Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4.5 w-4.5 ${
                      i < current.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                <ShieldCheck className="h-3 w-3" />
                <span>Verified Medical Success Story</span>
              </div>
            </div>

            {/* Quote content */}
            <blockquote className="text-base sm:text-lg italic font-medium leading-relaxed text-slate-800 dark:text-slate-200">
              "{current.content}"
            </blockquote>

            {/* Patient Identity */}
            <div className="flex items-center gap-4 mt-2">
              <img
                src={current.image}
                alt={current.name}
                referrerPolicy="no-referrer"
                className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm dark:border-slate-800"
              />
              <div>
                <cite className="not-italic text-sm font-bold text-slate-900 dark:text-white block">
                  {current.name}
                </cite>
                <span className="text-xs text-blue-600 dark:text-teal-400 font-semibold uppercase tracking-wider">
                  {current.role}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Recovery Date: {current.date}
                </span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Controls */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        
        {/* Slide Indicators */}
        <div className="flex gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'w-6 bg-blue-600 dark:bg-teal-400' : 'w-2 bg-slate-200 dark:bg-slate-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next / Prev Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 cursor-pointer transition-colors"
            aria-label="Previous patient story"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 cursor-pointer transition-colors"
            aria-label="Next patient story"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>

    </div>
  );
}
