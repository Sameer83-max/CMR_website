import React from 'react';
import { ChevronLeft, CheckCircle, Upload, Shield, FileText, Users, AlertCircle, Clock } from 'lucide-react';

interface HospitalComplianceScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalComplianceScreen({ navigateTo }: HospitalComplianceScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('hospital-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#3B82F6' }}>Verification & Compliance</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Hospital KYC Status */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #10B981', background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)', boxShadow: '0 4px 16px rgba(16,185,129,0.15)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                <CheckCircle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
              <h5 style={{ color: '#10B981' }}>Hospital KYC Status</h5>
            </div>
            <span className="px-4 py-1.5" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF' }}>
              Verified
            </span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF', border: '1px solid #10B981' }}>
              <span style={{ color: '#6B7280' }}>Hospital Registration:</span>
              <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF', border: '1px solid #10B981' }}>
              <span style={{ color: '#6B7280' }}>Blood Bank License:</span>
              <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FFFFFF', border: '1px solid #10B981' }}>
              <span style={{ color: '#6B7280' }}>NABH Accreditation:</span>
              <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
            </div>
          </div>
        </div>
        
        {/* License Upload */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>License & Certifications</h5>
          <div className="space-y-3">
            {[
              { name: 'Blood Bank License', status: 'Valid', expiry: '15 Dec 2025', color: '#10B981' },
              { name: 'NABH Accreditation', status: 'Valid', expiry: '20 Jan 2026', color: '#10B981' },
              { name: 'ISO Certification', status: 'Valid', expiry: '10 Mar 2025', color: '#10B981' },
            ].map((license, idx) => (
              <div
                key={idx}
                className="p-4"
                style={{ borderRadius: '12px', border: `2px solid ${license.color}20`, backgroundColor: `${license.color}10` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p style={{ color: '#1F2937' }}>{license.name}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Expires: {license.expiry}</p>
                  </div>
                  <span className="px-3 py-1.5 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: license.color, color: '#FFFFFF' }}>
                    <CheckCircle className="w-3 h-3" />
                    {license.status}
                  </span>
                </div>
                <button
                  className="flex items-center gap-2 text-sm px-3 py-2"
                  style={{ borderRadius: '8px', backgroundColor: '#FFFFFF', color: license.color }}
                >
                  <Upload className="w-4 h-4" />
                  Update Document
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Staff Identity Verification */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Staff Identity Verification</h5>
          <div className="space-y-3">
            {[
              { name: 'Dr. Rajesh Sharma', role: 'Blood Bank Officer', status: 'Verified' },
              { name: 'Nurse Priya Singh', role: 'Lab Technician', status: 'Verified' },
              { name: 'Mr. Amit Kumar', role: 'Store Manager', status: 'Pending' },
            ].map((staff, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3"
                style={{ borderRadius: '10px', border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: staff.status === 'Verified' ? '#10B981' : '#F97316' }}>
                    <Users className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>{staff.name}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{staff.role}</p>
                  </div>
                </div>
                <span
                  className="px-3 py-1.5 text-xs flex items-center gap-1"
                  style={{
                    borderRadius: '999px',
                    backgroundColor: staff.status === 'Verified' ? '#F0FDF4' : '#FFF7ED',
                    color: staff.status === 'Verified' ? '#10B981' : '#F97316'
                  }}
                >
                  {staff.status === 'Verified' && <CheckCircle className="w-3 h-3" />}
                  {staff.status === 'Pending' && <Clock className="w-3 h-3" />}
                  {staff.status}
                </span>
              </div>
            ))}
          </div>
          <button
            className="w-full py-3 mt-4"
            style={{ borderRadius: '12px', border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#3B82F6' }}
          >
            Add New Staff Member
          </button>
        </div>
        
        {/* Audit Log Preview */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Audit Log (Recent)</h5>
          <div className="space-y-2">
            {[
              { action: 'Blood unit logged', user: 'Dr. Sharma', time: '2 hours ago' },
              { action: 'Request approved', user: 'Nurse Priya', time: '3 hours ago' },
              { action: 'Transfusion completed', user: 'Dr. Kumar', time: '5 hours ago' },
              { action: 'Inventory updated', user: 'Store Manager', time: '6 hours ago' },
            ].map((log, idx) => (
              <div
                key={idx}
                className="p-3"
                style={{ borderRadius: '10px', border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}
              >
                <div className="flex justify-between mb-1">
                  <span style={{ color: '#1F2937' }}>{log.action}</span>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>{log.time}</span>
                </div>
                <p className="text-sm" style={{ color: '#6B7280' }}>by {log.user}</p>
              </div>
            ))}
          </div>
          <button
            className="w-full py-3 mt-4"
            style={{ borderRadius: '12px', border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#3B82F6' }}
          >
            View Full Audit Log
          </button>
        </div>
        
        {/* Regulatory Compliance Checklist */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Regulatory Compliance</h5>
          <div className="space-y-2">
            {[
              { item: 'Monthly inventory audit', status: 'Complete', date: '1 Dec 2024', color: '#10B981' },
              { item: 'Staff training records', status: 'Complete', date: '28 Nov 2024', color: '#10B981' },
              { item: 'Equipment calibration', status: 'Due', date: '20 Dec 2024', color: '#F97316' },
              { item: 'Quality control testing', status: 'Complete', date: '10 Dec 2024', color: '#10B981' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3"
                style={{ borderRadius: '10px', border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}
              >
                <div>
                  <p style={{ color: '#1F2937' }}>{item.item}</p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>{item.date}</p>
                </div>
                <span
                  className="px-3 py-1.5 text-xs"
                  style={{
                    borderRadius: '999px',
                    backgroundColor: `${item.color}20`,
                    color: item.color
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Inspection Reports */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Inspection Reports</h5>
          <div className="space-y-3">
            {[
              { type: 'State Health Dept', date: '15 Nov 2024', result: 'Passed' },
              { type: 'NABH Surveillance', date: '5 Oct 2024', result: 'Passed' },
            ].map((report, idx) => (
              <div
                key={idx}
                className="p-4"
                style={{ borderRadius: '12px', border: '2px solid #10B98120', backgroundColor: '#F0FDF4' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p style={{ color: '#1F2937' }}>{report.type}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{report.date}</p>
                  </div>
                  <span className="px-3 py-1.5 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF' }}>
                    <CheckCircle className="w-3 h-3" />
                    {report.result}
                  </span>
                </div>
                <button className="flex items-center gap-2 text-sm px-3 py-2" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF', color: '#10B981' }}>
                  <FileText className="w-4 h-4" />
                  View Report
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Data Privacy Compliance */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #8B5CF6', background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)', boxShadow: '0 4px 16px rgba(139,92,246,0.15)' }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#8B5CF6' }}>
              <Shield className="w-6 h-6" style={{ color: '#FFFFFF' }} />
            </div>
            <div>
              <h6 className="mb-3" style={{ color: '#8B5CF6' }}>Data Privacy & Security</h6>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2" style={{ color: '#6B7280' }}>
                  <CheckCircle className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                  <span>Patient data encrypted</span>
                </li>
                <li className="flex items-center gap-2" style={{ color: '#6B7280' }}>
                  <CheckCircle className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                  <span>Access logs maintained</span>
                </li>
                <li className="flex items-center gap-2" style={{ color: '#6B7280' }}>
                  <CheckCircle className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                  <span>HIPAA compliant</span>
                </li>
                <li className="flex items-center gap-2" style={{ color: '#6B7280' }}>
                  <CheckCircle className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}