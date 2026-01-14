import React, { useState } from 'react';
import { ChevronLeft, Package, TrendingUp, ThermometerSun, Star, Download, CheckCircle, MapPin, Clock, ChevronRight } from 'lucide-react';

interface RiderHistoryScreenProps {
  navigateTo: (screen: string) => void;
}

export function RiderHistoryScreen({ navigateTo }: RiderHistoryScreenProps) {
  const [filter, setFilter] = useState('all');

  const deliveries = [
    {
      id: 'DEL-4521',
      date: 'Dec 14, 2024',
      time: '2:30 PM',
      from: 'City General Blood Bank',
      to: 'Apollo Hospital',
      component: 'Platelets (6 units)',
      status: 'Completed',
      distance: '4.2 km',
      icon: Package
    },
    {
      id: 'DEL-4489',
      date: 'Dec 13, 2024',
      time: '11:15 AM',
      from: 'Metro Blood Center',
      to: 'Fortis Hospital',
      component: 'RBC (3 units)',
      status: 'Completed',
      distance: '6.8 km',
      icon: Package
    },
    {
      id: 'DEL-4456',
      date: 'Dec 12, 2024',
      time: '4:45 PM',
      from: 'Central Blood Bank',
      to: 'Max Healthcare',
      component: 'Plasma (2 units)',
      status: 'Completed',
      distance: '3.5 km',
      icon: Package
    }
  ];

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Delivery History</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Summary Stats */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="p-5 text-center" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Package className="w-6 h-6" style={{ color: '#F97316' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '24px' }}>156</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>Total Deliveries</p>
            </div>
            <div className="p-5 text-center" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <TrendingUp className="w-6 h-6" style={{ color: '#10B981' }} />
              </div>
              <p style={{ color: '#1F2937', fontSize: '24px' }}>468</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>Lives Saved</p>
            </div>
          </div>
          
          {/* Performance Metrics */}
          <div className="p-5 mb-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Performance Metrics</h5>
            
            <div className="space-y-4">
              {/* On-Time Delivery */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                    <Clock className="w-4 h-4" style={{ color: '#10B981' }} />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span style={{ color: '#6B7280' }}>On-Time Delivery</span>
                    <span style={{ color: '#1F2937' }}>98.5%</span>
                  </div>
                </div>
                <div className="h-2" style={{ backgroundColor: '#F5F5F5', borderRadius: '999px', overflow: 'hidden' }}>
                  <div className="h-full" style={{ width: '98.5%', background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)', borderRadius: '999px' }} />
                </div>
              </div>
              
              {/* Temperature Compliance */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                    <ThermometerSun className="w-4 h-4" style={{ color: '#3B82F6' }} />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span style={{ color: '#6B7280' }}>Temperature Compliance</span>
                    <span style={{ color: '#1F2937' }}>100%</span>
                  </div>
                </div>
                <div className="h-2" style={{ backgroundColor: '#F5F5F5', borderRadius: '999px', overflow: 'hidden' }}>
                  <div className="h-full" style={{ width: '100%', background: 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)', borderRadius: '999px' }} />
                </div>
              </div>
              
              {/* Customer Rating */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                    <Star className="w-4 h-4" style={{ color: '#F97316' }} />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span style={{ color: '#6B7280' }}>Average Rating</span>
                    <span style={{ color: '#1F2937' }}>4.9 / 5.0</span>
                  </div>
                </div>
                <div className="h-2" style={{ backgroundColor: '#F5F5F5', borderRadius: '999px', overflow: 'hidden' }}>
                  <div className="h-full" style={{ width: '98%', background: 'linear-gradient(90deg, #F97316 0%, #EA580C 100%)', borderRadius: '999px' }} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex gap-2 mb-4">
            {['All', 'This Week', 'This Month'].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(tab.toLowerCase().replace(' ', '-'))}
                className="px-4 py-2"
                style={{
                  borderRadius: '999px',
                  backgroundColor: filter === tab.toLowerCase().replace(' ', '-') || (filter === 'all' && idx === 0) ? '#F97316' : '#F5F5F5',
                  color: filter === tab.toLowerCase().replace(' ', '-') || (filter === 'all' && idx === 0) ? '#FFFFFF' : '#6B7280',
                  border: 'none'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Delivery History Cards */}
        <div className="px-6 pb-6">
          <h5 className="mb-3" style={{ color: '#374151' }}>Recent Deliveries</h5>
          <div className="space-y-4">
            {deliveries.map((delivery, idx) => (
              <div key={idx} className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                      <Package className="w-6 h-6" style={{ color: '#F97316' }} />
                    </div>
                    <div>
                      <p style={{ color: '#1F2937' }}>{delivery.component}</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>{delivery.id}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: '#10B981', opacity: 0.1 }}>
                    <span className="text-xs" style={{ color: '#10B981' }}>{delivery.status}</span>
                  </div>
                </div>
                
                {/* Route */}
                <div className="mb-3">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: '#F97316' }} />
                    <div className="flex-1">
                      <p className="text-sm" style={{ color: '#6B7280' }}>Pickup</p>
                      <p className="text-sm" style={{ color: '#1F2937' }}>{delivery.from}</p>
                    </div>
                  </div>
                  <div className="w-0.5 h-4 ml-1 mb-2" style={{ backgroundColor: '#E5E7EB' }} />
                  <div className="flex items-start gap-2">
                    <div className="w-3 h-3 rounded-full mt-1" style={{ border: '2px solid #F97316', backgroundColor: '#FFFFFF' }} />
                    <div className="flex-1">
                      <p className="text-sm" style={{ color: '#6B7280' }}>Delivery</p>
                      <p className="text-sm" style={{ color: '#1F2937' }}>{delivery.to}</p>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #F5F5F5' }}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm" style={{ color: '#6B7280' }}>
                      <MapPin className="w-4 h-4" />
                      <span>{delivery.distance}</span>
                    </div>
                    <div className="text-sm" style={{ color: '#6B7280' }}>
                      {delivery.date} • {delivery.time}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}