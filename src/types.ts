/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  departmentId: string;
  qualification: string;
  experience: number; // in years
  availability: string[]; // e.g. ["Mon", "Wed", "Fri"]
  timeSlots: string[]; // e.g. ["09:00 AM", "11:00 AM", "02:00 PM"]
  image: string;
  rating: number;
  patientsCount: number;
  bio: string;
  phone: string;
  email: string;
}

export interface Department {
  id: string;
  name: string;
  iconName: string; // Lucide icon identifier
  shortDesc: string;
  longDesc: string;
  facilities: string[];
  services: string[];
  headOfDept: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  date: string;
}

export interface HealthArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  gender: string;
  age: number;
  date: string;
  timeSlot: string;
  departmentId: string;
  doctorId: string;
  reason: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}
