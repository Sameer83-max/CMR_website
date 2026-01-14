import React from 'react';
import { ChevronLeft, User, Phone, MapPin, Droplet, Heart, Bell, Shield, LogOut, ChevronRight, Award, Calendar } from 'lucide-react';

interface DonorProfileScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorProfileScreen({ navigateTo }: DonorProfileScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header with Gradient */}
      <div className="px-6 pt-12 pb-20" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' }}>
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#FFFFFF' }} />
          </button>
          <h3 style={{ color: '#FFFFFF' }}>Profile</h3>
        </div>
        
        {/* Profile Avatar & Name */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '4px solid rgba(255,255,255,0.3)' }}>
            <User className="w-12 h-12" style={{ color: '#FFFFFF' }} />
          </div>
          <h3 className="mb-1" style={{ color: '#FFFFFF' }}>Rajesh Kumar</h3>
          <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>+91 98765 43210</p>
          <div className="flex items-center gap-2 px-3 py-1.5" style={{ borderRadius: '999px', backgroundColor: 'rgba(239,68,68,0.2)', border: '2px solid rgba(255,255,255,0.3)' }}>
            <Droplet className="w-4 h-4" style={{ color: '#FFFFFF' }} />
            <span style={{ color: '#FFFFFF' }}>B+ Positive</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto -mt-12">
        {/* Stats Cards */}
        <div className="px-6 mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <Heart className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>12</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Donations</p>
            </div>
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <Heart className="w-5 h-5" style={{ color: '#10B981' }} fill="#10B981" />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>36</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Lives Saved</p>
            </div>
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
                <Award className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>3</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Badges</p>
            </div>
          </div>
        </div>
        
        {/* Donor Status */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Donor Status</h5>
          <div className="p-5 mb-3" style={{ borderRadius: '16px', borderLeft: '4px solid #10B981', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <Heart className="w-6 h-6" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937' }}>Eligibility Status</p>
                  <p className="text-sm" style={{ color: '#10B981' }}>Eligible to donate</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
          </div>
          
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <Calendar className="w-6 h-6" style={{ color: '#F97316' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937' }}>Next Donation</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Available in 12 days</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5" style={{ color: '#9CA3AF' }} />
            </div>
          </div>
        </div>
        
        {/* History Timeline */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Recent Donations</h5>
          <div className="space-y-3">
            {[
              { date: 'Nov 18, 2024', hospital: 'Apollo Hospital', type: 'Whole Blood' },
              { date: 'Aug 10, 2024', hospital: 'Max Healthcare', type: 'Plasma' },
              { date: 'May 05, 2024', hospital: 'Fortis Hospital', type: 'Whole Blood' }
            ].map((donation, idx) => (
              <div key={idx} className="relative">
                {idx < 2 && (
                  <div className="absolute left-6 top-14 w-0.5 h-8" style={{ backgroundColor: '#E5E7EB' }}></div>
                )}
                <div className="p-4 flex items-start gap-3" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                    <Heart className="w-5 h-5" style={{ color: '#10B981' }} />
                  </div>
                  <div className="flex-1">
                    <p style={{ color: '#1F2937' }}>{donation.hospital}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{donation.type} • {donation.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Account Settings */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Account Settings</h5>
          <div style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
            {[
              { icon: Bell, label: 'Notifications', desc: 'SMS, Push, Email', color: '#3B82F6' },
              { icon: MapPin, label: 'Location', desc: 'Indiranagar, Bangalore', color: '#10B981' },
              { icon: Shield, label: 'Privacy & Security', desc: 'Manage your data', color: '#8B5CF6' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx}>
                  <button
                    className="w-full p-4 flex items-center justify-between text-left"
                    style={{ backgroundColor: '#FFFFFF' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                        <Icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <div>
                        <p style={{ color: '#1F2937' }}>{item.label}</p>
                        <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                  </button>
                  {idx < 2 && <div style={{ height: '1px', backgroundColor: '#F5F5F5', marginLeft: '16px', marginRight: '16px' }}></div>}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* App Info */}
        <div className="px-6 mb-4">
          <div className="p-3 text-center" style={{ borderRadius: '12px', backgroundColor: '#F5F5F5' }}>
            <p className="text-sm mb-1" style={{ color: '#6B7280' }}>HAEMOLINK Donor App</p>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>Version 2.4.1</p>
          </div>
        </div>
        
        {/* Logout Button - Destructive Style */}
        <div className="px-6 pb-8">
          <button 
            className="w-full py-4 flex items-center justify-center gap-2" 
            style={{ borderRadius: '16px', border: '2px solid #EF4444', backgroundColor: '#FFFFFF', color: '#EF4444' }}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}