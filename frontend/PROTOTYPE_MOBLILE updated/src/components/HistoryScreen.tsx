import React, { useState } from 'react';
import { ChevronLeft, CheckCircle, XCircle, Clock, Calendar, MapPin, RefreshCw, Eye, Droplet } from 'lucide-react';

interface HistoryScreenProps {
  navigateTo: (screen: string) => void;
}

export function HistoryScreen({ navigateTo }: HistoryScreenProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'cancelled'>('all');

  const orders = [
    {
      id: 'BRQ-2024-8745',
      component: 'Packed RBC',
      units: '2 units',
      hospital: 'City General Hospital',
      date: '28 Nov 2024',
      status: 'completed',
      amount: '₹2,500',
      timeline: ['Requested', 'Prepared', 'Dispatched', 'Delivered']
    },
    {
      id: 'BRQ-2024-8632',
      component: 'Platelets',
      units: '1 unit',
      hospital: 'Apollo Blood Bank',
      date: '15 Nov 2024',
      status: 'completed',
      amount: '₹1,800',
      timeline: ['Requested', 'Prepared', 'Dispatched', 'Delivered']
    },
    {
      id: 'BRQ-2024-8521',
      component: 'Plasma',
      units: '1 unit',
      hospital: 'RedCross Center',
      date: '03 Nov 2024',
      status: 'cancelled',
      amount: '₹1,200',
      timeline: ['Requested', 'Cancelled']
    },
    {
      id: 'BRQ-2024-8412',
      component: 'Packed RBC',
      units: '2 units',
      hospital: 'Apollo Hospital',
      date: '20 Oct 2024',
      status: 'completed',
      amount: '₹2,500',
      timeline: ['Requested', 'Prepared', 'Dispatched', 'Delivered']
    },
  ];

  const filteredOrders = orders.filter(order => 
    filter === 'all' || order.status === filter
  );

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center mb-4">
          <button 
            onClick={() => navigateTo('home')} 
            className="mr-3 p-2 transition-all rounded-full"
            style={{ background: 'none', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Order History</h3>
        </div>
        
        {/* Filter Pills */}
        <div className="flex gap-2">
          {[
            { value: 'all', label: 'All Orders', count: 12, color: '#3B82F6' },
            { value: 'completed', label: 'Completed', count: 10, color: '#10B981' },
            { value: 'cancelled', label: 'Cancelled', count: 2, color: '#EF4444' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as any)}
              className="flex-1 py-2.5 transition-all"
              style={{
                borderRadius: '12px',
                border: `2px solid ${filter === tab.value ? tab.color : '#E5E7EB'}`,
                backgroundColor: filter === tab.value ? tab.color : '#FFFFFF',
                color: filter === tab.value ? '#FFFFFF' : '#64748B',
                fontSize: '13px',
                fontWeight: filter === tab.value ? '600' : '500',
                boxShadow: filter === tab.value ? `0 4px 12px ${tab.color}30` : 'none'
              }}
              onMouseEnter={(e) => {
                if (filter !== tab.value) {
                  e.currentTarget.style.borderColor = tab.color + '60';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== tab.value) {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }
              }}
            >
              {tab.label}
              {filter === tab.value && (
                <span style={{ 
                  marginLeft: '6px',
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  padding: '2px 6px',
                  borderRadius: '8px',
                  fontSize: '11px'
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {/* Summary Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 text-center transition-all" style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '2px solid #E5E7EB'
          }}>
            <p style={{ color: '#3B82F6', fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>12</p>
            <p style={{ color: '#64748B', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total</p>
          </div>
          <div className="p-3 text-center transition-all" style={{ 
            backgroundColor: '#F0FDF4',
            borderRadius: '14px',
            boxShadow: '0 2px 8px rgba(16,185,129,0.1)',
            border: '2px solid #BBF7D0'
          }}>
            <p style={{ color: '#10B981', fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>10</p>
            <p style={{ color: '#059669', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Success</p>
          </div>
          <div className="p-3 text-center transition-all" style={{ 
            backgroundColor: '#FEF2F2',
            borderRadius: '14px',
            boxShadow: '0 2px 8px rgba(239,68,68,0.1)',
            border: '2px solid #FCA5A5'
          }}>
            <p style={{ color: '#EF4444', fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>2</p>
            <p style={{ color: '#DC2626', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Failed</p>
          </div>
        </div>
        
        {/* Timeline Cards */}
        <div className="space-y-3">
          {filteredOrders.map((order, idx) => (
            <div
              key={idx}
              className="p-4 transition-all"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: `1px solid ${order.status === 'completed' ? '#BBF7D0' : '#FCA5A5'}`,
                borderLeft: `4px solid ${order.status === 'completed' ? '#10B981' : '#EF4444'}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="p-2 mr-3" style={{ 
                    backgroundColor: order.status === 'completed' ? '#F0FDF4' : '#FEF2F2',
                    borderRadius: '10px'
                  }}>
                    <Droplet className="w-5 h-5" style={{ 
                      color: order.status === 'completed' ? '#10B981' : '#EF4444'
                    }} />
                  </div>
                  <div>
                    <h5 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600', marginBottom: '2px' }}>
                      {order.component}
                    </h5>
                    <p style={{ color: '#64748B', fontSize: '12px' }}>{order.units}</p>
                  </div>
                </div>
                <div className="flex items-center px-3 py-1.5" style={{
                  backgroundColor: order.status === 'completed' ? '#F0FDF4' : '#FEF2F2',
                  borderRadius: '10px'
                }}>
                  {order.status === 'completed' ? (
                    <CheckCircle className="w-4 h-4 mr-1.5" style={{ color: '#10B981' }} />
                  ) : (
                    <XCircle className="w-4 h-4 mr-1.5" style={{ color: '#EF4444' }} />
                  )}
                  <span style={{ 
                    color: order.status === 'completed' ? '#10B981' : '#EF4444',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              {/* Details */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" style={{ color: '#64748B' }} />
                  <span style={{ color: '#64748B', fontSize: '13px' }}>{order.hospital}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" style={{ color: '#64748B' }} />
                  <span style={{ color: '#64748B', fontSize: '13px' }}>{order.date}</span>
                </div>
              </div>
              
              {/* Mini Timeline */}
              {order.status === 'completed' && (
                <div className="flex items-center mb-3 p-2" style={{ 
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px'
                }}>
                  {order.timeline.map((step, stepIdx) => (
                    <React.Fragment key={stepIdx}>
                      <div className="flex flex-col items-center flex-1">
                        <div style={{ 
                          width: '6px',
                          height: '6px',
                          borderRadius: '3px',
                          backgroundColor: '#10B981',
                          marginBottom: '4px'
                        }} />
                        <span style={{ 
                          color: '#64748B',
                          fontSize: '9px',
                          textAlign: 'center'
                        }}>
                          {step}
                        </span>
                      </div>
                      {stepIdx < order.timeline.length - 1 && (
                        <div style={{ 
                          flex: 1,
                          height: '2px',
                          backgroundColor: '#10B981',
                          marginBottom: '18px'
                        }} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
              
              {/* Footer */}
              <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid #E5E7EB' }}>
                <span style={{ color: '#64748B', fontSize: '12px' }}>ID: {order.id}</span>
                <span style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>{order.amount}</span>
              </div>
              
              {/* Actions */}
              <div className="flex gap-2 mt-3">
                <button 
                  className="flex-1 py-2.5 flex items-center justify-center transition-all"
                  style={{ 
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    border: '1px solid #E5E7EB',
                    color: '#64748B',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F1F5F9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                  }}
                >
                  <Eye className="w-4 h-4 mr-1.5" />
                  View Details
                </button>
                {order.status === 'completed' && (
                  <button 
                    className="flex-1 py-2.5 flex items-center justify-center transition-all"
                    style={{ 
                      backgroundColor: '#F0FDF4',
                      borderRadius: '10px',
                      border: '2px solid #10B981',
                      color: '#10B981',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#10B981';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F0FDF4';
                      e.currentTarget.style.color = '#10B981';
                    }}
                  >
                    <RefreshCw className="w-4 h-4 mr-1.5" />
                    Reorder
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
