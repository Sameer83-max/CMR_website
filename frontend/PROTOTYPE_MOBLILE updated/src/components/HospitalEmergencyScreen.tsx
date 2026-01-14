import React from 'react';
import { ChevronLeft, AlertCircle, Users, Building2, Zap, Clock } from 'lucide-react';

interface HospitalEmergencyScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalEmergencyScreen({ navigateTo }: HospitalEmergencyScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FEF2F2' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #EF4444' }}>
        <div className="flex items-center">
          <button onClick={() => navigateTo('hospital-home')} className="mr-3">
            <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#EF4444' }}>Emergency Mode</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Emergency Banner */}
        <div className="p-6 text-center" style={{ border: '3px solid #EF4444', backgroundColor: '#FEF2F2' }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EF4444', animation: 'pulse 2s infinite' }}>
            <AlertCircle className="w-10 h-10" style={{ color: '#FFFFFF' }} />
          </div>
          <h3 className="mb-2" style={{ color: '#EF4444' }}>EMERGENCY MODE</h3>
          <p style={{ color: '#6B7280' }}>Critical blood shortage - All channels activated</p>
        </div>
        
        {/* Emergency Actions */}
        <div className="space-y-3">
          <button
            className="w-full p-4 flex items-center"
            style={{ border: '2px solid #10B981', backgroundColor: '#F0FDF4' }}
          >
            <Users className="w-6 h-6 mr-3" style={{ color: '#10B981' }} />
            <div className="text-left flex-1">
              <h5 style={{ color: '#1F2937' }}>Notify Nearby Donors</h5>
              <p className="text-sm" style={{ color: '#6B7280' }}>Send alerts to eligible donors in 5km radius</p>
            </div>
          </button>
          
          <button
            className="w-full p-4 flex items-center"
            style={{ border: '2px solid #3B82F6', backgroundColor: '#EFF6FF' }}
          >
            <Building2 className="w-6 h-6 mr-3" style={{ color: '#3B82F6' }} />
            <div className="text-left flex-1">
              <h5 style={{ color: '#1F2937' }}>Request from Nearby Blood Banks</h5>
              <p className="text-sm" style={{ color: '#6B7280' }}>Send emergency requests to partner blood banks</p>
            </div>
          </button>
          
          <button
            className="w-full p-4 flex items-center"
            style={{ border: '2px solid #F97316', backgroundColor: '#FFF7ED' }}
          >
            <Zap className="w-6 h-6 mr-3" style={{ color: '#F97316' }} />
            <div className="text-left flex-1">
              <h5 style={{ color: '#1F2937' }}>Activate Express Delivery</h5>
              <p className="text-sm" style={{ color: '#6B7280' }}>Priority routing for all emergency deliveries</p>
            </div>
          </button>
        </div>
        
        {/* Countdown Timer */}
        <div className="p-4 text-center" style={{ border: '2px solid #EF4444', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 mr-2" style={{ color: '#EF4444' }} />
            <h5 style={{ color: '#374151' }}>Emergency Response Time</h5>
          </div>
          <p className="text-3xl mb-2" style={{ color: '#EF4444' }}>12:45</p>
          <p className="text-sm" style={{ color: '#6B7280' }}>Since emergency activation</p>
        </div>
        
        {/* Emergency Request List */}
        <div className="p-4" style={{ border: '2px solid #EF4444', backgroundColor: '#FFFFFF' }}>
          <h5 className="mb-3" style={{ color: '#374151' }}>Critical Requests</h5>
          <div className="space-y-2">
            {[
              { id: 'REQ-4521', component: 'Platelets B+', units: 6, time: '8 min ago' },
              { id: 'REQ-4518', component: 'RBC O-', units: 4, time: '12 min ago' },
              { id: 'REQ-4515', component: 'Plasma AB+', units: 2, time: '15 min ago' },
            ].map((request, idx) => (
              <div
                key={idx}
                className="p-3"
                style={{ border: '2px solid #EF4444', backgroundColor: '#FEF2F2' }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span style={{ color: '#1F2937' }}>{request.id}</span>
                  <span className="px-2 py-1 text-xs" style={{ backgroundColor: '#EF4444', color: '#FFFFFF' }}>
                    CRITICAL
                  </span>
                </div>
                <p className="text-sm mb-1" style={{ color: '#1F2937' }}>
                  {request.component} - {request.units} units
                </p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{request.time}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Response Status */}
        <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
          <h5 className="mb-3" style={{ color: '#374151' }}>Emergency Response Status</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-2" style={{ backgroundColor: '#F9FAFB' }}>
              <span style={{ color: '#6B7280' }}>Donors Notified:</span>
              <span style={{ color: '#1F2937' }}>127</span>
            </div>
            <div className="flex justify-between p-2" style={{ backgroundColor: '#F9FAFB' }}>
              <span style={{ color: '#6B7280' }}>Donors Responded:</span>
              <span style={{ color: '#1F2937' }}>18</span>
            </div>
            <div className="flex justify-between p-2" style={{ backgroundColor: '#F9FAFB' }}>
              <span style={{ color: '#6B7280' }}>Blood Banks Contacted:</span>
              <span style={{ color: '#1F2937' }}>5</span>
            </div>
            <div className="flex justify-between p-2" style={{ backgroundColor: '#F9FAFB' }}>
              <span style={{ color: '#6B7280' }}>Express Deliveries:</span>
              <span style={{ color: '#1F2937' }}>3 active</span>
            </div>
          </div>
        </div>
        
        {/* Emergency Protocols */}
        <div className="p-4" style={{ border: '2px solid #9CA3AF', backgroundColor: '#F9FAFB' }}>
          <h5 className="mb-3" style={{ color: '#374151' }}>Active Emergency Protocols</h5>
          <ul className="space-y-1 text-sm" style={{ color: '#6B7280' }}>
            <li>✓ Priority verification for emergency requests</li>
            <li>✓ Expedited crossmatch processing</li>
            <li>✓ Direct rider assignment without queue</li>
            <li>✓ Real-time inventory alerts to partner hospitals</li>
            <li>✓ 24/7 emergency helpline activated</li>
          </ul>
        </div>
      </div>
      
      {/* Action Button */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #E5E7EB' }}>
        <button
          onClick={() => navigateTo('hospital-home')}
          className="w-full py-4"
          style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
        >
          Deactivate Emergency Mode
        </button>
      </div>
    </div>
  );
}