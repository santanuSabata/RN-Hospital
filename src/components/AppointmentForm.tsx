/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Layers, 
  Stethoscope, 
  Info, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { DOCTORS } from '../data/doctors';
import { Appointment, Doctor } from '../types';

interface AppointmentFormProps {
  initialDepartmentId?: string;
  initialDoctorId?: string;
  onSubmitSuccess: (appointment: Appointment) => void;
  onCancel?: () => void;
}

export default function AppointmentForm({
  initialDepartmentId = '',
  initialDoctorId = '',
  onSubmitSuccess,
  onCancel,
}: AppointmentFormProps) {
  // Form States
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState<number | ''>('');
  const [departmentId, setDepartmentId] = useState(initialDepartmentId);
  const [doctorId, setDoctorId] = useState(initialDoctorId);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');

  // Filtering doctors based on chosen department
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(DOCTORS);

  // Errors state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic filter trigger
  useEffect(() => {
    if (departmentId) {
      const matched = DOCTORS.filter((doc) => doc.departmentId === departmentId);
      setFilteredDoctors(matched);
      // Reset doctorId if currently selected doctor does not belong to new department selection
      if (doctorId && !matched.some((doc) => doc.id === doctorId)) {
        setDoctorId('');
        setTimeSlot('');
      }
    } else {
      setFilteredDoctors(DOCTORS);
    }
  }, [departmentId]);

  // Adjust time slot list depending on the selected doctor
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  useEffect(() => {
    if (doctorId) {
      const docObj = DOCTORS.find((d) => d.id === doctorId);
      if (docObj) {
        setAvailableSlots(docObj.timeSlots);
        if (timeSlot && !docObj.timeSlots.includes(timeSlot)) {
          setTimeSlot('');
        }
      }
    } else {
      setAvailableSlots(['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM']);
    }
  }, [doctorId]);

  // Form submission handling
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    const newErrors: { [key: string]: string } = {};
    if (!patientName.trim()) newErrors.patientName = 'Full Name is required';
    if (!patientEmail.trim()) {
      newErrors.patientEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(patientEmail)) {
      newErrors.patientEmail = 'Invalid email structure';
    }
    if (!patientPhone.trim()) {
      newErrors.patientPhone = 'Phone number is required';
    } else if (patientPhone.replace(/\D/g, '').length < 7) {
      newErrors.patientPhone = 'Enter a valid phone number';
    }
    if (age === '' || Number(age) <= 0 || Number(age) > 120) {
      newErrors.age = 'Provide a valid age (1-120)';
    }
    if (!departmentId) newErrors.departmentId = 'Select a department';
    if (!doctorId) newErrors.doctorId = 'Select a specialist';
    if (!date) newErrors.date = 'Select consultation date';
    if (!timeSlot) newErrors.timeSlot = 'Select pre-reserved slot';
    if (!reason.trim()) newErrors.reason = 'Briefly state the medical reason';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to top of form or first error
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate Network Latency for high fidelity
    setTimeout(() => {
      const newAppointment: Appointment = {
        id: `apt-${Math.random().toString(36).substr(2, 9)}`,
        patientName,
        patientEmail,
        patientPhone,
        gender,
        age: Number(age),
        date,
        timeSlot,
        departmentId,
        doctorId,
        reason,
        notes,
        status: 'confirmed', // Real-time auto-confirmation for simulation
        createdAt: new Date().toISOString(),
      };
      
      setIsSubmitting(false);
      onSubmitSuccess(newAppointment);

      // Reset form
      setPatientName('');
      setPatientEmail('');
      setPatientPhone('');
      setGender('Male');
      setAge('');
      setDepartmentId('');
      setDoctorId('');
      setDate('');
      setTimeSlot('');
      setReason('');
      setNotes('');
    }, 1200);
  };

  // Pre-fill fields if we dynamically click on "Book doctor" or similar
  useEffect(() => {
    if (initialDepartmentId) setDepartmentId(initialDepartmentId);
    if (initialDoctorId) setDoctorId(initialDoctorId);
  }, [initialDepartmentId, initialDoctorId]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="appointment-form-component">
      
      {/* Alert Banner / Clinical Note */}
      <div className="rounded-xl bg-blue-50/50 p-4 border border-blue-100 dark:bg-slate-800/40 dark:border-slate-700/60 flex items-start gap-2.5">
        <Info className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
          <strong>Direct Booking Guarantee:</strong> Aegis reserves slots for pre-confirmed appointments. In case of trauma emergencies, call our 24/7 hotline.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Patient Full Name *
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <User className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="e.g. Eleanor Vance"
              className={`w-full rounded-full border bg-white pl-10 pr-4 py-2.5 text-sm outline-none transition-all dark:bg-slate-900 ${
                errors.patientName 
                  ? 'border-red-500 ring-1 ring-red-100 dark:ring-red-950/40' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:focus:border-blue-500'
              }`}
            />
          </div>
          {errors.patientName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.patientName}</p>}
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Email Address *
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Mail className="h-4 w-4" />
            </span>
            <input
              type="email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              placeholder="e.g. patient@example.com"
              className={`w-full rounded-full border bg-white pl-10 pr-4 py-2.5 text-sm outline-none transition-all dark:bg-slate-900 ${
                errors.patientEmail 
                  ? 'border-red-500 ring-1 ring-red-100 dark:ring-red-950/40' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:focus:border-blue-500'
              }`}
            />
          </div>
          {errors.patientEmail && <p className="text-red-500 text-xs mt-1 font-medium">{errors.patientEmail}</p>}
        </div>

        {/* Contact Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Phone Number *
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Phone className="h-4 w-4" />
            </span>
            <input
              type="tel"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              placeholder="e.g. +1 (555) 434-2000"
              className={`w-full rounded-full border bg-white pl-10 pr-4 py-2.5 text-sm outline-none transition-all dark:bg-slate-900 ${
                errors.patientPhone 
                  ? 'border-red-500 ring-1 ring-red-100 dark:ring-red-950/40' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:focus:border-blue-500'
              }`}
            />
          </div>
          {errors.patientPhone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.patientPhone}</p>}
        </div>

        {/* Gender and Age Row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all dark:border-slate-700 dark:bg-slate-900 dark:text-white cursor-pointer"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Age *
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="Years"
              min="1"
              max="120"
              className={`w-full rounded-full border bg-white px-4 py-2.5 text-sm outline-none transition-all dark:bg-slate-900 ${
                errors.age 
                  ? 'border-red-500 ring-1 ring-red-100 dark:ring-red-950/40' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:focus:border-blue-500'
              }`}
            />
            {errors.age && <p className="text-red-500 text-xs mt-1 font-medium">{errors.age}</p>}
          </div>
        </div>

        {/* Department Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Department Unit *
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Layers className="h-4 w-4" />
            </span>
            <select
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              className={`w-full rounded-full border bg-white pl-10 pr-3 py-2.5 text-sm outline-none transition-all dark:bg-slate-900 dark:text-white cursor-pointer ${
                errors.departmentId 
                  ? 'border-red-500 ring-1 ring-red-100 dark:ring-red-950/40' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:focus:border-blue-500'
              }`}
            >
              <option value="">Select Medical Department...</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
          {errors.departmentId && <p className="text-red-500 text-xs mt-1 font-medium">{errors.departmentId}</p>}
        </div>

        {/* Doctor Specialist Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Available Specialist *
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Stethoscope className="h-4 w-4" />
            </span>
            <select
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              className={`w-full rounded-full border bg-white pl-10 pr-3 py-2.5 text-sm outline-none transition-all dark:bg-slate-900 dark:text-white cursor-pointer ${
                errors.doctorId 
                  ? 'border-red-500 ring-1 ring-red-100' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700'
              }`}
            >
              <option value="">Choose Physician...</option>
              {filteredDoctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name} - {doc.specialty}
                </option>
              ))}
            </select>
          </div>
          {errors.doctorId && <p className="text-red-500 text-xs mt-1 font-medium">{errors.doctorId}</p>}
        </div>

        {/* Date Reservation */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Consultation Date *
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Calendar className="h-4 w-4" />
            </span>
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full rounded-full border bg-white pl-10 pr-4 py-2.5 text-sm outline-none transition-all dark:bg-slate-900 dark:text-white ${
                errors.date 
                  ? 'border-red-500 ring-1 ring-red-100' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700'
              }`}
            />
          </div>
          {errors.date && <p className="text-red-500 text-xs mt-1 font-medium">{errors.date}</p>}
        </div>

        {/* Time Slot Selector */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Preferred Hour Slot *
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Clock className="h-4 w-4" />
            </span>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className={`w-full rounded-full border bg-white pl-10 pr-3 py-2.5 text-sm outline-none transition-all dark:bg-slate-900 dark:text-white cursor-pointer ${
                errors.timeSlot 
                  ? 'border-red-500 ring-1 ring-red-100' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700'
              }`}
            >
              <option value="">Select Appointment Time Slot...</option>
              {availableSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          {errors.timeSlot && <p className="text-red-500 text-xs mt-1 font-medium">{errors.timeSlot}</p>}
        </div>

      </div>

      {/* Primary Medical Reason */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
          Primary Reason for Medical Consultation *
        </label>
        <textarea
          rows={2}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="e.g. High blood pressure readings, chronic joint pains, routine pediatric physical exam, neurology consultation..."
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-all dark:bg-slate-900 dark:text-white ${
            errors.reason 
              ? 'border-red-500 ring-1 ring-red-100' 
              : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700'
          }`}
        />
        {errors.reason && <p className="text-red-500 text-xs mt-1 font-medium">{errors.reason}</p>}
      </div>

      {/* Additional clinical history/notes */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
          Additional Medical History / Pre-existing Conditions (Optional)
        </label>
        <div className="relative">
          <span className="absolute top-3 left-3 text-slate-400">
            <FileText className="h-4 w-4" />
          </span>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Describe any active therapies, prescription drugs, allergies, or diagnostic records..."
            className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto rounded-full border border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 px-6 py-2.5 text-sm font-semibold transition-colors cursor-pointer"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 text-sm font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:shadow-blue-300 disabled:opacity-75 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Checking Availability...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="h-4.5 w-4.5" />
              <span>Confirm Reservation</span>
            </>
          )}
        </button>
      </div>

    </form>
  );
}
export { DEPARTMENTS, DOCTORS };
