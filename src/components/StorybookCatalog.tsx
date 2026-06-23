/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Code, 
  Cpu, 
  Sparkles, 
  Play, 
  Check, 
  FileCode, 
  Info,
  ChevronRight,
  Eye,
  Terminal
} from 'lucide-react';
import DoctorCard from './DoctorCard';
import DepartmentCard from './DepartmentCard';
import TestimonialSlider from './TestimonialSlider';
import AppointmentForm from './AppointmentForm';
import { DOCTORS } from '../data/doctors';
import { DEPARTMENTS } from '../data/departments';
import { TESTIMONIALS } from '../data/testimonials';

export default function StorybookCatalog() {
  const [selectedComponent, setSelectedComponent] = useState('DoctorCard');
  const [copiedCode, setCopiedCode] = useState(false);

  const componentsList = [
    { id: 'Navbar', label: 'Navbar Header', category: 'Layout' },
    { id: 'Footer', label: 'Trust Footer', category: 'Layout' },
    { id: 'DoctorCard', label: 'DoctorCard', category: 'Cards' },
    { id: 'DepartmentCard', label: 'DepartmentCard', category: 'Cards' },
    { id: 'TestimonialSlider', label: 'TestimonialSlider', category: 'Carousels' },
    { id: 'AppointmentForm', label: 'AppointmentForm', category: 'Forms' },
  ];

  const handleCopyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderComponentDetails = () => {
    switch (selectedComponent) {
      case 'Navbar': {
        const usageCode = `import Navbar from './components/Navbar';

<Navbar
  activePage={activePage}
  setActivePage={setActivePage}
  isDarkMode={isDarkMode}
  toggleDarkMode={toggleDarkMode}
  openBookingModal={openBookingModal}
  showStorybook={showStorybook}
  setShowStorybook={setShowStorybook}
/>`;
        return (
          <div className="space-y-6">
            <div className="border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Component Description</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                A sticky global header displaying hospital branding, responsive navigation nodes, a dark mode toggle, and an appointment booking trigger. Contains a collapsible mobile drawer.
              </p>
            </div>

            <div className="border border-slate-100 dark:border-slate-800 p-6 rounded-xl bg-white dark:bg-slate-900">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" /> Component Interactive Sandbox Preview (Mock Visual Context)
              </h4>
              <div className="border border-dashed border-slate-200 dark:border-slate-700 p-4 rounded-lg bg-slate-100/50 dark:bg-slate-950/50 text-center text-xs text-slate-500 font-mono">
                [ Rendered live in the Sticky Header above for live testing ]
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <FileCode className="h-4 w-4" /> Component API Specifications
                </h4>
                <button 
                  onClick={() => handleCopyCode(usageCode)}
                  className="text-[10px] font-bold text-blue-600 hover:underline dark:text-teal-400 flex items-center gap-1"
                >
                  {copiedCode ? <Check className="h-3 w-3" /> : null}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code Snippet'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl font-mono text-xs text-slate-100 bg-slate-950 overflow-x-auto leading-relaxed border border-slate-800">
                {usageCode}
              </pre>
            </div>
          </div>
        );
      }
      case 'Footer': {
        const usageCode = `import Footer from './components/Footer';

<Footer 
  setActivePage={setActivePage}
  openBookingModal={openBookingModal}
  setShowStorybook={setShowStorybook}
/>`;
        return (
          <div className="space-y-6">
            <div className="border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Component Description</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                A multi-column trust footer with emergency contact lines, clinical accreditations, visitation schedules, navigation maps, and deep anchors.
              </p>
            </div>

            <div className="border border-slate-100 dark:border-slate-800 p-6 rounded-xl bg-white dark:bg-slate-900">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" /> Component Preview Location
              </h4>
              <div className="border border-dashed border-slate-200 dark:border-slate-700 p-4 rounded-lg bg-slate-100/50 dark:bg-slate-950/50 text-center text-xs text-slate-500 font-mono">
                [ Rendered live in the footer of this application for live testing ]
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <FileCode className="h-4 w-4" /> Component Code Specs
                </h4>
                <button 
                  onClick={() => handleCopyCode(usageCode)}
                  className="text-[10px] font-bold text-blue-600 hover:underline dark:text-teal-400 flex items-center gap-1"
                >
                  {copiedCode ? <Check className="h-3 w-3" /> : null}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code Snippet'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl font-mono text-xs text-slate-100 bg-slate-950 overflow-x-auto leading-relaxed border border-slate-800">
                {usageCode}
              </pre>
            </div>
          </div>
        );
      }
      case 'DoctorCard': {
        const mockDoctor = DOCTORS[0];
        const usageCode = `import DoctorCard from './components/DoctorCard';
import { Doctor } from './types';

const currentDoctor: Doctor = ${JSON.stringify(mockDoctor, null, 2).split('\n').slice(0, 10).join('\n')}... // truncate for review

<DoctorCard
  doctor={currentDoctor}
  onBook={(doctor) => handleInitiateBooking(doctor)}
/>`;
        return (
          <div className="space-y-6">
            <div className="border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Component Description</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Standard profile card showcasing credentials, reviews, clinical experience, weekly schedules, total saved patients, and an action button to summon the booking system.
              </p>
            </div>

            <div className="border border-slate-100 dark:border-slate-800 p-6 rounded-xl bg-white dark:bg-slate-900">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" /> Interactive Props Sandbox Preview
              </h4>
              <div className="max-w-sm mx-auto">
                <DoctorCard 
                  doctor={mockDoctor} 
                  onBook={(doc) => alert(`Interactive sandbox action triggered for: ${doc.name}`)} 
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <FileCode className="h-4 w-4" /> Component Code Specs
                </h4>
                <button 
                  onClick={() => handleCopyCode(usageCode)}
                  className="text-[10px] font-bold text-blue-600 hover:underline dark:text-teal-400 flex items-center gap-1"
                >
                  {copiedCode ? <Check className="h-3 w-3" /> : null}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code Snippet'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl font-mono text-xs text-slate-100 bg-slate-950 overflow-x-auto leading-relaxed border border-slate-800">
                {usageCode}
              </pre>
            </div>
          </div>
        );
      }
      case 'DepartmentCard': {
        const mockDept = DEPARTMENTS[0];
        const usageCode = `import DepartmentCard from './components/DepartmentCard';
import { Department } from './types';

const department: Department = ${JSON.stringify(mockDept, null, 2).split('\n').slice(0, 10).join('\n')}...

<DepartmentCard
  department={department}
  onExplore={(id) => handleNavigateToDept(id)}
  onBook={(id) => handleBookDept(id)}
/>`;
        return (
          <div className="space-y-6">
            <div className="border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Component Description</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                A structured card detailing surgical centers. Contains responsive lateral grids separating sub-services, infrastructure list, head physician badge, and action hooks.
              </p>
            </div>

            <div className="border border-slate-100 dark:border-slate-800 p-6 rounded-xl bg-white dark:bg-slate-900">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" /> Interactive Sandbox Preview
              </h4>
              <DepartmentCard
                department={mockDept}
                onExplore={(id) => alert(`Explore click action inside sandbox for ${id}`)}
                onBook={(id) => alert(`Book click action inside sandbox for ${id}`)}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <FileCode className="h-4 w-4" /> Component Code Specs
                </h4>
                <button 
                  onClick={() => handleCopyCode(usageCode)}
                  className="text-[10px] font-bold text-blue-600 hover:underline dark:text-teal-400 flex items-center gap-1"
                >
                  {copiedCode ? <Check className="h-3 w-3" /> : null}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code Snippet'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl font-mono text-xs text-slate-100 bg-slate-950 overflow-x-auto leading-relaxed border border-slate-800">
                {usageCode}
              </pre>
            </div>
          </div>
        );
      }
      case 'TestimonialSlider': {
        const usageCode = `import TestimonialSlider from './components/TestimonialSlider';
import { TESTIMONIALS } from './data/testimonials';

<TestimonialSlider testimonials={TESTIMONIALS} />`;
        return (
          <div className="space-y-6">
            <div className="border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Component Description</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                An animated patient-trust story slider. Managed with Framer Motion slide-out states, custom quotes indicators, verified checkmarks, and auto-play interval controls.
              </p>
            </div>

            <div className="border border-slate-100 dark:border-slate-800 p-6 rounded-xl bg-white dark:bg-slate-900">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" /> Interactive Sandbox Preview
              </h4>
              <TestimonialSlider testimonials={TESTIMONIALS} />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <FileCode className="h-4 w-4" /> Component Code Specs
                </h4>
                <button 
                  onClick={() => handleCopyCode(usageCode)}
                  className="text-[10px] font-bold text-blue-600 hover:underline dark:text-teal-400 flex items-center gap-1"
                >
                  {copiedCode ? <Check className="h-3 w-3" /> : null}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code Snippet'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl font-mono text-xs text-slate-100 bg-slate-950 overflow-x-auto leading-relaxed border border-slate-800">
                {usageCode}
              </pre>
            </div>
          </div>
        );
      }
      case 'AppointmentForm': {
        const usageCode = `import AppointmentForm from './components/AppointmentForm';

<AppointmentForm
  initialDepartmentId={selectedDeptId}
  initialDoctorId={selectedDoctorId}
  onSubmitSuccess={(appointment) => handleDisplayToast(appointment)}
  onCancel={() => handleClose()}
/>`;
        return (
          <div className="space-y-6">
            <div className="border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Component Description</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                A comprehensive patient intake registration form. Features context-aware dynamic filtering that updates doctor selectors automatically based on selected department.
              </p>
            </div>

            <div className="border border-slate-100 dark:border-slate-800 p-6 rounded-xl bg-white dark:bg-slate-900">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" /> Interactive Sandbox Preview
              </h4>
              <AppointmentForm 
                onSubmitSuccess={(apt) => alert(`Interactive Form Submission Success!\nPatient: ${apt.patientName}\nReference ID: ${apt.id}`)}
                onCancel={() => alert('Form cancelled in interactive sandbox.')}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <FileCode className="h-4 w-4" /> Component Code Specs
                </h4>
                <button 
                  onClick={() => handleCopyCode(usageCode)}
                  className="text-[10px] font-bold text-blue-600 hover:underline dark:text-teal-400 flex items-center gap-1"
                >
                  {copiedCode ? <Check className="h-3 w-3" /> : null}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code Snippet'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl font-mono text-xs text-slate-100 bg-slate-950 overflow-x-auto leading-relaxed border border-slate-800">
                {usageCode}
              </pre>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50/40 p-4 sm:p-8 dark:border-slate-800 dark:bg-slate-950/40" id="storybook-container">
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <span>Interactive Storybook Specifications</span>
              <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-900">
                Live Docs Catalog
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Visual specs, responsive variants, API layouts, and copyable code recipes.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-slate-600 dark:text-slate-300">
          <Terminal className="h-3.5 w-3.5 text-blue-500" />
          <span>v2.026.06_AEGIS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation panel */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-2">
            Component Directory
          </h3>
          <nav className="space-y-1">
            {componentsList.map((comp) => {
              const isSelected = selectedComponent === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComponent(comp.id)}
                  className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-semibold cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  <span className="truncate">{comp.label}</span>
                  <span className={`text-[9px] rounded px-1.5 py-0.5 uppercase tracking-wider font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/50 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {comp.category}
                  </span>
                </button>
              );
            })}
          </nav>
          
          <div className="rounded-xl bg-amber-500/5 p-4 border border-amber-500/10 text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed">
            <h4 className="font-bold mb-1 flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5 text-amber-500" /> Developer Scale-up Note:
            </h4>
            These blocks simulate a full Storybook layout. Feel free to interact with form entries and toggle elements on the right panel to test design tokens and bounds.
          </div>
        </div>

        {/* Detailed specs sheet */}
        <div className="lg:col-span-9 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-8">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
                API specifications & design tokens
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {selectedComponent} Component Specs
              </h3>
            </div>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/50">
              <Check className="h-3.5 w-3.5" /> Ready for Production
            </span>
          </div>

          {renderComponentDetails()}

        </div>

      </div>

    </div>
  );
}
