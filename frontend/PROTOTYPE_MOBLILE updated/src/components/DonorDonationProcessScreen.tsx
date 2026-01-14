import React, { useState } from 'react';
import { ChevronLeft, CheckCircle, Upload, Activity, Coffee, AlertCircle, Heart, Clock, Droplet, Check } from 'lucide-react';

interface DonorDonationProcessScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorDonationProcessScreen({ navigateTo }: DonorDonationProcessScreenProps) {
  const [phase, setPhase] = useState<'pre' | 'during' | 'post'>('pre');

  // Pre-Verification Phase
  if (phase === 'pre') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Pre-Donation Verification</h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#10B981', boxShadow: '0 2px 8px rgba(16,185,129,0.3)' }}>
                <span style={{ color: '#FFFFFF' }}>1</span>
              </div>
              <p className="text-xs" style={{ color: '#10B981' }}>Pre-Check</p>
            </div>
            <div className="flex-1 h-0.5 -mt-6" style={{ backgroundColor: '#E5E7EB' }}></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#E5E7EB' }}>
                <span style={{ color: '#9CA3AF' }}>2</span>
              </div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Donation</p>
            </div>
            <div className="flex-1 h-0.5 -mt-6" style={{ backgroundColor: '#E5E7EB' }}></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#E5E7EB' }}>
                <span style={{ color: '#9CA3AF' }}>3</span>
              </div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Recovery</p>
            </div>
          </div>
          
          {/* KYC Status */}
          <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #10B981', backgroundColor: '#F0FDF4', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <CheckCircle className="w-6 h-6" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <h5 style={{ color: '#10B981' }}>KYC Verified</h5>
                  <p className="text-sm" style={{ color: '#059669' }}>ID proof verified successfully</p>
                </div>
              </div>
              <span className="px-4 py-2" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF', fontSize: '12px' }}>
                Verified
              </span>
            </div>
          </div>
          
          {/* E-Health Form */}
          <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #F97316', backgroundColor: '#FFF7ED', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <Upload className="w-6 h-6" style={{ color: '#F97316' }} />
                </div>
                <div>
                  <h5 style={{ color: '#F97316' }}>E-Health Form</h5>
                  <p className="text-sm" style={{ color: '#EA580C' }}>Complete health declaration</p>
                </div>
              </div>
              <span className="px-4 py-2" style={{ borderRadius: '999px', backgroundColor: '#F97316', color: '#FFFFFF', fontSize: '12px' }}>
                Pending
              </span>
            </div>
            <button className="w-full py-3 mt-2" style={{ borderRadius: '12px', border: '2px solid #F97316', backgroundColor: '#FFFFFF', color: '#F97316' }}>
              Fill Health Form
            </button>
          </div>
          
          {/* Eligibility Checklist */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Eligibility Checklist</h5>
            <div className="space-y-3">
              {[
                { label: 'Had adequate sleep (6+ hours)', checked: true },
                { label: 'Had proper meal (2 hours ago)', checked: true },
                { label: 'Hydrated well (2+ liters)', checked: true },
                { label: 'No alcohol in 24 hours', checked: true },
                { label: 'Feeling healthy today', checked: true },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3" style={{ borderRadius: '12px', backgroundColor: item.checked ? '#F0FDF4' : '#FAFAFA', border: item.checked ? '2px solid #10B981' : '2px solid #E5E7EB' }}>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.checked ? '#10B981' : '#FFFFFF', border: item.checked ? 'none' : '2px solid #E5E7EB' }}
                  >
                    {item.checked && <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />}
                  </div>
                  <span style={{ color: '#1F2937' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => setPhase('during')}
            className="w-full py-4"
            style={{ borderRadius: '16px', backgroundColor: '#10B981', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(16,185,129,0.3)' }}
          >
            Proceed to Donation
          </button>
        </div>
      </div>
    );
  }

  // During Donation Phase
  if (phase === 'during') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center gap-4">
            <button onClick={() => setPhase('pre')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Donation in Progress</h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#10B981' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </div>
              <p className="text-xs" style={{ color: '#10B981' }}>Pre-Check</p>
            </div>
            <div className="flex-1 h-0.5 -mt-6" style={{ backgroundColor: '#10B981' }}></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#EF4444', boxShadow: '0 2px 8px rgba(239,68,68,0.3)' }}>
                <span style={{ color: '#FFFFFF' }}>2</span>
              </div>
              <p className="text-xs" style={{ color: '#EF4444' }}>Donation</p>
            </div>
            <div className="flex-1 h-0.5 -mt-6" style={{ backgroundColor: '#E5E7EB' }}></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#E5E7EB' }}>
                <span style={{ color: '#9CA3AF' }}>3</span>
              </div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Recovery</p>
            </div>
          </div>
          
          {/* Live Status */}
          <div className="p-6 text-center" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)', boxShadow: '0 8px 24px rgba(239,68,68,0.3)' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.2)', animation: 'pulse 2s infinite' }}>
              <Heart className="w-10 h-10" style={{ color: '#FFFFFF' }} fill="#FFFFFF" />
            </div>
            <h3 className="mb-2" style={{ color: '#FFFFFF' }}>Donation in Progress</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>Please remain calm and relaxed</p>
          </div>
          
          {/* Volume Tracker */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-4">
              <h5 style={{ color: '#374151' }}>Blood Collection</h5>
              <span style={{ color: '#EF4444', fontSize: '20px' }}>280 ml</span>
            </div>
            <div className="h-3 mb-2" style={{ backgroundColor: '#FEE2E2', borderRadius: '999px', overflow: 'hidden' }}>
              <div className="h-full" style={{ width: '62%', background: 'linear-gradient(90deg, #EF4444 0%, #DC2626 100%)', borderRadius: '999px' }}></div>
            </div>
            <p className="text-sm" style={{ color: '#6B7280' }}>Target: 450 ml • 62% complete</p>
          </div>
          
          {/* Vitals Monitoring */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Vitals Monitoring</h5>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#F0FDF4' }}>
                <Activity className="w-8 h-8 mx-auto mb-2" style={{ color: '#10B981' }} />
                <p style={{ color: '#1F2937', fontSize: '20px' }}>72</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>Heart Rate</p>
              </div>
              <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#EFF6FF' }}>
                <Activity className="w-8 h-8 mx-auto mb-2" style={{ color: '#3B82F6' }} />
                <p style={{ color: '#1F2937', fontSize: '20px' }}>120/80</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>BP (mmHg)</p>
              </div>
            </div>
          </div>
          
          {/* Time Elapsed */}
          <div className="p-4 flex items-center justify-between" style={{ borderRadius: '14px', backgroundColor: '#FAFAFA' }}>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" style={{ color: '#6B7280' }} />
              <span style={{ color: '#1F2937' }}>Time Elapsed</span>
            </div>
            <span style={{ color: '#EF4444', fontSize: '18px' }}>8:45</span>
          </div>
        </div>
        
        <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => setPhase('post')}
            className="w-full py-4"
            style={{ borderRadius: '16px', backgroundColor: '#10B981', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(16,185,129,0.3)' }}
          >
            Complete Donation
          </button>
        </div>
      </div>
    );
  }

  // Post Donation Phase
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#F0FDF4' }}>
      <div className="flex-1 flex flex-col justify-center p-6">
        <div className="mb-6 p-6 border-4 rounded-full mx-auto" style={{ borderColor: '#10B981' }}>
          <CheckCircle className="w-16 h-16" style={{ color: '#10B981' }} />
        </div>
        
        <h2 className="mb-2 text-center" style={{ color: '#1F2937' }}>Donation Complete!</h2>
        <p className="text-center mb-6" style={{ color: '#6B7280' }}>
          Thank you for saving lives
        </p>
        
        {/* Recovery Tips */}
        <div className="p-4 mb-4" style={{ border: '2px solid #BBF7D0', backgroundColor: '#FFFFFF' }}>
          <h5 className="mb-3" style={{ color: '#1F2937' }}>Recovery Tips</h5>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <Coffee className="w-5 h-5 mr-2 mt-0.5" style={{ color: '#10B981' }} />
              <div>
                <p style={{ color: '#1F2937' }}>Rest for 10-15 minutes</p>
                <p style={{ color: '#6B7280' }}>Have refreshments provided</p>
              </div>
            </div>
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 mr-2 mt-0.5" style={{ color: '#10B981' }} />
              <div>
                <p style={{ color: '#1F2937' }}>Hydrate well</p>
                <p style={{ color: '#6B7280' }}>Drink extra fluids for 24 hours</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Next Donation Date */}
        <div className="p-4 mb-4" style={{ border: '2px solid #BBF7D0', backgroundColor: '#FFFFFF' }}>
          <h5 className="mb-2" style={{ color: '#1F2937' }}>Next Donation Date</h5>
          <p style={{ color: '#10B981' }}>26 Feb 2025</p>
          <p className="text-sm" style={{ color: '#6B7280' }}>90 days from now</p>
        </div>
      </div>
      
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #E5E7EB' }}>
        <button
          onClick={() => navigateTo('donor-home')}
          className="w-full py-4"
          style={{ backgroundColor: '#10B981', color: '#FFFFFF', border: 'none' }}
        >
          Done
        </button>
      </div>
    </div>
  );
}