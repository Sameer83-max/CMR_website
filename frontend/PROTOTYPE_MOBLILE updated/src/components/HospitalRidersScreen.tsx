import React, { useState } from 'react';
import { ChevronLeft, MapPin, Bike, Clock, Star, Navigation, Phone, Package, CheckCircle } from 'lucide-react';

interface HospitalRidersScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalRidersScreen({ navigateTo }: HospitalRidersScreenProps) {
  const [selectedView, setSelectedView] = useState<'assign' | 'tracking'>('assign');

  // Rider Assignment View
  if (selectedView === 'assign') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigateTo('hospital-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
              </button>
              <h3 style={{ color: '#3B82F6' }}>Rider Assignment</h3>
            </div>
            <button
              onClick={() => setSelectedView('tracking')}
              className="px-4 py-2"
              style={{ borderRadius: '999px', backgroundColor: '#EFF6FF', color: '#3B82F6', border: 'none' }}
            >
              View Tracking
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Delivery Details */}
          <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #3B82F6', background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)', boxShadow: '0 4px 16px rgba(59,130,246,0.15)' }}>
            <h5 className="mb-4" style={{ color: '#3B82F6' }}>Delivery Details</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF', border: '1px solid #3B82F6' }}>
                <span style={{ color: '#6B7280' }}>Request ID:</span>
                <span style={{ color: '#3B82F6' }}>REQ-4521</span>
              </div>
              <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
                <span style={{ color: '#6B7280' }}>Blood Unit:</span>
                <span style={{ color: '#1F2937' }}>PLT-2024-4521</span>
              </div>
              <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
                <span style={{ color: '#6B7280' }}>Destination:</span>
                <span style={{ color: '#1F2937' }}>Apollo Hospital</span>
              </div>
              <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FEF2F2', border: '1px solid #EF4444' }}>
                <span style={{ color: '#6B7280' }}>Priority:</span>
                <span style={{ color: '#EF4444' }}>Emergency</span>
              </div>
            </div>
          </div>
          
          {/* Available Riders */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Available Riders</h5>
            <div className="space-y-3">
              {[
                { id: 'RDR-2451', name: 'Rajesh Kumar', distance: '1.2 km', eta: '5 min', rating: 4.9, status: 'Online' },
                { id: 'RDR-2450', name: 'Priya Sharma', distance: '2.1 km', eta: '8 min', rating: 4.8, status: 'Online' },
                { id: 'RDR-2449', name: 'Amit Singh', distance: '3.5 km', eta: '12 min', rating: 4.7, status: 'On Delivery' },
              ].map((rider, idx) => (
                <div
                  key={idx}
                  className="p-4"
                  style={{ borderRadius: '14px', border: '2px solid #E5E7EB', backgroundColor: '#FAFAFA' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: rider.status === 'Online' ? '#10B981' : '#F97316' }}>
                        <Bike className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                      </div>
                      <div>
                        <p style={{ color: '#1F2937' }}>{rider.name}</p>
                        <p className="text-xs" style={{ color: '#6B7280' }}>{rider.id}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs" style={{ borderRadius: '999px', backgroundColor: rider.status === 'Online' ? '#F0FDF4' : '#FFF7ED', color: rider.status === 'Online' ? '#10B981' : '#F97316' }}>
                      {rider.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="p-2 text-center" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                      <p className="text-xs" style={{ color: '#6B7280' }}>Distance</p>
                      <p className="text-sm" style={{ color: '#1F2937' }}>{rider.distance}</p>
                    </div>
                    <div className="p-2 text-center" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                      <p className="text-xs" style={{ color: '#6B7280' }}>ETA</p>
                      <p className="text-sm" style={{ color: '#1F2937' }}>{rider.eta}</p>
                    </div>
                    <div className="p-2 text-center" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-3 h-3" style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                        <p className="text-sm" style={{ color: '#1F2937' }}>{rider.rating}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedView('tracking')}
                    disabled={rider.status !== 'Online'}
                    className="w-full py-3"
                    style={{ 
                      borderRadius: '10px', 
                      background: rider.status === 'Online' ? 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' : '#E5E7EB',
                      color: '#FFFFFF', 
                      border: 'none',
                      boxShadow: rider.status === 'Online' ? '0 4px 12px rgba(249,115,22,0.3)' : 'none',
                      cursor: rider.status === 'Online' ? 'pointer' : 'not-allowed',
                      opacity: rider.status === 'Online' ? 1 : 0.6
                    }}
                  >
                    {rider.status === 'Online' ? 'Assign Rider' : 'Unavailable'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Live Delivery Tracking View
  if (selectedView === 'tracking') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center gap-4">
            <button onClick={() => setSelectedView('assign')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Live Delivery Tracking</h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          {/* Map Placeholder */}
          <div className="h-64 relative" style={{ backgroundColor: '#F3F4F6' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-16 h-16" style={{ color: '#9CA3AF' }} />
            </div>
            
            {/* Route Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 100 150 Q 180 120 280 150"
                stroke="#F97316"
                strokeWidth="4"
                fill="none"
                strokeDasharray="5,5"
                opacity="0.8"
              />
            </svg>
            
            {/* Rider Location */}
            <div className="absolute top-1/3 left-1/3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F97316', border: '4px solid #FFFFFF', boxShadow: '0 4px 12px rgba(249,115,22,0.4)' }}>
                  <Navigation className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>
                <div className="absolute -inset-1 rounded-full animate-ping" style={{ backgroundColor: '#F97316', opacity: 0.3 }} />
              </div>
            </div>
            
            {/* Live Tracking Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 flex items-center gap-2" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }} />
              <span className="text-xs" style={{ color: '#6B7280' }}>Live Tracking</span>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {/* ETA Dashboard */}
            <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #F97316', background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)', boxShadow: '0 4px 16px rgba(249,115,22,0.15)' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <Clock className="w-6 h-6" style={{ color: '#F97316' }} />
                </div>
                <div>
                  <h5 style={{ color: '#F97316' }}>ETA: 4 minutes</h5>
                  <p className="text-sm" style={{ color: '#EA580C' }}>1.2 km remaining</p>
                </div>
              </div>
            </div>
            
            {/* Rider Info */}
            <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h5 className="mb-4" style={{ color: '#374151' }}>Assigned Rider</h5>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                  <Bike className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937' }}>Rajesh Kumar</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>RDR-2451 • KA-01-AB-1234</p>
                </div>
              </div>
              <button className="w-full py-3 flex items-center justify-center gap-2" style={{ borderRadius: '12px', border: '2px solid #10B981', backgroundColor: '#FFFFFF', color: '#10B981' }}>
                <Phone className="w-5 h-5" />
                Contact Rider
              </button>
            </div>
            
            {/* Delivery Status Timeline */}
            <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h5 className="mb-4" style={{ color: '#374151' }}>Delivery Status</h5>
              <div className="space-y-4">
                {[
                  { label: 'Rider Assigned', time: '10:55 AM', completed: true },
                  { label: 'Pickup Complete', time: '11:02 AM', completed: true },
                  { label: 'In Transit', time: '11:05 AM', completed: true, active: true },
                  { label: 'Delivery Complete', time: '--:--', completed: false },
                ].map((status, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ 
                      backgroundColor: status.completed ? (status.active ? '#F97316' : '#10B981') : '#E5E7EB'
                    }}>
                      {status.completed ? (
                        <CheckCircle className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                      ) : (
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9CA3AF' }} />
                      )}
                    </div>
                    <div className="flex-1">
                      <p style={{ color: status.completed ? '#1F2937' : '#9CA3AF' }}>{status.label}</p>
                      <p className="text-xs" style={{ color: '#6B7280' }}>{status.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Cold Chain Status */}
            <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #3B82F6', backgroundColor: '#EFF6FF', boxShadow: '0 4px 16px rgba(59,130,246,0.15)' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                  <Package className="w-6 h-6" style={{ color: '#3B82F6' }} />
                </div>
                <div>
                  <h5 style={{ color: '#3B82F6' }}>Cold Chain Status</h5>
                  <p className="text-sm" style={{ color: '#2563EB' }}>Temperature: 4°C - Normal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}