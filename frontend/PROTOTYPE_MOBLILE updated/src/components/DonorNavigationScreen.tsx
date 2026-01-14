import React from 'react';
import { ChevronLeft, MapPin, Navigation, Download, Phone, Clock, Zap } from 'lucide-react';

interface DonorNavigationScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorNavigationScreen({ navigateTo }: DonorNavigationScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Map Area */}
      <div className="flex-1" style={{ backgroundColor: '#F3F4F6', position: 'relative' }}>
        {/* Map Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="w-16 h-16" style={{ color: '#9CA3AF' }} />
        </div>
        
        {/* Route Info Overlay */}
        <div className="absolute top-6 left-4 right-4 p-4" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h4 style={{ color: '#1F2937' }}>City General Hospital</h4>
              <p className="text-sm" style={{ color: '#6B7280' }}>2.3 km • 15 mins away</p>
            </div>
            <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
          </div>
        </div>
        
        {/* Current Location Pin */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
          <div className="w-14 h-14 rounded-full flex items-center justify-center relative" style={{ backgroundColor: '#10B981', border: '4px solid #FFFFFF', boxShadow: '0 4px 12px rgba(16,185,129,0.4)' }}>
            <Navigation className="w-7 h-7" style={{ color: '#FFFFFF' }} />
            <div className="absolute -inset-1 rounded-full animate-ping" style={{ backgroundColor: '#10B981', opacity: 0.3 }} />
          </div>
        </div>
        
        {/* Destination Pin */}
        <div className="absolute bottom-1/3 right-1/3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3B82F6', border: '4px solid #FFFFFF', boxShadow: '0 4px 12px rgba(59,130,246,0.4)' }}>
            <MapPin className="w-6 h-6" style={{ color: '#FFFFFF' }} />
          </div>
        </div>
        
        {/* Route Line Representation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M 180 300 Q 220 350 240 400"
            stroke="#10B981"
            strokeWidth="4"
            fill="none"
            strokeDasharray="10,5"
            opacity="0.8"
          />
        </svg>
      </div>
      
      {/* Bottom Info Panel */}
      <div className="p-6" style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #E5E7EB', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
        {/* Route Info */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3 p-3" style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              <span style={{ color: '#FFFFFF' }}>15 mins (via Main Road)</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>2.3 km</span>
          </div>
          <div className="flex items-center gap-2 p-3" style={{ borderRadius: '10px', backgroundColor: '#F0FDF4' }}>
            <Zap className="w-4 h-4" style={{ color: '#10B981' }} />
            <p className="text-sm" style={{ color: '#059669' }}>
              Light traffic • Fastest route
            </p>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="mb-4 p-4" style={{ borderRadius: '14px', border: '2px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
          <h5 className="mb-3" style={{ color: '#374151' }}>Hospital Contact</h5>
          <button className="flex items-center gap-2 p-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3B82F610' }}>
              <Phone className="w-4 h-4" style={{ color: '#3B82F6' }} />
            </div>
            <span style={{ color: '#1F2937' }}>+91 80 2345 6789</span>
          </button>
        </div>
        
        {/* Offline Map Option */}
        <div className="mb-4 p-4" style={{ borderRadius: '14px', border: '2px solid #3B82F6', backgroundColor: '#EFF6FF' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.15)' }}>
                <Download className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
              <div>
                <h5 style={{ color: '#1F2937' }}>Offline Maps</h5>
                <p className="text-sm" style={{ color: '#6B7280' }}>Download for offline navigation</p>
              </div>
            </div>
            <button className="p-2 rounded-full" style={{ backgroundColor: '#FFFFFF' }}>
              <Download className="w-5 h-5" style={{ color: '#3B82F6' }} />
            </button>
          </div>
        </div>
        
        {/* Start Navigation Button */}
        <button
          className="w-full py-4 flex items-center justify-center gap-2"
          style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(16,185,129,0.3)' }}
        >
          <Navigation className="w-5 h-5" />
          Start Navigation
        </button>
      </div>
    </div>
  );
}