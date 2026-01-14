import React, { useState } from 'react';
import { ChevronLeft, QrCode, RefreshCw, Calendar, Droplet, Package } from 'lucide-react';

interface HospitalInventoryLoggingScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalInventoryLoggingScreen({ navigateTo }: HospitalInventoryLoggingScreenProps) {
  const [showManualEntry, setShowManualEntry] = useState(false);

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('hospital-inventory')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#3B82F6' }}>Log Blood Bag</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* QR Scanner */}
        {!showManualEntry && (
          <>
            <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h5 className="mb-4" style={{ color: '#374151' }}>Scan Blood Bag QR Code</h5>
              <div className="h-64 flex items-center justify-center mb-4 p-6" style={{ borderRadius: '16px', border: '3px dashed #3B82F6', backgroundColor: '#EFF6FF' }}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                    <QrCode className="w-10 h-10" style={{ color: '#3B82F6' }} />
                  </div>
                  <p style={{ color: '#6B7280' }}>Position QR code within frame</p>
                  <p className="text-sm mt-2" style={{ color: '#3B82F6' }}>Auto-detection active</p>
                </div>
              </div>
              <button
                onClick={() => setShowManualEntry(true)}
                className="w-full py-3"
                style={{ borderRadius: '12px', border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#3B82F6' }}
              >
                Enter Details Manually
              </button>
            </div>
            
            {/* Auto-sync Indicator */}
            <div className="p-4 flex items-center justify-center gap-2" style={{ borderRadius: '12px', border: '2px solid #10B981', backgroundColor: '#F0FDF4' }}>
              <RefreshCw className="w-5 h-5" style={{ color: '#10B981' }} />
              <span className="text-sm" style={{ color: '#10B981' }}>Auto-sync enabled</span>
            </div>
          </>
        )}
        
        {/* Manual Entry Form */}
        {showManualEntry && (
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-5">
              <h5 style={{ color: '#3B82F6' }}>Manual Entry</h5>
              <button
                onClick={() => setShowManualEntry(false)}
                className="text-sm px-3 py-1.5"
                style={{ borderRadius: '8px', backgroundColor: '#EFF6FF', color: '#3B82F6' }}
              >
                Scan Instead
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Blood Group */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Blood Group *
                </label>
                <select
                  className="w-full p-3"
                  style={{ borderRadius: '10px', border: '2px solid #3B82F6', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                >
                  <option>Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
              
              {/* Component Type */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Component Type *
                </label>
                <select
                  className="w-full p-3"
                  style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                >
                  <option>Select Component</option>
                  <option>Whole Blood</option>
                  <option>RBC (Red Blood Cells)</option>
                  <option>Platelets</option>
                  <option>Plasma</option>
                  <option>Cryoprecipitate</option>
                </select>
              </div>
              
              {/* Subtype */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Subtype
                </label>
                <input
                  type="text"
                  placeholder="e.g., Single Donor Platelets"
                  className="w-full p-3"
                  style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                />
              </div>
              
              {/* Batch ID */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Batch ID *
                </label>
                <input
                  type="text"
                  placeholder="BAT-2024-XXXX"
                  className="w-full p-3"
                  style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                />
              </div>
              
              {/* Collection Date */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Collection Date *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full p-3 pr-12"
                    style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
              </div>
              
              {/* Expiry Date */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Expiry Date *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full p-3 pr-12"
                    style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
              </div>
              
              {/* Volume */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Volume (ml)
                </label>
                <input
                  type="number"
                  placeholder="450"
                  className="w-full p-3"
                  style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                />
              </div>
              
              {/* Storage Location */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#374151' }}>
                  Storage Location
                </label>
                <input
                  type="text"
                  placeholder="e.g., Rack A2, Shelf 3"
                  className="w-full p-3"
                  style={{ borderRadius: '10px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Summary Preview (when manual entry is filled) */}
        {showManualEntry && (
          <div className="p-5" style={{ borderRadius: '16px', borderLeft: '4px solid #3B82F6', backgroundColor: '#EFF6FF', boxShadow: '0 4px 16px rgba(59,130,246,0.15)' }}>
            <h6 className="mb-4" style={{ color: '#3B82F6' }}>Summary</h6>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                <span style={{ color: '#6B7280' }}>Blood Group:</span>
                <span style={{ color: '#1F2937' }}>B+</span>
              </div>
              <div className="flex justify-between p-2" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                <span style={{ color: '#6B7280' }}>Component:</span>
                <span style={{ color: '#1F2937' }}>Platelets</span>
              </div>
              <div className="flex justify-between p-2" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                <span style={{ color: '#6B7280' }}>Batch ID:</span>
                <span style={{ color: '#1F2937' }}>BAT-2024-7854</span>
              </div>
              <div className="flex justify-between p-2" style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}>
                <span style={{ color: '#6B7280' }}>Expiry:</span>
                <span style={{ color: '#1F2937' }}>18 Dec 2024</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Auto-sync Status */}
        <div className="p-4" style={{ borderRadius: '12px', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10B981' }} />
            <span className="text-sm" style={{ color: '#6B7280' }}>Auto-sync to central database enabled</span>
          </div>
        </div>
      </div>
      
      {/* Action Button */}
      <div className="p-6" style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #E5E7EB', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
        <button
          onClick={() => navigateTo('hospital-inventory')}
          className="w-full py-4"
          style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }}
        >
          Add to Inventory
        </button>
      </div>
    </div>
  );
}