import React from 'react';
import { ChevronLeft, MapPin, Navigation, AlertCircle, Clock, TrendingUp } from 'lucide-react';

interface RiderNavigationScreenProps {
  navigateTo: (screen: string) => void;
}

export function RiderNavigationScreen({ navigateTo }: RiderNavigationScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FFF7ED' }}>
      {/* Map Area */}
      <div className="flex-1 relative" style={{ backgroundColor: '#FFF7ED', border: '2px solid #F97316' }}>
        {/* Map Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="w-16 h-16" style={{ color: '#F97316' }} />
        </div>
        
        {/* Current Location Pin */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F97316', border: '4px solid #FFFFFF' }}>
            <Navigation className="w-6 h-6" style={{ color: '#FFFFFF' }} />
          </div>
        </div>
        
        {/* Destination Pin */}
        <div className="absolute bottom-1/3 right-1/3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EF4444', border: '4px solid #FFFFFF' }}>
            <MapPin className="w-5 h-5" style={{ color: '#FFFFFF' }} />
          </div>
        </div>
        
        {/* Route Line Representation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M 180 300 Q 220 350 240 400"
            stroke="#F97316"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
          />
        </svg>
        
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <button
            onClick={() => navigateTo('rider-home')}
            className="p-2 rounded"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #F97316' }}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#F97316' }} />
          </button>
        </div>
      </div>
      
      {/* Bottom Sheet */}
      <div className="p-4 space-y-3" style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #F97316' }}>
        {/* ETA and Traffic */}
        <div className="p-3" style={{ border: '2px solid #F97316', backgroundColor: '#FFF7ED' }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" style={{ color: '#F97316' }} />
              <span style={{ color: '#1F2937' }}>ETA: 18 minutes</span>
            </div>
            <span className="text-sm" style={{ color: '#F97316' }}>4.2 km</span>
          </div>
          <div className="flex items-center text-sm" style={{ color: '#6B7280' }}>
            <TrendingUp className="w-4 h-4 mr-2" style={{ color: '#F97316' }} />
            <span>Moderate traffic on route</span>
          </div>
        </div>
        
        {/* Alternate Route */}
        <div className="p-3" style={{ border: '1px solid #F97316', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm" style={{ color: '#1F2937' }}>Alternate Route Available</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>22 min • 5.1 km • Less traffic</p>
            </div>
            <button className="px-3 py-1 text-sm" style={{ border: '1px solid #F97316', color: '#F97316' }}>
              Switch
            </button>
          </div>
        </div>
        
        {/* Emergency Reroute */}
        <button
          className="w-full py-2 flex items-center justify-center"
          style={{ border: '2px solid #EF4444', backgroundColor: '#FEF2F2', color: '#EF4444' }}
        >
          <AlertCircle className="w-5 h-5 mr-2" />
          Emergency Reroute
        </button>
        
        {/* Start Navigation */}
        <button
          onClick={() => navigateTo('rider-pickup')}
          className="w-full py-4"
          style={{ backgroundColor: '#F97316', color: '#FFFFFF', border: 'none' }}
        >
          Start Navigation
        </button>
      </div>
    </div>
  );
}