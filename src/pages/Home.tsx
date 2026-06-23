/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Activity, 
  Brain, 
  ShieldCheck, 
  Users, 
  CheckCircle, 
  Award, 
  Clock, 
  Search, 
  Calendar, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { DOCTORS } from '../data/doctors';
import { TESTIMONIALS } from '../data/testimonials';
import { ARTICLES } from '../data/articles';
import TestimonialSlider from '../components/TestimonialSlider';
import { Doctor } from '../types';

interface HomeProps {
  onNavigate: (pageId: string) => void;
  onBookDoctor: (doctor: Doctor) => void;
  openBookingModal: () => void;
}

export default function Home({ onNavigate, onBookDoctor, openBookingModal }: HomeProps) {
  // Highlighted specialists (Dr. Jenkins, Dr. Vance, Dr. Rostova)
  const highlightDoctors = DOCTORS.slice(0, 3);
  
  // Highlighted departments
  const featuredDepts = DEPARTMENTS.slice(0, 3);

  return (
    <div className="space-y-20 pb-16" id="home-page-container">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-16 lg:pt-20 bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-950/20 dark:to-slate-900/10" id="hero-section">
        {/* Abstract medical shapes and glow blurs for Sleek Interface style */}
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Badge with active status indicator dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-teal-400 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100/50 dark:border-blue-900/30"
              >
                <span className="w-2 h-2 bg-blue-600 dark:bg-teal-400 rounded-full animate-pulse"></span>
                <span>The Pinnacle of Clinical Care</span>
              </motion.div>
 
              {/* Headline with Sleek Interface blue accent highlight */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.1]"
              >
                World-Class Doctors.<br />
                <span className="text-blue-600 dark:text-teal-400">
                  Trust-Led Healthcare.
                </span>
              </motion.h1>
 
              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed max-w-2xl"
              >
                At Aegis International Hospital, we combine world-renowned medical specialists with revolutionary robotic diagnostics and deep human compassion to deliver life-saving clinical outcomes.
              </motion.p>
 
              {/* Hero CTAs - Pills with sleek shadow pairings */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <button
                  onClick={openBookingModal}
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:shadow-blue-300 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  <Calendar className="h-4.5 w-4.5" />
                  <span>Book Appointment</span>
                </button>
                <button
                  onClick={() => onNavigate('departments')}
                  className="px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Explore Specialties</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 animate-pulse" />
                </button>
              </motion.div>
 
              {/* Fast Stats Highlight */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-left"
              >
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">99.8%</p>
                  <p className="text-xs text-slate-400">Clinical Success Rate</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">150+</p>
                  <p className="text-xs text-slate-400">Top-Tier Specialists</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">24/7</p>
                  <p className="text-xs text-slate-400">Trauma Level I Units</p>
                </div>
              </motion.div>
 
            </div>
 
            {/* Right Media Graphic Column */}
            <div className="lg:col-span-5 relative" id="hero-graphic-panel">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 dark:shadow-none border border-slate-100 dark:border-slate-800 bg-slate-900"
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                  alt="Aegis Medical Specialists"
                  referrerPolicy="no-referrer"
                  className="w-full object-cover aspect-4/3 lg:aspect-square object-center mix-blend-overlay opacity-90 hover:scale-102 transition-transform duration-700"
                />
                
                {/* Embedded floating review stats card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 p-4 backdrop-blur-md shadow-lg border border-white/20 dark:border-slate-850">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">Aegis Trauma Center</p>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Joint Commission Accredited</h4>
                      <p className="text-[10px] text-slate-400">Securing international quality checkmarks since 2012</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
 
          </div>
        </div>
      </section>

      {/* 2. Trust Badges ribbon */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="trust-badges-ribbon">
        <div className="rounded-2xl border border-slate-100 bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-900/50 shadow-sm text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            recognized by industry-leading healthcare organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {[
              { label: 'JCI Accredited', sub: 'Global Safety Gold Standard' },
              { label: 'Magnet Nursing', sub: 'Clinical Care Excellence' },
              { label: 'US News Ranked', sub: 'Top 1% National Hospital' },
              { label: 'Level I Trauma', sub: 'Highest Emergency Cap' }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {badge.label}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  {badge.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Departments */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="featured-departments-section">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
              Areas of excellence
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white mt-1">
              Featured Clinical Departments
            </h2>
          </div>
          <button
            onClick={() => onNavigate('departments')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-teal-400 dark:hover:text-teal-300 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>View All 8 Specialised Units</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDepts.map((dept) => {
            return (
              <div
                key={dept.id}
                className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-100/30 hover:shadow-2xl hover:shadow-blue-100/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none transition-all duration-300"
              >
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950 mb-5">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">{dept.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-grow">
                  {dept.shortDesc}
                </p>
                <div className="border-t border-slate-50 dark:border-slate-800 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate max-w-[150px]">
                    HOD: {dept.headOfDept.split(',')[0]}
                  </span>
                  <button
                    onClick={() => onNavigate('departments')}
                    className="text-xs font-bold text-blue-600 dark:text-teal-400 hover:underline cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Doctor Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="featured-doctors-section">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
              staff leadership
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white mt-1">
              Distinguished Medical Specialists
            </h2>
          </div>
          <button
            onClick={() => onNavigate('doctors')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-teal-400 dark:hover:text-teal-300 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Search Specialists Directory</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightDoctors.map((doc) => {
            return (
              <div
                key={doc.id}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-xl shadow-blue-100/30 hover:shadow-2xl hover:shadow-blue-100/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none transition-all duration-300"
              >
                <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-950 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/95 dark:bg-slate-900/90 px-2.5 py-1 text-xs font-bold text-slate-900 dark:text-white backdrop-blur-sm shadow-sm">
                    <span className="text-amber-500 font-bold">★</span>
                    <span>{doc.rating}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
                      {doc.specialty}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{doc.name}</h3>
                    <p className="text-xs text-slate-450 mt-1 font-medium">{doc.qualification}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <button
                      onClick={() => onBookDoctor(doc)}
                      className="w-full rounded-full bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-600 dark:hover:text-white py-2.5 text-xs font-bold transition-all cursor-pointer shadow-sm"
                    >
                      Request Consult
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Patient Testimonials Slider */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="testimonials-section">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
            stories of hope & recovery
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white mt-1">
            Patient Healing Experiences
          </h2>
        </div>
        <TestimonialSlider testimonials={TESTIMONIALS} />
      </section>

      {/* 6. Health Articles Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="articles-section">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
              healthcare wisdom
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white mt-1">
              Latest Health Insights & Advice
            </h2>
          </div>
          <button
            onClick={() => onNavigate('contact')} // Direct to contact which holds info & forms, or can stay on Home
            className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-teal-400 dark:hover:text-teal-300 flex items-center gap-1 shrink-0"
          >
            <span>Explore Wellness Blog</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((art) => {
            return (
              <article
                key={art.id}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="h-48 w-full bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={art.image}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                        {art.category}
                      </span>
                      <span className="text-[10px] text-slate-400">•</span>
                      <span className="text-[10px] text-slate-400">{art.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-150">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>By {art.author}</span>
                    <span>{art.date}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 7. Appointment CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="appointment-cta-banner">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-950 to-blue-950 py-16 px-8 sm:px-12 text-center text-white shadow-xl">
          {/* Subtle background glow graphics */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-450/10 border border-teal-500/20 rounded-full px-3 py-1">
              Seamless Virtual Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Ready to Consult with Our Distinguished Specialists?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Schedule your clinic visit, preventative diagnostic review, or specialized video consultation online. Reserve your preferred hours in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                onClick={openBookingModal}
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-bold shadow-lg shadow-blue-500/20 cursor-pointer active:scale-98 transition-all"
              >
                Book Your Priority Slot
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="rounded-full bg-white/10 hover:bg-white/15 text-white px-7 py-3 text-sm font-bold border border-white/20 cursor-pointer transition-all"
              >
                Contact Admissions Desk
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              For emergency trauma ambulance routing, please call: <strong>+1 (800) 434-9111</strong>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
