/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  BookOpen, 
  Calendar,
  Layers
} from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  openBookingModal: () => void;
  showStorybook: boolean;
  setShowStorybook: (show: boolean) => void;
}

export default function Navbar({
  activePage,
  setActivePage,
  isDarkMode,
  toggleDarkMode,
  openBookingModal,
  showStorybook,
  setShowStorybook,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'departments', label: 'Departments' },
    { id: 'doctors', label: 'Our Specialists' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setShowStorybook(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex cursor-pointer items-center gap-2.5"
          id="nav-logo"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl shadow-lg shadow-blue-500/35 transition-transform hover:scale-105">
            A
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
              Aegis<span className="text-blue-600">Health</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-2 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activePage === item.id && !showStorybook
                  ? 'text-blue-600 dark:text-teal-400'
                  : 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {item.label}
              {activePage === item.id && !showStorybook && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-teal-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          
          {/* Emergency Alert Indicator */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-blue-700 transition-colors text-red-500 font-semibold text-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Emergency
          </button>
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-4" id="nav-actions">
          {/* Storybook / Dev Specs Toggle */}
          <button
            id="nav-storybook-btn"
            onClick={() => {
              setShowStorybook(!showStorybook);
              setIsMobileMenuOpen(false);
            }}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold border cursor-pointer transition-all ${
              showStorybook 
                ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/50' 
                : 'text-slate-600 border-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800'
            }`}
            title="Interactive Storybook Component Specs"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Storybook Specs</span>
          </button>

          {/* Theme Switcher */}
          <button
            id="nav-theme-btn"
            onClick={toggleDarkMode}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          {/* Core Appointment CTA */}
          <button
            id="nav-cta-btn"
            onClick={openBookingModal}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 hover:shadow-blue-300 transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile controls (Tablet / Mobile view) */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Storybook toggle on mobile as icon */}
          <button
            id="mobile-nav-storybook-btn"
            onClick={() => {
              setShowStorybook(!showStorybook);
              setIsMobileMenuOpen(false);
            }}
            className={`p-2 rounded-lg border ${
              showStorybook 
                ? 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800' 
                : 'border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300'
            }`}
          >
            <Layers className="h-4 w-4" />
          </button>

          {/* Mobile Theme Toggle */}
          <button
            id="mobile-nav-theme-btn"
            onClick={toggleDarkMode}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
          >
            <div className="space-y-1.5 px-4 pt-2 pb-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center rounded-lg px-4 py-2.5 text-base font-semibold transition-colors ${
                    activePage === item.id && !showStorybook
                      ? 'bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-teal-400'
                      : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  id="mobile-nav-cta-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold shadow-md cursor-pointer transition-all"
                >
                  <Calendar className="h-4.5 w-4.5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
