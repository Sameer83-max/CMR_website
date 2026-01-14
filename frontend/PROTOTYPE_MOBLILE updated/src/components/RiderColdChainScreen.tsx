import React, { useState } from 'react';
import { ChevronLeft, ThermometerSun, AlertCircle, CheckCircle, Lock, MapPin, Clock, TrendingUp, Check } from 'lucide-react';

interface RiderColdChainScreenProps {
  navigateTo: (screen: string) => void;
}

type ViewMode = 'monitoring' | 'manual-check';

export function RiderColdChainScreen({ navigateTo }: RiderColdChainScreenProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('monitoring');
  const [checksCompleted, setChecksCompleted] = useState({
    sealed: false,
    gps: false,
    tamperProof: false,
  });

  // Smart Cold Box Monitoring
  if (viewMode === 'monitoring') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
              </button>
              <h3 style={{ color: '#1F2937' }}>Cold Chain Compliance</h3>
            </div>
            <button
              onClick={() => setViewMode('manual-check')}
              className="px-4 py-2 text-sm"
              style={{ borderRadius: '999px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
            >
              Manual Check
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Current Temperature - Large Card */}
          <div className="p-6 text-center" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }}>
            <div className="flex flex-col items-center mb-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <ThermometerSun className="w-10 h-10" style={{ color: '#FFFFFF' }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.8)' }}>Current Temperature</p>
                <h2 style={{ color: '#FFFFFF', fontSize: '48px', lineHeight: '1' }}>4°C</h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                  <p className="text-sm" style={{ color: '#10B981' }}>Within safe range</p>
                </div>
              </div>
            </div>
            
            {/* Temperature Range Bar */}
            <div className="mb-3">
              <div className="h-3 relative" style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '999px', overflow: 'hidden' }}>
                <div className="h-full absolute" style={{ width: '40%', background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)', borderRadius: '999px' }} />
              </div>
            </div>
            <div className="flex justify-between text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <span>2°C</span>
              <span>Safe: 2-6°C</span>
              <span>6°C</span>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <Clock className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>28m</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Transit Time</p>
            </div>
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <TrendingUp className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>100%</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Compliance</p>
            </div>
          </div>
          
          {/* Temperature Graph */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-4">
              <h5 style={{ color: '#374151' }}>Temperature History</h5>
              <span className="text-sm" style={{ color: '#6B7280' }}>Last 30 mins</span>
            </div>
            <div className="h-40 flex items-end justify-between gap-1 px-2" style={{ borderBottom: '2px solid #F5F5F5' }}>
              {[65, 70, 68, 72, 75, 70, 68, 65, 70, 72, 68, 70].map((height, idx) => (
                <div
                  key={idx}
                  className="flex-1"
                  style={{ 
                    height: `${height}%`,
                    background: 'linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)',
                    borderRadius: '4px 4px 0 0'
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 text-xs" style={{ color: '#6B7280' }}>
              <span>10:00</span>
              <span>10:15</span>
              <span>10:30</span>
            </div>
          </div>
          
          {/* Alerts Section */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <h5 style={{ color: '#374151' }}>Compliance Alerts</h5>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 flex items-center gap-3" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                <div>
                  <p style={{ color: '#1F2937' }}>No breaches detected</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Temperature maintained</p>
                </div>
              </div>
              
              <div className="p-4 flex items-center gap-3" style={{ borderRadius: '12px', backgroundColor: '#EFF6FF' }}>
                <Lock className="w-5 h-5" style={{ color: '#3B82F6' }} />
                <div>
                  <p style={{ color: '#1F2937' }}>Cold box sealed</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>No tampering detected</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Device Info */}
          <div className="p-4" style={{ borderRadius: '12px', backgroundColor: '#F5F5F5' }}>
            <div className="flex items-center justify-between text-sm">
              <span style={{ color: '#6B7280' }}>Device ID: CB-2451</span>
              <span style={{ color: '#10B981' }}>● Connected</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Manual Compliance Check
  if (viewMode === 'manual-check') {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setViewMode('monitoring')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
              </button>
              <h3 style={{ color: '#1F2937' }}>Manual Compliance Check</h3>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Instruction Banner */}
          <div className="p-4 flex items-start gap-3" style={{ borderRadius: '14px', backgroundColor: '#EFF6FF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <AlertCircle className="w-5 h-5" style={{ color: '#3B82F6' }} />
            </div>
            <div>
              <p style={{ color: '#1F2937' }}>Complete all checks before delivery</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>Ensure cold chain compliance</p>
            </div>
          </div>
          
          {/* Checklist */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Compliance Checklist</h5>
            <div className="space-y-3">
              {[
                { key: 'sealed', label: 'Cold Box Sealed', desc: 'Check seal integrity' },
                { key: 'gps', label: 'GPS Tracking Active', desc: 'Verify location tracking' },
                { key: 'tamperProof', label: 'Tamper-Proof Lock', desc: 'Confirm lock status' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setChecksCompleted({ ...checksCompleted, [item.key]: !checksCompleted[item.key as keyof typeof checksCompleted] })}
                  className="w-full p-4 flex items-start gap-3 text-left"
                  style={{ 
                    borderRadius: '12px',
                    backgroundColor: checksCompleted[item.key as keyof typeof checksCompleted] ? '#F0FDF4' : '#FAFAFA',
                    border: checksCompleted[item.key as keyof typeof checksCompleted] ? '2px solid #10B981' : '2px solid #E5E7EB'
                  }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ 
                    backgroundColor: checksCompleted[item.key as keyof typeof checksCompleted] ? '#10B981' : '#FFFFFF',
                    border: checksCompleted[item.key as keyof typeof checksCompleted] ? 'none' : '2px solid #E5E7EB'
                  }}>
                    {checksCompleted[item.key as keyof typeof checksCompleted] && (
                      <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p style={{ color: '#1F2937' }}>{item.label}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Temperature Reading */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Manual Temperature Reading</h5>
            <div className="p-4 text-center" style={{ borderRadius: '12px', backgroundColor: '#EFF6FF' }}>
              <ThermometerSun className="w-12 h-12 mx-auto mb-3" style={{ color: '#3B82F6' }} />
              <p className="text-sm mb-2" style={{ color: '#6B7280' }}>Current Reading</p>
              <p style={{ color: '#1F2937', fontSize: '32px' }}>4°C</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                <span className="text-sm" style={{ color: '#10B981' }}>Safe Range</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
          <button
            disabled={!Object.values(checksCompleted).every(v => v)}
            onClick={() => navigateTo('rider-delivery')}
            className="w-full py-4"
            style={{ 
              borderRadius: '16px',
              backgroundColor: Object.values(checksCompleted).every(v => v) ? '#10B981' : '#E5E7EB',
              color: '#FFFFFF',
              border: 'none',
              boxShadow: Object.values(checksCompleted).every(v => v) ? '0 4px 16px rgba(16,185,129,0.3)' : 'none',
              cursor: Object.values(checksCompleted).every(v => v) ? 'pointer' : 'not-allowed'
            }}
          >
            {Object.values(checksCompleted).every(v => v) ? 'Confirm Compliance' : 'Complete All Checks'}
          </button>
          <button
            onClick={() => setViewMode('monitoring')}
            className="w-full py-4"
            style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
          >
            Back to Monitoring
          </button>
        </div>
      </div>
    );
  }

  return null;
}