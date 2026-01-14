import React from 'react';
import { ChevronLeft, Heart, Download, TrendingUp, Calendar, Award, FileText, CheckCircle } from 'lucide-react';

interface DonorHistoryDashboardScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorHistoryDashboardScreen({ navigateTo }: DonorHistoryDashboardScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Donation History</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 text-center" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <Heart className="w-7 h-7" style={{ color: '#FFFFFF' }} fill="#FFFFFF" />
            </div>
            <p style={{ color: '#FFFFFF', fontSize: '28px' }}>12</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Total Donations</p>
          </div>
          <div className="p-5 text-center" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', boxShadow: '0 8px 24px rgba(59,130,246,0.3)' }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <TrendingUp className="w-7 h-7" style={{ color: '#FFFFFF' }} />
            </div>
            <p style={{ color: '#FFFFFF', fontSize: '28px' }}>36</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Lives Saved</p>
          </div>
        </div>
        
        {/* Eligibility Pattern Graph */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Donation Pattern (2024)</h5>
          
          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between h-32 mb-4 p-4" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
            {[
              { month: 'Jan', count: 1, height: 33 },
              { month: 'Feb', count: 0, height: 0 },
              { month: 'Mar', count: 0, height: 0 },
              { month: 'Apr', count: 1, height: 33 },
              { month: 'May', count: 0, height: 0 },
              { month: 'Jun', count: 0, height: 0 },
              { month: 'Jul', count: 1, height: 33 },
              { month: 'Aug', count: 0, height: 0 },
              { month: 'Sep', count: 0, height: 0 },
              { month: 'Oct', count: 1, height: 33 },
              { month: 'Nov', count: 1, height: 33 },
              { month: 'Dec', count: 0, height: 0 },
            ].map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="w-full flex items-end justify-center mb-2">
                  <div
                    style={{
                      width: '60%',
                      height: bar.height > 0 ? `${bar.height}%` : '4px',
                      borderRadius: '4px 4px 0 0',
                      background: bar.height > 0 ? 'linear-gradient(180deg, #10B981 0%, #059669 100%)' : '#E5E7EB'
                    }}
                  />
                </div>
                <span className="text-xs" style={{ color: '#6B7280' }}>{bar.month}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center p-3" style={{ borderRadius: '10px', backgroundColor: '#F0FDF4' }}>
            <span className="text-sm" style={{ color: '#059669' }}>
              Average: 1 donation every 90 days
            </span>
          </div>
        </div>
        
        {/* Certificates */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Award className="w-5 h-5" style={{ color: '#F97316' }} />
              </div>
              <h5 style={{ color: '#374151' }}>Certificates</h5>
            </div>
            <button className="p-2 rounded-full" style={{ backgroundColor: '#F5F5F5' }}>
              <Download className="w-5 h-5" style={{ color: '#6B7280' }} />
            </button>
          </div>
          <div className="space-y-3">
            {[
              { title: '10 Donations Milestone', date: 'Nov 2024', color: '#F97316' },
              { title: 'Consistent Donor 2024', date: 'Dec 2024', color: '#10B981' },
              { title: 'Emergency Response', date: 'Oct 2024', color: '#EF4444' },
            ].map((cert, idx) => (
              <button
                key={idx}
                className="w-full p-4 flex items-center justify-between text-left"
                style={{ borderRadius: '12px', border: `2px solid ${cert.color}20`, backgroundColor: `${cert.color}10` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: cert.color }}>
                    <Award className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>{cert.title}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{cert.date}</p>
                  </div>
                </div>
                <Download className="w-5 h-5" style={{ color: cert.color }} />
              </button>
            ))}
          </div>
        </div>
        
        {/* Donation History */}
        <div>
          <h5 className="mb-3 px-1" style={{ color: '#374151' }}>Recent Donations</h5>
          <div className="space-y-3">
            {[
              {
                date: '03 Nov 2024',
                location: 'City General Hospital',
                component: 'Whole Blood',
                volume: '450 ml',
                status: 'Completed'
              },
              {
                date: '05 Aug 2024',
                location: 'Apollo Blood Bank',
                component: 'Whole Blood',
                volume: '450 ml',
                status: 'Completed'
              },
              {
                date: '10 May 2024',
                location: 'RedCross Center',
                component: 'Whole Blood',
                volume: '450 ml',
                status: 'Completed'
              },
              {
                date: '15 Feb 2024',
                location: 'Community Camp',
                component: 'Whole Blood',
                volume: '450 ml',
                status: 'Completed'
              },
            ].map((donation, idx) => (
              <div
                key={idx}
                className="p-4"
                style={{ borderRadius: '14px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p style={{ color: '#1F2937' }}>{donation.component} - {donation.volume}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{donation.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1" style={{ borderRadius: '999px', backgroundColor: '#F0FDF4' }}>
                    <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: '#10B981' }}>{donation.status}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2" style={{ borderRadius: '8px', backgroundColor: '#FAFAFA' }}>
                  <Calendar className="w-4 h-4" style={{ color: '#6B7280' }} />
                  <span className="text-sm" style={{ color: '#6B7280' }}>{donation.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Medical History Upload */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <FileText className="w-5 h-5" style={{ color: '#3B82F6' }} />
            </div>
            <h5 style={{ color: '#374151' }}>Medical History</h5>
          </div>
          <div className="space-y-2 mb-4">
            {[
              { name: 'Health Questionnaire 2024', date: '01 Dec 2024' },
              { name: 'Blood Test Report', date: '15 Nov 2024' },
              { name: 'Vaccination Record', date: '20 Oct 2024' },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="p-3 flex items-center justify-between"
                style={{ borderRadius: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" style={{ color: '#6B7280' }} />
                  <span className="text-sm" style={{ color: '#1F2937' }}>{doc.name}</span>
                </div>
                <span className="text-xs" style={{ color: '#6B7280' }}>{doc.date}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-3 flex items-center justify-center gap-2" style={{ borderRadius: '12px', border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#3B82F6' }}>
            <Download className="w-5 h-5" />
            <span>Upload Document</span>
          </button>
        </div>
      </div>
    </div>
  );
}