/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HealthArticle } from '../types';

export const ARTICLES: HealthArticle[] = [
  {
    id: 'art-1',
    title: 'Understanding Robotic-Assisted Surgery: Safety, Precision, and Recovery',
    category: 'Advanced Medicine',
    excerpt: 'How modern orthopedic and neurological surgeries utilize high-precision robotics to dramatically shorten healing times and lower risks.',
    content: 'Robotic-assisted surgery represents one of the most significant leaps in modern healthcare history. Far from "robots operating autonomously," these systems are highly advanced extensions of a master surgeon’s hands. By filtering out natural tremors, providing real-time 3D microscopic visualization, and matching patient-specific bone anatomy via MRI scans, technologies like MAKO or neuro-navigation make incisions incredibly small. This results in minimal damage to surrounding soft tissue, significantly less post-operative pain, and recovery times cut in half. At Aegis, over 80% of knee replacements and brain resections are now done with computerized robotic assistance.',
    author: 'Dr. Robert Chen, MD',
    date: 'June 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'art-2',
    title: 'Preventive Cardiology: 5 Essential Rules to Keep Your Heart in Rhythm',
    category: 'Heart Health',
    excerpt: 'Simple but scientifically backed habits in nutrition, cardio fitness, and stress control that lower heart disease risk by up to 80%.',
    content: 'Heart disease remains the leading cause of mortality worldwide, yet up to 80% of cardiovascular complications are entirely preventable. To protect your heart, focus on five pillars. First, control blood pressure; keep sodium under 1,500mg daily. Second, engage in 150 minutes of moderate-intensity aerobic exercise weekly (such as brisk walking or swimming). Third, maintain a Mediterranean-focused diet rich in leafy greens, extra virgin olive oil, and clean proteins. Fourth, secure 7-8 hours of restful sleep to lower arterial inflammation. Lastly, undergo annual screening for lipids and arterial calcification. Early detection of plaque can be life-saving.',
    author: 'Dr. Sarah Elizabeth Jenkins, MD',
    date: 'May 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'art-3',
    title: 'Nurturing Infant Wellness: The Golden Hours of Neonatal Nutrition',
    category: 'Pediatrics',
    excerpt: 'The critical role of early breast milk, skin-to-skin touch, and neonatal environment on cognitive development and immune defense.',
    content: 'The first few hours and days of an infant’s life represent a crucial immunological window. Known as the "golden hours," skin-to-skin contact stabilizes newborn heart rates, blood sugars, and core body temperatures, promoting secure bonding. Nutrition during this early phase is paramount. Colostrum, the first milk produced, is dense with specialized antibodies and growth factors, acting as a natural vaccine for the infant’s fragile digestive tract. For high-risk infants in our Level IV NICU, we prioritize specialized pasteurized donor milk and customized feeding profiles to support robust organ maturation, lower risks of infections, and foster brain connections.',
    author: 'Dr. Elena Rostova, MD',
    date: 'April 22, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400'
  }
];
