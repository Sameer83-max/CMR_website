import React from 'react';
import { ChevronLeft, CheckCircle, Upload, Shield, FileText, Activity, AlertCircle, Award, Truck } from 'lucide-react';

interface RiderComplianceScreenProps {
  navigateTo: (screen: string) => void;
}

export function RiderComplianceScreen({ navigateTo }: RiderComplianceScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Safety & Compliance</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* KYC Status */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #10B981', background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)', boxShadow: '0 4px 16px rgba(16,185,129,0.15)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                <CheckCircle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
              <div>
                <h5 style={{ color: '#10B981' }}>KYC Status</h5>
                <p className="text-sm" style={{ color: '#059669' }}>Verified & Active</p>
              </div>
            </div>
            <span className="px-3 py-1.5 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF' }}>
              <CheckCircle className="w-3 h-3" />
              Verified
            </span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
              <span style={{ color: '#6B7280' }}>Aadhaar Verified</span>
              <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
              <span style={{ color: '#6B7280' }}>Driving License</span>
              <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
              <span style={{ color: '#6B7280' }}>Address Proof</span>
              <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
          </div>
        </div>
        
        {/* Police Verification */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <Shield className="w-6 h-6" style={{ color: '#3B82F6' }} />
              </div>
              <h5 style={{ color: '#374151' }}>Police Verification</h5>
            </div>
            <span className="px-3 py-1.5 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF' }}>
              <CheckCircle className="w-3 h-3" />
              Active
            </span>
          </div>
          
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Certificate ID:</span>
              <span style={{ color: '#1F2937' }}>PV-2024-7854</span>
            </div>
            <div className="flex justify-between p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Valid Until:</span>
              <span style={{ color: '#1F2937' }}>15 Dec 2025</span>
            </div>
          </div>
          
          <button
            className="w-full py-3 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#3B82F6' }}
          >
            <FileText className="w-4 h-4" />
            View Certificate
          </button>
        </div>
        
        {/* Health Screening */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
              <Activity className="w-6 h-6" style={{ color: '#8B5CF6' }} />
            </div>
            <h5 style={{ color: '#374151' }}>Health Screening</h5>
          </div>
          
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Last Checkup:</span>
              <span style={{ color: '#1F2937' }}>5 Dec 2024</span>
            </div>
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Next Due:</span>
              <span style={{ color: '#1F2937' }}>5 Mar 2025</span>
            </div>
          </div>
          
          <div className="p-4" style={{ borderRadius: '12px', border: '1px solid #8B5CF6', backgroundColor: '#FAF5FF' }}>
            <p className="text-sm" style={{ color: '#7C3AED' }}>
              Regular health screening ensures safe operations
            </p>
          </div>
        </div>
        
        {/* Vaccination Records */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Vaccination Records</h5>
          <div className="space-y-3">
            {[
              { name: 'COVID-19 Booster', date: 'Jan 2024', status: 'Complete' },
              { name: 'Tetanus', date: 'Jun 2023', status: 'Complete' },
              { name: 'Hepatitis B', date: 'Mar 2023', status: 'Complete' },
            ].map((vaccine, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3"
                style={{ borderRadius: '10px', border: '1px solid #10B98120', backgroundColor: '#F0FDF4' }}
              >
                <div>
                  <p style={{ color: '#1F2937' }}>{vaccine.name}</p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>{vaccine.date}</p>
                </div>
                <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Training Modules */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
              <Award className="w-6 h-6" style={{ color: '#F97316' }} />
            </div>
            <h5 style={{ color: '#374151' }}>Training & Certification</h5>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Blood Safety Handling', progress: 100, completed: true },
              { title: 'Cold Chain Management', progress: 100, completed: true },
              { title: 'Emergency Protocols', progress: 100, completed: true },
              { title: 'Customer Service', progress: 75, completed: false },
            ].map((course, idx) => (
              <div
                key={idx}
                className="p-4"
                style={{ borderRadius: '12px', border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p style={{ color: '#1F2937' }}>{course.title}</p>
                  {course.completed ? (
                    <span className="px-3 py-1 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF' }}>
                      <CheckCircle className="w-3 h-3" />
                      Complete
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs" style={{ borderRadius: '999px', backgroundColor: '#F97316', color: '#FFFFFF' }}>
                      {course.progress}%
                    </span>
                  )}
                </div>
                <div className="h-2" style={{ borderRadius: '999px', backgroundColor: '#E5E7EB' }}>
                  <div
                    className="h-full"
                    style={{ width: `${course.progress}%`, borderRadius: '999px', background: course.completed ? 'linear-gradient(90deg, #10B981 0%, #059669 100%)' : 'linear-gradient(90deg, #F97316 0%, #EA580C 100%)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Vehicle Documentation */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <Truck className="w-6 h-6" style={{ color: '#3B82F6' }} />
            </div>
            <h5 style={{ color: '#374151' }}>Vehicle Documentation</h5>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Vehicle Registration:</span>
              <span style={{ color: '#1F2937' }}>KA-01-AB-1234</span>
            </div>
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Insurance Valid Until:</span>
              <span style={{ color: '#1F2937' }}>20 Aug 2025</span>
            </div>
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#F0FDF4' }}>
              <span style={{ color: '#6B7280' }}>Pollution Certificate:</span>
              <span style={{ color: '#10B981' }}>Valid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}