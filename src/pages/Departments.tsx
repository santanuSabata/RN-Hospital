/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ChevronUp, Star, Users, Briefcase, Plus, Heart, ShieldAlert } from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { DOCTORS } from '../data/doctors';
import { DepartmentIcon } from '../components/DepartmentCard';
import { Department } from '../types';

interface DepartmentsProps {
  onBookDepartment: (deptId: string) => void;
  onNavigateToDoctors: (deptId: string) => void;
}

export default function Departments({ onBookDepartment, onNavigateToDoctors }: DepartmentsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDeptId, setExpandedDeptId] = useState<string | null>('cardiology'); // Keep first expanded by default for rich layout

  // Performance optimized filtering
  const filteredDepartments = useMemo(() => {
    return DEPARTMENTS.filter((dept) => {
      const query = searchQuery.toLowerCase().trim();
      return (
        dept.name.toLowerCase().includes(query) ||
        dept.shortDesc.toLowerCase().includes(query) ||
        dept.longDesc.toLowerCase().includes(query) ||
        dept.services.some((s) => s.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedDeptId(expandedDeptId === id ? null : id);
  };

  return (
    <div className="space-y-12 pb-16" id="departments-page-container">
      
      {/* Hero Header Banner */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950/20 py-16" id="departments-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
            Aegis Medical Centers
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Specialized Clinical Units
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Our multi-disciplinary medical divisions combine targeted research, robotic precision, and patient-first treatment design.
          </p>

          {/* Search Bar Input */}
          <div className="relative max-w-md mx-auto pt-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <Search className="h-4.5 w-4.5" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Cardiology, Oncology, neurology, stroke therapy..."
              className="w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 py-3 text-sm outline-none shadow-lg shadow-blue-100/30 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-blue-500 dark:shadow-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-7 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid: Departments rendering */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="departments-list-section">
        {filteredDepartments.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-slate-50 dark:bg-slate-950/20 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <ShieldAlert className="h-10 w-10 text-amber-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">No Matching Specialty Units Found</h3>
            <p className="text-xs text-slate-500">Try checking your spelling or search for broader clinical keywords.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs font-bold text-blue-600 hover:underline dark:text-teal-400"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredDepartments.map((dept) => {
              const isExpanded = expandedDeptId === dept.id;
              
              // Count total doctors in this department
              const matchedDoctorsCount = DOCTORS.filter((d) => d.departmentId === dept.id).length;

              return (
                <div
                  key={dept.id}
                  className={`rounded-3xl border bg-white transition-all duration-300 dark:bg-slate-900 ${
                    isExpanded 
                      ? 'border-blue-200 dark:border-slate-700 shadow-xl shadow-blue-100/40 ring-1 ring-blue-50/50' 
                      : 'border-slate-100 hover:border-slate-200 shadow-sm dark:border-slate-800'
                  }`}
                >
                  {/* Summary row (Trigger for collapse) */}
                  <div
                    onClick={() => toggleExpand(dept.id)}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 cursor-pointer gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-teal-500 text-white shadow-md">
                        <DepartmentIcon name={dept.iconName} className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                          Director: {dept.headOfDept.split(',')[0]}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                          {dept.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 max-w-xl">
                          {dept.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                      {/* Doctor Count badge */}
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 dark:bg-slate-950/40 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800">
                        <Users className="h-3.5 w-3.5 text-blue-500" />
                        <span>{matchedDoctorsCount} Specialists</span>
                      </span>

                      {/* Expand Toggle Chevron */}
                      <div className="h-8 w-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-white">
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/10"
                      >
                        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                          
                          {/* Left Panel: Narrative Description & Media */}
                          <div className="lg:col-span-5 space-y-4">
                            <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 shadow-sm shrink-0">
                              <img
                                src={dept.image}
                                alt={dept.name}
                                referrerPolicy="no-referrer"
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Director Profile</h4>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">{dept.headOfDept}</p>
                              <p className="text-xs text-slate-500 leading-normal mt-1">Responsible for department safety protocols, research-led trial implementations, and residency training leadership.</p>
                            </div>
                          </div>

                          {/* Right Panel: Advanced facilities & services */}
                          <div className="lg:col-span-7 flex flex-col justify-between">
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                                  Advanced Core Services
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {dept.services.map((svc, idx) => (
                                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                                      <span className="text-blue-500 font-bold">•</span>
                                      <span>{svc}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                                  Infrastructure & Specialised Laboratories
                                </h4>
                                <div className="space-y-2">
                                  {dept.facilities.map((fac, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                      <span className="text-teal-500 font-bold">✓</span>
                                      <span>{fac}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* CTAs */}
                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
                              <button
                                onClick={() => onNavigateToDoctors(dept.id)}
                                className="rounded-full border border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-2.5 text-xs font-bold cursor-pointer transition-all"
                              >
                                View Doctors in {dept.name.split(' ')[0]}
                              </button>
                              <button
                                onClick={() => onBookDepartment(dept.id)}
                                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 text-xs font-bold shadow-lg shadow-blue-200 dark:shadow-none cursor-pointer transition-all"
                              >
                                Reserve Priority Slot
                              </button>
                            </div>

                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </section>

    </div>
  );
}
export { DEPARTMENTS };
