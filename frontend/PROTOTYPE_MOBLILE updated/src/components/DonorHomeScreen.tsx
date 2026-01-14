import React, { useState } from 'react';
import { Heart, Calendar, Activity, List, Tent, User, AlertCircle, MapPin, Clock, Bell, Droplet } from 'lucide-react';

interface DonorHomeScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorHomeScreen({ navigateTo }: DonorHomeScreenProps) {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 style={{ color: '#1F2937' }}>Hello, Donor</h3>
            <div className="flex items-center gap-2 mt-1">
              <Droplet className="w-4 h-4" style={{ color: '#10B981' }} />
              <p style={{ color: '#6B7280' }}>Blood Group: B+</p>
            </div>
          </div>
          <button 
            onClick={() => navigateTo('notifications')} 
            className="p-2.5 rounded-full transition-all" 
            style={{ backgroundColor: '#F3F4F6', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
          >
            <Bell className="w-5 h-5" style={{ color: '#6B7280' }} />
          </button>
        </div>
        
        {/* Availability Toggle */}
        <div className="p-4 flex items-center justify-between rounded-xl shadow-sm" style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
          <div>
            <h5 style={{ color: '#1F2937' }}>Donation Status</h5>
            <p className="text-sm" style={{ color: isAvailable ? '#10B981' : '#6B7280' }}>
              {isAvailable ? 'Available to donate' : 'Not available'}
            </p>
          </div>
          <button
            onClick={() => setIsAvailable(!isAvailable)}
            className="w-14 h-7 rounded-full p-1 transition-all shadow-inner"
            style={{ backgroundColor: isAvailable ? '#10B981' : '#E5E7EB' }}
          >
            <div
              className="w-5 h-5 rounded-full bg-white shadow-md transition-all"
              style={{ marginLeft: isAvailable ? 'auto' : '0' }}
            />
          </button>
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Eligibility Status */}
        <div className="p-4 rounded-xl shadow-md" style={{ border: '2px solid #10B981', backgroundColor: '#F0FDF4' }}>
          <div className="flex items-center justify-between mb-3">
            <h4 style={{ color: '#10B981' }}>Eligibility Status</h4>
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }} />
          </div>
          <p className="mb-1 text-sm" style={{ color: '#059669' }}>Next eligible donation:</p>
          <p className="mb-4" style={{ color: '#1F2937' }}>18 Dec 2024 (6 days from now)</p>
          <button
            onClick={() => navigateTo('donor-eligibility')}
            className="w-full py-3 rounded-lg transition-all shadow-sm"
            style={{ border: '2px solid #10B981', backgroundColor: '#FFFFFF', color: '#10B981' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#10B981';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#10B981';
            }}
          >
            View Details
          </button>
        </div>
        
        {/* Live Requests */}
        <div className="p-4 rounded-xl shadow-sm" style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center justify-between mb-4">
            <h4 style={{ color: '#1F2937' }}>Live Requests Near You</h4>
            <span className="px-3 py-1 text-sm rounded-full animate-pulse" style={{ backgroundColor: '#EF4444', color: '#FFFFFF' }}>
              3 New
            </span>
          </div>
          
          <div className="space-y-3">
            {[
              { patient: 'Patient #4521', bloodType: 'B+', distance: '2.3 km', urgency: 'Emergency' },
              { patient: 'Patient #4589', bloodType: 'B+', distance: '4.1 km', urgency: 'Urgent' },
              { patient: 'Patient #4612', bloodType: 'B+', distance: '5.8 km', urgency: 'Routine' },
            ].map((request, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg transition-all cursor-pointer"
                style={{ border: '1px solid #F3F4F6', backgroundColor: '#F9FAFB' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F0FDF4';
                  e.currentTarget.style.borderColor = '#10B981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F9FAFB';
                  e.currentTarget.style.borderColor = '#F3F4F6';
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p style={{ color: '#1F2937' }}>{request.patient}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Droplet className="w-3 h-3" style={{ color: '#EF4444' }} />
                        <p className="text-sm" style={{ color: '#6B7280' }}>{request.bloodType}</p>
                      </div>
                      <span className="text-sm" style={{ color: '#9CA3AF' }}>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" style={{ color: '#6B7280' }} />
                        <p className="text-sm" style={{ color: '#6B7280' }}>{request.distance}</p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="px-2.5 py-1 text-xs rounded-full"
                    style={{
                      backgroundColor: request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#E5E7EB',
                      color: request.urgency === 'Emergency' || request.urgency === 'Urgent' ? '#FFFFFF' : '#6B7280'
                    }}
                  >
                    {request.urgency}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => navigateTo('donor-requests')}
            className="w-full py-3 mt-4 rounded-lg transition-all shadow-md"
            style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
          >
            View All Requests
          </button>
        </div>
        
        {/* Upcoming Appointment */}
        <div className="p-4 rounded-xl shadow-md" style={{ border: '2px solid #F97316', backgroundColor: '#FFF7ED' }}>
          <div className="flex items-center mb-3">
            <div className="p-2 rounded-full mr-2" style={{ backgroundColor: '#FED7AA' }}>
              <Calendar className="w-5 h-5" style={{ color: '#F97316' }} />
            </div>
            <h4 style={{ color: '#F97316' }}>Upcoming Donation</h4>
          </div>
          <p className="mb-1" style={{ color: '#1F2937' }}>City General Blood Bank</p>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4" style={{ color: '#EA580C' }} />
            <p className="text-sm" style={{ color: '#EA580C' }}>15 Dec 2024 • 10:00 AM</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigateTo('donor-navigation')}
              className="flex-1 py-2.5 rounded-lg transition-all shadow-sm"
              style={{ border: '2px solid #F97316', backgroundColor: '#FFFFFF', color: '#F97316' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F97316';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#F97316';
              }}
            >
              Navigate
            </button>
            <button 
              className="flex-1 py-2.5 rounded-lg transition-all shadow-md" 
              style={{ backgroundColor: '#F97316', color: '#FFFFFF', border: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EA580C'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F97316'}
            >
              Reschedule
            </button>
          </div>
        </div>
        
        {/* Quick Access Cards */}
        <div>
          <h4 className="mb-3" style={{ color: '#374151' }}>Quick Access</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: List, label: 'My Requests', screen: 'donor-requests', color: '#3B82F6', bg: '#EFF6FF' },
              { icon: Calendar, label: 'Book Donation', screen: 'donor-scheduling', color: '#F97316', bg: '#FFF7ED' },
              { icon: Heart, label: 'My Cohort', screen: 'donor-cohort', color: '#10B981', bg: '#F0FDF4' },
              { icon: Activity, label: 'My History', screen: 'donor-history', color: '#8B5CF6', bg: '#F5F3FF' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => navigateTo(item.screen)}
                  className="p-4 flex flex-col items-center justify-center aspect-square rounded-xl shadow-sm transition-all"
                  style={{ border: `2px solid ${item.bg}`, backgroundColor: item.bg }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = item.bg;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <Icon className="w-8 h-8 mb-2" style={{ color: item.color }} />
                  <span className="text-center text-sm" style={{ color: item.color }}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="flex shadow-lg" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        {[
          { icon: Heart, label: 'Home', active: true },
          { icon: List, label: 'Requests', screen: 'donor-requests' },
          { icon: Tent, label: 'Camps', screen: 'donor-camps' },
          { icon: User, label: 'Profile', screen: 'donor-profile' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => item.screen && navigateTo(item.screen)}
              className={`flex-1 py-3 flex flex-col items-center transition-all ${
                item.active ? 'border-t-2' : ''
              }`}
              style={{
                ...(item.active ? { borderTopColor: '#10B981' } : {}),
                background: 'none',
                border: item.active ? '2px solid transparent' : 'none',
                borderTop: item.active ? `2px solid #10B981` : 'none',
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = '#F9FAFB';
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Icon className="w-6 h-6" style={{ color: item.active ? '#10B981' : '#9CA3AF' }} />
              <span className="text-xs mt-1" style={{ color: item.active ? '#10B981' : '#6B7280' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}