import React from 'react';
import { ChevronLeft, WifiOff, Download, CheckCircle, RefreshCw, Cloud, CloudOff } from 'lucide-react';

interface OfflineScreenProps {
  navigateTo: (screen: string) => void;
}

export function OfflineScreen({ navigateTo }: OfflineScreenProps) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
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
          <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Offline Mode</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Offline Status Banner */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFF7ED',
          borderRadius: '16px',
          border: '2px solid #FED7AA'
        }}>
          <div className="flex items-start mb-3">
            <div className="p-2 mr-3" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
              <WifiOff className="w-6 h-6" style={{ color: '#F97316' }} />
            </div>
            <div className="flex-1">
              <h4 style={{ color: '#F97316', fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>
                You're Currently Offline
              </h4>
              <p style={{ color: '#C2410C', fontSize: '12px' }}>
                Limited features available. Download data for offline access.
              </p>
            </div>
          </div>
          <button 
            className="w-full py-3 flex items-center justify-center transition-all"
            style={{ 
              backgroundColor: '#F97316',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(249,115,22,0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EA580C'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F97316'}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry Connection
          </button>
        </div>
        
        {/* Downloaded Data - Sync Indicators */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Downloaded for Offline
            </h4>
            <div className="flex items-center px-2.5 py-1" style={{ 
              backgroundColor: '#F0FDF4',
              borderRadius: '10px'
            }}>
              <Cloud className="w-3.5 h-3.5 mr-1.5" style={{ color: '#10B981' }} />
              <span style={{ color: '#10B981', fontSize: '11px', fontWeight: '600' }}>Synced</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Medical History', size: '2.4 MB', date: 'Nov 28, 2024', progress: 100 },
              { name: 'Transfusion Schedule', size: '1.1 MB', date: 'Nov 28, 2024', progress: 100 },
              { name: 'Recent Reports', size: '5.8 MB', date: 'Nov 25, 2024', progress: 100 },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 transition-all"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start flex-1">
                    <div className="p-2 mr-3" style={{ backgroundColor: '#F0FDF4', borderRadius: '10px' }}>
                      <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />
                    </div>
                    <div className="flex-1">
                      <h5 style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                        {item.name}
                      </h5>
                      <p style={{ color: '#64748B', fontSize: '12px' }}>
                        {item.size} • {item.date}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Progress Indicator */}
                <div style={{ 
                  height: '4px',
                  backgroundColor: '#E5E7EB',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: `${item.progress}%`,
                    height: '100%',
                    backgroundColor: '#10B981',
                    transition: 'width 0.3s'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Available Downloads */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Available for Download
            </h4>
            <div className="flex items-center px-2.5 py-1" style={{ 
              backgroundColor: '#F8FAFC',
              borderRadius: '10px'
            }}>
              <CloudOff className="w-3.5 h-3.5 mr-1.5" style={{ color: '#64748B' }} />
              <span style={{ color: '#64748B', fontSize: '11px', fontWeight: '600' }}>Not Synced</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Order History', size: '3.2 MB', color: '#3B82F6', priority: false },
              { name: 'Hospital Directory', size: '8.5 MB', color: '#3B82F6', priority: false },
              { name: 'Emergency Contacts', size: '0.5 MB', color: '#EF4444', priority: true },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 transition-all"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  border: `2px solid ${item.priority ? item.color + '40' : '#E5E7EB'}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center flex-1">
                    <div className="p-2 mr-3" style={{ 
                      backgroundColor: item.priority ? item.color + '20' : '#F8FAFC',
                      borderRadius: '10px'
                    }}>
                      <Download className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h5 style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600', marginRight: '6px' }}>
                          {item.name}
                        </h5>
                        {item.priority && (
                          <span className="px-2 py-0.5" style={{ 
                            backgroundColor: item.color + '20',
                            borderRadius: '6px',
                            color: item.color,
                            fontSize: '10px',
                            fontWeight: '600',
                            textTransform: 'uppercase'
                          }}>
                            Priority
                          </span>
                        )}
                      </div>
                      <p style={{ color: '#64748B', fontSize: '12px' }}>{item.size}</p>
                    </div>
                  </div>
                  <button 
                    className="px-4 py-2 transition-all"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: `2px solid ${item.color}`,
                      borderRadius: '10px',
                      color: item.color,
                      fontSize: '13px',
                      fontWeight: '600'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = item.color;
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.color = item.color;
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Auto-Sync Settings */}
        <div className="p-4" style={{ 
          backgroundColor: '#F5F3FF',
          borderRadius: '16px',
          border: '2px solid #C4B5FD'
        }}>
          <h5 className="mb-4" style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: '600' }}>
            Auto-Sync Settings
          </h5>
          <div className="space-y-3">
            {[
              { label: 'Auto-download medical reports', enabled: true },
              { label: 'Sync transfusion schedules', enabled: true },
              { label: 'Download order history', enabled: false },
            ].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between p-3" style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}>
                <span style={{ color: '#1F2937', fontSize: '13px' }}>{setting.label}</span>
                <button
                  className="transition-all"
                  style={{
                    width: '48px',
                    height: '26px',
                    borderRadius: '13px',
                    backgroundColor: setting.enabled ? '#8B5CF6' : '#E5E7EB',
                    padding: '3px',
                    border: 'none',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '10px',
                      backgroundColor: '#FFFFFF',
                      position: 'absolute',
                      top: '3px',
                      left: setting.enabled ? '25px' : '3px',
                      transition: 'left 0.2s',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}