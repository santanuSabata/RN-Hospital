/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Department } from '../types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology Center',
    iconName: 'Heart',
    shortDesc: 'State-of-the-art diagnostic and interventional care for complex cardiac conditions.',
    longDesc: 'The Aegis Cardiology Center provides comprehensive, multi-disciplinary care for patients with heart diseases. Our facilities feature advanced catheterization labs, specialized cardiac care units, and cutting-edge non-invasive imaging technologies, all managed by world-renowned experts.',
    facilities: [
      'Advanced Cardiac Catheterization Lab',
      'Non-Invasive Cardiac Imaging Suite (3D Echocardiography, Cardiac MRI)',
      '24/7 Cardiac Emergency & STEMI Care Unit',
      'Electrophysiology & Pacemaker Clinic'
    ],
    services: [
      'Coronary Angioplasty and Stenting',
      'Heart Valve Repair and Replacement',
      'Arrhythmia Ablation therapy',
      'Preventive Cardiology & Comprehensive Risk Assessments',
      'Congenital Heart Disease Management'
    ],
    headOfDept: 'Dr. Sarah Elizabeth Jenkins, MD, FACC',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'neurology',
    name: 'Neurology & Neurosurgery',
    iconName: 'Brain',
    shortDesc: 'Comprehensive neurological assessment and highly precise, computer-assisted neurosurgeries.',
    longDesc: 'Aegis Neurological Institute is at the forefront of diagnosing and treating brain, spine, and peripheral nerve disorders. Utilizing neuro-navigation, intraoperative MRI, and minimally invasive techniques, we achieve outstanding therapeutic outcomes for complex neural pathologies.',
    facilities: [
      'Intraoperative 3T MRI & High-Definition Neuro-navigation Suite',
      'Dedicated Neurological Intensive Care Unit (Neuro-ICU)',
      'Digital Video EEG Monitoring Lab',
      'Comprehensive Stroke Rehab Center'
    ],
    services: [
      'Micro-neurosurgery for Brain and Spinal Tumors',
      'Endovascular Coiling for Aneurysms & Stroke Management',
      'Deep Brain Stimulation (DBS) for Parkinson’s Disease',
      'Epilepsy Diagnosis and Surgical Management',
      'Chronic Migraine and Neuropathic Pain Therapies'
    ],
    headOfDept: 'Dr. Marcus Vance, PhD, FRCS (Neuro)',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Replacement',
    iconName: 'Activity',
    shortDesc: 'Advanced robotic-assisted joint replacement, sports medicine, and reconstructive surgery.',
    longDesc: 'Our Orthopedics department specializes in restoring active, pain-free lifestyles. From advanced computer-assisted joint replacements to arthroscopic sports medicine, we provide patient-specific plans integrated with rapid recovery physical therapy.',
    facilities: [
      'Robotic-Assisted Joint Replacement Theater',
      'Specialized Sports Rehabilitation Gym',
      'Minimally Invasive Arthroscopic Surgery Suites',
      'Biologics and Regenerative Therapy Lab'
    ],
    services: [
      'Robotic Total Hip and Knee Replacements',
      'Arthroscopic ACL Reconstruction and Rotator Cuff Repairs',
      'Complex Pediatric Orthopedics & Spinal Deformity Correction',
      'Geriatric Trauma and Fragility Fracture Care',
      'Regenerative Platelet-Rich Plasma (PRP) Treatments'
    ],
    headOfDept: 'Dr. Robert Chen, MD, FAAOS',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Neonatology',
    iconName: 'Baby',
    shortDesc: 'Compassionate, specialized pediatric care from newborn infancy through young adulthood.',
    longDesc: 'Aegis Children’s Hospital delivers comforting, child-centric medical care. Our Level IV Neonatal Intensive Care Unit (NICU) provides highly sophisticated support for critically ill or premature infants, staffed by an empathetic pediatric team.',
    facilities: [
      'Level IV Neonatal Intensive Care Unit (NICU)',
      'Pediatric Emergency and Trauma Suite',
      'Sensory-Friendly Child Development Clinics',
      'Dedicated Pediatric Inpatient Wing'
    ],
    services: [
      'Critical Care for Premature and High-Risk Infants',
      'Developmental and Behavioral Assessments',
      'Pediatric Cardiology, Neurology, and Endocrine Specialty Care',
      'Comprehensive Childhood Immunization & Wellness Programs',
      'Pediatric Surgical Excellence'
    ],
    headOfDept: 'Dr. Elena Rostova, MD, FAAP',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'oncology',
    name: 'Oncology Center',
    iconName: 'ShieldAlert',
    shortDesc: 'Integrated cancer care combining precise immunotherapy, targeted radiation, and clinical research.',
    longDesc: 'Our Comprehensive Cancer Care Center provides personalized treatment designs using the latest innovations in clinical oncology. By combining immunotherapy, targeted biological agents, robotic surgeries, and compassionate supportive therapies, we battle cancer as a cohesive team.',
    facilities: [
      'Linear Accelerator (LINAC) Radiation Therapy Suites',
      'Comfort-Optimized Outpatient Infusion & Chemotherapy Lounge',
      'Molecular Pathology & Genomic Sequencing Lab',
      'Multidisciplinary Tumor Board Consult Rooms'
    ],
    services: [
      'Immunotherapy & Target Biologic Agents',
      'Stereotactic Body Radiotherapy (SBRT)',
      'Robotic Oncological Resections',
      'Onco-Genetic Risk Assessment & Counseling',
      'Palliative Care and Integrative Medicine'
    ],
    headOfDept: 'Dr. Arthur Pendelton, MD, PhD',
    image: 'https://images.unsplash.com/photo-1579156286654-e6820224143e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'emergency',
    name: '24/7 Emergency & Trauma',
    iconName: 'FlameKindling',
    shortDesc: 'Immediate, life-saving critical care with rapid triage and specialized trauma response teams.',
    longDesc: 'The Aegis Level I Emergency and Trauma Center is fully prepared to handle any medical crisis 24 hours a day, 365 days a year. Equipped with on-site diagnostics and dedicated cardiac, stroke, and pediatric trauma bays, our response is fast and seamless.',
    facilities: [
      'Level I Trauma Bays with Integrated Imaging',
      'On-site 128-Slice CT Scanner and Rapid Blood Bank',
      'Decontamination Suite for Specialized Emergencies',
      'Dedicated Pediatric Emergency Zone'
    ],
    services: [
      'Advanced Cardiac and Stroke Life Support (ACLS)',
      'Acute Trauma and Fracture Resuscitation',
      'Emergency Airway and Respiratory Interventions',
      'Toxicological and Poison Emergency Management',
      'Rapid Triage and Triage-to-OR Pathways'
    ],
    headOfDept: 'Dr. Samantha K. Cruz, MD, FACEP',
    image: 'https://images.unsplash.com/photo-1584515901387-a5c16b1295db?auto=format&fit=crop&q=80&w=600'
  }
];
