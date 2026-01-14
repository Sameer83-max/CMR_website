import React, { useState } from 'react';
import { ChevronLeft, QrCode, CheckCircle, Package, Key } from 'lucide-react';

interface HospitalPrepareUnitScreenProps {
  navigateTo: (screen: string) => void;
}

type PrepareStep = 'verify' | 'ready' | 'otp';

export function HospitalPrepareUnitScreen({ navigateTo }: HospitalPrepareUnitScreenProps) {
  const [step, setStep] = useState<PrepareStep>('verify');
  const [otp, setOtp] = useState('5749');

  // Verification Step
  if (step === 'verify') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#EFF6FF' }}>
        {/* Header */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #3B82F6' }}>
          <div className="flex items-center">
            <button onClick={() => navigateTo('hospital-requests')} className="mr-3">
              <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#3B82F6' }}>Prepare Blood Unit</h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Selected Unit Details */}
          <div className="p-4" style={{ border: '2px solid #3B82F6', backgroundColor: '#FFFFFF' }}>
            <h5 className="mb-3" style={{ color: '#374151' }}>Selected Unit</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2" style={{ backgroundColor: '#EFF6FF', border: '1px solid #3B82F6' }}>
                <span style={{ color: '#6B7280' }}>Unit ID:</span>
                <span style={{ color: '#3B82F6' }}>PLT-2024-4521</span>
              </div>
              <div className="flex justify-between p-2" style={{ backgroundColor: '#EFF6FF', border: '1px solid #3B82F6' }}>
                <span style={{ color: '#6B7280' }}>Blood Group:</span>
                <span style={{ color: '#1F2937' }}>B+</span>
              </div>
              <div className="flex justify-between p-2" style={{ backgroundColor: '#EFF6FF', border: '1px solid #3B82F6' }}>
                <span style={{ color: '#6B7280' }}>Component:</span>
                <span style={{ color: '#1F2937' }}>Platelets (6 units)</span>
              </div>
              <div className="flex justify-between p-2" style={{ backgroundColor: '#EFF6FF', border: '1px solid #3B82F6' }}>
                <span style={{ color: '#6B7280' }}>Collection Date:</span>
                <span style={{ color: '#1F2937' }}>11 Dec 2024</span>
              </div>
              <div className="flex justify-between p-2" style={{ backgroundColor: '#EFF6FF', border: '1px solid #3B82F6' }}>
                <span style={{ color: '#6B7280' }}>Expiry Date:</span>
                <span style={{ color: '#1F2937' }}>16 Dec 2024</span>
              </div>
            </div>
          </div>
          
          {/* QR Scan to Verify */}
          <div className="p-4" style={{ border: '2px solid #3B82F6', backgroundColor: '#FFFFFF' }}>
            <h5 className="mb-3" style={{ color: '#374151' }}>Verify Blood Unit</h5>
            <div className="h-64 flex items-center justify-center mb-4" style={{ border: '2px dashed #3B82F6', backgroundColor: '#EFF6FF' }}>
              <div className="text-center">
                <QrCode className="w-16 h-16 mx-auto mb-3" style={{ color: '#9CA3AF' }} />
                <p style={{ color: '#6B7280' }}>Scan blood unit QR code</p>
                <p className="text-sm mt-2" style={{ color: '#9CA3AF' }}>to verify unit details</p>
              </div>
            </div>
          </div>
          
          {/* Request Details */}
          <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
            <h5 className="mb-3" style={{ color: '#374151' }}>Request Details</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span style={{ color: '#6B7280' }}>Request ID:</span>
                <span style={{ color: '#1F2937' }}>REQ-4521</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#6B7280' }}>Patient ID:</span>
                <span style={{ color: '#1F2937' }}>PT-****-6789</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #E5E7EB' }}>
          <button
            onClick={() => setStep('ready')}
            className="w-full py-4"
            style={{ backgroundColor: '#9CA3AF', color: '#FFFFFF', border: 'none' }}
          >
            Unit Verified - Mark as Ready
          </button>
        </div>
      </div>
    );
  }

  // Ready Status & OTP Generation
  if (step === 'ready') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Header */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #E5E7EB' }}>
          <div className="flex items-center">
            <button onClick={() => setStep('verify')} className="mr-3">
              <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Unit Ready for Pickup</h3>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center p-6">
          {/* Status Indicator */}
          <div className="p-6 text-center mb-6" style={{ border: '2px solid #9CA3AF', backgroundColor: '#F9FAFB' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#9CA3AF', border: '3px solid #FFFFFF' }}>
              <CheckCircle className="w-10 h-10" style={{ color: '#FFFFFF' }} />
            </div>
            <h4 className="mb-2" style={{ color: '#1F2937' }}>Blood Unit Ready</h4>
            <p style={{ color: '#6B7280' }}>Unit PLT-2024-4521 prepared for pickup</p>
          </div>
          
          {/* Pickup OTP */}
          <div className="p-6 text-center mb-6" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center justify-center mb-3">
              <Key className="w-6 h-6 mr-2" style={{ color: '#6B7280' }} />
              <h5 style={{ color: '#374151' }}>Pickup OTP</h5>
            </div>
            
            <div className="flex justify-center gap-2 mb-4">
              {otp.split('').map((digit, idx) => (
                <div
                  key={idx}
                  className="w-14 h-14 flex items-center justify-center"
                  style={{ border: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}
                >
                  <span className="text-2xl" style={{ color: '#1F2937' }}>{digit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
              Share this OTP with the rider for pickup verification
            </p>
            
            <button className="text-sm" style={{ color: '#9CA3AF' }}>
              Regenerate OTP
            </button>
          </div>
          
          {/* Status Timeline */}
          <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
            <h6 className="mb-3" style={{ color: '#374151' }}>Status</h6>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#9CA3AF' }} />
                <span style={{ color: '#1F2937' }}>Request Accepted - 10:45 AM</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#9CA3AF' }} />
                <span style={{ color: '#1F2937' }}>Unit Prepared - 10:52 AM</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ border: '2px solid #9CA3AF', backgroundColor: '#FFFFFF' }} />
                <span style={{ color: '#6B7280' }}>Awaiting Rider Assignment</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-4 space-y-2" style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #E5E7EB' }}>
          <button
            onClick={() => navigateTo('hospital-riders')}
            className="w-full py-4"
            style={{ backgroundColor: '#9CA3AF', color: '#FFFFFF', border: 'none' }}
          >
            Assign Rider
          </button>
          <button
            onClick={() => navigateTo('hospital-home')}
            className="w-full py-3"
            style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return null;
}