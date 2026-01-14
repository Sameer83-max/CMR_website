import React from 'react';
import { ChevronLeft, User, Phone, MapPin, Bike, Calendar, FileText, Shield, LogOut, ChevronRight, Award, CheckCircle2 } from 'lucide-react';

interface RiderProfileScreenProps {
  navigateTo: (screen: string) => void;
}

export function RiderProfileScreen({ navigateTo }: RiderProfileScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header with Gradient */}
      <div className="px-6 pt-12 pb-20" style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}>
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#FFFFFF' }} />
          </button>
          <h3 style={{ color: '#FFFFFF' }}>Profile</h3>
        </div>
        
        {/* Profile Avatar & Name */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '4px solid rgba(255,255,255,0.3)' }}>
            <User className="w-12 h-12" style={{ color: '#FFFFFF' }} />
          </div>
          <h3 className="mb-1" style={{ color: '#FFFFFF' }}>Rajesh Kumar</h3>
          <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>Rider ID: RDR-2451</p>
          <div className="flex items-center gap-2 px-3 py-1.5" style={{ borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)' }}>
            <Bike className="w-4 h-4" style={{ color: '#FFFFFF' }} />
            <span style={{ color: '#FFFFFF' }}>Active Rider</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto -mt-12">
        {/* Performance Stats */}
        <div className="px-6 mb-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-5 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Bike className="w-5 h-5" style={{ color: '#F97316' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>156</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Deliveries</p>
            </div>
            <div className="p-5 text-center" style={{ borderRadius: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Award className="w-5 h-5" style={{ color: '#F97316' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '20px' }}>4.9</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Rating</p>
            </div>
          </div>
        </div>
        
        {/* Compliance Cards */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Compliance Status</h5>
          <div className="space-y-3">
            <div className="p-4" style={{ borderRadius: '14px', borderLeft: '4px solid #10B981', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#10B981' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>KYC Verification</p>
                    <p className="text-sm" style={{ color: '#10B981' }}>Verified</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4" style={{ borderRadius: '14px', borderLeft: '4px solid #10B981', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                    <FileText className="w-5 h-5" style={{ color: '#10B981' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>Training Certificate</p>
                    <p className="text-sm" style={{ color: '#10B981' }}>Valid until Dec 2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4" style={{ borderRadius: '14px', borderLeft: '4px solid #10B981', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                    <Shield className="w-5 h-5" style={{ color: '#10B981' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>Health Screening</p>
                    <p className="text-sm" style={{ color: '#10B981' }}>Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personal Information */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Personal Information</h5>
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                  <Phone className="w-5 h-5" style={{ color: '#3B82F6' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Phone Number</p>
                  <p style={{ color: '#1F2937' }}>+91 ****-**-6789</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Assigned Region</p>
                  <p style={{ color: '#1F2937' }}>Central Bangalore</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
                  <Calendar className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Member Since</p>
                  <p style={{ color: '#1F2937' }}>January 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vehicle Details */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Vehicle Details</h5>
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Bike className="w-6 h-6" style={{ color: '#F97316' }} />
              </div>
              <div>
                <p style={{ color: '#1F2937' }}>Two-Wheeler</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>Honda Activa</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between p-3" style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}>
                <span className="text-sm" style={{ color: '#6B7280' }}>Registration:</span>
                <span className="text-sm" style={{ color: '#1F2937' }}>KA-01-AB-1234</span>
              </div>
              <div className="flex justify-between p-3" style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}>
                <span className="text-sm" style={{ color: '#6B7280' }}>Cold Box ID:</span>
                <span className="text-sm" style={{ color: '#1F2937' }}>CB-2451</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certificates Section */}
        <div className="px-6 mb-5">
          <h5 className="mb-3" style={{ color: '#374151' }}>Certificates</h5>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 text-center" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <FileText className="w-8 h-8 mx-auto mb-2" style={{ color: '#FFFFFF' }} />
              <p className="text-sm" style={{ color: '#FFFFFF' }}>Training</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>2024</p>
            </div>
            <div className="p-4 text-center" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <Award className="w-8 h-8 mx-auto mb-2" style={{ color: '#FFFFFF' }} />
              <p className="text-sm" style={{ color: '#FFFFFF' }}>Excellence</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>2024</p>
            </div>
          </div>
        </div>
        
        {/* App Info */}
        <div className="px-6 mb-4">
          <div className="p-3 text-center" style={{ borderRadius: '12px', backgroundColor: '#F5F5F5' }}>
            <p className="text-sm mb-1" style={{ color: '#6B7280' }}>HAEMOLINK Rider App</p>
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