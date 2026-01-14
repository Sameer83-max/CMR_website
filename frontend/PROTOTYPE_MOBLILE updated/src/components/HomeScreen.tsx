import React from 'react';
import { Search, AlertCircle, Droplet, Activity, Clock, FileText, MapPin, Home, List, History, User, Bell } from 'lucide-react';

interface HomeScreenProps {
  navigateTo: (screen: string) => void;
}

export function HomeScreen({ navigateTo }: HomeScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 style={{ color: '#1F2937' }}>Hello, Patient</h3>
            <div className="flex items-center gap-2 mt-1">
              <Droplet className="w-4 h-4" style={{ color: '#EF4444' }} />
              <p style={{ color: '#6B7280' }}>Blood Group: B+</p>
            </div>
          </div>
          <button 
            onClick={() => navigateTo('notifications')} 
            className="relative p-2.5 rounded-full transition-all" 
            style={{ backgroundColor: '#F3F4F6', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
          >
            <div className="w-2 h-2 rounded-full absolute top-1.5 right-1.5" style={{ backgroundColor: '#EF4444' }} />
            <Bell className="w-5 h-5" style={{ color: '#6B7280' }} />
          </button>
        </div>
        
        {/* Search Bar */}
        <button 
          onClick={() => navigateTo('search')}
          className="w-full p-3.5 flex items-center rounded-lg transition-all shadow-sm"
          style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3B82F6'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
        >
          <Search className="w-5 h-5 mr-3" style={{ color: '#9CA3AF' }} />
          <span style={{ color: '#9CA3AF' }}>Search blood type, component, location</span>
        </button>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Emergency Button - RED */}
        <button 
          onClick={() => navigateTo('request')}
          className="w-full p-4 flex items-center justify-center rounded-xl shadow-lg transition-all"
          style={{ backgroundColor: '#EF4444', color: '#FFFFFF', border: 'none' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#DC2626';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#EF4444';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <AlertCircle className="w-6 h-6 mr-3" />
          <span>Need Blood NOW</span>
        </button>
        
        {/* Quick Filters - MULTI COLOR */}
        <div>
          <h4 className="mb-3" style={{ color: '#374151' }}>Quick Filters</h4>
          <div className="flex gap-2 overflow-x-auto">
            {[
              { name: 'RBC', color: '#EF4444', bg: '#FEF2F2' },
              { name: 'Platelets', color: '#F97316', bg: '#FFF7ED' },
              { name: 'Plasma', color: '#3B82F6', bg: '#EFF6FF' },
              { name: 'Fresh Units', color: '#10B981', bg: '#F0FDF4' },
            ].map((filter) => (
              <button
                key={filter.name}
                className="px-4 py-2 whitespace-nowrap rounded-full shadow-sm transition-all"
                style={{ border: `2px solid ${filter.color}`, backgroundColor: filter.bg, color: filter.color }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = filter.color;
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = filter.bg;
                  e.currentTarget.style.color = filter.color;
                }}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Nearby Availability - GREEN ACCENTS */}
        <div className="p-4 rounded-xl shadow-sm" style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center justify-between mb-4">
            <h4 style={{ color: '#1F2937' }}>Hospitals Near You</h4>
            <button 
              style={{ color: '#10B981', background: 'none', border: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              View All
            </button>
          </div>
          <div className="space-y-2">
            {[
              { name: 'City General Hospital', distance: '2.3 km', units: '12 units', available: true },
              { name: 'Apollo Blood Bank', distance: '4.1 km', units: '8 units', available: true },
              { name: 'RedCross Center', distance: '5.8 km', units: '15 units', available: true },
            ].map((hospital, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer" 
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
                <div>
                  <p style={{ color: '#1F2937' }}>{hospital.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" style={{ color: '#6B7280' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>{hospital.distance}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p style={{ color: '#10B981' }}>{hospital.units}</p>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }} />
                    <span className="text-xs" style={{ color: '#6B7280' }}>Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Access Cards - COLOR CODED */}
        <div>
          <h4 className="mb-3" style={{ color: '#374151' }}>Quick Access</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Droplet, label: 'Request Blood', screen: 'request', color: '#EF4444', bg: '#FEF2F2' },
              { icon: MapPin, label: 'Search Donor', screen: 'donor-search', color: '#10B981', bg: '#F0FDF4' },
              { icon: Clock, label: 'Track Order', screen: 'tracking', color: '#F97316', bg: '#FFF7ED' },
              { icon: FileText, label: 'Upload Reports', screen: 'medical-report', color: '#8B5CF6', bg: '#F5F3FF' },
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
      
      {/* Bottom Navigation - BLUE PRIMARY */}
      <div className="flex shadow-lg" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        {[
          { icon: Home, label: 'Home', screen: 'home', active: true },
          { icon: List, label: 'Requests', screen: 'tracking' },
          { icon: History, label: 'History', screen: 'history' },
          { icon: User, label: 'Profile', screen: 'profile' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => navigateTo(item.screen)}
              className={`flex-1 py-3 flex flex-col items-center transition-all ${
                item.active ? 'border-t-2' : ''
              }`}
              style={{
                ...(item.active ? { borderTopColor: '#3B82F6' } : {}),
                background: 'none',
                border: item.active ? '2px solid transparent' : 'none',
                borderTop: item.active ? `2px solid #3B82F6` : 'none',
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
              <Icon className="w-6 h-6" style={{ color: item.active ? '#3B82F6' : '#9CA3AF' }} />
              <span className="text-xs mt-1" style={{ color: item.active ? '#3B82F6' : '#6B7280' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}