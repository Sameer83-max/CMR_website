import React from 'react';
import { ChevronLeft, MessageSquare, Calculator, QrCode, Phone, Download, CheckCircle } from 'lucide-react';

interface DonorOfflineScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorOfflineScreen({ navigateTo }: DonorOfflineScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Offline Support</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* SMS Alert Setup */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
              <MessageSquare className="w-6 h-6" style={{ color: '#10B981' }} />
            </div>
            <div className="flex-1">
              <h5 className="mb-2" style={{ color: '#1F2937' }}>SMS Alert System</h5>
              <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                Receive blood request alerts via SMS when offline
              </p>
              
              <div className="p-4 mb-4" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
                <h6 className="mb-3 text-sm" style={{ color: '#374151' }}>SMS Commands</h6>
                <div className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#10B981' }} />
                    <p><span style={{ color: '#1F2937' }}>ACCEPT &lt;request-id&gt;</span> - Accept request</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                    <p><span style={{ color: '#1F2937' }}>REJECT &lt;request-id&gt;</span> - Reject request</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#3B82F6' }} />
                    <p><span style={{ color: '#1F2937' }}>STATUS</span> - Check eligibility</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F97316' }} />
                    <p><span style={{ color: '#1F2937' }}>HELP</span> - Get all commands</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4" style={{ borderRadius: '12px', border: '2px solid #10B981', backgroundColor: '#F0FDF4' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                  <span className="text-sm" style={{ color: '#059669' }}>SMS Alerts Enabled</span>
                </div>
                <div className="w-12 h-6 rounded-full p-1" style={{ backgroundColor: '#10B981' }}>
                  <div className="w-4 h-4 rounded-full bg-white ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Offline Eligibility Calculator */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <Calculator className="w-6 h-6" style={{ color: '#3B82F6' }} />
            </div>
            <div className="flex-1">
              <h5 className="mb-2" style={{ color: '#1F2937' }}>Eligibility Calculator</h5>
              <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                Calculate your next eligible donation date
              </p>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                    Last Donation Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3"
                    style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                    Blood Component
                  </label>
                  <select
                    className="w-full p-3"
                    style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                  >
                    <option>Whole Blood (90 days)</option>
                    <option>Platelets (7 days)</option>
                    <option>Plasma (28 days)</option>
                  </select>
                </div>
                
                <button className="w-full py-3" style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 12px rgba(59,130,246,0.3)' }}>
                  Calculate Date
                </button>
                
                <div className="p-4" style={{ borderRadius: '12px', backgroundColor: '#F0FDF4', border: '2px solid #10B981' }}>
                  <p className="text-sm mb-1" style={{ color: '#059669' }}>Next eligible date:</p>
                  <p style={{ color: '#10B981', fontSize: '20px' }}>18 Dec 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* QR Check-in Guide */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
              <QrCode className="w-6 h-6" style={{ color: '#8B5CF6' }} />
            </div>
            <div className="flex-1">
              <h5 className="mb-2" style={{ color: '#1F2937' }}>QR Check-in Guide</h5>
              <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                Use QR code for quick check-in at donation centers
              </p>
              
              <div className="w-36 h-36 mx-auto mb-4 p-4" style={{ borderRadius: '16px', border: '2px solid #8B5CF6', backgroundColor: '#FAF5FF', boxShadow: '0 4px 12px rgba(139,92,246,0.15)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <QrCode className="w-20 h-20" style={{ color: '#8B5CF6' }} />
                </div>
              </div>
              
              <div className="p-4 mb-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
                <p className="text-sm mb-2" style={{ color: '#374151' }}>How to use:</p>
                <ol className="text-sm space-y-1" style={{ color: '#6B7280' }}>
                  <li>1. Save QR code to your phone</li>
                  <li>2. Show at reception desk</li>
                  <li>3. Staff will scan for quick check-in</li>
                  <li>4. No internet required</li>
                </ol>
              </div>
              
              <button className="w-full py-3 flex items-center justify-center gap-2" style={{ borderRadius: '12px', border: '2px solid #8B5CF6', backgroundColor: '#FFFFFF', color: '#8B5CF6' }}>
                <Download className="w-5 h-5" />
                Download QR Code
              </button>
            </div>
          </div>
        </div>
        
        {/* USSD Information */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
              <Phone className="w-6 h-6" style={{ color: '#F97316' }} />
            </div>
            <div className="flex-1">
              <h5 className="mb-2" style={{ color: '#1F2937' }}>USSD Quick Access</h5>
              <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                Access donor services via USSD (works on any phone)
              </p>
              
              <div className="p-5 mb-4" style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                <p className="text-center text-2xl" style={{ color: '#FFFFFF' }}>*456*123#</p>
              </div>
              
              <div className="p-4" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
                <h6 className="mb-3 text-sm" style={{ color: '#374151' }}>USSD Menu Options</h6>
                <div className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
                  <p>1 - Check eligibility status</p>
                  <p>2 - View pending requests</p>
                  <p>3 - Find nearest blood bank</p>
                  <p>4 - Emergency blood request</p>
                  <p>5 - Donation history</p>
                  <p>0 - Help & support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Helpline */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #EF4444', background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)', boxShadow: '0 4px 16px rgba(239,68,68,0.15)' }}>
          <h5 className="mb-2" style={{ color: '#EF4444' }}>24/7 Helpline</h5>
          <p className="mb-4" style={{ color: '#991B1B' }}>
            Call for immediate assistance
          </p>
          <button className="w-full py-4 flex items-center justify-center gap-2" style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 12px rgba(239,68,68,0.3)' }}>
            <Phone className="w-5 h-5" />
            1800-123-4567
          </button>
        </div>
      </div>
    </div>
  );
}