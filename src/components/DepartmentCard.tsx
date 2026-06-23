/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Department } from '../types';

interface DepartmentCardProps {
  department: Department;
  onExplore: (deptId: string) => void;
  onBook: (deptId: string) => void;
}

// Dynamic Icon Resolver component to guarantee fallback safety
function DepartmentIcon({ name, className }: { name: string; className?: string }) {
  // @ts-ignore
  const IconComponent = LucideIcons[name] || LucideIcons.Heart;
  return <IconComponent className={className} />;
}

export default function DepartmentCard({ department, onExplore, onBook }: DepartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="flex flex-col lg:flex-row gap-6 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 transition-all duration-300"
      id={`department-card-${department.id}`}
    >
      
      {/* Graphic Media / Image Panel */}
      <div className="relative w-full lg:w-1/3 h-52 lg:h-auto rounded-xl overflow-hidden shrink-0 bg-slate-50 dark:bg-slate-950">
        <img
          src={department.image}
          alt={department.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center hover:scale-103 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-teal-500 text-white shadow-lg">
          <DepartmentIcon name={department.iconName} className="h-5.5 w-5.5" />
        </div>
      </div>

      {/* Information Panel */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          
          {/* Head of Department Spec */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-1">
            Director: {department.headOfDept}
          </p>

          {/* Department Name */}
          <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white mb-2">
            {department.name}
          </h3>

          {/* Short Description */}
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
            {department.shortDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            
            {/* Column A: Specialized services */}
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                Core Procedures
              </h4>
              <ul className="space-y-1.5">
                {department.services.slice(0, 3).map((svc, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column B: Department Facilities */}
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                Infrastructure
              </h4>
              <ul className="space-y-1.5">
                {department.facilities.slice(0, 3).map((fac, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-teal-500 font-bold mt-0.5">✓</span>
                    <span className="line-clamp-1">{fac}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Action button row */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
          <button
            onClick={() => onExplore(department.id)}
            className="flex-grow sm:flex-grow-0 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-xs font-semibold cursor-pointer transition-colors"
          >
            Explore Department Specs
          </button>
          <button
            onClick={() => onBook(department.id)}
            className="flex-grow sm:flex-grow-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 text-xs font-bold shadow-md shadow-blue-500/10 active:scale-98 transition-all cursor-pointer"
          >
            Schedule Consult
          </button>
        </div>

      </div>

    </motion.div>
  );
}
export { DepartmentIcon };
