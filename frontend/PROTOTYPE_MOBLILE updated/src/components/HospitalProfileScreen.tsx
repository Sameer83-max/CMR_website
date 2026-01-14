import React from 'react';
import { ChevronLeft, Building2, Phone, MapPin, Mail, Users, Settings, Shield, FileText, LogOut, ChevronRight, CheckCircle, Award, Calendar } from 'lucide-react';

interface HospitalProfileScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalProfileScreen({ navigateTo }: HospitalProfileScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header with Gradient */}
      <div className="px-6 pt-12 pb-20" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' }}>
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigateTo('hospital-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#FFFFFF' }} />
          </button>
          <h3 style={{ color: '#FFFFFF' }}>Hospital Profile</h3>
        </div>
        
        {/* Hospital Header */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '4px solid rgba(255,255,255,0.3)' }}>
            <Building2 className="w-12 h-12" style={{ color: '#FFFFFF' }} />
          </div>
          <h3 className="mb-1" style={{ color: '#FFFFFF' }}>City General Blood Bank</h3>
          <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>Hospital ID: HSP-2024-4521</p>
          <div className="flex items-center gap-2 px-3 py-1.5" style={{ borderRadius: '999px', backgroundColor: 'rgba(16,185,129,0.2)', border: '2px solid rgba(255,255,255,0.3)' }}>
            <CheckCircle className="w-4 h-4" style={{ color: '#FFFFFF' }} />
            <span style={{ color: '#FFFFFF' }}>NABH Accredited</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto -mt-12">
        {/* Stats Cards */}
        <div className="px-6 mb-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-5 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <FileText className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>856</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Units in Stock</p>
            </div>
            <div className="p-5 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <Users className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>34</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Requests Today</p>
            </div>
          </div>
        </div>
        
        {/* License Status Banner */}
        <div className="px-6 mb-5">
          <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #10B981', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <Shield className="w-6 h-6" style={{ color: '#10B981' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937' }}>License Status</p>
                  <p className="text-sm" style={{ color: '#10B981' }}>Active • Valid until Dec 2025</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5" style={{ color: '#9CA3AF' }} />
            </div>
          </div>
        </div>
        
        {/* Compliance Cards */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Compliance & Certifications</h5>
          <div className="space-y-3">
            <div className="p-4" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                    <Award className="w-5 h-5" style={{ color: '#10B981' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>NABH Accreditation</p>
                    <p className="text-sm" style={{ color: '#10B981' }}>Active</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                    <Shield className="w-5 h-5" style={{ color: '#10B981' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>NBTC Registration</p>
                    <p className="text-sm" style={{ color: '#10B981' }}>Valid</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                    <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>ISO 9001:2015</p>
                    <p className="text-sm" style={{ color: '#10B981' }}>Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hospital Details */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Hospital Details</h5>
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#3B82F6' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Address</p>
                  <p style={{ color: '#1F2937' }}>
                    123, Medical District, Sector 15<br />
                    Bangalore, Karnataka - 560001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <Phone className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Phone</p>
                  <p style={{ color: '#1F2937' }}>+91 080-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
                  <Mail className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Email</p>
                  <p style={{ color: '#1F2937' }}>bloodbank@citygen.hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Audit Timeline */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Recent Audits</h5>
          <div className="space-y-3">
            {[
              { date: 'Dec 10, 2024', type: 'Quality Audit', result: 'Passed', color: '#10B981' },
              { date: 'Nov 15, 2024', type: 'Safety Compliance', result: 'Passed', color: '#10B981' },
              { date: 'Oct 20, 2024', type: 'Inventory Check', result: 'Passed', color: '#10B981' }
            ].map((audit, idx) => (
              <div key={idx} className="relative">
                {idx < 2 && (
                  <div className="absolute left-6 top-14 w-0.5 h-8" style={{ backgroundColor: '#E5E7EB' }}></div>
                )}
                <div className="p-4 flex items-start gap-3" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${audit.color}15` }}>
                    <FileText className="w-5 h-5" style={{ color: audit.color }} />
                  </div>
                  <div className="flex-1">
                    <p style={{ color: '#1F2937' }}>{audit.type}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{audit.date}</p>
                  </div>
                  <span className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: `${audit.color}15`, color: audit.color, fontSize: '12px' }}>
                    {audit.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* App Info */}
        <div className="px-6 mb-4">
          <div className="p-3 text-center" style={{ borderRadius: '12px', backgroundColor: '#F5F5F5' }}>
            <p className="text-sm mb-1" style={{ color: '#6B7280' }}>HAEMOLINK Hospital App</p>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>Version 2.4.1</p>
          </div>
        </div>
        
        {/* Logout Button - Destructive Style */}
        <div className="px-6 pb-8">
          <button 
            className="w-full py-4 flex items-center justify-center gap-2" 
            style={{ borderRadius: '16px', border: '2px solid #EF4444', backgroundColor: '#FFFFFF', color: '#EF4444' }}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}