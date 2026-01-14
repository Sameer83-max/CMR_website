import React from 'react';
import { ChevronLeft, Wifi, QrCode, MessageSquare, Phone, RefreshCw, CheckCircle, Database } from 'lucide-react';

interface HospitalOfflineScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalOfflineScreen({ navigateTo }: HospitalOfflineScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('hospital-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#3B82F6' }}>Offline Operations</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Offline Mode Status */}
        <div className="p-5 text-center" style={{ borderRadius: '16px', borderLeft: '4px solid #3B82F6', background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)', boxShadow: '0 4px 16px rgba(59,130,246,0.15)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
            <Wifi className="w-8 h-8" style={{ color: '#3B82F6' }} />
          </div>
          <h4 className="mb-2" style={{ color: '#1F2937' }}>Offline Operations Available</h4>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Continue critical operations even without internet
          </p>
        </div>
        
        {/* Local Server Sync */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <RefreshCw className="w-6 h-6" style={{ color: '#10B981' }} />
              </div>
              <h5 style={{ color: '#374151' }}>Local Server Sync</h5>
            </div>
            <span className="px-3 py-1.5 text-xs flex items-center gap-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', color: '#FFFFFF' }}>
              <CheckCircle className="w-3 h-3" />
              Active
            </span>
          </div>
          
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between items-center p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" style={{ color: '#6B7280' }} />
                <span style={{ color: '#6B7280' }}>Local Database:</span>
              </div>
              <span style={{ color: '#10B981' }}>Connected</span>
            </div>
            <div className="flex justify-between p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Last Sync:</span>
              <span style={{ color: '#1F2937' }}>5 minutes ago</span>
            </div>
            <div className="flex justify-between p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#6B7280' }}>Pending Updates:</span>
              <span style={{ color: '#10B981' }}>0</span>
            </div>
          </div>
          
          <button
            className="w-full py-3"
            style={{ borderRadius: '12px', border: '2px solid #10B981', backgroundColor: '#FFFFFF', color: '#10B981' }}
          >
            Sync Now
          </button>
        </div>
        
        {/* QR-Only Operations */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139,92,246,0.1)' }}>
              <QrCode className="w-6 h-6" style={{ color: '#8B5CF6' }} />
            </div>
            <h5 style={{ color: '#374151' }}>QR-Only Operations</h5>
          </div>
          
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
            Use QR codes for critical operations when offline:
          </p>
          
          <div className="space-y-3 text-sm">
            <div className="p-4" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <h6 className="mb-2" style={{ color: '#1F2937' }}>Blood Unit Logging</h6>
              <p style={{ color: '#6B7280' }}>Scan blood bag QR → Data stored locally → Auto-sync when online</p>
            </div>
            
            <div className="p-4" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <h6 className="mb-2" style={{ color: '#1F2937' }}>Request Verification</h6>
              <p style={{ color: '#6B7280' }}>Scan patient QR → Verify from local cache → Update status offline</p>
            </div>
            
            <div className="p-4" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <h6 className="mb-2" style={{ color: '#1F2937' }}>Rider Handover</h6>
              <p style={{ color: '#6B7280' }}>Generate offline OTP → Verify via QR → Log to local database</p>
            </div>
          </div>
        </div>
        
        {/* SMS-Based Updates */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
              <MessageSquare className="w-6 h-6" style={{ color: '#10B981' }} />
            </div>
            <h5 style={{ color: '#374151' }}>SMS-Based Updates</h5>
          </div>
          
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
            Send status updates via SMS when internet is unavailable:
          </p>
          
          <div className="space-y-2 text-sm">
            <div className="p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <p className="mb-1" style={{ color: '#1F2937' }}>Request Status:</p>
              <p style={{ color: '#6B7280' }}>Text "STATUS [RequestID]" to 1800-BLOOD-01</p>
            </div>
            
            <div className="p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <p className="mb-1" style={{ color: '#1F2937' }}>Unit Ready:</p>
              <p style={{ color: '#6B7280' }}>Text "READY [UnitID]" to same number</p>
            </div>
            
            <div className="p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
              <p className="mb-1" style={{ color: '#1F2937' }}>Emergency Alert:</p>
              <p style={{ color: '#6B7280' }}>Text "EMERGENCY [BloodGroup]" for urgent requests</p>
            </div>
          </div>
        </div>
        
        {/* IVR Status Check */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
              <Phone className="w-6 h-6" style={{ color: '#F97316' }} />
            </div>
            <h5 style={{ color: '#374151' }}>IVR-Based Status Check</h5>
          </div>
          
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
            Check inventory and request status via phone:
          </p>
          
          <div className="p-4 mb-4" style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            <div className="text-center">
              <p className="mb-2 text-xl" style={{ color: '#FFFFFF' }}>1800-BLOOD-STATUS</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Available 24/7</p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
            <p style={{ color: '#6B7280' }}>Press 1: Check inventory status</p>
            <p style={{ color: '#6B7280' }}>Press 2: Request status update</p>
            <p style={{ color: '#6B7280' }}>Press 3: Emergency blood request</p>
            <p style={{ color: '#6B7280' }}>Press 4: Connect to support</p>
          </div>
        </div>
        
        {/* Offline Capabilities */}
        <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #10B981', backgroundColor: '#F0FDF4', boxShadow: '0 4px 16px rgba(16,185,129,0.15)' }}>
          <h6 className="mb-4" style={{ color: '#10B981' }}>What Works Offline</h6>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2" style={{ color: '#059669' }}>
              <CheckCircle className="w-4 h-4" />
              <span>Blood unit scanning & logging</span>
            </li>
            <li className="flex items-center gap-2" style={{ color: '#059669' }}>
              <CheckCircle className="w-4 h-4" />
              <span>Inventory viewing (last synced data)</span>
            </li>
            <li className="flex items-center gap-2" style={{ color: '#059669' }}>
              <CheckCircle className="w-4 h-4" />
              <span>Request verification</span>
            </li>
            <li className="flex items-center gap-2" style={{ color: '#059669' }}>
              <CheckCircle className="w-4 h-4" />
              <span>Crossmatch checks (cached data)</span>
            </li>
            <li className="flex items-center gap-2" style={{ color: '#059669' }}>
              <CheckCircle className="w-4 h-4" />
              <span>OTP generation for handovers</span>
            </li>
            <li className="flex items-center gap-2" style={{ color: '#059669' }}>
              <CheckCircle className="w-4 h-4" />
              <span>Basic reporting</span>
            </li>
          </ul>
        </div>
        
        {/* Auto-Sync Settings */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Auto-Sync Settings</h5>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#1F2937' }}>Auto-sync when online</span>
              <div className="w-12 h-6 rounded-full p-1" style={{ backgroundColor: '#10B981' }}>
                <div className="w-4 h-4 rounded-full bg-white ml-auto" />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '10px', backgroundColor: '#FAFAFA' }}>
              <span style={{ color: '#1F2937' }}>Sync over WiFi only</span>
              <div className="w-12 h-6 rounded-full p-1" style={{ backgroundColor: '#E5E7EB' }}>
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}