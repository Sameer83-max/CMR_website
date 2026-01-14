import React from 'react';
import { ChevronLeft, Users, Heart, Calendar, AlertCircle, Activity, Shield, Clock } from 'lucide-react';

interface DonorCohortScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorCohortScreen({ navigateTo }: DonorCohortScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>My Donor Cohort</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Info Banner */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #8B5CF6', background: 'linear-gradient(135deg, #F5F3FF 0%, #FAF5FF 100%)', boxShadow: '0 4px 16px rgba(139,92,246,0.15)' }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
              <Users className="w-6 h-6" style={{ color: '#8B5CF6' }} />
            </div>
            <div>
              <h5 className="mb-2" style={{ color: '#8B5CF6' }}>Five Brother System</h5>
              <p className="text-sm" style={{ color: '#7C3AED' }}>
                You're paired with 5 other donors to support a Thalassemia patient through rotational donations
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Shield className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                <span className="text-sm" style={{ color: '#8B5CF6' }}>Verified Support Program</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Patient Info */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Patient Information</h5>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Patient ID</span>
              <span style={{ color: '#1F2937' }}>#THA-4521</span>
            </div>
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FEF2F2' }}>
              <span style={{ color: '#6B7280' }}>Blood Type Required</span>
              <div className="px-3 py-1.5" style={{ borderRadius: '999px', backgroundColor: '#EF4444', color: '#FFFFFF' }}>
                B+
              </div>
            </div>
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: '#6B7280' }} />
                <span style={{ color: '#6B7280' }}>Frequency</span>
              </div>
              <span style={{ color: '#1F2937' }}>Every 3 weeks</span>
            </div>
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4' }}>
              <span style={{ color: '#6B7280' }}>Cohort Since</span>
              <span style={{ color: '#10B981' }}>Jan 2023</span>
            </div>
          </div>
        </div>
        
        {/* Cohort Members */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Cohort Members (5 Donors)</h5>
          <div className="space-y-3">
            {[
              { name: 'You (Rajesh K.)', status: 'active', nextDue: '18 Dec 2024', role: 'Next Donor', color: '#10B981' },
              { name: 'Donor #2', status: 'active', nextDue: '8 Jan 2025', role: 'Standby', color: '#3B82F6' },
              { name: 'Donor #3', status: 'active', nextDue: '29 Jan 2025', role: 'Standby', color: '#3B82F6' },
              { name: 'Donor #4', status: 'active', nextDue: '19 Feb 2025', role: 'Standby', color: '#3B82F6' },
              { name: 'Donor #5', status: 'unavailable', nextDue: '12 Mar 2025', role: 'Backup', color: '#F97316' },
            ].map((donor, idx) => (
              <div
                key={idx}
                className="p-4"
                style={{
                  borderRadius: '14px',
                  border: `2px solid ${idx === 0 ? donor.color : '#E5E7EB'}`,
                  backgroundColor: idx === 0 ? `${donor.color}10` : '#FAFAFA',
                  boxShadow: idx === 0 ? '0 2px 8px rgba(16,185,129,0.15)' : 'none'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: donor.color, color: '#FFFFFF' }}
                    >
                      <span>{idx + 1}</span>
                    </div>
                    <div>
                      <p style={{ color: '#1F2937' }}>{donor.name}</p>
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: donor.status === 'active' ? '#10B981' : '#F97316' }}
                        />
                        <span className="text-sm capitalize" style={{ color: '#6B7280' }}>
                          {donor.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1.5 text-xs"
                    style={{
                      borderRadius: '999px',
                      backgroundColor: donor.color,
                      color: '#FFFFFF'
                    }}
                  >
                    {donor.role}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm p-2 mt-2" style={{ borderRadius: '8px', backgroundColor: idx === 0 ? 'rgba(255,255,255,0.7)' : '#FFFFFF' }}>
                  <Calendar className="w-4 h-4" style={{ color: '#6B7280' }} />
                  <span style={{ color: '#6B7280' }}>Next due: {donor.nextDue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Rotation Schedule */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <Activity className="w-5 h-5" style={{ color: '#3B82F6' }} />
            </div>
            <h5 style={{ color: '#374151' }}>Rotation Schedule</h5>
          </div>
          <div className="space-y-2">
            {[
              { donor: 'You', date: '18 Dec 2024', status: 'upcoming', color: '#10B981' },
              { donor: 'Donor #2', date: '8 Jan 2025', status: 'scheduled', color: '#3B82F6' },
              { donor: 'Donor #3', date: '29 Jan 2025', status: 'scheduled', color: '#6B7280' },
            ].map((schedule, idx) => (
              <div
                key={idx}
                className="p-3 flex items-center justify-between"
                style={{
                  borderRadius: '12px',
                  backgroundColor: idx === 0 ? '#F0FDF4' : '#FAFAFA',
                  border: `2px solid ${idx === 0 ? '#10B981' : '#E5E7EB'}`
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: schedule.color, color: '#FFFFFF', fontSize: '12px' }}>
                    {idx + 1}
                  </div>
                  <span style={{ color: '#1F2937' }}>{schedule.donor}</span>
                </div>
                <span className="text-sm" style={{ color: '#6B7280' }}>{schedule.date}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Emergency Backup */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #F97316', backgroundColor: '#FFF7ED', boxShadow: '0 4px 16px rgba(249,115,22,0.15)' }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
              <AlertCircle className="w-6 h-6" style={{ color: '#F97316' }} />
            </div>
            <div className="flex-1">
              <h5 className="mb-2" style={{ color: '#F97316' }}>Emergency Backup Donor</h5>
              <p className="text-sm mb-3" style={{ color: '#EA580C' }}>
                If you're unable to donate, Donor #5 will be notified as emergency backup
              </p>
              <button className="px-4 py-2.5" style={{ borderRadius: '10px', border: '2px solid #F97316', backgroundColor: '#FFFFFF', color: '#F97316' }}>
                Notify Backup
              </button>
            </div>
          </div>
        </div>
        
        {/* Impact Stats */}
        <div className="p-5" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <Heart className="w-6 h-6" style={{ color: '#FFFFFF' }} fill="#FFFFFF" />
            </div>
            <h5 style={{ color: '#FFFFFF' }}>Cohort Impact</h5>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <p style={{ color: '#FFFFFF', fontSize: '32px' }}>48</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Total Donations</p>
            </div>
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <p style={{ color: '#FFFFFF', fontSize: '32px' }}>2</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Years Together</p>
            </div>
          </div>
          <div className="mt-4 p-3 text-center" style={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Supporting Patient #THA-4521</p>
          </div>
        </div>
      </div>
    </div>
  );
}