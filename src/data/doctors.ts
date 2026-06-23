/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Doctor } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-jenkins',
    name: 'Dr. Sarah Elizabeth Jenkins',
    specialty: 'Interventional Cardiologist',
    departmentId: 'cardiology',
    qualification: 'MD, FACC - Harvard Medical School',
    experience: 18,
    availability: ['Mon', 'Wed', 'Fri'],
    timeSlots: ['09:00 AM', '10:30 AM', '11:15 AM', '02:00 PM', '03:30 PM'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    patientsCount: 12400,
    bio: 'Dr. Jenkins is a globally recognized interventional cardiologist with over 18 years of clinical leadership. She specializes in minimally invasive catheter-based treatment of coronary heart disease, structural valvular repairs, and complex angioplasties.',
    phone: '+1 (555) 434-2010',
    email: 's.jenkins@aegishospital.org'
  },
  {
    id: 'dr-vance',
    name: 'Dr. Marcus Vance',
    specialty: 'Senior Consultant Neurosurgeon',
    departmentId: 'neurology',
    qualification: 'MD, PhD, FRCS (Neuro) - Johns Hopkins University',
    experience: 22,
    availability: ['Tue', 'Thu'],
    timeSlots: ['08:30 AM', '10:00 AM', '01:30 PM', '03:00 PM'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    rating: 4.95,
    patientsCount: 8900,
    bio: 'Dr. Vance leads the Neurological Institute at Aegis Hospital. He is a pioneer in computer-assisted stereotactic neuro-navigation and high-precision microscopic resection of brain tumors and spinal column stabilization.',
    phone: '+1 (555) 434-2021',
    email: 'm.vance@aegishospital.org'
  },
  {
    id: 'dr-chen',
    name: 'Dr. Robert Chen',
    specialty: 'Orthopedic & Joint Surgeon',
    departmentId: 'orthopedics',
    qualification: 'MD, FAAOS - Stanford School of Medicine',
    experience: 15,
    availability: ['Mon', 'Tue', 'Thu'],
    timeSlots: ['09:30 AM', '11:00 AM', '02:30 PM', '04:00 PM'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    rating: 4.85,
    patientsCount: 14200,
    bio: 'Dr. Robert Chen is a board-certified orthopedic surgeon specialized in robotic-assisted total hip and knee replacements. He serves as an advisor to international sports federations, managing athlete rehabilitation and complex arthroscopic reconstructions.',
    phone: '+1 (555) 434-2032',
    email: 'r.chen@aegishospital.org'
  },
  {
    id: 'dr-rostova',
    name: 'Dr. Elena Rostova',
    specialty: 'Chief Pediatrician & Neonatologist',
    departmentId: 'pediatrics',
    qualification: 'MD, FAAP - Oxford Medical Sciences',
    experience: 16,
    availability: ['Wed', 'Thu', 'Fri'],
    timeSlots: ['10:00 AM', '11:30 AM', '01:00 PM', '03:15 PM', '04:30 PM'],
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    patientsCount: 16500,
    bio: 'Dr. Rostova has committed her career to pediatric wellness and critical neonatology. She manages our high-dependency Neonatal Intensive Care Unit (NICU), combining deep clinical mastery with a comforting, highly empathetic presence for families.',
    phone: '+1 (555) 434-2043',
    email: 'e.rostova@aegishospital.org'
  },
  {
    id: 'dr-pendelton',
    name: 'Dr. Arthur Pendelton',
    specialty: 'Oncologist & Gene Researcher',
    departmentId: 'oncology',
    qualification: 'MD, PhD - Yale School of Medicine',
    experience: 20,
    availability: ['Mon', 'Wed', 'Fri'],
    timeSlots: ['09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    rating: 4.88,
    patientsCount: 7400,
    bio: 'Dr. Pendelton is a highly respected expert in molecular oncology and personalized cancer gene editing. He leads Aegis’s cancer clinical trial protocols and works directly with patients to develop precise target-biologic therapeutic plans.',
    phone: '+1 (555) 434-2054',
    email: 'a.pendelton@aegishospital.org'
  },
  {
    id: 'dr-cruz',
    name: 'Dr. Samantha K. Cruz',
    specialty: 'Emergency Medicine Specialist',
    departmentId: 'emergency',
    qualification: 'MD, FACEP - University of Pennsylvania',
    experience: 14,
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    timeSlots: ['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'],
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400',
    rating: 4.92,
    patientsCount: 21000,
    bio: 'Dr. Cruz is the Director of the Level I Trauma Center. With over 14 years in active, high-intensity emergency rooms, she is a supreme expert in rapid neurological triage, cardiopulmonary resuscitation, and critical trauma management.',
    phone: '+1 (555) 434-2065',
    email: 's.cruz@aegishospital.org'
  },
  {
    id: 'dr-miller',
    name: 'Dr. David Miller',
    specialty: 'Cardiothoracic Surgeon',
    departmentId: 'cardiology',
    qualification: 'MD - Columbia University College of Physicians',
    experience: 19,
    availability: ['Tue', 'Thu', 'Fri'],
    timeSlots: ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&q=5', // fallbacks to similar
    rating: 4.87,
    patientsCount: 9300,
    bio: 'Dr. David Miller specializes in open-heart and robotic-assisted thoracic surgical interventions, including coronary bypass grafting (CABG), mitral and aortic valve reconstruction, and aortic root aneurysms.',
    phone: '+1 (555) 434-2076',
    email: 'd.miller@aegishospital.org'
  },
  {
    id: 'dr-west',
    name: 'Dr. Angela West',
    specialty: 'Pediatric Neurologist',
    departmentId: 'pediatrics',
    qualification: 'MD - University of Toronto Medicine',
    experience: 12,
    availability: ['Mon', 'Wed'],
    timeSlots: ['10:00 AM', '01:30 PM', '03:00 PM'],
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400&q=6',
    rating: 4.94,
    patientsCount: 6100,
    bio: 'Dr. Angela West is dual-certified in Pediatrics and Neurology, with a specific focus on pediatric epilepsy, child motor development, and neuromuscular disorders in early infancy.',
    phone: '+1 (555) 434-2087',
    email: 'a.west@aegishospital.org'
  }
];
