import React from 'react';
import { ChevronLeft, Calendar, Activity, FileText, MapPin, CheckCircle, AlertTriangle, Sparkles, TrendingUp } from 'lucide-react';

interface DonorEligibilityScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorEligibilityScreen({ navigateTo }: DonorEligibilityScreenProps) {
  const eligibilityScore = 100;
  const status = 'eligible'; // 'eligible', 'pending', 'ineligible'
  const statusColor = status === 'eligible' ? '#10B981' : status === 'pending' ? '#F97316' : '#EF4444';

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center">
          <button 
            onClick={() => navigateTo('donor-home')} 
            className="mr-3 p-2 transition-all rounded-full"
            style={{ background: 'none', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Eligibility Status</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Traffic-Light Ring Status Card */}
        <div className="p-6 text-center" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          border: `2px solid ${statusColor}`
        }}>
          {/* Large Traffic-Light Ring */}
          <div className="flex justify-center mb-4">
            <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: 'rotate(-90deg)' }}>
              {/* Background ring */}
              <circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="12"
              />
              {/* Progress ring */}
              <circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke={statusColor}
                strokeWidth="12"
                strokeDasharray={`${2 * Math.PI * 60 * (eligibilityScore / 100)} ${2 * Math.PI * 60}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 0.5s' }}
              />
            </svg>
            {/* Center Content */}
            <div style={{ 
              position: 'absolute',
              marginTop: '32px',
              textAlign: 'center'
            }}>
              <div className="p-4 mb-2" style={{ 
                backgroundColor: statusColor + '20',
                borderRadius: '100px',
                display: 'inline-block'
              }}>
                <CheckCircle className="w-12 h-12" style={{ color: statusColor }} />
              </div>
              <div style={{ 
                color: statusColor,
                fontSize: '32px',
                fontWeight: '700'
              }}>
                {eligibilityScore}%
              </div>
            </div>
          </div>
          
          <h3 className="mb-2" style={{ color: '#1F2937', fontSize: '20px', fontWeight: '600' }}>
            Eligible to Donate
          </h3>
          <p style={{ color: '#64748B', fontSize: '14px' }}>
            You can donate blood now
          </p>
          
          {/* AI Indicator */}
          <div className="flex items-center justify-center mt-4 p-3" style={{ 
            backgroundColor: '#F5F3FF',
            borderRadius: '12px'
          }}>
            <Sparkles className="w-4 h-4 mr-2" style={{ color: '#8B5CF6' }} />
            <span style={{ color: '#8B5CF6', fontSize: '13px', fontWeight: '600' }}>
              AI-Verified Eligibility
            </span>
          </div>
        </div>
        
        {/* Next Eligible Date */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div className="flex items-center mb-3">
            <div className="p-2 mr-3" style={{ backgroundColor: '#EFF6FF', borderRadius: '10px' }}>
              <Calendar className="w-5 h-5" style={{ color: '#3B82F6' }} />
            </div>
            <h4 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Next Eligible Donation</h4>
          </div>
          <p className="mb-1" style={{ color: '#3B82F6', fontSize: '16px', fontWeight: '600' }}>
            Dec 18, 2024
          </p>
          <p className="mb-3" style={{ color: '#64748B', fontSize: '13px' }}>6 days from now</p>
          
          {/* Progress Bar */}
          <div style={{ 
            height: '8px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: '45%',
              height: '100%',
              backgroundColor: '#3B82F6',
              transition: 'width 0.3s'
            }} />
          </div>
          <p className="mt-2" style={{ color: '#64748B', fontSize: '11px' }}>
            45 days completed since last donation
          </p>
        </div>
        
        {/* Last Donation */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <h5 className="mb-3" style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Last Donation
          </h5>
          <div className="space-y-2">
            <div className="flex justify-between py-2" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Date</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>Nov 03, 2024</span>
            </div>
            <div className="flex justify-between py-2" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Location</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>City General Hospital</span>
            </div>
            <div className="flex justify-between py-2">
              <span style={{ color: '#64748B', fontSize: '13px' }}>Component</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>Whole Blood</span>
            </div>
          </div>
        </div>
        
        {/* Health Vitals */}
        <div className="grid grid-cols-2 gap-3">
          {/* Hemoglobin */}
          <div className="p-4" style={{ 
            backgroundColor: '#F0FDF4',
            borderRadius: '14px',
            border: '2px solid #BBF7D0'
          }}>
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-5 h-5" style={{ color: '#10B981' }} />
              <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }} />
            </div>
            <p style={{ color: '#10B981', fontSize: '20px', fontWeight: '700', marginBottom: '2px' }}>
              13.5
            </p>
            <p style={{ color: '#059669', fontSize: '11px' }}>Hemoglobin g/dL</p>
          </div>
          
          {/* Travel Status */}
          <div className="p-4" style={{ 
            backgroundColor: '#F0FDF4',
            borderRadius: '14px',
            border: '2px solid #BBF7D0'
          }}>
            <div className="flex items-center justify-between mb-2">
              <MapPin className="w-5 h-5" style={{ color: '#10B981' }} />
              <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }} />
            </div>
            <p style={{ color: '#10B981', fontSize: '20px', fontWeight: '700', marginBottom: '2px' }}>
              Clear
            </p>
            <p style={{ color: '#059669', fontSize: '11px' }}>Travel History</p>
          </div>
        </div>
        
        {/* Eligibility Checklist */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <h5 className="mb-3" style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>
            Eligibility Checklist
          </h5>
          <div className="space-y-2">
            {[
              { label: 'Age 18-65 years', status: true },
              { label: 'Weight > 50 kg', status: true },
              { label: 'No recent illness', status: true },
              { label: 'No medication conflicts', status: true },
              { label: 'Hemoglobin level normal', status: true },
              { label: 'No recent tattoos/piercings', status: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center p-2" style={{ 
                backgroundColor: '#F8FAFC',
                borderRadius: '8px'
              }}>
                <div className="flex items-center justify-center mr-3" style={{ 
                  width: '20px',
                  height: '20px',
                  borderRadius: '10px',
                  backgroundColor: item.status ? '#10B981' : '#E5E7EB'
                }}>
                  {item.status && <CheckCircle className="w-4 h-4" style={{ color: '#FFFFFF' }} />}
                </div>
                <span style={{ 
                  color: item.status ? '#1F2937' : '#94A3B8',
                  fontSize: '13px',
                  fontWeight: item.status ? '500' : '400'
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            className="py-3 flex flex-col items-center transition-all"
            style={{ 
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '2px solid #E5E7EB',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3B82F6'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
          >
            <FileText className="w-6 h-6 mb-2" style={{ color: '#3B82F6' }} />
            <span style={{ color: '#1F2937', fontSize: '12px', fontWeight: '500' }}>
              Questionnaire
            </span>
          </button>
          
          <button 
            className="py-3 flex flex-col items-center transition-all"
            style={{ 
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '2px solid #E5E7EB',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
          >
            <Activity className="w-6 h-6 mb-2" style={{ color: '#10B981' }} />
            <span style={{ color: '#1F2937', fontSize: '12px', fontWeight: '500' }}>
              Update Vitals
            </span>
          </button>
        </div>
      </div>
      
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
        <button
          onClick={() => navigateTo('donor-scheduling')}
          className="w-full py-3.5 transition-all"
          style={{ 
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '14px',
            fontSize: '15px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(16,185,129,0.3)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
        >
          Proceed to Donate →
        </button>
      </div>
    </div>
  );
}
