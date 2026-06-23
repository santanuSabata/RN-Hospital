/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';
import StorybookCatalog from './components/StorybookCatalog';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';

// Type definitions
import { Appointment, Doctor } from './types';

export default function App() {
  // 1. Navigation state
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedDeptId, setSelectedDeptId] = useState<string>('');
  
  // 2. Booking Modal state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [initialBookingDeptId, setInitialBookingDeptId] = useState<string>('');
  const [initialBookingDoctorId, setInitialBookingDoctorId] = useState<string>('');

  // 3. Dark Mode state with persistence
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('aegis-dark-mode');
    if (saved) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 4. Interactive Storybook Specs state
  const [showStorybook, setShowStorybook] = useState<boolean>(false);

  // 5. Toast / Last booked appointment state
  const [lastBookedAppointment, setLastBookedAppointment] = useState<Appointment | null>(null);

  // Apply dark mode styling to document root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('aegis-dark-mode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('aegis-dark-mode', 'false');
    }
  }, [isDarkMode]);

  // Handle Hash/URL routing for external tab deep links and direct updates
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'departments', 'doctors', 'contact'].includes(hash)) {
        setActivePage(hash);
        setShowStorybook(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Execute initially on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    window.location.hash = pageId;
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Modal Triggers
  const openBookingWithSpecialty = (deptId: string = '') => {
    setInitialBookingDeptId(deptId);
    setInitialBookingDoctorId('');
    setIsBookingOpen(true);
  };

  const openBookingWithDoctor = (doctor: Doctor) => {
    setInitialBookingDeptId(doctor.departmentId);
    setInitialBookingDoctorId(doctor.id);
    setIsBookingOpen(true);
  };

  const openBookingGeneral = () => {
    setInitialBookingDeptId('');
    setInitialBookingDoctorId('');
    setIsBookingOpen(true);
  };

  // Navigates directly from Departments showcase to Filtered Specialists view
  const navigateToFilteredDoctors = (deptId: string) => {
    setSelectedDeptId(deptId);
    handlePageChange('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handles successful booking
  const handleBookingSuccess = (appointment: Appointment) => {
    setLastBookedAppointment(appointment);
    // Success scroll to top or trigger toast
  };

  // Render correct page body based on routing simulation
  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home 
            onNavigate={(id) => handlePageChange(id)}
            onBookDoctor={openBookingWithDoctor}
            openBookingModal={openBookingGeneral}
          />
        );
      case 'about':
        return <About />;
      case 'departments':
        return (
          <Departments 
            onBookDepartment={openBookingWithSpecialty}
            onNavigateToDoctors={navigateToFilteredDoctors}
          />
        );
      case 'doctors':
        return (
          <Doctors 
            onBookDoctor={openBookingWithDoctor}
            selectedDepartmentId={selectedDeptId}
          />
        );
      case 'contact':
        return (
          <Contact 
            onSubmitSuccess={handleBookingSuccess}
          />
        );
      default:
        return (
          <Home 
            onNavigate={(id) => handlePageChange(id)}
            onBookDoctor={openBookingWithDoctor}
            openBookingModal={openBookingGeneral}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans" id="aegis-app-root">
      
      {/* 1. Header Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        openBookingModal={openBookingGeneral}
        showStorybook={showStorybook}
        setShowStorybook={setShowStorybook}
      />

      {/* 2. Main Workspace */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {showStorybook ? (
            <motion.div
              key="storybook"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
              id="storybook-catalog-wrapper"
            >
              <StorybookCatalog />
            </motion.div>
          ) : (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              id={`page-wrapper-${activePage}`}
            >
              {renderActivePage()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. Global Footer */}
      <Footer 
        setActivePage={handlePageChange}
        openBookingModal={openBookingGeneral}
        setShowStorybook={setShowStorybook}
      />

      {/* 4. Booking Scheduler Modal overlay */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDepartmentId={initialBookingDeptId}
        initialDoctorId={initialBookingDoctorId}
        onSubmitSuccess={handleBookingSuccess}
      />

      {/* 5. Floating Success Notification Toast */}
      <Toast
        appointment={lastBookedAppointment}
        onClose={() => setLastBookedAppointment(null)}
      />

    </div>
  );
}
