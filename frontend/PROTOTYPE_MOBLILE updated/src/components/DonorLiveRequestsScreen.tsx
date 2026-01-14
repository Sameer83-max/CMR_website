import React, { useState } from 'react';
import { ChevronLeft, MapPin, Clock, AlertCircle, X, User, Navigation, Heart, ChevronRight } from 'lucide-react';

interface DonorLiveRequestsScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorLiveRequestsScreen({ navigateTo }: DonorLiveRequestsScreenProps) {
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);

  const requests = [
    {
      id: 4521,
      patient: 'Patient #4521',
      bloodType: 'B+',
      component: 'Packed RBC',
      hospital: 'City General Hospital',
      distance: '2.3 km',
      urgency: 'Emergency',
      timer: '12:45',
      compatibility: '100%'
    },
    {
      id: 4589,
      patient: 'Patient #4589',
      bloodType: 'B+',
      component: 'Platelets',
      hospital: 'Apollo Blood Bank',
      distance: '4.1 km',
      urgency: 'Urgent',
      timer: '25:30',
      compatibility: '100%'
    },
    {
      id: 4612,
      patient: 'Patient #4612',
      bloodType: 'B+',
      component: 'Plasma',
      hospital: 'RedCross Center',
      distance: '5.8 km',
      urgency: 'Routine',
      timer: '45:15',
      compatibility: '100%'
    },
  ];

  if (selectedRequest !== null) {
    const request = requests.find(r => r.id === selectedRequest);
    if (!request) return null;

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
          <div className="p-5" style={{ 
            borderRadius: '16px',
            borderLeft: `4px solid ${request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#3B82F6'}`, 
            backgroundColor: request.urgency === 'Emergency' ? '#FEF2F2' : request.urgency === 'Urgent' ? '#FFF7ED' : '#EFF6FF',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#3B82F6' }}>
                  <AlertCircle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <h4 style={{ color: request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#3B82F6' }}>
                    {request.urgency} Request
                  </h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Immediate action required</p>
                </div>
              </div>
              <div className="px-4 py-2" style={{ borderRadius: '999px', backgroundColor: request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#3B82F6', color: '#FFFFFF' }}>
                {request.timer}
              </div>
            </div>
          </div>
          
          {/* Patient Info */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Patient Information</h5>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#F5F5F5' }}>
                <User className="w-8 h-8" style={{ color: '#9CA3AF' }} />
              </div>
              <div>
                <p style={{ color: '#1F2937' }}>{request.patient}</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>Identity protected for privacy</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EF4444', opacity: 0.1 }}>
                  <Heart className="w-6 h-6" style={{ color: '#EF4444' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Blood Type</p>
                  <p style={{ color: '#1F2937' }}>{request.bloodType}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3B82F6', opacity: 0.1 }}>
                  <AlertCircle className="w-6 h-6" style={{ color: '#3B82F6' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Component</p>
                  <p style={{ color: '#1F2937' }}>{request.component}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981', opacity: 0.1 }}>
                  <Heart className="w-6 h-6" style={{ color: '#10B981' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#6B7280' }}>Compatibility</p>
                  <p style={{ color: '#10B981' }}>{request.compatibility}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hospital Info */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Hospital Details</h5>
            <p className="mb-3" style={{ color: '#1F2937' }}>{request.hospital}</p>
            <div className="flex items-center gap-2 mb-3" style={{ color: '#6B7280' }}>
              <MapPin className="w-5 h-5" />
              <span>{request.distance} away</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#6B7280' }}>
              <Clock className="w-5 h-5" />
              <span>Estimated travel: 15 minutes</span>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="h-48" style={{ borderRadius: '16px', backgroundColor: '#F5F5F5', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: '#9CA3AF' }} />
                <p className="text-sm" style={{ color: '#6B7280' }}>Map Preview</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => navigateTo('donor-navigation')}
            className="w-full py-4 flex items-center justify-center gap-2"
            style={{ borderRadius: '16px', backgroundColor: '#10B981', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(16,185,129,0.3)' }}
          >
            <Navigation className="w-5 h-5" />
            Accept & Navigate
          </button>
          <button
            onClick={() => setSelectedRequest(null)}
            className="w-full py-4"
            style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
          >
            Reject
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Live Requests</h3>
          </div>
          <span className="px-4 py-2" style={{ borderRadius: '999px', backgroundColor: '#EF4444', color: '#FFFFFF' }}>
            {requests.length} Active
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {requests.map((request) => (
            <button
              key={request.id}
              onClick={() => setSelectedRequest(request.id)}
              className="w-full p-5 text-left"
              style={{ 
                borderRadius: '16px',
                borderLeft: `4px solid ${request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#3B82F6'}`,
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 style={{ color: '#1F2937' }}>{request.patient}</h4>
                  <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
                    {request.bloodType} • {request.component}
                  </p>
                </div>
                <span
                  className="px-3 py-1.5"
                  style={{
                    borderRadius: '999px',
                    backgroundColor: request.urgency === 'Emergency' ? '#EF4444' : request.urgency === 'Urgent' ? '#F97316' : '#3B82F6',
                    color: '#FFFFFF',
                    fontSize: '12px'
                  }}
                >
                  {request.urgency}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                  <MapPin className="w-4 h-4" />
                  <span>{request.distance}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                  <Clock className="w-4 h-4" />
                  <span>{request.timer}</span>
                </div>
                <ChevronRight className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}