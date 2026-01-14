import React from 'react';
import { ChevronLeft, MapPin, User, Phone, MessageCircle, CheckCircle, Clock, Truck, Package, ScanLine, Navigation } from 'lucide-react';

interface OrderTrackingScreenProps {
  navigateTo: (screen: string) => void;
}

export function OrderTrackingScreen({ navigateTo }: OrderTrackingScreenProps) {
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
            <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Track Order</h3>
          </div>
          <div className="px-3 py-1.5" style={{ 
            backgroundColor: '#FFF7ED', 
            borderRadius: '12px',
            border: '1px solid #FED7AA'
          }}>
            <span style={{ color: '#F97316', fontSize: '13px', fontWeight: '600' }}>BRQ-2024-8745</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Embedded Live Map Card */}
        <div className="p-4">
          <div className="relative overflow-hidden" style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            height: '200px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            {/* Map Background */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#F8FAFC' }}>
              <MapPin className="w-16 h-16" style={{ color: '#CBD5E1', opacity: 0.3 }} />
            </div>
            
            {/* Live Map Badge */}
            <div className="absolute top-3 left-3 px-3 py-1.5 flex items-center" style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: '#10B981' }} />
              <span style={{ color: '#64748B', fontSize: '12px', fontWeight: '500' }}>Live Tracking</span>
            </div>
            
            {/* Rider Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ 
                  backgroundColor: '#F97316', 
                  boxShadow: '0 4px 12px rgba(249,115,22,0.4)'
                }}>
                  <Truck className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full animate-ping" style={{ 
                  backgroundColor: '#F97316',
                  opacity: 0.4
                }} />
              </div>
            </div>
            
            {/* ETA Chip */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 flex items-center" style={{ 
              backgroundColor: '#F97316', 
              borderRadius: '20px',
              boxShadow: '0 4px 12px rgba(249,115,22,0.3)'
            }}>
              <Clock className="w-4 h-4 mr-2" style={{ color: '#FFFFFF' }} />
              <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '600' }}>25 mins away</span>
            </div>
          </div>
        </div>
        
        {/* Delivery Person Card */}
        <div className="px-4 pb-4">
          <div className="p-4" style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h5 className="mb-3" style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Delivery Person
            </h5>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3" style={{ 
                  backgroundColor: '#FFF7ED',
                  border: '2px solid #FED7AA'
                }}>
                  <User className="w-6 h-6" style={{ color: '#F97316' }} />
                </div>
                <div>
                  <p style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600', marginBottom: '2px' }}>Rajesh Kumar</p>
                  <p style={{ color: '#64748B', fontSize: '12px' }}>Medical Courier • ID: MC-4532</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  className="p-2.5 transition-all" 
                  style={{ 
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#10B981';
                    e.currentTarget.querySelector('svg')!.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.querySelector('svg')!.style.color = '#10B981';
                  }}
                >
                  <Phone className="w-5 h-5" style={{ color: '#10B981' }} />
                </button>
                <button 
                  className="p-2.5 transition-all" 
                  style={{ 
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3B82F6';
                    e.currentTarget.querySelector('svg')!.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.querySelector('svg')!.style.color = '#3B82F6';
                  }}
                >
                  <MessageCircle className="w-5 h-5" style={{ color: '#3B82F6' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vertical Timeline with Icons */}
        <div className="px-4 pb-4">
          <div className="p-4" style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h5 className="mb-4" style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Order Progress</h5>
            <div className="space-y-4">
              {[
                { 
                  label: 'Request Received', 
                  time: '2:30 PM', 
                  completed: true, 
                  desc: 'Hospital confirmed your request', 
                  icon: CheckCircle,
                  color: '#10B981' 
                },
                { 
                  label: 'Packet Prepared', 
                  time: '2:45 PM', 
                  completed: true, 
                  desc: 'Blood component prepared and sealed', 
                  icon: Package,
                  color: '#10B981' 
                },
                { 
                  label: 'Quality Check', 
                  time: '2:50 PM', 
                  completed: true, 
                  desc: 'Staff scanned and verified blood bag', 
                  icon: ScanLine,
                  color: '#10B981' 
                },
                { 
                  label: 'Rider Assigned', 
                  time: '2:55 PM', 
                  completed: true, 
                  desc: 'Rajesh Kumar assigned for delivery', 
                  icon: User,
                  color: '#10B981' 
                },
                { 
                  label: 'Out for Delivery', 
                  time: '3:00 PM', 
                  completed: true, 
                  desc: 'Package picked up from hospital', 
                  icon: Truck,
                  color: '#F97316' 
                },
                { 
                  label: 'Delivered', 
                  time: 'ETA 3:25 PM', 
                  completed: false, 
                  desc: 'Arriving in 25 minutes', 
                  icon: MapPin,
                  color: '#CBD5E1' 
                },
              ].map((status, idx) => {
                const Icon = status.icon;
                return (
                  <div key={idx} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div
                        className="flex items-center justify-center transition-all"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '16px',
                          backgroundColor: status.completed ? status.color : '#FFFFFF',
                          border: `2px solid ${status.completed ? status.color : '#E5E7EB'}`,
                          boxShadow: status.completed && status.color === '#F97316' ? '0 4px 8px rgba(249,115,22,0.3)' : 'none'
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: status.completed ? '#FFFFFF' : '#CBD5E1' }} />
                      </div>
                      {idx < 5 && (
                        <div
                          style={{ 
                            width: '2px', 
                            height: '48px',
                            backgroundColor: status.completed ? status.color : '#E5E7EB',
                            marginTop: '4px',
                            marginBottom: '4px'
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex justify-between items-start mb-1">
                        <h6 style={{ 
                          color: status.completed ? '#1F2937' : '#94A3B8',
                          fontSize: '14px',
                          fontWeight: status.completed ? '600' : '500'
                        }}>
                          {status.label}
                        </h6>
                        <span style={{ 
                          color: status.completed ? '#64748B' : '#CBD5E1',
                          fontSize: '12px'
                        }}>
                          {status.time}
                        </span>
                      </div>
                      <p style={{ 
                        color: status.completed ? '#64748B' : '#CBD5E1',
                        fontSize: '12px'
                      }}>
                        {status.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Delivery OTP Card */}
        <div className="px-4 pb-4">
          <div className="p-4" style={{ 
            backgroundColor: '#FFF7ED',
            borderRadius: '16px',
            border: '2px solid #FED7AA'
          }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="p-2 mr-3" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                  <Navigation className="w-5 h-5" style={{ color: '#F97316' }} />
                </div>
                <h5 style={{ color: '#F97316', fontSize: '14px', fontWeight: '600' }}>Delivery OTP</h5>
              </div>
            </div>
            <p style={{ color: '#C2410C', fontSize: '12px', marginBottom: '12px' }}>
              Share this code with the delivery person upon arrival
            </p>
            <div className="flex justify-center p-4" style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '12px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
            }}>
              <div className="flex gap-3">
                {['8', '4', '7', '5'].map((digit, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-center" 
                    style={{ 
                      width: '48px', 
                      height: '56px',
                      backgroundColor: '#FFF7ED',
                      borderRadius: '12px',
                      border: '2px solid #F97316',
                      color: '#F97316',
                      fontSize: '24px',
                      fontWeight: '700'
                    }}
                  >
                    {digit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
