/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
  openBookingModal: () => void;
  setShowStorybook: (show: boolean) => void;
}

export default function Footer({ setActivePage, openBookingModal, setShowStorybook }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setShowStorybook(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 transition-colors duration-300" id="main-footer">
      
      {/* Top Banner: Emergency Contact Integration */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-6 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 animate-pulse">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-100">
                24/7 Level I Emergency Trauma Line
              </p>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                +1 (800) 434-9111
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => handleNavClick('contact')}
              className="rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 text-sm font-semibold transition-colors cursor-pointer"
            >
              Emergency Routing & Map
            </button>
            <button 
              onClick={openBookingModal}
              className="rounded-lg bg-white text-slate-950 hover:bg-slate-100 px-5 py-2 text-sm font-bold shadow-md shadow-red-950/20 active:scale-98 transition-all cursor-pointer"
            >
              Request Rapid Check-in
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand details & Accreditations */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AEGIS HOSPITAL
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Serving our global patient community with clinical excellence, advanced robotics, and compassionate heart-led healthcare strategies.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-teal-400" />
                <span>Joint Commission International (JCI) Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Award className="h-4 w-4 text-amber-400" />
                <span>Magnet Recognition for Nursing Excellence</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Patient Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Landing' },
                { id: 'about', label: 'Hospital Overview' },
                { id: 'departments', label: 'Clinical Specialties' },
                { id: 'doctors', label: 'Staff Specialists' },
                { id: 'contact', label: 'Contact & Directions' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Aegis Center Campus
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  7700 Bellevue Parkway, Suite 100<br />
                  Healthcare Heights, WA 98004
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-slate-400">+1 (555) 434-2000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="text-slate-400">care@aegishospital.org</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours / Quick actions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Visiting Hours
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">General Wards:</span>
                <span className="text-slate-200 font-medium">09:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Intensive Care (ICU):</span>
                <span className="text-slate-200 font-medium">11:00 AM - 06:00 PM</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="text-slate-400">Emergency Unit:</span>
                <span className="text-red-400 font-bold">Open 24 / 7 / 365</span>
              </li>
            </ul>
            <button
              onClick={() => {
                setShowStorybook(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 flex w-full justify-center items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white py-2 text-xs font-semibold border border-slate-700 cursor-pointer transition-colors"
            >
              <span>Developer Reference: Storybook Specs</span>
            </button>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Aegis International Health Center. All rights reserved. Built with React & Tailwind CSS.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-white transition-colors">ADA Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
