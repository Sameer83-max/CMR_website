import React from 'react';
import { ChevronLeft, AlertCircle, Phone, MapPin, Navigation, Clock, MessageSquare, Shield } from 'lucide-react';

interface RiderEmergencyScreenProps {
  navigateTo: (screen: string) => void;
}

export function RiderEmergencyScreen({ navigateTo }: RiderEmergencyScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FEF2F2' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#EF4444', boxShadow: '0 4px 16px rgba(239,68,68,0.3)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('rider-delivery')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#FFFFFF' }} />
            </button>
            <h3 style={{ color: '#FFFFFF' }}>Emergency Mode</h3>
          </div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFFFFF', animation: 'pulse 1.5s infinite' }}></div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Emergency Banner */}
        <div className="p-6 text-center" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)', boxShadow: '0 8px 24px rgba(239,68,68,0.4)' }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.2)', animation: 'pulse 2s infinite' }}>
            <AlertCircle className="w-10 h-10" style={{ color: '#FFFFFF' }} />
          </div>
          <h3 className="mb-2" style={{ color: '#FFFFFF' }}>EMERGENCY MODE ACTIVE</h3>
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>Priority routing enabled • All systems green</p>
        </div>
        
        {/* Quick Emergency Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            className="p-5 flex flex-col items-center"
            style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #EF4444' }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#EF4444' }}>
              <Phone className="w-6 h-6" style={{ color: '#FFFFFF' }} />
            </div>
            <span style={{ color: '#EF4444' }}>Call Hospital</span>
            <span className="text-xs mt-1" style={{ color: '#6B7280' }}>Direct line</span>
          </button>
          
          <button
            className="p-5 flex flex-col items-center"
            style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #EF4444' }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#EF4444' }}>
              <Shield className="w-6 h-6" style={{ color: '#FFFFFF' }} />
            </div>
            <span style={{ color: '#EF4444' }}>Alert Control</span>
            <span className="text-xs mt-1" style={{ color: '#6B7280' }}>HQ Support</span>
          </button>
        </div>
        
        {/* Optimized Emergency Route */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <h5 style={{ color: '#374151' }}>Emergency Route</h5>
            <span className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: '#EF4444', color: '#FFFFFF', fontSize: '12px' }}>
              PRIORITY
            </span>
          </div>
          
          {/* Map Preview */}
          <div className="h-40 mb-3 relative flex items-center justify-center" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: '#EF4444' }} />
              <p className="text-sm" style={{ color: '#6B7280' }}>Emergency Navigation Active</p>
            </div>
            
            {/* Route Indicators */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F97316', boxShadow: '0 2px 8px rgba(249,115,22,0.3)' }}>
                <Navigation className="w-4 h-4" style={{ color: '#FFFFFF' }} />
              </div>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EF4444', boxShadow: '0 2px 8px rgba(239,68,68,0.3)' }}>
                <MapPin className="w-4 h-4" style={{ color: '#FFFFFF' }} />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FEF2F2' }}>
              <span className="text-sm" style={{ color: '#6B7280' }}>Distance:</span>
              <span style={{ color: '#EF4444' }}>2.1 km (Shortest)</span>
            </div>
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FEF2F2' }}>
              <span className="text-sm" style={{ color: '#6B7280' }}>ETA:</span>
              <span style={{ color: '#EF4444' }}>6 mins</span>
            </div>
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FEF2F2' }}>
              <span className="text-sm" style={{ color: '#6B7280' }}>Traffic:</span>
              <span style={{ color: '#10B981' }}>Clear Route</span>
            </div>
          </div>
        </div>
        
        {/* Emergency Contacts */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Emergency Contacts</h5>
          <div className="space-y-3">
            {[
              { name: 'Apollo Hospital', role: 'Destination', phone: '+91 080-1234-5678', color: '#EF4444' },
              { name: 'Control Center', role: 'Support', phone: '1800-BLOOD-BANK', color: '#F97316' },
              { name: 'Emergency Services', role: '24/7 Helpline', phone: '112', color: '#DC2626' },
            ].map((contact, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${contact.color}15` }}>
                    <Phone className="w-5 h-5" style={{ color: contact.color }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>{contact.name}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{contact.role}</p>
                  </div>
                </div>
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: contact.color, boxShadow: `0 2px 8px ${contact.color}50` }}
                >
                  <Phone className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Safety Alerts */}
        <div className="p-4 flex items-start gap-3" style={{ borderRadius: '14px', backgroundColor: '#FFF7ED', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
            <AlertCircle className="w-5 h-5" style={{ color: '#F97316' }} />
          </div>
          <div>
            <p style={{ color: '#1F2937' }}>Safety Reminder</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>Drive safely. Emergency mode does not override traffic rules.</p>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
        <button
          onClick={() => navigateTo('rider-delivery')}
          className="w-full py-4"
          style={{ borderRadius: '16px', backgroundColor: '#10B981', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(16,185,129,0.3)' }}
        >
          Continue Emergency Delivery
        </button>
        <button
          onClick={() => navigateTo('rider-delivery')}
          className="w-full py-4"
          style={{ borderRadius: '16px', border: '2px solid #EF4444', backgroundColor: '#FFFFFF', color: '#EF4444' }}
        >
          Exit Emergency Mode
        </button>
      </div>
    </div>
  );
}