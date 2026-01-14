import React from 'react';
import { Bell, Package, AlertCircle, Clock, Building2, Users, FileText, Shield, BarChart3, Droplet, Activity } from 'lucide-react';

interface HospitalHomeScreenProps {
  navigateTo: (screen: string) => void;
}

export function HospitalHomeScreen({ navigateTo }: HospitalHomeScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center justify-between">
          <div>
            <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Hospital Dashboard</h3>
            <p style={{ color: '#64748B', fontSize: '13px', marginTop: '2px' }}>City General Blood Bank</p>
          </div>
          <button 
            onClick={() => navigateTo('notifications')} 
            className="p-2.5 transition-all" 
            style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F1F5F9'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F8FAFC'}
          >
            <Bell className="w-5 h-5" style={{ color: '#64748B' }} />
          </button>
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 transition-all" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="p-2" style={{ backgroundColor: '#EFF6FF', borderRadius: '10px' }}>
                <FileText className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
            </div>
            <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '4px' }}>Requests Today</p>
            <p style={{ color: '#1F2937', fontSize: '24px', fontWeight: '600' }}>34</p>
          </div>
          
          <div className="p-4 transition-all" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="p-2" style={{ backgroundColor: '#F0FDF4', borderRadius: '10px' }}>
                <Package className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
            </div>
            <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '4px' }}>Units Available</p>
            <p style={{ color: '#1F2937', fontSize: '24px', fontWeight: '600' }}>856</p>
          </div>
          
          <div className="p-4 transition-all" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="p-2" style={{ backgroundColor: '#FEF2F2', borderRadius: '10px' }}>
                <AlertCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
              </div>
            </div>
            <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '4px' }}>Emergency Cases</p>
            <p style={{ color: '#EF4444', fontSize: '24px', fontWeight: '600' }}>3</p>
          </div>
          
          <div className="p-4 transition-all" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="p-2" style={{ backgroundColor: '#FFF7ED', borderRadius: '10px' }}>
                <Clock className="w-5 h-5" style={{ color: '#F97316' }} />
              </div>
            </div>
            <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '4px' }}>Near Expiry</p>
            <p style={{ color: '#F97316', fontSize: '24px', fontWeight: '600' }}>12</p>
          </div>
        </div>
        
        {/* Inventory Snapshot - Card-Based */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <h5 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>Inventory Snapshot</h5>
            <button 
              onClick={() => navigateTo('hospital-inventory')} 
              style={{ color: '#3B82F6', fontSize: '13px', background: 'none', border: 'none' }}
            >
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { component: 'RBC', units: 425, status: 'Good', icon: Droplet, age: 85 },
              { component: 'Platelets', units: 186, status: 'Good', icon: Activity, age: 92 },
              { component: 'Plasma', units: 215, status: 'Low', icon: Droplet, age: 45 },
              { component: 'Cryo', units: 30, status: 'Critical', icon: Activity, age: 20 },
            ].map((item, idx) => {
              const statusColor = item.status === 'Critical' ? '#EF4444' : item.status === 'Low' ? '#F97316' : '#10B981';
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-3 transition-all cursor-pointer" 
                  style={{ 
                    backgroundColor: '#FAFAFA',
                    borderRadius: '14px',
                    border: `1px solid ${item.status === 'Critical' ? '#FEE2E2' : item.status === 'Low' ? '#FED7AA' : '#D1FAE5'}`
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F5F5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FAFAFA'}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5" style={{ backgroundColor: '#FFFFFF', borderRadius: '8px' }}>
                      <Icon className="w-4 h-4" style={{ color: statusColor }} />
                    </div>
                    <span className="px-2 py-0.5" style={{ 
                      backgroundColor: statusColor, 
                      color: '#FFFFFF', 
                      fontSize: '10px', 
                      borderRadius: '12px',
                      fontWeight: '500'
                    }}>
                      {item.status}
                    </span>
                  </div>
                  <p style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                    {item.component}
                  </p>
                  <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '6px' }}>
                    {item.units} units
                  </p>
                  {/* Freshness Progress Bar */}
                  <div style={{ height: '4px', backgroundColor: '#E5E7EB', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: `${item.age}%`, 
                      height: '100%', 
                      backgroundColor: statusColor,
                      transition: 'width 0.3s'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Active Requests - Stacked Action Cards */}
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <h5 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>Active Requests</h5>
            <button 
              onClick={() => navigateTo('hospital-requests')} 
              style={{ color: '#3B82F6', fontSize: '13px', background: 'none', border: 'none' }}
            >
              View All →
            </button>
          </div>
          
          <div className="space-y-3">
            {[
              { id: 'REQ-4521', component: 'Platelets', units: 6, urgency: 'Emergency', time: '5 mins ago' },
              { id: 'REQ-4520', component: 'RBC', units: 3, urgency: 'Urgent', time: '12 mins ago' },
              { id: 'REQ-4519', component: 'Plasma', units: 2, urgency: 'Normal', time: '1 hour ago' },
            ].map((request, idx) => {
              const isEmergency = request.urgency === 'Emergency';
              const isUrgent = request.urgency === 'Urgent';
              return (
                <button
                  key={idx}
                  onClick={() => navigateTo('hospital-requests')}
                  className="w-full p-3 text-left transition-all"
                  style={{ 
                    backgroundColor: '#FAFAFA',
                    borderRadius: '14px',
                    border: 'none',
                    borderLeft: isEmergency ? '4px solid #F97316' : 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F5F5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FAFAFA'}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ color: '#64748B', fontSize: '12px' }}>{request.id}</span>
                    <span 
                      className="px-2.5 py-1" 
                      style={{ 
                        backgroundColor: isEmergency ? '#F97316' : isUrgent ? '#F97316' : '#E5E7EB',
                        color: isEmergency || isUrgent ? '#FFFFFF' : '#64748B',
                        fontSize: '11px',
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}
                    >
                      {request.urgency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>
                      {request.component} • {request.units} units
                    </p>
                    <span style={{ color: '#94A3B8', fontSize: '11px' }}>{request.time}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Emergency Mode Button */}
        <button
          onClick={() => navigateTo('hospital-emergency')}
          className="w-full p-4 flex items-center justify-center transition-all"
          style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '2px dashed #E5E7EB'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FEF2F2';
            e.currentTarget.style.borderColor = '#F97316';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.borderColor = '#E5E7EB';
          }}
        >
          <AlertCircle className="w-6 h-6 mr-3" style={{ color: '#F97316' }} />
          <span style={{ color: '#F97316', fontWeight: '500' }}>Activate Emergency Mode</span>
        </button>
        
        {/* Quick Access */}
        <div>
          <h5 className="mb-3" style={{ color: '#64748B', fontSize: '14px', fontWeight: '600' }}>Quick Access</h5>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Package, label: 'Inventory', screen: 'hospital-inventory', color: '#3B82F6' },
              { icon: FileText, label: 'Requests', screen: 'hospital-requests', color: '#10B981' },
              { icon: Users, label: 'Riders', screen: 'hospital-riders', color: '#F97316' },
              { icon: BarChart3, label: 'Transfusion', screen: 'hospital-transfusion', color: '#8B5CF6' },
              { icon: Shield, label: 'Compliance', screen: 'hospital-compliance', color: '#3B82F6' },
              { icon: Building2, label: 'Camps', screen: 'hospital-camps', color: '#10B981' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => navigateTo(item.screen)}
                  className="p-4 flex flex-col items-center justify-center transition-all"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                  }}
                >
                  <Icon className="w-6 h-6 mb-2" style={{ color: item.color }} />
                  <span style={{ color: '#475569', fontSize: '12px', textAlign: 'center' }}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="flex" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
        {[
          { icon: Building2, label: 'Dashboard', active: true },
          { icon: Package, label: 'Inventory', screen: 'hospital-inventory' },
          { icon: FileText, label: 'Requests', screen: 'hospital-requests' },
          { icon: Users, label: 'Profile', screen: 'hospital-profile' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => item.screen && navigateTo(item.screen)}
              className="flex-1 py-3 flex flex-col items-center transition-all"
              style={{ 
                background: 'none',
                border: 'none',
                borderTop: item.active ? '3px solid #3B82F6' : '3px solid transparent'
              }}
            >
              <Icon className="w-6 h-6" style={{ color: item.active ? '#3B82F6' : '#94A3B8' }} />
              <span style={{ color: item.active ? '#3B82F6' : '#64748B', fontSize: '11px', marginTop: '4px', fontWeight: item.active ? '500' : '400' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
