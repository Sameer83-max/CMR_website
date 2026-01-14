import React, { useState } from 'react';
import { ChevronLeft, MapPin, Clock, CheckCircle, Package, AlertCircle, Navigation, User, Phone } from 'lucide-react';

interface RiderDeliveryScreenProps {
  navigateTo: (screen: string) => void;
}

type DeliveryStatus = 'in-transit' | 'near-destination' | 'arrived' | 'otp-entry' | 'completed';

export function RiderDeliveryScreen({ navigateTo }: RiderDeliveryScreenProps) {
  const [status, setStatus] = useState<DeliveryStatus>('in-transit');
  const [deliveryOtp, setDeliveryOtp] = useState('');

  // Delivery Completed View
  if (status === 'completed') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }}>
            <CheckCircle className="w-12 h-12" style={{ color: '#FFFFFF' }} />
          </div>
          <h3 className="mb-2" style={{ color: '#1F2937' }}>Blood Delivered Successfully!</h3>
          <p className="text-center mb-6" style={{ color: '#6B7280' }}>
            Component has been delivered and synced to hospital inventory
          </p>
          
          {/* Delivery Summary */}
          <div className="w-full p-5 mb-6" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Delivery Summary</h5>
            <div className="space-y-3">
              <div className="flex justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
                <span style={{ color: '#6B7280' }}>Delivery ID:</span>
                <span style={{ color: '#1F2937' }}>DEL-2024-4521</span>
              </div>
              <div className="flex justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
                <span style={{ color: '#6B7280' }}>Time Taken:</span>
                <span style={{ color: '#10B981' }}>23 minutes</span>
              </div>
              <div className="flex justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
                <span style={{ color: '#6B7280' }}>Distance:</span>
                <span style={{ color: '#1F2937' }}>4.2 km</span>
              </div>
              <div className="flex justify-between p-3" style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>
                <span style={{ color: '#FFFFFF' }}>Earnings:</span>
                <span style={{ color: '#FFFFFF' }}>₹150</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => navigateTo('rider-home')}
            className="w-full py-4"
            style={{ borderRadius: '16px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // In Transit - Main Delivery View
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Delivery in Progress</h3>
          </div>
          <button
            onClick={() => navigateTo('rider-emergency')}
            className="px-4 py-2"
            style={{ borderRadius: '999px', backgroundColor: '#EF4444', color: '#FFFFFF', border: 'none', boxShadow: '0 2px 8px rgba(239,68,68,0.3)' }}
          >
            SOS
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Status Banner */}
        <div className="p-5" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <Navigation className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
              <div>
                <p style={{ color: '#FFFFFF' }}>En Route to Apollo Hospital</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>ETA: 8 minutes</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="h-48 flex items-center justify-center" style={{ borderRadius: '16px', backgroundColor: '#E5E7EB' }}>
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: '#6B7280' }} />
            <p style={{ color: '#6B7280' }}>Live Map Navigation</p>
          </div>
        </div>
        
        {/* Delivery Details */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Delivery Details</h5>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
                <Package className="w-5 h-5" style={{ color: '#EF4444' }} />
              </div>
              <div>
                <p style={{ color: '#1F2937' }}>B+ Platelets (6 units)</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>PLT-2024-4521</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <MapPin className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
              <div>
                <p style={{ color: '#1F2937' }}>Apollo Hospital</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>2.1 km away</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <Clock className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <div>
                <p style={{ color: '#1F2937' }}>Started at 10:45 AM</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>15 mins elapsed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hospital Contact */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Hospital Contact</h5>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
                <User className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              </div>
              <div>
                <p style={{ color: '#1F2937' }}>Dr. Sharma</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>Blood Bank Officer</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981', boxShadow: '0 2px 8px rgba(16,185,129,0.3)' }}>
              <Phone className="w-5 h-5" style={{ color: '#FFFFFF' }} />
            </button>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            className="p-4 flex flex-col items-center"
            style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
          >
            <MapPin className="w-6 h-6 mb-2" style={{ color: '#3B82F6' }} />
            <span className="text-sm" style={{ color: '#1F2937' }}>Navigation</span>
          </button>
          <button
            onClick={() => navigateTo('rider-cold-chain')}
            className="p-4 flex flex-col items-center"
            style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
          >
            <Package className="w-6 h-6 mb-2" style={{ color: '#3B82F6' }} />
            <span className="text-sm" style={{ color: '#1F2937' }}>Cold Chain</span>
          </button>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
        <button
          onClick={() => setStatus('completed')}
          className="w-full py-4"
          style={{ borderRadius: '16px', backgroundColor: '#10B981', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(16,185,129,0.3)' }}
        >
          Mark as Arrived
        </button>
      </div>
    </div>
  );
}