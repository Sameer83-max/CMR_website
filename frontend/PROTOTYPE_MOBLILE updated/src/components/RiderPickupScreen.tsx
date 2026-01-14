import React, { useState } from 'react';
import { ChevronLeft, QrCode, CheckCircle, Package, Clock, AlertCircle, Droplet, Camera, Hash } from 'lucide-react';

interface RiderPickupScreenProps {
  navigateTo: (screen: string) => void;
}

type PickupStep = 'arrival' | 'verification' | 'otp';

export function RiderPickupScreen({ navigateTo }: RiderPickupScreenProps) {
  const [step, setStep] = useState<PickupStep>('arrival');
  const [otp, setOtp] = useState('');

  // Arrival Check-in
  if (step === 'arrival') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Arrival Check-in</h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#F97316', boxShadow: '0 2px 8px rgba(249,115,22,0.3)' }}>
                <span style={{ color: '#FFFFFF' }}>1</span>
              </div>
              <p className="text-xs" style={{ color: '#F97316' }}>Arrival</p>
            </div>
            <div className="flex-1 h-0.5 -mt-6" style={{ backgroundColor: '#E5E7EB' }}></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#E5E7EB' }}>
                <span style={{ color: '#9CA3AF' }}>2</span>
              </div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Verify</p>
            </div>
            <div className="flex-1 h-0.5 -mt-6" style={{ backgroundColor: '#E5E7EB' }}></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#E5E7EB' }}>
                <span style={{ color: '#9CA3AF' }}>3</span>
              </div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Collect</p>
            </div>
          </div>
          
          {/* Location Confirmation */}
          <div className="p-6 text-center" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}>
              <Package className="w-8 h-8" style={{ color: '#FFFFFF' }} />
            </div>
            <h4 className="mb-2" style={{ color: '#1F2937' }}>City General Blood Bank</h4>
            <p className="text-sm" style={{ color: '#6B7280' }}>Sector 15, Phase 2</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10B981' }}></div>
              <p className="text-sm" style={{ color: '#10B981' }}>You're at the location</p>
            </div>
          </div>
          
          {/* QR Scan Section */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
                <QrCode className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              </div>
              <h5 style={{ color: '#374151' }}>Scan Facility QR Code</h5>
            </div>
            <div className="h-64 flex items-center justify-center mb-4" style={{ borderRadius: '12px', border: '2px dashed #8B5CF6', backgroundColor: '#FAFAF9' }}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
                  <Camera className="w-10 h-10" style={{ color: '#8B5CF6' }} />
                </div>
                <p style={{ color: '#6B7280' }}>Position QR code within frame</p>
                <p className="text-sm mt-1" style={{ color: '#9CA3AF' }}>Camera will auto-scan</p>
              </div>
            </div>
            <button
              className="w-full py-3 text-sm flex items-center justify-center gap-2"
              style={{ borderRadius: '12px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
            >
              <Hash className="w-4 h-4" />
              <span>Enter Code Manually</span>
            </button>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => setStep('verification')}
            className="w-full py-4"
            style={{ borderRadius: '16px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}
          >
            Confirm Arrival
          </button>
          <button
            className="w-full py-4"
            style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
          >
            Notify Staff
          </button>
        </div>
      </div>
    );
  }

  // Blood Packet Verification
  if (step === 'verification') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center gap-4">
            <button onClick={() => setStep('arrival')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Blood Packet Verification</h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#10B981' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </div>
              <p className="text-xs" style={{ color: '#10B981' }}>Arrival</p>
            </div>
            <div className="flex-1 h-0.5 -mt-6" style={{ backgroundColor: '#10B981' }}></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#F97316', boxShadow: '0 2px 8px rgba(249,115,22,0.3)' }}>
                <span style={{ color: '#FFFFFF' }}>2</span>
              </div>
              <p className="text-xs" style={{ color: '#F97316' }}>Verify</p>
            </div>
            <div className="flex-1 h-0.5 -mt-6" style={{ backgroundColor: '#E5E7EB' }}></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#E5E7EB' }}>
                <span style={{ color: '#9CA3AF' }}>3</span>
              </div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Collect</p>
            </div>
          </div>
          
          {/* Scan Blood Unit */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
                <QrCode className="w-5 h-5" style={{ color: '#EF4444' }} />
              </div>
              <h5 style={{ color: '#374151' }}>Scan Blood Unit QR Code</h5>
            </div>
            <div className="h-48 flex items-center justify-center mb-4" style={{ borderRadius: '12px', border: '2px dashed #EF4444', backgroundColor: '#FEF2F2' }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
                  <Droplet className="w-8 h-8" style={{ color: '#EF4444' }} fill="#EF4444" />
                </div>
                <p style={{ color: '#1F2937' }}>Scan blood unit label</p>
              </div>
            </div>
          </div>
          
          {/* Verification Checklist */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Visual Verification</h5>
            <div className="space-y-3">
              {[
                { label: 'Blood Group Match', desc: 'B+ Platelets', status: 'pending' },
                { label: 'Unit ID Verification', desc: 'PLT-2024-4521', status: 'pending' },
                { label: 'Seal Integrity', desc: 'Check for damage', status: 'pending' },
                { label: 'Expiry Date', desc: 'Valid for 3 days', status: 'pending' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA', border: '2px solid #E5E7EB' }}>
                  <div className="flex-1">
                    <p style={{ color: '#1F2937' }}>{item.label}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => setStep('otp')}
            className="w-full py-4"
            style={{ borderRadius: '16px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}
          >
            Verify All Checks
          </button>
          <button
            onClick={() => setStep('arrival')}
            className="w-full py-4"
            style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  // OTP Confirmation
  if (step === 'otp') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Header */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #E5E7EB' }}>
          <div className="flex items-center">
            <button onClick={() => setStep('verification')} className="mr-3">
              <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>OTP Confirmation</h3>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center p-6">
          {/* OTP Section */}
          <div className="p-6 text-center mb-6" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F9FAFB', border: '2px solid #E5E7EB' }}>
              <Package className="w-8 h-8" style={{ color: '#6B7280' }} />
            </div>
            <h4 className="mb-2" style={{ color: '#1F2937' }}>Enter Pickup OTP</h4>
            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
              OTP sent to blood bank staff
            </p>
            
            {/* OTP Input */}
            <div className="flex justify-center gap-2 mb-4">
              {[0, 1, 2, 3].map((idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center"
                  style={{
                    border: '2px solid #E5E7EB',
                    backgroundColor: '#FFFFFF',
                    color: '#1F2937'
                  }}
                  value={otp[idx] || ''}
                  onChange={(e) => {
                    const newOtp = otp.split('');
                    newOtp[idx] = e.target.value;
                    setOtp(newOtp.join(''));
                  }}
                />
              ))}
            </div>
            
            <button className="text-sm" style={{ color: '#6B7280' }}>
              Resend OTP
            </button>
          </div>
          
          {/* Pickup Status */}
          <div className="p-4 mb-4" style={{ border: '2px solid #9CA3AF', backgroundColor: '#F9FAFB' }}>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-3" style={{ color: '#9CA3AF' }} />
              <div>
                <h6 style={{ color: '#1F2937' }}>Status: Ready for Pickup</h6>
                <p className="text-sm" style={{ color: '#6B7280' }}>Blood bank staff verified</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #E5E7EB' }}>
          <button
            onClick={() => navigateTo('rider-cold-chain')}
            disabled={otp.length !== 4}
            className="w-full py-4"
            style={{
              backgroundColor: otp.length === 4 ? '#9CA3AF' : '#D1D5DB',
              color: '#FFFFFF',
              border: 'none',
              cursor: otp.length === 4 ? 'pointer' : 'not-allowed'
            }}
          >
            Confirm Pickup → Start Delivery
          </button>
        </div>
      </div>
    );
  }

  return null;
}