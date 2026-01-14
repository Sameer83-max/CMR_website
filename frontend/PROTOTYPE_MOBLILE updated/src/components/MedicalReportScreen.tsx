import React, { useState } from 'react';
import { ChevronLeft, Upload, FileText, Camera, AlertTriangle, CheckCircle, Sparkles, Shield, Activity, Droplet, TrendingUp } from 'lucide-react';

interface MedicalReportScreenProps {
  navigateTo: (screen: string) => void;
}

export function MedicalReportScreen({ navigateTo }: MedicalReportScreenProps) {
  const [uploaded, setUploaded] = useState(false);

  // Upload Success State
  if (uploaded) {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center">
            <button 
              onClick={() => navigateTo('home')} 
              className="mr-3 p-2 transition-all rounded-full"
              style={{ background: 'none', border: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Medical Report Analysis</h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Success Banner */}
          <div className="flex flex-col items-center py-6">
            <div className="mb-4 p-4 transition-all" style={{ 
              backgroundColor: '#F5F3FF', 
              borderRadius: '100px',
              boxShadow: '0 8px 24px rgba(139,92,246,0.2)'
            }}>
              <CheckCircle className="w-16 h-16" style={{ color: '#8B5CF6' }} />
            </div>
            
            <h2 className="mb-2 text-center" style={{ color: '#1F2937', fontSize: '20px', fontWeight: '600' }}>
              Report Analyzed Successfully!
            </h2>
            <p className="text-center" style={{ color: '#64748B', fontSize: '14px', maxWidth: '280px' }}>
              AI has processed your medical report
            </p>
          </div>
          
          {/* OCR Results - Verified Chips */}
          <div className="p-4" style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h5 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Extracted Information</h5>
              <div className="flex items-center px-2.5 py-1" style={{ 
                backgroundColor: '#F5F3FF',
                borderRadius: '10px'
              }}>
                <Sparkles className="w-4 h-4 mr-1.5" style={{ color: '#8B5CF6' }} />
                <span style={{ color: '#8B5CF6', fontSize: '12px', fontWeight: '500' }}>AI Verified</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { label: 'Blood Type', value: 'B+', icon: Droplet, verified: true },
                { label: 'Hemoglobin', value: '11.2 g/dL', icon: Activity, verified: true },
                { label: 'Last Updated', value: 'Dec 15, 2024', icon: FileText, verified: true },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center justify-between py-2" style={{ 
                    borderBottom: idx < 2 ? '1px solid #E5E7EB' : 'none'
                  }}>
                    <div className="flex items-center">
                      <div className="p-2 mr-3" style={{ backgroundColor: '#F5F3FF', borderRadius: '10px' }}>
                        <Icon className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                      </div>
                      <span style={{ color: '#64748B', fontSize: '13px' }}>{item.label}</span>
                    </div>
                    <div className="flex items-center">
                      <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600', marginRight: '6px' }}>
                        {item.value}
                      </span>
                      {item.verified && (
                        <div className="flex items-center justify-center" style={{ 
                          width: '18px',
                          height: '18px',
                          backgroundColor: '#10B981',
                          borderRadius: '9px'
                        }}>
                          <CheckCircle className="w-3 h-3" style={{ color: '#FFFFFF' }} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Urgency Score - Color Gradient Meter */}
          <div className="p-4" style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" style={{ color: '#F97316' }} />
                <h5 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Urgency Assessment</h5>
              </div>
              <span style={{ 
                color: '#F97316', 
                fontSize: '20px', 
                fontWeight: '700'
              }}>7/10</span>
            </div>
            
            {/* Gradient Meter */}
            <div className="mb-3" style={{ 
              height: '12px',
              background: 'linear-gradient(to right, #10B981 0%, #F59E0B 50%, #EF4444 100%)',
              borderRadius: '6px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Indicator */}
              <div style={{ 
                position: 'absolute',
                left: '70%',
                top: '-4px',
                width: '20px',
                height: '20px',
                backgroundColor: '#FFFFFF',
                border: '3px solid #F97316',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }} />
            </div>
            
            <div className="flex justify-between mb-4" style={{ fontSize: '11px', color: '#64748B' }}>
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
            
            <div className="p-3" style={{ backgroundColor: '#FFF7ED', borderRadius: '12px' }}>
              <h6 className="mb-2" style={{ color: '#F97316', fontSize: '13px', fontWeight: '600' }}>Contributing Factors:</h6>
              <ul className="space-y-1" style={{ fontSize: '12px', color: '#C2410C' }}>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#F97316' }} />
                  Low hemoglobin levels detected
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#F97316' }} />
                  Recent hospitalization on record
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#F97316' }} />
                  Chronic condition flagged
                </li>
              </ul>
            </div>
          </div>
          
          {/* Thalassemia Detection - Doctor Verification Toggle */}
          <div className="p-4" style={{ 
            backgroundColor: '#F5F3FF',
            borderRadius: '16px',
            border: '2px solid #C4B5FD'
          }}>
            <div className="flex items-center mb-3">
              <div className="p-2 mr-3" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                <Shield className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              </div>
              <div className="flex-1">
                <h5 style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>
                  Thalassemia Major Detected
                </h5>
                <p style={{ color: '#7C3AED', fontSize: '12px' }}>
                  Requires regular transfusion schedule
                </p>
              </div>
            </div>
            
            {/* Doctor Verification Toggle */}
            <div className="flex items-center justify-between p-3 mb-3" style={{ 
              backgroundColor: '#FFFFFF',
              borderRadius: '12px'
            }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Doctor Verification</span>
              <button 
                className="px-4 py-1.5 transition-all"
                style={{ 
                  backgroundColor: '#10B981',
                  borderRadius: '10px',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: '600'
                }}
              >
                Verified ✓
              </button>
            </div>
            
            <button 
              onClick={() => navigateTo('transfusion')}
              className="w-full py-3 transition-all"
              style={{ 
                backgroundColor: '#8B5CF6',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(139,92,246,0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7C3AED'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B5CF6'}
            >
              View Transfusion Plan →
            </button>
          </div>
        </div>
        
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
          <button
            onClick={() => navigateTo('home')}
            className="w-full py-3.5 transition-all"
            style={{ 
              backgroundColor: '#3B82F6',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '14px',
              fontSize: '15px',
              fontWeight: '600'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  // Upload State - Drag and Drop Card
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center">
          <button 
            onClick={() => navigateTo('home')} 
            className="mr-3 p-2 transition-all rounded-full"
            style={{ background: 'none', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Upload Medical Report</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* AI Info Banner */}
        <div className="p-4" style={{ 
          backgroundColor: '#F5F3FF',
          borderRadius: '16px',
          border: '2px solid #C4B5FD'
        }}>
          <div className="flex items-center mb-2">
            <Sparkles className="w-5 h-5 mr-2" style={{ color: '#8B5CF6' }} />
            <h5 style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: '600' }}>AI-Powered OCR Analysis</h5>
          </div>
          <p style={{ color: '#7C3AED', fontSize: '12px' }}>
            Automatically detects blood type, urgency level, hemoglobin values, and chronic conditions like Thalassemia from your report
          </p>
        </div>
        
        {/* Drag-and-Drop Card */}
        <div 
          className="p-8 flex flex-col items-center justify-center transition-all cursor-pointer"
          style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '2px dashed #C4B5FD',
            minHeight: '200px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#8B5CF6';
            e.currentTarget.style.backgroundColor = '#F5F3FF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#C4B5FD';
            e.currentTarget.style.backgroundColor = '#FFFFFF';
          }}
          onClick={() => setUploaded(true)}
        >
          <div className="p-4 mb-4" style={{ backgroundColor: '#F5F3FF', borderRadius: '16px' }}>
            <Upload className="w-12 h-12" style={{ color: '#8B5CF6' }} />
          </div>
          <h4 className="mb-2" style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>
            Drag & Drop Your Report
          </h4>
          <p className="mb-4" style={{ color: '#64748B', fontSize: '13px', textAlign: 'center' }}>
            or click to browse files
          </p>
          <span style={{ color: '#8B5CF6', fontSize: '12px' }}>
            PDF, JPG, PNG • Max 10MB
          </span>
        </div>
        
        {/* Upload Options */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setUploaded(true)}
            className="p-4 flex flex-col items-center justify-center transition-all"
            style={{ 
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '2px solid #E5E7EB',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#8B5CF6';
              e.currentTarget.style.backgroundColor = '#F5F3FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
          >
            <Camera className="w-8 h-8 mb-2" style={{ color: '#8B5CF6' }} />
            <span style={{ color: '#1F2937', fontSize: '13px', fontWeight: '500' }}>Take Photo</span>
          </button>
          
          <button
            onClick={() => setUploaded(true)}
            className="p-4 flex flex-col items-center justify-center transition-all"
            style={{ 
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '2px solid #E5E7EB',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#8B5CF6';
              e.currentTarget.style.backgroundColor = '#F5F3FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
          >
            <FileText className="w-8 h-8 mb-2" style={{ color: '#8B5CF6' }} />
            <span style={{ color: '#1F2937', fontSize: '13px', fontWeight: '500' }}>Browse Files</span>
          </button>
        </div>
        
        {/* Previous Reports - Expandable Cards */}
        <div>
          <h4 className="mb-3" style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Previous Reports
          </h4>
          <div className="space-y-2">
            {[
              { name: 'Blood Test Report', date: 'Dec 12, 2024', urgency: 'High', urgencyScore: 7 },
              { name: 'CBC Complete', date: 'Nov 15, 2024', urgency: 'Medium', urgencyScore: 5 },
              { name: 'Hemoglobin Test', date: 'Oct 20, 2024', urgency: 'Low', urgencyScore: 2 },
            ].map((report, idx) => (
              <div
                key={idx}
                className="p-3 flex items-center justify-between transition-all"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <div className="flex items-center">
                  <div className="p-2 mr-3" style={{ backgroundColor: '#F5F3FF', borderRadius: '10px' }}>
                    <FileText className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>
                      {report.name}
                    </p>
                    <p style={{ color: '#64748B', fontSize: '12px' }}>{report.date}</p>
                  </div>
                </div>
                <div className="px-3 py-1.5" style={{
                  backgroundColor: report.urgency === 'High' ? '#FEF2F2' : report.urgency === 'Medium' ? '#FFF7ED' : '#F0FDF4',
                  borderRadius: '10px'
                }}>
                  <span style={{
                    color: report.urgency === 'High' ? '#EF4444' : report.urgency === 'Medium' ? '#F97316' : '#10B981',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {report.urgency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
