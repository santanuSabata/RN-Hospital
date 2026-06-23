/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart } from 'lucide-react';
import AppointmentForm from './AppointmentForm';
import { Appointment } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartmentId?: string;
  initialDoctorId?: string;
  onSubmitSuccess: (appointment: Appointment) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialDepartmentId = '',
  initialDoctorId = '',
  onSubmitSuccess,
}: BookingModalProps) {
  
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          
          {/* Backdrop Shadow overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            id="booking-modal-container"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-teal-400">
                  <Heart className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Request Consultation
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Aegis Medical Center Direct Appointment Scheduler
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer transition-colors"
                aria-label="Close scheduler"
              >
                <X className="h-5.5 w-5.5" />
              </button>
            </div>

            {/* Inner Form Component */}
            <AppointmentForm
              initialDepartmentId={initialDepartmentId}
              initialDoctorId={initialDoctorId}
              onSubmitSuccess={(apt) => {
                onSubmitSuccess(apt);
                onClose();
              }}
              onCancel={onClose}
            />

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
