/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Calendar, Clock, Heart, User } from 'lucide-react';
import { Appointment } from '../types';
import { DOCTORS } from '../data/doctors';

interface ToastProps {
  appointment: Appointment | null;
  onClose: () => void;
}

export default function Toast({ appointment, onClose }: ToastProps) {
  useEffect(() => {
    if (appointment) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // 10 seconds auto-dismiss
      return () => clearTimeout(timer);
    }
  }, [appointment]);

  if (!appointment) return null;

  const matchedDoctor = DOCTORS.find((doc) => doc.id === appointment.doctorId);

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="overflow-hidden rounded-2xl bg-white p-5 shadow-2xl border border-emerald-100 dark:border-slate-800 dark:bg-slate-900"
          id="toast-notification-card"
        >
          {/* Top colored highlight strip */}
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />

          {/* Header Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                <CheckCircle2 className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Appointment Confirmed
                </h4>
                <p className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Reference: {appointment.id}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-50 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Details layout */}
          <div className="mt-4 space-y-2 text-xs border-t border-slate-50 dark:border-slate-800 pt-3 text-slate-600 dark:text-slate-300">
            
            {/* Patient Name */}
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-slate-400" />
              <span>Patient: <strong className="text-slate-800 dark:text-white">{appointment.patientName}</strong></span>
            </div>

            {/* Doctor assigned */}
            <div className="flex items-center gap-2">
              <Heart className="h-3.5 w-3.5 text-slate-400" />
              <span>Specialist: <strong className="text-slate-800 dark:text-white">{matchedDoctor ? matchedDoctor.name : appointment.doctorId}</strong></span>
            </div>

            {/* Date and Time slot */}
            <div className="grid grid-cols-2 gap-2 mt-2 pt-1">
              <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 dark:bg-slate-950/40 px-2.5 py-1.5 border border-slate-100 dark:border-slate-800">
                <Calendar className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <span className="font-medium text-[11px] truncate">{appointment.date}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 dark:bg-slate-950/40 px-2.5 py-1.5 border border-slate-100 dark:border-slate-800">
                <Clock className="h-3.5 w-3.5 text-teal-500 shrink-0" />
                <span className="font-medium text-[11px] truncate">{appointment.timeSlot}</span>
              </div>
            </div>

          </div>

          <p className="mt-4 text-[10px] text-slate-400 leading-normal text-center bg-slate-50/50 dark:bg-slate-950/10 p-2 rounded-lg">
            A confirmation email has been dispatched with prep-instructions and parking guidance.
          </p>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
