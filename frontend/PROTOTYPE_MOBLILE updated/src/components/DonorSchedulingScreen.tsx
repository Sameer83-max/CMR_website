import React, { useState } from 'react';
import { ChevronLeft, MapPin, Calendar, Clock, QrCode, FileText, CheckCircle, Building2 } from 'lucide-react';

interface DonorSchedulingScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorSchedulingScreen({ navigateTo }: DonorSchedulingScreenProps) {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Schedule Donation</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        {/* Select Blood Bank */}
        <div>
          <h4 className="mb-4" style={{ color: '#374151' }}>Choose Blood Bank / Camp</h4>
          <div className="space-y-3">
            {[
              { name: 'City General Blood Bank', distance: '2.3 km', slots: '12 slots available', color: '#10B981' },
              { name: 'Apollo Blood Bank', distance: '4.1 km', slots: '8 slots available', color: '#3B82F6' },
              { name: 'RedCross Center', distance: '5.8 km', slots: '15 slots available', color: '#EF4444' },
            ].map((bank, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBank(bank.name)}
                className="w-full p-5 text-left"
                style={{
                  borderRadius: '16px',
                  border: `2px solid ${selectedBank === bank.name ? bank.color : '#E5E7EB'}`,
                  backgroundColor: selectedBank === bank.name ? `${bank.color}10` : '#FFFFFF',
                  boxShadow: selectedBank === bank.name ? '0 4px 16px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${bank.color}15` }}>
                      <Building2 className="w-6 h-6" style={{ color: bank.color }} />
                    </div>
                    <div>
                      <h5 style={{ color: '#1F2937' }}>{bank.name}</h5>
                      <p className="text-sm" style={{ color: '#6B7280' }}>{bank.slots}</p>
                    </div>
                  </div>
                  {selectedBank === bank.name && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: bank.color }}>
                      <CheckCircle className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                  <MapPin className="w-4 h-4" />
                  <span>{bank.distance} away</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Date Selection */}
        {selectedBank && (
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <Calendar className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
              <h4 style={{ color: '#374151' }}>Select Date</h4>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[
                { date: '13', day: 'Mon', available: false },
                { date: '14', day: 'Tue', available: true },
                { date: '15', day: 'Wed', available: true },
                { date: '16', day: 'Thu', available: true },
                { date: '17', day: 'Fri', available: true },
                { date: '18', day: 'Sat', available: true },
                { date: '19', day: 'Sun', available: false },
              ].map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => day.available && setSelectedDate(day.date)}
                  disabled={!day.available}
                  className="p-3 text-center"
                  style={{
                    borderRadius: '12px',
                    border: `2px solid ${selectedDate === day.date ? '#10B981' : !day.available ? '#F5F5F5' : '#E5E7EB'}`,
                    backgroundColor: !day.available ? '#F9FAFB' : selectedDate === day.date ? '#F0FDF4' : '#FFFFFF',
                    opacity: !day.available ? 0.5 : 1,
                    cursor: !day.available ? 'not-allowed' : 'pointer'
                  }}
                >
                  <p className="text-xs mb-1" style={{ color: '#6B7280' }}>{day.day}</p>
                  <p style={{ color: selectedDate === day.date ? '#10B981' : '#1F2937' }}>{day.date}</p>
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Time Slot Selection */}
        {selectedDate && (
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Clock className="w-5 h-5" style={{ color: '#F97316' }} />
              </div>
              <h4 style={{ color: '#374151' }}>Select Time Slot</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { time: '09:00 AM', available: true },
                { time: '10:30 AM', available: true },
                { time: '12:00 PM', available: false },
                { time: '02:00 PM', available: true },
                { time: '03:30 PM', available: true },
                { time: '05:00 PM', available: true },
              ].map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => slot.available && setSelectedSlot(slot.time)}
                  disabled={!slot.available}
                  className="p-4 text-center"
                  style={{
                    borderRadius: '12px',
                    border: `2px solid ${selectedSlot === slot.time ? '#F97316' : !slot.available ? '#F5F5F5' : '#E5E7EB'}`,
                    backgroundColor: !slot.available ? '#F9FAFB' : selectedSlot === slot.time ? '#FFF7ED' : '#FFFFFF',
                    opacity: !slot.available ? 0.5 : 1,
                    cursor: !slot.available ? 'not-allowed' : 'pointer'
                  }}
                >
                  <Clock className="w-5 h-5 mx-auto mb-1" style={{ color: selectedSlot === slot.time ? '#F97316' : '#6B7280' }} />
                  <p style={{ color: selectedSlot === slot.time ? '#F97316' : '#1F2937' }}>{slot.time}</p>
                  {!slot.available && (
                    <p className="text-xs mt-1" style={{ color: '#EF4444' }}>Full</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Booking Summary */}
        {selectedSlot && (
          <div className="p-5" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 4px 16px rgba(16,185,129,0.3)' }}>
            <h5 className="mb-3" style={{ color: '#FFFFFF' }}>Booking Summary</h5>
            <div className="space-y-2">
              <div className="flex justify-between p-2" style={{ borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Blood Bank:</span>
                <span style={{ color: '#FFFFFF' }}>{selectedBank}</span>
              </div>
              <div className="flex justify-between p-2" style={{ borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Date:</span>
                <span style={{ color: '#FFFFFF' }}>Dec {selectedDate}, 2024</span>
              </div>
              <div className="flex justify-between p-2" style={{ borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Time Slot:</span>
                <span style={{ color: '#FFFFFF' }}>{selectedSlot}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
        <button
          disabled={!selectedSlot}
          onClick={() => navigateTo('donor-home')}
          className="w-full py-4"
          style={{ 
            borderRadius: '16px',
            backgroundColor: selectedSlot ? '#10B981' : '#E5E7EB',
            color: '#FFFFFF',
            border: 'none',
            boxShadow: selectedSlot ? '0 4px 16px rgba(16,185,129,0.3)' : 'none',
            cursor: selectedSlot ? 'pointer' : 'not-allowed'
          }}
        >
          {selectedSlot ? 'Confirm Booking' : 'Select Time Slot'}
        </button>
        <button
          onClick={() => navigateTo('donor-home')}
          className="w-full py-4"
          style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}