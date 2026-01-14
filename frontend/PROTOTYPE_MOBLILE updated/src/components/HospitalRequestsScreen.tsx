import React, { useState } from 'react';
import { ChevronLeft, Filter, AlertCircle, Package, User, X, Sparkles, CheckCircle, XCircle } from 'lucide-react';

interface HospitalRequestsScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalRequestsScreen({ navigateTo }: HospitalRequestsScreenProps) {
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const requests = [
    {
      id: 'REQ-4521',
      patientId: 'PT-****-6789',
      component: 'Platelets',
      units: 6,
      urgency: 'Emergency',
      bloodGroup: 'B+',
      requestedAt: '10:45 AM',
      suggestedUnit: 'PLT-2024-4521',
      freshness: 95
    },
    {
      id: 'REQ-4520',
      patientId: 'PT-****-3456',
      component: 'RBC',
      units: 3,
      urgency: 'Urgent',
      bloodGroup: 'O+',
      requestedAt: '10:30 AM',
      suggestedUnit: 'RBC-2024-8876',
      freshness: 88
    },
    {
      id: 'REQ-4519',
      patientId: 'PT-****-1234',
      component: 'Plasma',
      units: 2,
      urgency: 'Normal',
      bloodGroup: 'A+',
      requestedAt: '9:15 AM',
      suggestedUnit: 'PLM-2024-5543',
      freshness: 92
    },
  ];

  // Request Detail Modal
  if (selectedRequest !== null) {
    const request = requests.find((r, idx) => idx === selectedRequest);
    if (!request) return null;

    const urgencyColor = request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#3B82F6';
    const urgencyBg = request.urgency === 'Emergency' ? '#FEF2F2' : request.urgency === 'Urgent' ? '#FFF7ED' : '#EFF6FF';

    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center justify-between">
            <h3 style={{ color: '#1F2937' }}>Request Details</h3>
            <button onClick={() => setSelectedRequest(null)} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <X className="w-5 h-5" style={{ color: '#6B7280' }} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Urgency Banner */}
          <div className="p-5" style={{ borderRadius: '16px', borderLeft: `4px solid ${urgencyColor}`, backgroundColor: urgencyBg, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: urgencyColor }}>
                  <AlertCircle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <h4 style={{ color: urgencyColor }}>{request.urgency} Request</h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Requested at {request.requestedAt}</p>
                </div>
              </div>
              <span className="px-4 py-2" style={{ borderRadius: '999px', backgroundColor: urgencyColor, color: '#FFFFFF', fontSize: '12px' }}>
                {request.urgency}
              </span>
            </div>
          </div>
          
          {/* Request Info */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Request Information</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                  <User className="w-5 h-5" style={{ color: '#3B82F6' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Patient ID</p>
                  <p style={{ color: '#1F2937' }}>{request.patientId}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
                  <Package className="w-5 h-5" style={{ color: '#EF4444' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Component Required</p>
                  <p style={{ color: '#1F2937' }}>{request.component} ({request.bloodGroup})</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <Package className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Units Required</p>
                  <p style={{ color: '#1F2937' }}>{request.units} units</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Suggested Unit */}
          <div className="p-5" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <Sparkles className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </div>
              <div className="flex-1">
                <h5 className="mb-1" style={{ color: '#FFFFFF' }}>AI Suggested Unit</h5>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Best match based on freshness & compatibility</p>
              </div>
            </div>
            
            <div className="p-4" style={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <div className="flex items-center justify-between mb-2">
                <p style={{ color: '#FFFFFF' }}>{request.suggestedUnit}</p>
                <span className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF', fontSize: '12px' }}>
                  {request.freshness}% Fresh
                </span>
              </div>
              <div className="h-2" style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '999px', overflow: 'hidden' }}>
                <div className="h-full" style={{ width: `${request.freshness}%`, backgroundColor: '#FFFFFF', borderRadius: '999px' }}></div>
              </div>
            </div>
          </div>
          
          {/* Inventory Check */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#F0FDF4', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6" style={{ color: '#10B981' }} />
              <div>
                <p style={{ color: '#1F2937' }}>Stock Available</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>12 units of {request.component} ({request.bloodGroup}) in inventory</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => navigateTo('hospital-prepare-unit')}
            className="w-full py-4"
            style={{ borderRadius: '16px', backgroundColor: '#10B981', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(16,185,129,0.3)' }}
          >
            Accept & Prepare Unit
          </button>
          <button
            onClick={() => setSelectedRequest(null)}
            className="w-full py-4"
            style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
          >
            Decline Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('hospital-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Incoming Requests</h3>
          </div>
          <span className="px-4 py-2" style={{ borderRadius: '999px', backgroundColor: '#EF4444', color: '#FFFFFF' }}>
            {requests.length} New
          </span>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['All', 'Emergency', 'Urgent', 'Normal'].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(tab.toLowerCase())}
              className="px-4 py-2 whitespace-nowrap"
              style={{
                borderRadius: '999px',
                backgroundColor: filter === tab.toLowerCase() || (filter === 'all' && idx === 0) ? '#3B82F6' : '#F5F5F5',
                color: filter === tab.toLowerCase() || (filter === 'all' && idx === 0) ? '#FFFFFF' : '#6B7280',
                border: 'none'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {requests.map((request, idx) => {
            const urgencyColor = request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#3B82F6';
            return (
              <button
                key={idx}
                onClick={() => setSelectedRequest(idx)}
                className="w-full p-5 text-left"
                style={{ borderRadius: '16px', borderLeft: `4px solid ${urgencyColor}`, backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${urgencyColor}15` }}>
                      <Package className="w-6 h-6" style={{ color: urgencyColor }} />
                    </div>
                    <div>
                      <p style={{ color: '#1F2937' }}>{request.component} ({request.bloodGroup})</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>{request.patientId}</p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1.5"
                    style={{
                      borderRadius: '999px',
                      backgroundColor: urgencyColor,
                      color: '#FFFFFF',
                      fontSize: '12px'
                    }}
                  >
                    {request.urgency}
                  </span>
                </div>
                
                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #F5F5F5' }}>
                  <div className="text-sm" style={{ color: '#6B7280' }}>
                    {request.units} units required
                  </div>
                  <div className="text-sm" style={{ color: '#6B7280' }}>
                    {request.requestedAt}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}