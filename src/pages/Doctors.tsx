/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, Filter, SlidersHorizontal, UserCheck, ShieldAlert } from 'lucide-react';
import { DOCTORS } from '../data/doctors';
import { DEPARTMENTS } from '../data/departments';
import DoctorCard from '../components/DoctorCard';
import { Doctor } from '../types';

interface DoctorsProps {
  onBookDoctor: (doctor: Doctor) => void;
  selectedDepartmentId?: string;
}

export default function Doctors({ onBookDoctor, selectedDepartmentId = '' }: DoctorsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState(selectedDepartmentId);
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'name'>('rating');

  // Sync state if initial prop changes
  React.useEffect(() => {
    if (selectedDepartmentId) {
      setSelectedDept(selectedDepartmentId);
    }
  }, [selectedDepartmentId]);

  // Combined Search, Filtering and Sorting logic
  const filteredDoctors = useMemo(() => {
    let result = DOCTORS.filter((doc) => {
      const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                            doc.specialty.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                            doc.qualification.toLowerCase().includes(searchQuery.toLowerCase().trim());
      const matchesDept = selectedDept ? doc.departmentId === selectedDept : true;
      return matchesSearch && matchesDept;
    });

    // Sorting
    return [...result].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'experience') return b.experience - a.experience;
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, selectedDept, sortBy]);

  return (
    <div className="space-y-12 pb-16" id="doctors-page-container">
      
      {/* Page Title banner */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950/20 py-16" id="doctors-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
            Aegis Clinical Faculty
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Meet Our World-Renowned Specialists
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Sourced from top international research universities, our board-certified clinical leaders combine deep medical knowledge with patient-centric compassion.
          </p>
        </div>
      </section>

      {/* Directory Filters & Tools */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="doctors-filters-section">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-xl shadow-blue-100/30 dark:shadow-none space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* 1. Name Search */}
            <div className="md:col-span-6 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search physicians by name, clinical qualifications, or specialty..."
                className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-750 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500"
              />
            </div>

            {/* 2. Sorting selection */}
            <div className="md:col-span-6 flex items-center justify-end gap-3 w-full">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Sort By:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rating' | 'experience' | 'name')}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 dark:border-slate-750 dark:bg-slate-950 dark:text-white outline-none focus:border-blue-500 transition-all cursor-pointer"
              >
                <option value="rating">Patient Rating (Highest)</option>
                <option value="experience">Years of Experience (Longest)</option>
                <option value="name">Physician Name (A - Z)</option>
              </select>
            </div>

          </div>

          {/* 3. Horizontal Department Filter Toggles */}
          <div className="border-t border-slate-50 dark:border-slate-800 pt-4">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5 pl-1">
              <Filter className="h-3 w-3 text-blue-500" />
              <span>Filter by Medical Center</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedDept('')}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold cursor-pointer transition-all ${
                  selectedDept === ''
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 dark:bg-slate-950/40 dark:text-slate-300 dark:hover:bg-slate-800/60'
                }`}
              >
                All Departments
              </button>
              {DEPARTMENTS.map((dept) => {
                const isSelected = selectedDept === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDept(dept.id)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 dark:bg-slate-950/40 dark:text-slate-300 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {dept.name.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Directory Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="doctors-grid-section">
        <AnimatePresence mode="popLayout">
          {filteredDoctors.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-slate-50/50 dark:bg-slate-950/10 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 max-w-xl mx-auto space-y-3"
            >
              <ShieldAlert className="h-10 w-10 text-amber-500 mx-auto" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">No Specialists Match Your Filters</h3>
              <p className="text-xs text-slate-500">We couldn't find any medical professionals matching the search query or department selections.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDept('');
                }}
                className="mt-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-slate-800 dark:text-teal-400 px-4 py-2 text-xs font-bold"
              >
                Reset All Filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredDoctors.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  doctor={doc}
                  onBook={onBookDoctor}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </div>
  );
}
