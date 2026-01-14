import React from 'react';
import { ChevronLeft, MessageSquare, Download, Wifi, MapPin, Phone, CheckCircle, RefreshCw } from 'lucide-react';

interface RiderOfflineScreenProps {
  navigateTo: (screen: string) => void;
}

export function RiderOfflineScreen({ navigateTo }: RiderOfflineScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Offline Mode</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Offline Status */}
        <div className="p-5 text-center" style={{ borderRadius: '16px', borderLeft: '4px solid #F97316', background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)', boxShadow: '0 4px 16px rgba(249,115,22,0.15)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
            <Wifi className="w-8 h-8" style={{ color: '#F97316' }} />
          </div>
          <h4 className="mb-2" style={{ color: '#1F2937' }}>Offline Operations Available</h4>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Continue deliveries even without internet connection
          </p>
        </div>
        
        {/* SMS-Based Pickup Confirmation */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
              <MessageSquare className="w-6 h-6" style={{ color: '#10B981' }} />
            </div>
            <h5 style={{ color: '#374151' }}>SMS-Based Pickup Confirmation</h5>
          </div>
          
          <div className="p-4 mb-4" style={{ borderRadius: '12px', border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
            <p className="text-sm mb-3" style={{ color: '#1F2937' }}>How to confirm pickup via SMS:</p>
            <ol className="text-sm space-y-2" style={{ color: '#6B7280' }}>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#10B981', color: '#FFFFFF' }}>1</span>
                <span>Text "PICKUP [Delivery ID]" to 1800-BLOOD-01</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#10B981', color: '#FFFFFF' }}>2</span>
                <span>Wait for OTP in SMS reply</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#10B981', color: '#FFFFFF' }}>3</span>
                <span>Verify OTP with blood bank staff</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#10B981', color: '#FFFFFF' }}>4</span>
                <span>Text "CONFIRMED [OTP]" to same number</span>
              </li>
            </ol>
          </div>
          
          <div className="p-3" style={{ borderRadius: '10px', border: '2px solid #10B981', backgroundColor: '#F0FDF4' }}>
            <p className="text-sm mb-1" style={{ color: '#059669' }}>Example:</p>
            <p className="text-xs" style={{ color: '#10B981' }}>
              PICKUP DEL-2024-4521
            </p>
          </div>
        </div>
        
        {/* Offline Map Download */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <MapPin className="w-6 h-6" style={{ color: '#3B82F6' }} />
              </div>
              <h5 style={{ color: '#374151' }}>Offline Maps</h5>
            </div>
            <Download className="w-5 h-5" style={{ color: '#3B82F6' }} />
          </div>
          
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
            Download maps for your region to navigate without internet
          </p>
          
          <div className="space-y-3">
            {[
              { area: 'Central Bangalore', size: '45 MB', status: 'Downloaded' },
              { area: 'North Bangalore', size: '38 MB', status: 'Not Downloaded' },
              { area: 'South Bangalore', size: '52 MB', status: 'Not Downloaded' },
            ].map((map, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3"
                style={{ borderRadius: '10px', border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}
              >
                <div>
                  <p style={{ color: '#1F2937' }}>{map.area}</p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>{map.size}</p>
                </div>
                {map.status === 'Downloaded' ? (
                  <span className="px-3 py-1.5 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF' }}>
                    <CheckCircle className="w-3 h-3" />
                    Downloaded
                  </span>
                ) : (
                  <button className="px-3 py-1.5 text-xs" style={{ borderRadius: '8px', border: '1px solid #3B82F6', color: '#3B82F6', backgroundColor: '#FFFFFF' }}>
                    Download
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Manual OTP Entry */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Manual OTP Entry</h5>
          
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
            If SMS is not working, use manual OTP entry:
          </p>
          
          <div className="p-4 mb-4" style={{ borderRadius: '12px', border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
            <label className="text-sm mb-3 block" style={{ color: '#1F2937' }}>
              Enter OTP from staff:
            </label>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 text-center text-xl"
                  style={{
                    borderRadius: '10px',
                    border: '2px solid #3B82F6',
                    backgroundColor: '#FFFFFF',
                    color: '#1F2937'
                  }}
                />
              ))}
            </div>
          </div>
          
          <button
            className="w-full py-3"
            style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 12px rgba(59,130,246,0.3)' }}
          >
            Verify OTP
          </button>
        </div>
        
        {/* USSD-Based Updates */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
              <Phone className="w-6 h-6" style={{ color: '#F97316' }} />
            </div>
            <h5 style={{ color: '#374151' }}>USSD Delivery Updates</h5>
          </div>
          
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
            Use USSD codes for delivery status updates:
          </p>
          
          <div className="space-y-2 text-sm">
            <div className="p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <p className="mb-1" style={{ color: '#1F2937' }}>Pickup Complete:</p>
              <p style={{ color: '#6B7280' }}>Dial *123*1*[DeliveryID]#</p>
            </div>
            
            <div className="p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <p className="mb-1" style={{ color: '#1F2937' }}>In Transit:</p>
              <p style={{ color: '#6B7280' }}>Dial *123*2*[DeliveryID]#</p>
            </div>
            
            <div className="p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <p className="mb-1" style={{ color: '#1F2937' }}>Delivery Complete:</p>
              <p style={{ color: '#6B7280' }}>Dial *123*3*[DeliveryID]#</p>
            </div>
          </div>
        </div>
        
        {/* Cached Task Information */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Cached Task Information</h5>
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
            Your active tasks are saved locally and available offline
          </p>
          
          <div className="p-4 flex items-center justify-between" style={{ borderRadius: '12px', border: '2px solid #10B981', backgroundColor: '#F0FDF4' }}>
            <span style={{ color: '#059669' }}>Cached Tasks</span>
            <span className="px-3 py-1.5 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF' }}>
              <CheckCircle className="w-3 h-3" />
              3 Active
            </span>
          </div>
        </div>
        
        {/* Sync Instructions */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #3B82F6', backgroundColor: '#EFF6FF', boxShadow: '0 4px 16px rgba(59,130,246,0.15)' }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <RefreshCw className="w-6 h-6" style={{ color: '#3B82F6' }} />
            </div>
            <div>
              <h6 className="mb-2" style={{ color: '#3B82F6' }}>Auto-Sync When Online</h6>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                All offline updates will automatically sync when you reconnect to the internet. 
                Check the sync status icon in the top menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}