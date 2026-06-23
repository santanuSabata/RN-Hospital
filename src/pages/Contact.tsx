/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Compass, 
  AlertTriangle, 
  Building, 
  Car,
  ChevronDown
} from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';
import { Appointment } from '../types';

interface ContactProps {
  onSubmitSuccess: (appointment: Appointment) => void;
}

export default function Contact({ onSubmitSuccess }: ContactProps) {
  const supportContacts = [
    { title: 'General Admitting Desk', phone: '+1 (555) 434-2000', mail: 'admissions@aegishospital.org' },
    { title: 'Patient Relations & Billing', phone: '+1 (555) 434-2110', mail: 'relations@aegishospital.org' },
    { title: 'Media & Corporate Relations', phone: '+1 (555) 434-2550', mail: 'media@aegishospital.org' },
  ];

  return (
    <div className="space-y-12 pb-16" id="contact-page-container">
      
      {/* Page Header banner */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950/20 py-16" id="contact-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
            admissions & directions
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Connect with Aegis Hospital
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Reach out to our campus desk, schedule a physical visit, find valet parking directions, or book your consultation directly below.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Inline Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="contact-form-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct info, Emergency Warning, Valet advice, Google Map Mockup */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Emergency Ribbon warning */}
            <div className="rounded-3xl bg-red-500/10 border border-red-500/20 p-6 space-y-3">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <AlertTriangle className="h-5 w-5 shrink-0" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Critical Medical Emergency?</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                If you or a loved one is experiencing symptoms of stroke, active cardiac arrest, or severe trauma, please do not use this online booking form. Call our Level I Emergency Trauma Response immediately:
              </p>
              <div className="text-xl font-mono font-extrabold text-red-600 dark:text-red-400">
                +1 (800) 434-9111
              </div>
            </div>

            {/* Support Desk lines */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                Administrative Desk Lines
              </h3>
              <div className="space-y-3">
                {supportContacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl border border-slate-100 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-lg shadow-blue-100/20 dark:shadow-none space-y-1.5"
                  >
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{contact.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-1">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3 text-blue-500" /> {contact.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3 text-blue-500" /> {contact.mail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions & Valet Advice */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-lg shadow-blue-100/20 dark:shadow-none space-y-3">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Car className="h-4 w-4 text-teal-500" /> Transit & Parking Specs
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Complimentary 24/7 patient valet services are situated at the Main Bellevue Parkway Rotunda. Standard self-parking garages are located on East Wing Ramp C.
              </p>
              <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 pt-1.5 border-t border-slate-50 dark:border-slate-800">
                <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  7700 Bellevue Parkway, Suite 100, Healthcare Heights, WA 98004
                </span>
              </div>
            </div>

            {/* Map Mockup */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                Aegis Bellevue Campus Map
              </h3>
              <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/60 shadow-inner flex flex-col justify-between p-4">
                
                {/* Visual grid overlay for high tech mockup */}
                <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                {/* Map Pins */}
                <div className="relative z-10 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 dark:bg-slate-900/95 px-2.5 py-1 text-[10px] font-bold text-slate-800 dark:text-white shadow-md border border-slate-100 dark:border-slate-800 max-w-max">
                    <Compass className="h-3.5 w-3.5 text-blue-600" />
                    <span>LAT 47.6101° N, LON 122.2015° W</span>
                  </div>
                </div>

                {/* Simulated pin card in the center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                  <div className="animate-bounce inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/35">
                    <MapPin className="h-5.5 w-5.5 fill-current" />
                  </div>
                  <div className="mt-1 rounded-lg bg-slate-950/90 dark:bg-slate-900 text-white text-[10px] px-2.5 py-1 font-bold whitespace-nowrap shadow-md">
                    AEGIS HEALTH PLAZA
                  </div>
                </div>

                {/* Footer specs */}
                <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-500 font-mono bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 rounded-lg shadow-sm">
                  <span>Zoom: 16x</span>
                  <span>Bellevue Metro Route 240 / 550 Stops Out front</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Inline Appointment Booking system */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/40 shadow-2xl shadow-blue-100/30 dark:shadow-none space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                seamless priority entry
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white mt-0.5">
                Reserve Your Appointment Online
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill in patient details, select the specialty department, and choose your clinical specialist.
              </p>
            </div>

            {/* Embed the entire AppointmentForm component inline */}
            <AppointmentForm 
              onSubmitSuccess={onSubmitSuccess}
            />

          </div>

        </div>
      </section>

    </div>
  );
}
