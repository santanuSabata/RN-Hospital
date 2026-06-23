/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Clock, GraduationCap, Award, Calendar, Check } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctor: Doctor) => void;
  key?: string;
}

export default function DoctorCard({ doctor, onBook }: DoctorCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-blue-100/30 hover:shadow-2xl hover:shadow-blue-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none transition-all duration-300"
      id={`doctor-card-${doctor.id}`}
    >
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Profile Image & Experience Badge */}
      <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-950 overflow-hidden shrink-0">
        <img
          src={doctor.image}
          alt={doctor.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-xs font-bold text-slate-900 dark:text-white backdrop-blur-sm shadow-sm">
          <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
          <span>{doctor.rating.toFixed(2)}</span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-slate-900/85 to-slate-950/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-md">
          <Award className="h-3.5 w-3.5 text-teal-400" />
          <span>{doctor.experience}+ Years Exper.</span>
        </div>
      </div>

      {/* Body Information */}
      <div className="flex flex-col flex-grow p-5">
        
        {/* Specialty Label */}
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400 mb-1.5">
          {doctor.specialty}
        </p>

        {/* Doctor Name */}
        <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors duration-200">
          {doctor.name}
        </h3>

        {/* Credentials / Qualification */}
        <div className="mt-3 flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
          <GraduationCap className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
          <span className="font-medium leading-relaxed">{doctor.qualification}</span>
        </div>

        {/* Short Bio */}
        <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
          {doctor.bio}
        </p>

        {/* Highlights: Rating & Patients Count in Mono display */}
        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-b border-slate-100 dark:border-slate-800 py-3 text-center bg-slate-50/50 dark:bg-slate-950/20 rounded-xl">
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Patients Saved</p>
            <p className="font-mono text-sm font-bold text-slate-800 dark:text-slate-200">
              {doctor.patientsCount.toLocaleString()}+
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Response Rate</p>
            <p className="font-mono text-sm font-bold text-slate-800 dark:text-slate-200">99.8%</p>
          </div>
        </div>

        {/* Schedule / Availability badges */}
        <div className="mt-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            <span>Weekly Consultation Days</span>
          </p>
          <div className="flex flex-wrap gap-1">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => {
              const isAvailable = doctor.availability.includes(day);
              return (
                <span
                  key={day}
                  className={`rounded-md px-2 py-1 text-[10px] font-semibold tracking-wider ${
                    isAvailable
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30'
                      : 'bg-slate-100/50 text-slate-400 dark:bg-slate-800/30 dark:text-slate-600'
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>

        {/* Action Button at Bottom */}
        <div className="mt-6 pt-2 shrink-0">
          <button
            onClick={() => onBook(doctor)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-600 dark:hover:text-white py-2.5 text-xs font-bold transition-all duration-300 active:scale-98 cursor-pointer shadow-sm hover:shadow-md"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Request Consult</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
