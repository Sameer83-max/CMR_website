import React, { useState } from 'react';
import { ChevronLeft, Plus, AlertCircle, TrendingUp, Package, Droplet, Calendar, ChevronRight } from 'lucide-react';

interface HospitalInventoryScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalInventoryScreen({ navigateTo }: HospitalInventoryScreenProps) {
  const [filter, setFilter] = useState('all');

  const inventory = [
    {
      component: 'RBC (Red Blood Cells)',
      bloodGroup: 'A+',
      units: 425,
      avgAge: '8 days',
      freshness: 75,
      status: 'Good',
      reserved: 45,
      expiring: 2,
      color: '#10B981'
    },
    {
      component: 'Platelets',
      bloodGroup: 'O+',
      units: 186,
      avgAge: '2 days',
      freshness: 95,
      status: 'Good',
      reserved: 24,
      expiring: 8,
      color: '#10B981'
    },
    {
      component: 'Plasma',
      bloodGroup: 'B+',
      units: 89,
      avgAge: '15 days',
      freshness: 45,
      status: 'Low',
      reserved: 18,
      expiring: 5,
      color: '#F97316'
    },
    {
      component: 'Cryoprecipitate',
      bloodGroup: 'AB+',
      units: 30,
      avgAge: '22 days',
      freshness: 25,
      status: 'Critical',
      reserved: 8,
      expiring: 12,
      color: '#EF4444'
    }
  ];

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('hospital-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Blood Inventory</h3>
          </div>
          <button
            onClick={() => navigateTo('hospital-inventory-logging')}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#3B82F6', boxShadow: '0 2px 8px rgba(59,130,246,0.3)' }}
          >
            <Plus className="w-5 h-5" style={{ color: '#FFFFFF' }} />
          </button>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['All', 'RBC', 'Platelets', 'Plasma'].map((tab, idx) => (
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
        {/* Alert Banners */}
        <div className="space-y-3 mb-5">
          <div className="p-4 flex items-start gap-3" style={{ borderRadius: '14px', borderLeft: '4px solid #EF4444', backgroundColor: '#FEF2F2', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
              <AlertCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
            </div>
            <div className="flex-1">
              <p style={{ color: '#1F2937' }}>Critical: Cryoprecipitate stock low</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>Only 30 units remaining</p>
            </div>
          </div>
          
          <div className="p-4 flex items-start gap-3" style={{ borderRadius: '14px', borderLeft: '4px solid #F97316', backgroundColor: '#FFF7ED', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
              <Calendar className="w-5 h-5" style={{ color: '#F97316' }} />
            </div>
            <div className="flex-1">
              <p style={{ color: '#1F2937' }}>12 units expiring in 3 days</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>RBC (A+, O+)</p>
            </div>
          </div>
        </div>
        
        {/* Component Stock Cards */}
        <h5 className="mb-3" style={{ color: '#374151' }}>Component Stock</h5>
        <div className="space-y-4">
          {inventory.map((item, idx) => (
            <div
              key={idx}
              className="p-5"
              style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                    <Droplet className="w-6 h-6" style={{ color: item.color }} fill={item.color} />
                  </div>
                  <div>
                    <p style={{ color: '#1F2937' }}>{item.component}</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{item.bloodGroup}</p>
                  </div>
                </div>
                <div className="px-3 py-1" style={{ borderRadius: '999px', backgroundColor: `${item.color}15` }}>
                  <span className="text-xs" style={{ color: item.color }}>{item.status}</span>
                </div>
              </div>
              
              {/* Units & Reserved */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <p className="text-xs mb-1" style={{ color: '#6B7280' }}>Total Units</p>
                  <p style={{ color: '#1F2937', fontSize: '18px' }}>{item.units}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs mb-1" style={{ color: '#6B7280' }}>Reserved</p>
                  <p style={{ color: '#3B82F6', fontSize: '18px' }}>{item.reserved}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs mb-1" style={{ color: '#6B7280' }}>Available</p>
                  <p style={{ color: '#10B981', fontSize: '18px' }}>{item.units - item.reserved}</p>
                </div>
              </div>
              
              {/* Freshness Bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm" style={{ color: '#6B7280' }}>Freshness</span>
                  <span className="text-sm" style={{ color: '#1F2937' }}>{item.avgAge} avg</span>
                </div>
                <div className="w-full h-2" style={{ backgroundColor: '#F5F5F5', borderRadius: '999px', overflow: 'hidden' }}>
                  <div 
                    className="h-full"
                    style={{ 
                      width: `${item.freshness}%`,
                      background: item.freshness > 70 ? 'linear-gradient(90deg, #10B981 0%, #059669 100%)' : item.freshness > 40 ? 'linear-gradient(90deg, #F97316 0%, #EA580C 100%)' : 'linear-gradient(90deg, #EF4444 0%, #DC2626 100%)',
                      borderRadius: '999px'
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Expiry Badge */}
              {item.expiring > 0 && (
                <div className="flex items-center gap-2 p-3 mt-3" style={{ borderRadius: '12px', backgroundColor: '#FFF7ED' }}>
                  <Calendar className="w-4 h-4" style={{ color: '#F97316' }} />
                  <span className="text-sm" style={{ color: '#F97316' }}>{item.expiring} units expiring soon</span>
                </div>
              )}
              
              {/* Action Button */}
              <button 
                className="w-full mt-3 py-2.5 flex items-center justify-center gap-2"
                style={{ borderRadius: '12px', backgroundColor: '#F5F5F5', border: 'none' }}
              >
                <span style={{ color: '#3B82F6' }}>View Details</span>
                <ChevronRight className="w-4 h-4" style={{ color: '#3B82F6' }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}