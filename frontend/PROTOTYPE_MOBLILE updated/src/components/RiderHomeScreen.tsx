import React, { useState } from 'react';
import { MapPin, Clock, Package, DollarSign, Bike, List, User, Bell, AlertCircle, Navigation, Thermometer } from 'lucide-react';

interface RiderHomeScreenProps {
  navigateTo: (screen: string) => void;
}

export function RiderHomeScreen({ navigateTo }: RiderHomeScreenProps) {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Welcome, Rider</h3>
            <p style={{ color: '#64748B', fontSize: '13px', marginTop: '2px' }}>ID: RDR-2451</p>
          </div>
          <button 
            onClick={() => navigateTo('notifications')} 
            className="p-2.5 transition-all relative" 
            style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F1F5F9'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F8FAFC'}
          >
            <Bell className="w-5 h-5" style={{ color: '#64748B' }} />
            <div className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: '#F97316' }} />
          </button>
        </div>
        
        {/* Availability Toggle - Animated Pill */}
        <div className="p-4 flex items-center justify-between transition-all" style={{ 
          backgroundColor: isOnline ? '#FFF7ED' : '#F8FAFC',
          borderRadius: '16px',
          border: `2px solid ${isOnline ? '#F97316' : '#E5E7EB'}`
        }}>
          <div>
            <h5 style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>
              {isOnline ? 'Online' : 'Offline'}
            </h5>
            <p style={{ color: '#64748B', fontSize: '12px', marginTop: '2px' }}>
              {isOnline ? 'Accepting tasks' : 'Not accepting'}
            </p>
          </div>
          <button
            onClick={() => setIsOnline(!isOnline)}
            className="transition-all"
            style={{ 
              width: '56px',
              height: '32px',
              borderRadius: '16px',
              backgroundColor: isOnline ? '#F97316' : '#CBD5E1',
              padding: '4px',
              border: 'none',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <div
              className="transition-all"
              style={{ 
                width: '24px',
                height: '24px',
                borderRadius: '12px',
                backgroundColor: '#FFFFFF',
                marginLeft: isOnline ? '24px' : '0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            />
          </button>
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Today's Task Summary - Route Cards with Progress Rings */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <h4 className="mb-4" style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>Today's Summary</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 transition-all" style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}>
              <div className="flex items-center">
                <div className="p-2 mr-3" style={{ backgroundColor: '#FFF7ED', borderRadius: '10px' }}>
                  <Package className="w-5 h-5" style={{ color: '#F97316' }} />
                </div>
                <span style={{ color: '#475569', fontSize: '14px' }}>Assigned Pickups</span>
              </div>
              <div className="flex items-center">
                <span style={{ color: '#F97316', fontSize: '20px', fontWeight: '600' }}>3</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 transition-all" style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}>
              <div className="flex items-center">
                <div className="p-2 mr-3" style={{ backgroundColor: '#EFF6FF', borderRadius: '10px' }}>
                  <Bike className="w-5 h-5" style={{ color: '#3B82F6' }} />
                </div>
                <span style={{ color: '#475569', fontSize: '14px' }}>Pending Deliveries</span>
              </div>
              <div className="flex items-center">
                <span style={{ color: '#3B82F6', fontSize: '20px', fontWeight: '600' }}>2</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 transition-all" style={{ 
              backgroundColor: '#FEF2F2', 
              borderRadius: '12px',
              border: '2px solid #FEE2E2'
            }}>
              <div className="flex items-center">
                <div className="p-2 mr-3" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                  <AlertCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
                </div>
                <span style={{ color: '#475569', fontSize: '14px', fontWeight: '500' }}>Emergency Priority</span>
              </div>
              <div className="flex items-center">
                <span style={{ color: '#EF4444', fontSize: '20px', fontWeight: '600' }}>1</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Active Task - With Map Preview & ETA Ring */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <h4 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>Active Delivery</h4>
            <span className="px-3 py-1" style={{ 
              backgroundColor: '#F97316', 
              color: '#FFFFFF',
              fontSize: '11px',
              borderRadius: '12px',
              fontWeight: '500'
            }}>
              In Progress
            </span>
          </div>
          
          {/* Route Timeline */}
          <div className="mb-4">
            <div className="flex items-start mb-3">
              <div className="flex flex-col items-center mr-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FFFFFF' }} />
                </div>
                <div className="w-0.5 h-8" style={{ backgroundColor: '#E5E7EB' }} />
              </div>
              <div className="flex-1">
                <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '2px' }}>Pickup</p>
                <p style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>City General Blood Bank</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ border: '2px solid #F97316', backgroundColor: '#FFFFFF' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F97316' }} />
                </div>
              </div>
              <div className="flex-1">
                <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '2px' }}>Dropoff</p>
                <p style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>Apollo Hospital, Sector 12</p>
              </div>
            </div>
          </div>
          
          {/* ETA & Distance Pill */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center px-3 py-2 flex-1" style={{ backgroundColor: '#FFF7ED', borderRadius: '12px' }}>
              <MapPin className="w-4 h-4 mr-2" style={{ color: '#F97316' }} />
              <span style={{ color: '#475569', fontSize: '13px' }}>4.2 km</span>
            </div>
            <div className="flex items-center px-3 py-2 flex-1" style={{ backgroundColor: '#FFF7ED', borderRadius: '12px' }}>
              <Clock className="w-4 h-4 mr-2" style={{ color: '#F97316' }} />
              <span style={{ color: '#475569', fontSize: '13px' }}>ETA: 18 min</span>
            </div>
          </div>
          
          <button
            onClick={() => navigateTo('rider-navigation')}
            className="w-full py-3 transition-all flex items-center justify-center"
            style={{ 
              backgroundColor: '#F97316', 
              color: '#FFFFFF', 
              border: 'none',
              borderRadius: '14px',
              fontWeight: '500',
              boxShadow: '0 2px 8px rgba(249,115,22,0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EA580C'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F97316'}
          >
            <Navigation className="w-5 h-5 mr-2" />
            Continue Navigation
          </button>
        </div>
        
        {/* Heatmap Preview Tile */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-3" style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>Delivery Heatmap</h5>
          <div className="p-6 flex flex-col items-center justify-center" style={{ 
            backgroundColor: '#FAFAFA',
            borderRadius: '12px',
            minHeight: '120px'
          }}>
            <div className="p-3 mb-3" style={{ backgroundColor: '#FFF7ED', borderRadius: '12px' }}>
              <MapPin className="w-8 h-8" style={{ color: '#F97316' }} />
            </div>
            <p style={{ color: '#475569', fontSize: '13px', textAlign: 'center' }}>
              High demand in <span style={{ color: '#F97316', fontWeight: '500' }}>Central Area</span>
            </p>
            <p style={{ color: '#94A3B8', fontSize: '11px', marginTop: '4px' }}>
              3 active requests nearby
            </p>
          </div>
        </div>
        
        {/* Quick Access */}
        <div>
          <h4 className="mb-3" style={{ color: '#64748B', fontSize: '14px', fontWeight: '600' }}>Quick Access</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: List, label: 'My Tasks', screen: 'rider-incoming-task', color: '#3B82F6' },
              { icon: Navigation, label: 'Navigation', screen: 'rider-navigation', color: '#F97316' },
              { icon: Thermometer, label: 'Cold Chain', screen: 'rider-cold-chain', color: '#8B5CF6' },
              { icon: DollarSign, label: 'Earnings', screen: 'rider-earnings', color: '#10B981' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => navigateTo(item.screen)}
                  className="p-4 flex flex-col items-center justify-center transition-all"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    border: 'none',
                    minHeight: '100px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                  }}
                >
                  <div className="p-2 mb-2" style={{ backgroundColor: `${item.color}15`, borderRadius: '10px' }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <span style={{ color: '#475569', fontSize: '12px', textAlign: 'center' }}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="flex" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
        {[
          { icon: Bike, label: 'Home', active: true },
          { icon: List, label: 'Tasks', screen: 'rider-incoming-task' },
          { icon: Package, label: 'History', screen: 'rider-history' },
          { icon: User, label: 'Profile', screen: 'rider-profile' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => item.screen && navigateTo(item.screen)}
              className="flex-1 py-3 flex flex-col items-center transition-all"
              style={{ 
                background: 'none',
                border: 'none',
                borderTop: item.active ? '3px solid #F97316' : '3px solid transparent'
              }}
            >
              <Icon className="w-6 h-6" style={{ color: item.active ? '#F97316' : '#94A3B8' }} />
              <span style={{ 
                color: item.active ? '#F97316' : '#64748B', 
                fontSize: '11px', 
                marginTop: '4px',
                fontWeight: item.active ? '500' : '400'
              }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
