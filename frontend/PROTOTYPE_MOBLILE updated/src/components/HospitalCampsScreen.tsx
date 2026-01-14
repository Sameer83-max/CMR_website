import React from 'react';
import { ChevronLeft, Plus, Calendar, MapPin, Users, Award, FileText, CheckCircle, Clock } from 'lucide-react';

interface HospitalCampsScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalCampsScreen({ navigateTo }: HospitalCampsScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('hospital-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#3B82F6' }}>Donation Camps</h3>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0FDF4' }}>
            <Plus className="w-5 h-5" style={{ color: '#10B981' }} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Create New Camp */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #10B981', background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)', boxShadow: '0 4px 16px rgba(16,185,129,0.15)' }}>
          <h5 className="mb-4" style={{ color: '#10B981' }}>Create New Donation Camp</h5>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Camp Name"
              className="w-full p-3"
              style={{ borderRadius: '10px', border: '2px solid #10B981', backgroundColor: '#FFFFFF', color: '#1F2937' }}
            />
            
            <input
              type="text"
              placeholder="Location"
              className="w-full p-3"
              style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
            />
            
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Date"
                className="w-full p-3"
                style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
              />
              <input
                type="text"
                placeholder="Time"
                className="w-full p-3"
                style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
              />
            </div>
            
            <button
              className="w-full py-3"
              style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 12px rgba(16,185,129,0.3)' }}
            >
              Create Camp
            </button>
          </div>
        </div>
        
        {/* Upcoming Camps */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Upcoming Camps</h5>
          <div className="space-y-3">
            {[
              {
                name: 'Community Health Center Drive',
                location: 'Green Valley Community Hall',
                date: '18 Dec 2024',
                time: '9:00 AM - 3:00 PM',
                registered: 45,
                capacity: 100
              },
              {
                name: 'Corporate Blood Donation',
                location: 'Tech Park, Phase 2',
                date: '20 Dec 2024',
                time: '10:00 AM - 4:00 PM',
                registered: 78,
                capacity: 150
              },
            ].map((camp, idx) => (
              <div key={idx} className="p-4" style={{ borderRadius: '14px', border: '2px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
                <h6 className="mb-3" style={{ color: '#1F2937' }}>{camp.name}</h6>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 p-2" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                    <MapPin className="w-4 h-4" style={{ color: '#6B7280' }} />
                    <span style={{ color: '#6B7280' }}>{camp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                    <Calendar className="w-4 h-4" style={{ color: '#6B7280' }} />
                    <span style={{ color: '#6B7280' }}>{camp.date} • {camp.time}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2" style={{ borderRadius: '8px', backgroundColor: '#EFF6FF' }}>
                    <Users className="w-4 h-4" style={{ color: '#3B82F6' }} />
                    <span style={{ color: '#3B82F6' }}>{camp.registered} / {camp.capacity} registered</span>
                  </div>
                </div>
                <button
                  className="w-full py-2.5"
                  style={{ borderRadius: '10px', border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#3B82F6' }}
                >
                  Manage Camp
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* NGO Partners */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>NGO Partners</h5>
          <div className="space-y-3">
            {[
              { name: 'Red Cross Society', camps: 12, donors: 450, color: '#EF4444' },
              { name: 'Life Savers Foundation', camps: 8, donors: 320, color: '#10B981' },
              { name: 'Blood Donors India', camps: 15, donors: 580, color: '#3B82F6' },
            ].map((ngo, idx) => (
              <div
                key={idx}
                className="p-4 flex items-center justify-between"
                style={{ borderRadius: '12px', border: `2px solid ${ngo.color}20`, backgroundColor: `${ngo.color}10` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: ngo.color }}>
                    <Award className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>{ngo.name}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                      {ngo.camps} camps • {ngo.donors} donors
                    </p>
                  </div>
                </div>
                <button className="text-sm px-3 py-1.5" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF', color: ngo.color }}>
                  Contact
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Slot Management Calendar */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Slot Management</h5>
          <div className="h-40 flex items-center justify-center mb-4" style={{ borderRadius: '12px', border: '2px dashed #E5E7EB', backgroundColor: '#FAFAFA' }}>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-2" style={{ color: '#9CA3AF' }} />
              <p className="text-sm" style={{ color: '#6B7280' }}>Calendar View Placeholder</p>
            </div>
          </div>
          <button className="w-full py-3" style={{ borderRadius: '12px', border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#3B82F6' }}>
            View Full Calendar
          </button>
        </div>
        
        {/* Donor Verification */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Donor Verification Queue</h5>
          <div className="space-y-2">
            {[
              { name: 'Rahul Mehta', bloodGroup: 'O+', status: 'Pending' },
              { name: 'Priya Singh', bloodGroup: 'B+', status: 'Verified' },
              { name: 'Amit Kumar', bloodGroup: 'A-', status: 'Pending' },
            ].map((donor, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3"
                style={{ borderRadius: '10px', border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: donor.status === 'Verified' ? '#10B981' : '#F97316', color: '#FFFFFF' }}>
                    {donor.bloodGroup}
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>{donor.name}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{donor.bloodGroup}</p>
                  </div>
                </div>
                <span
                  className="px-3 py-1.5 text-xs flex items-center gap-1"
                  style={{
                    borderRadius: '999px',
                    backgroundColor: donor.status === 'Verified' ? '#F0FDF4' : '#FFF7ED',
                    color: donor.status === 'Verified' ? '#10B981' : '#F97316'
                  }}
                >
                  {donor.status === 'Verified' && <CheckCircle className="w-3 h-3" />}
                  {donor.status === 'Pending' && <Clock className="w-3 h-3" />}
                  {donor.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certificate Generation */}
        <button
          className="w-full p-5 flex items-center justify-center gap-3"
          style={{ borderRadius: '16px', border: '2px solid #F97316', background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)' }}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F97316' }}>
            <Award className="w-6 h-6" style={{ color: '#FFFFFF' }} />
          </div>
          <span style={{ color: '#F97316' }}>Generate Donor Certificates</span>
        </button>
      </div>
    </div>
  );
}