import React from 'react';
import { ChevronLeft, User, Phone, MapPin, Droplet, FileText, Bell, Shield, LogOut, ChevronRight, Heart, Activity } from 'lucide-react';

interface ProfileScreenProps {
  navigateTo: (screen: string) => void;
}

export function ProfileScreen({ navigateTo }: ProfileScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center">
          <button 
            onClick={() => navigateTo('home')} 
            className="mr-3 p-2 rounded-full transition-all"
            style={{ background: 'none', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Profile</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Profile Header - BLUE */}
        <div className="p-6" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mr-4 shadow-lg" style={{ backgroundColor: '#3B82F6' }}>
              <User className="w-10 h-10" style={{ color: '#FFFFFF' }} />
            </div>
            <div>
              <h3 style={{ color: '#1F2937' }}>Rajesh Kumar</h3>
              <p style={{ color: '#6B7280' }}>rajesh.kumar@email.com</p>
              <div className="flex items-center mt-2 px-3 py-1 rounded-full inline-flex" style={{ backgroundColor: '#FFFFFF' }}>
                <Droplet className="w-4 h-4 mr-1" style={{ color: '#3B82F6' }} />
                <span style={{ color: '#3B82F6' }}>B+</span>
              </div>
            </div>
          </div>
          <button 
            className="w-full py-3 rounded-lg transition-all shadow-sm"
            style={{ border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#3B82F6' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3B82F6';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#3B82F6';
            }}
          >
            Edit Profile
          </button>
        </div>
        
        {/* Medical Info - PURPLE */}
        <div className="p-4">
          <h5 className="mb-3" style={{ color: '#374151' }}>Medical Information</h5>
          <div className="space-y-3">
            <button className="w-full p-4 rounded-xl shadow-sm transition-all text-left" style={{ border: '2px solid #C4B5FD', backgroundColor: '#F5F3FF' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#EDE9FE' }}>
                    <Activity className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>Thalassemia Major</p>
                    <p className="text-sm" style={{ color: '#7C3AED' }}>Chronic Condition</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              </div>
            </button>
            
            <button 
              className="w-full p-4 rounded-xl shadow-sm transition-all text-left" 
              style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#F9FAFB' }}>
                    <FileText className="w-5 h-5" style={{ color: '#6B7280' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>Medical Reports</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>12 documents</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              </div>
            </button>
          </div>
        </div>
        
        {/* Account Settings */}
        <div className="p-4">
          <h5 className="mb-3" style={{ color: '#374151' }}>Account Settings</h5>
          <div className="space-y-3">
            {[
              { icon: Bell, label: 'Notifications', desc: 'Push, Email, SMS', color: '#3B82F6', bg: '#EFF6FF' },
              { icon: MapPin, label: 'Location', desc: 'Indiranagar, Bangalore', color: '#10B981', bg: '#F0FDF4' },
              { icon: Shield, label: 'Privacy & Security', desc: 'Manage your data', color: '#8B5CF6', bg: '#F5F3FF' },
              { icon: Heart, label: 'Saved Hospitals', desc: '5 favorites', color: '#EF4444', bg: '#FEF2F2' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  className="w-full p-4 flex items-center justify-between text-left rounded-xl shadow-sm transition-all"
                  style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = item.bg;
                    e.currentTarget.style.borderColor = item.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: item.bg }}>
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p style={{ color: '#1F2937' }}>{item.label}</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Support */}
        <div className="p-4">
          <h5 className="mb-3" style={{ color: '#374151' }}>Support</h5>
          <div className="space-y-2">
            {['Help Center', 'Terms & Conditions', 'Privacy Policy'].map((label, idx) => (
              <button 
                key={idx}
                className="w-full p-4 flex items-center justify-between text-left rounded-lg shadow-sm transition-all" 
                style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
              >
                <span style={{ color: '#1F2937' }}>{label}</span>
                <ChevronRight className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              </button>
            ))}
          </div>
        </div>
        
        {/* Logout - RED */}
        <div className="p-4">
          <button 
            onClick={() => navigateTo('welcome')}
            className="w-full p-4 flex items-center justify-center rounded-xl shadow-sm transition-all" 
            style={{ border: '2px solid #FCA5A5', backgroundColor: '#FEF2F2' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#EF4444';
              e.currentTarget.style.borderColor = '#EF4444';
              const icon = e.currentTarget.querySelector('svg');
              const text = e.currentTarget.querySelector('span');
              if (icon) (icon as HTMLElement).style.color = '#FFFFFF';
              if (text) (text as HTMLElement).style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FEF2F2';
              e.currentTarget.style.borderColor = '#FCA5A5';
              const icon = e.currentTarget.querySelector('svg');
              const text = e.currentTarget.querySelector('span');
              if (icon) (icon as HTMLElement).style.color = '#EF4444';
              if (text) (text as HTMLElement).style.color = '#EF4444';
            }}
          >
            <LogOut className="w-5 h-5 mr-2" style={{ color: '#EF4444' }} />
            <span style={{ color: '#EF4444' }}>Logout</span>
          </button>
        </div>
        
        {/* App Version */}
        <div className="p-4 pb-8 text-center">
          <p className="text-sm" style={{ color: '#9CA3AF' }}>HAEMOLINK Version 1.0.0</p>
          <p className="text-xs mt-1" style={{ color: '#D1D5DB' }}>© 2024 HAEMOLINK. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}