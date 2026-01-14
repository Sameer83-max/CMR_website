import React from 'react';
import { ChevronLeft, Calendar, AlertCircle, Activity, TrendingUp, Clock, MapPin, Users, Shield, Bell } from 'lucide-react';

interface TransfusionScreenProps {
  navigateTo: (screen: string) => void;
}

export function TransfusionScreen({ navigateTo }: TransfusionScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => navigateTo('home')} 
              className="mr-3 p-2 transition-all rounded-full"
              style={{ background: 'none', border: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Transfusion Management</h3>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Thalassemia Patient Status */}
        <div className="p-4" style={{ 
          backgroundColor: '#F5F3FF',
          borderRadius: '16px',
          border: '2px solid #C4B5FD'
        }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 mr-3" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                <Shield className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              </div>
              <div>
                <h4 style={{ color: '#8B5CF6', fontSize: '15px', fontWeight: '600', marginBottom: '2px' }}>
                  Thalassemia Major Patient
                </h4>
                <p style={{ color: '#7C3AED', fontSize: '12px' }}>
                  Regular transfusion schedule: Every 3 weeks
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5" style={{ 
              backgroundColor: '#8B5CF6',
              borderRadius: '12px',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Priority
            </div>
          </div>
          
          {/* Thalassemia Cohort - Stacked Avatars */}
          <div className="flex items-center p-3" style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '12px'
          }}>
            <div className="flex items-center mr-3">
              <Users className="w-4 h-4 mr-2" style={{ color: '#8B5CF6' }} />
              <span style={{ color: '#64748B', fontSize: '12px' }}>Patient Cohort:</span>
            </div>
            <div className="flex items-center">
              {/* Stacked Avatars */}
              <div className="flex -space-x-2">
                {['A', 'R', 'S', 'P'].map((initial, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-center"
                    style={{ 
                      width: '28px',
                      height: '28px',
                      backgroundColor: '#8B5CF6',
                      borderRadius: '14px',
                      border: '2px solid #FFFFFF',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: '600',
                      zIndex: 4 - idx
                    }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span style={{ color: '#8B5CF6', fontSize: '12px', fontWeight: '500', marginLeft: '8px' }}>
                +24 others
              </span>
            </div>
          </div>
        </div>
        
        {/* Next Appointment Card with Timeline */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div className="flex items-center justify-between mb-4">
            <h4 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Next Transfusion</h4>
            {/* Queue Number Badge - Circular */}
            <div className="flex items-center justify-center" style={{ 
              width: '48px',
              height: '48px',
              backgroundColor: '#F5F3FF',
              border: '3px solid #8B5CF6',
              borderRadius: '24px'
            }}>
              <div className="text-center">
                <div style={{ color: '#8B5CF6', fontSize: '16px', fontWeight: '700', lineHeight: '1' }}>
                  05
                </div>
                <div style={{ color: '#8B5CF6', fontSize: '8px', fontWeight: '500', textTransform: 'uppercase' }}>
                  Queue
                </div>
              </div>
            </div>
          </div>
          
          {/* Appointment Details */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center p-3" style={{ 
              backgroundColor: '#F5F3FF',
              borderRadius: '12px'
            }}>
              <Calendar className="w-4 h-4 mr-3" style={{ color: '#8B5CF6' }} />
              <div className="flex-1">
                <span style={{ color: '#64748B', fontSize: '11px', display: 'block' }}>Date & Time</span>
                <span style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: '600' }}>
                  Dec 18, 2024 • 10:00 AM
                </span>
              </div>
            </div>
            
            <div className="flex items-center p-3" style={{ 
              backgroundColor: '#F5F3FF',
              borderRadius: '12px'
            }}>
              <MapPin className="w-4 h-4 mr-3" style={{ color: '#8B5CF6' }} />
              <div className="flex-1">
                <span style={{ color: '#64748B', fontSize: '11px', display: 'block' }}>Location</span>
                <span style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: '600' }}>
                  Apollo Hospital - Ward 3A
                </span>
              </div>
            </div>
            
            <div className="flex items-center p-3" style={{ 
              backgroundColor: '#F5F3FF',
              borderRadius: '12px'
            }}>
              <Activity className="w-4 h-4 mr-3" style={{ color: '#8B5CF6' }} />
              <div className="flex-1">
                <span style={{ color: '#64748B', fontSize: '11px', display: 'block' }}>Component</span>
                <span style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: '600' }}>
                  Packed RBC • 2 units
                </span>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mb-4 p-3" style={{ 
            backgroundColor: '#FAFAFA',
            borderRadius: '12px'
          }}>
            <h6 className="mb-3" style={{ color: '#64748B', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>
              Appointment Timeline
            </h6>
            <div className="space-y-3">
              {[
                { label: 'Check-in', time: '9:45 AM', completed: false },
                { label: 'Pre-screening', time: '10:00 AM', completed: false },
                { label: 'Transfusion', time: '10:30 AM', completed: false },
                { label: 'Post-monitoring', time: '2:30 PM', completed: false },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex items-center mr-3">
                    <div style={{ 
                      width: '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: step.completed ? '#8B5CF6' : '#E5E7EB',
                      marginRight: '8px'
                    }} />
                    <span style={{ 
                      color: step.completed ? '#1F2937' : '#94A3B8',
                      fontSize: '12px',
                      minWidth: '100px'
                    }}>
                      {step.label}
                    </span>
                  </div>
                  <span style={{ color: '#64748B', fontSize: '11px' }}>
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="w-full py-3 transition-all"
            style={{ 
              backgroundColor: '#8B5CF6',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(139,92,246,0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7C3AED'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B5CF6'}
          >
            Reschedule Appointment
          </button>
        </div>
        
        {/* Hemoglobin Trend */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 mr-2" style={{ color: '#3B82F6' }} />
            <h4 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Hemoglobin Trend</h4>
          </div>
          
          {/* Bar Chart */}
          <div className="flex items-end justify-between mb-4" style={{ height: '120px' }}>
            {[
              { value: 60, label: 'Oct', color: '#EF4444', hb: '9.8' },
              { value: 75, label: 'Nov', color: '#F97316', hb: '10.5' },
              { value: 90, label: 'Dec', color: '#10B981', hb: '11.2' },
            ].map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="text-center mb-2">
                  <span style={{ color: bar.color, fontSize: '11px', fontWeight: '600' }}>
                    {bar.hb}
                  </span>
                </div>
                <div className="w-full flex items-end justify-center">
                  <div
                    style={{ 
                      width: '70%', 
                      height: `${bar.value}px`,
                      backgroundColor: bar.color,
                      borderRadius: '6px 6px 0 0',
                      transition: 'height 0.3s'
                    }}
                  />
                </div>
                <span className="mt-2" style={{ color: '#64748B', fontSize: '12px' }}>
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between p-3" style={{ 
            backgroundColor: '#F0FDF4',
            borderRadius: '12px'
          }}>
            <span style={{ color: '#64748B', fontSize: '12px' }}>Current: 11.2 g/dL</span>
            <span style={{ color: '#10B981', fontSize: '12px', fontWeight: '600' }}>Target: 12.0 g/dL</span>
          </div>
        </div>
        
        {/* Recent Transfusions - Timeline Cards */}
        <div>
          <h4 className="mb-3" style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Recent Transfusions
          </h4>
          <div className="space-y-2">
            {[
              { date: 'Nov 28, 2024', component: 'Packed RBC', units: '2 units', hospital: 'Apollo Hospital', status: 'Completed' },
              { date: 'Nov 07, 2024', component: 'Packed RBC', units: '2 units', hospital: 'City General', status: 'Completed' },
              { date: 'Oct 17, 2024', component: 'Packed RBC', units: '2 units', hospital: 'Apollo Hospital', status: 'Completed' },
            ].map((record, idx) => (
              <div
                key={idx}
                className="p-3 transition-all"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  borderLeft: '4px solid #10B981',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>
                      {record.component} - {record.units}
                    </p>
                    <p style={{ color: '#64748B', fontSize: '12px' }}>{record.hospital}</p>
                  </div>
                  <span style={{ color: '#64748B', fontSize: '11px' }}>{record.date}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#10B981' }} />
                  <span style={{ color: '#10B981', fontSize: '12px', fontWeight: '500' }}>{record.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Iron Chelation Reminder */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFF7ED',
          borderRadius: '16px',
          border: '2px solid #FED7AA'
        }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 mr-3" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                <Bell className="w-5 h-5" style={{ color: '#F97316' }} />
              </div>
              <div>
                <h5 style={{ color: '#F97316', fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>
                  Iron Chelation Therapy
                </h5>
                <p style={{ color: '#C2410C', fontSize: '12px' }}>
                  Next dose due today at 8:00 PM
                </p>
              </div>
            </div>
            <Clock className="w-5 h-5" style={{ color: '#F97316' }} />
          </div>
          
          <button 
            className="w-full py-2.5 transition-all"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#F97316',
              border: '2px solid #F97316',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: '600'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F97316';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#F97316';
            }}
          >
            Mark as Taken
          </button>
        </div>
      </div>
    </div>
  );
}
