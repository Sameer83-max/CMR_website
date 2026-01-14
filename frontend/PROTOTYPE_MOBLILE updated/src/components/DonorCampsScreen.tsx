import React, { useState } from 'react';
import { ChevronLeft, MapPin, Calendar, Users, CheckCircle, Car, Building2, Clock, Tent } from 'lucide-react';

interface DonorCampsScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorCampsScreen({ navigateTo }: DonorCampsScreenProps) {
  const [selectedCamp, setSelectedCamp] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState(0);

  const camps = [
    {
      id: 1,
      name: 'Community Blood Donation Drive',
      organizer: 'RedCross India',
      location: 'Indiranagar Community Hall',
      distance: '1.2 km',
      date: '15 Dec 2024',
      time: '9:00 AM - 5:00 PM',
      slots: 45,
      totalSlots: 100,
      verified: true,
      carpool: true,
      type: 'NGO'
    },
    {
      id: 2,
      name: 'Corporate Donor Camp',
      organizer: 'Rotary Club',
      location: 'Tech Park, Whitefield',
      distance: '5.5 km',
      date: '18 Dec 2024',
      time: '10:00 AM - 4:00 PM',
      slots: 30,
      totalSlots: 50,
      verified: true,
      carpool: false,
      type: 'NGO'
    },
    {
      id: 3,
      name: 'Youth Donor Campaign',
      organizer: 'Lions Club',
      location: 'MG Road Metro Station',
      distance: '3.8 km',
      date: '20 Dec 2024',
      time: '8:00 AM - 2:00 PM',
      slots: 60,
      totalSlots: 80,
      verified: true,
      carpool: true,
      type: 'NGO'
    },
  ];

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Blood Donation Camps</h3>
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['All Camps', 'Nearby', 'This Week', 'NGO'].map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(idx)}
              className="px-4 py-2 whitespace-nowrap"
              style={{
                borderRadius: '999px',
                backgroundColor: activeFilter === idx ? '#10B981' : '#F5F5F5',
                color: activeFilter === idx ? '#FFFFFF' : '#6B7280',
                border: 'none'
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {camps.map((camp) => (
            <div key={camp.id} className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>
                  <Tent className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h5 style={{ color: '#1F2937' }}>{camp.name}</h5>
                    {camp.verified && (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                        <CheckCircle className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                      </div>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{camp.organizer}</p>
                </div>
              </div>
              
              {/* Camp Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#3B82F6' }} />
                  <div className="flex-1">
                    <p style={{ color: '#1F2937' }}>{camp.location}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{camp.distance} away</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3" style={{ borderRadius: '12px', backgroundColor: '#EFF6FF' }}>
                    <Calendar className="w-5 h-5" style={{ color: '#3B82F6' }} />
                    <div>
                      <p className="text-sm" style={{ color: '#1F2937' }}>{camp.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4' }}>
                    <Clock className="w-5 h-5" style={{ color: '#10B981' }} />
                    <div>
                      <p className="text-sm" style={{ color: '#1F2937' }}>{camp.time}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slots Availability */}
              <div className="p-3 mb-3" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4' }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: '#1F2937' }}>Available Slots</span>
                  </div>
                  <span style={{ color: '#10B981' }}>{camp.slots}/{camp.totalSlots}</span>
                </div>
                <div className="h-2" style={{ backgroundColor: '#E5E7EB', borderRadius: '999px', overflow: 'hidden' }}>
                  <div className="h-full" style={{ width: `${(camp.slots / camp.totalSlots) * 100}%`, background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)', borderRadius: '999px' }}></div>
                </div>
              </div>
              
              {/* Features */}
              <div className="flex gap-2 mb-4">
                {camp.verified && (
                  <span className="px-3 py-1.5 text-xs" style={{ borderRadius: '999px', backgroundColor: '#EFF6FF', color: '#3B82F6' }}>
                    ✓ Verified
                  </span>
                )}
                {camp.carpool && (
                  <span className="px-3 py-1.5 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: '#FFF7ED', color: '#F97316' }}>
                    <Car className="w-3 h-3" />
                    Carpool
                  </span>
                )}
                <span className="px-3 py-1.5 text-xs" style={{ borderRadius: '999px', backgroundColor: '#F0FDF4', color: '#10B981' }}>
                  {camp.type}
                </span>
              </div>
              
              {/* Action Button */}
              <button
                onClick={() => navigateTo('donor-scheduling')}
                className="w-full py-3"
                style={{ borderRadius: '12px', backgroundColor: '#10B981', color: '#FFFFFF', border: 'none', boxShadow: '0 2px 8px rgba(16,185,129,0.3)' }}
              >
                Register for Camp
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}