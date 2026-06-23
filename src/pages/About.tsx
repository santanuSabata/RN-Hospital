/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  Award, 
  Clock3, 
  Milestone, 
  Quote, 
  Heart, 
  Cpu, 
  ShieldCheck, 
  Users,
  Target
} from 'lucide-react';

export default function About() {
  const achievements = [
    {
      title: '#1 Global Research Hospital',
      desc: 'Ranked in the top tier of healthcare organizations for diagnostic breakthroughs and computerized micro-neurosurgery.',
      icon: Award,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30'
    },
    {
      title: 'JCI Golden Seal Certification',
      desc: 'Recognized for absolute fidelity to international safety guidelines, infection barriers, and patient-first designs.',
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
    },
    {
      title: 'State-of-the-art Robotics',
      desc: 'Fully integrated with daVinci robotic resecting systems, MAKO joint systems, and stereotactic 3D neuro-navigation.',
      icon: Cpu,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/30'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Founding of Aegis Center', desc: 'Aegis Medical Center opens in Seattle with 120 beds and 15 cardiologist specialists.' },
    { year: '2013', title: 'JCI Accreditation', desc: 'Earns our first Joint Commission Gold Seal with an exceptional score of 99.4%.' },
    { year: '2018', title: 'Robotic Surgery Integration', desc: 'Establishes state-of-the-art computer-assisted theaters and Level I Trauma unit.' },
    { year: '2024', title: 'Genomics Research Launch', desc: 'Expands into targeted molecular oncology therapies and customized gene medicine.' },
    { year: '2026', title: 'Bellevue Campus Upgrade', desc: 'Opens our brand new 12-story, smart green clinical wing hosting 450+ patient beds.' }
  ];

  return (
    <div className="space-y-20 pb-16" id="about-page-container">
      
      {/* Page Header banner */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950/20 py-16" id="about-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
            About Aegis International Hospital
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            clinical excellence, human compassion
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Since 2008, Aegis Hospital has been dedicated to establishing a global gold-standard in healthcare, combining research-led science with patient-centric values.
          </p>
        </div>
      </section>

      {/* Hospital Intro & Mission/Vision */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="about-intro-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              Pioneering the Future of Compassionate Care
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We believe healthcare is not merely a clinical service, but an act of sacred trust. Our hospital operates on a standard of total quality management. By sourcing the finest physicians from top-tier research universities, we ensure every treatment plan represents the latest medical consensus.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Our state-of-the-art Bellevue campus offers an eye-friendly, sensory-soothing, and high-tech healing environment. Natural light streams through every ward, and advanced air purifying filters minimize clinical pathogens.
            </p>
            
            {/* Mission & Vision Split Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-3xl border border-slate-100 bg-slate-50/50 dark:border-slate-800/80 dark:bg-slate-900/30 p-6 space-y-2.5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-teal-400">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Our Mission</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To heal, to lead, and to care. We commit ourselves to delivering exceptional patient-centric diagnostics and treatments.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-slate-50/50 dark:border-slate-800/80 dark:bg-slate-900/30 p-6 space-y-2.5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-slate-800 dark:text-teal-400">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Our Vision</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To stand as the international benchmark of smart, computer-assisted medicine where human empathy meets mechanical precision.
                </p>
              </div>
            </div>

          </div>

          {/* Intro Media Illustration */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 h-96 lg:h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
              alt="Aegis smart clinical infrastructure"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
            {/* Absolute stats counter */}
            <div className="absolute top-6 left-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 p-4 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">450+</div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Inpatient Smart Beds</h4>
                <p className="text-[10px] text-slate-400">All equipped with dynamic vital telemetry</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership message (HOD quote) */}
      <section className="bg-slate-50/60 py-16 dark:bg-slate-950/20" id="about-leadership">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="relative inline-block">
            <Quote className="h-12 w-12 text-slate-200 dark:text-slate-800 fill-current mx-auto absolute -top-6 -left-6 opacity-65" />
            <p className="relative text-lg sm:text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-200">
              "Clinical statistics, ratings, and state-of-the-art diagnostic machinery are only half of the healthcare equation. At the end of the day, true medicine is measured by the relief in a patient’s eyes and the peace of mind we restore to their families."
            </p>
          </div>
          <div className="pt-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Dr. Sarah Elizabeth Jenkins, MD, FACC</h4>
            <p className="text-xs text-blue-600 dark:text-teal-400 uppercase tracking-wider font-semibold mt-0.5">
              Chief of Staff & Director of Cardiology Center
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Technology & Infrastructure */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="about-technology">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
            advanced infrastructure
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white mt-1">
            Cutting-Edge Medical Achievements
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Aegis is equipped with top-tier technology platforms to guarantee surgical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-100/30 hover:shadow-2xl hover:shadow-blue-250/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none text-left space-y-4 transition-all duration-300"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="about-timeline">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-teal-400">
            our heritage
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white mt-1">
            A History of Healing Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-100 dark:border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-8 text-left">
          {milestones.map((milestone, index) => {
            return (
              <div key={index} className="relative">
                {/* Visual Circle Marker */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-blue-600 dark:bg-teal-400 border-4 border-white dark:border-slate-900" />
                
                <div className="space-y-1">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-teal-400">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
