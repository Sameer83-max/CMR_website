import React, { useState } from 'react';
import { ChevronLeft, AlertCircle, CheckCircle, X, Sparkles, Check, Droplet } from 'lucide-react';

interface HospitalCrossmatchScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalCrossmatchScreen({ navigateTo }: HospitalCrossmatchScreenProps) {
  const [checklist, setChecklist] = useState({
    bloodGroup: false,
    antibodies: false,
    temperature: false,
    visualInspection: false,
    dualVerification: false,
  });

  const allChecked = Object.values(checklist).every(v => v);

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('hospital-requests')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Crossmatch Verification</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Visual Compatibility Panel */}
        <div className="p-6" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <Sparkles className="w-6 h-6" style={{ color: '#FFFFFF' }} />
            </div>
            <div>
              <h5 style={{ color: '#FFFFFF' }}>AI Crossmatch Analysis</h5>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Automated compatibility verification</p>
            </div>
          </div>
          
          <div className="p-4 mb-4" style={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
            <div className="flex items-center justify-between">
              <span style={{ color: '#FFFFFF' }}>Compatibility Status</span>
              <div className="flex items-center gap-2 px-3 py-1.5" style={{ borderRadius: '999px', backgroundColor: '#10B981' }}>
                <CheckCircle className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                <span style={{ color: '#FFFFFF' }}>Compatible</span>
              </div>
            </div>
          </div>
          
          {/* Visual Compatibility Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 text-center" style={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(16,185,129,0.2)' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </div>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.9)' }}>ABO</p>
              <p className="text-sm" style={{ color: '#FFFFFF' }}>Match</p>
            </div>
            <div className="p-3 text-center" style={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(16,185,129,0.2)' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </div>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.9)' }}>Rh Factor</p>
              <p className="text-sm" style={{ color: '#FFFFFF' }}>Match</p>
            </div>
            <div className="p-3 text-center" style={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(16,185,129,0.2)' }}>
                <CheckCircle className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </div>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.9)' }}>Antibody</p>
              <p className="text-sm" style={{ color: '#FFFFFF' }}>Negative</p>
            </div>
          </div>
        </div>
        
        {/* Unit & Patient Comparison */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Unit & Patient Details</h5>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#EFF6FF' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <Droplet className="w-6 h-6" style={{ color: '#3B82F6' }} fill="#3B82F6" />
              </div>
              <p className="text-xs mb-1" style={{ color: '#6B7280' }}>Blood Unit</p>
              <p style={{ color: '#1F2937' }}>PLT-2024-4521</p>
              <p className="text-sm mt-1" style={{ color: '#3B82F6' }}>B+ Platelets</p>
            </div>
            <div className="p-4 text-center" style={{ borderRadius: '14px', backgroundColor: '#FEF2F2' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
                <Droplet className="w-6 h-6" style={{ color: '#EF4444' }} fill="#EF4444" />
              </div>
              <p className="text-xs mb-1" style={{ color: '#6B7280' }}>Patient</p>
              <p style={{ color: '#1F2937' }}>PT-****-6789</p>
              <p className="text-sm mt-1" style={{ color: '#EF4444' }}>B+ Required</p>
            </div>
          </div>
        </div>
        
        {/* Detailed Compatibility Tests */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Compatibility Tests</h5>
          <div className="space-y-3">
            <div className="p-4 flex items-center justify-between" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937' }}>ABO Compatibility</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Blood group match verified</p>
                </div>
              </div>
              <span className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF', fontSize: '12px' }}>
                Pass
              </span>
            </div>
            
            <div className="p-4 flex items-center justify-between" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937' }}>Rh Factor Match</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Positive match confirmed</p>
                </div>
              </div>
              <span className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF', fontSize: '12px' }}>
                Pass
              </span>
            </div>
            
            <div className="p-4 flex items-center justify-between" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937' }}>Antibody Screening</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>No irregular antibodies detected</p>
                </div>
              </div>
              <span className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF', fontSize: '12px' }}>
                Pass
              </span>
            </div>
            
            <div className="p-4 flex items-center justify-between" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937' }}>Minor Crossmatch</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Plasma compatibility verified</p>
                </div>
              </div>
              <span className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF', fontSize: '12px' }}>
                Pass
              </span>
            </div>
          </div>
        </div>
        
        {/* Manual Verification Checklist */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Manual Verification Required</h5>
          <div className="space-y-3">
            {[
              { key: 'bloodGroup', label: 'Blood Group Label Verification', desc: 'Verify unit label matches system' },
              { key: 'antibodies', label: 'Physical Antibody Test', desc: 'Conduct saline test at room temp' },
              { key: 'temperature', label: 'Temperature Check', desc: 'Verify storage temp (2-6°C)' },
              { key: 'visualInspection', label: 'Visual Inspection', desc: 'Check for clots, discoloration' },
              { key: 'dualVerification', label: 'Dual Staff Verification', desc: 'Second staff member sign-off' },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setChecklist({ ...checklist, [item.key]: !checklist[item.key as keyof typeof checklist] })}
                className="w-full p-4 flex items-start gap-3 text-left"
                style={{ 
                  borderRadius: '12px',
                  backgroundColor: checklist[item.key as keyof typeof checklist] ? '#F0FDF4' : '#FAFAFA',
                  border: checklist[item.key as keyof typeof checklist] ? '2px solid #10B981' : '2px solid #E5E7EB'
                }}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ 
                  backgroundColor: checklist[item.key as keyof typeof checklist] ? '#10B981' : '#FFFFFF',
                  border: checklist[item.key as keyof typeof checklist] ? 'none' : '2px solid #E5E7EB'
                }}>
                  {checklist[item.key as keyof typeof checklist] && (
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
        
        {/* Safety Note */}
        <div className="p-4 flex items-start gap-3" style={{ borderRadius: '14px', backgroundColor: '#FFF7ED', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
            <AlertCircle className="w-5 h-5" style={{ color: '#F97316' }} />
          </div>
          <div>
            <p style={{ color: '#1F2937' }}>Safety Reminder</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>Complete all manual verification steps before proceeding to transfusion</p>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
        <button
          disabled={!allChecked}
          onClick={() => navigateTo('hospital-transfusion')}
          className="w-full py-4"
          style={{ 
            borderRadius: '16px',
            backgroundColor: allChecked ? '#10B981' : '#E5E7EB',
            color: '#FFFFFF',
            border: 'none',
            boxShadow: allChecked ? '0 4px 16px rgba(16,185,129,0.3)' : 'none',
            cursor: allChecked ? 'pointer' : 'not-allowed'
          }}
        >
          {allChecked ? 'Approve & Proceed to Transfusion' : 'Complete All Verifications'}
        </button>
        <button
          onClick={() => navigateTo('hospital-requests')}
          className="w-full py-4"
          style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}