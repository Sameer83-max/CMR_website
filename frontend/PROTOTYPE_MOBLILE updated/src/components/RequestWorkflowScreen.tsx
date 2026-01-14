import React, { useState } from 'react';
import { ChevronLeft, CheckCircle, Droplet, Activity, Zap, Building2, MapPin, Clock, AlertCircle } from 'lucide-react';

interface RequestWorkflowScreenProps {
  navigateTo: (screen: string) => void;
  data?: any;
}

export function RequestWorkflowScreen({ navigateTo, data }: RequestWorkflowScreenProps) {
  const [step, setStep] = useState(1);
  const [selectedComponent, setSelectedComponent] = useState('');
  const [selectedHospital, setSelectedHospital] = useState(data?.hospital || '');

  // Progress Indicator Component
  const ProgressIndicator = ({ current, total }: { current: number; total: number }) => (
    <div className="flex items-center justify-center mb-6">
      {Array.from({ length: total }).map((_, idx) => (
        <React.Fragment key={idx}>
          <div 
            className="flex items-center justify-center transition-all" 
            style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '16px',
              backgroundColor: idx + 1 <= current ? '#3B82F6' : '#E5E7EB',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            {idx + 1}
          </div>
          {idx < total - 1 && (
            <div 
              style={{ 
                width: '40px', 
                height: '2px', 
                backgroundColor: idx + 1 < current ? '#3B82F6' : '#E5E7EB',
                margin: '0 8px'
              }} 
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  // Step 1: Select Component
  if (step === 1) {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
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
              <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Request Blood</h3>
            </div>
            <span style={{ color: '#64748B', fontSize: '13px' }}>Step 1 of 3</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <ProgressIndicator current={1} total={3} />
          
          <div className="mb-6" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h4 className="mb-2" style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>Select Blood Component</h4>
            <p style={{ color: '#64748B', fontSize: '13px' }}>Choose the component you need</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'RBC', icon: Droplet, units: '45 units', color: '#EF4444', bg: '#FEF2F2' },
              { name: 'Platelets', icon: Activity, units: '32 units', color: '#F97316', bg: '#FFF7ED' },
              { name: 'Plasma', icon: Zap, units: '28 units', color: '#3B82F6', bg: '#EFF6FF' },
              { name: 'Cryo', icon: Droplet, units: '15 units', color: '#8B5CF6', bg: '#F5F3FF' },
            ].map((component) => {
              const Icon = component.icon;
              const isSelected = selectedComponent === component.name;
              return (
                <button
                  key={component.name}
                  onClick={() => setSelectedComponent(component.name)}
                  className="p-4 flex flex-col items-center justify-center transition-all"
                  style={{
                    borderRadius: '16px',
                    border: `2px solid ${isSelected ? component.color : '#E5E7EB'}`,
                    backgroundColor: isSelected ? component.bg : '#FFFFFF',
                    minHeight: '140px',
                    boxShadow: isSelected ? `0 4px 12px ${component.color}30` : '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = component.color + '60';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div className="p-3 mb-3" style={{ backgroundColor: component.bg, borderRadius: '12px' }}>
                    <Icon className="w-8 h-8" style={{ color: component.color }} />
                  </div>
                  <span style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>
                    {component.name}
                  </span>
                  <span style={{ color: '#64748B', fontSize: '12px' }}>{component.units}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
          <button
            onClick={() => setStep(2)}
            disabled={!selectedComponent}
            className="w-full py-3.5 transition-all"
            style={{
              backgroundColor: selectedComponent ? '#3B82F6' : '#CBD5E1',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '14px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: selectedComponent ? 'pointer' : 'not-allowed',
              opacity: selectedComponent ? 1 : 0.6
            }}
            onMouseEnter={(e) => {
              if (selectedComponent) e.currentTarget.style.backgroundColor = '#2563EB';
            }}
            onMouseLeave={(e) => {
              if (selectedComponent) e.currentTarget.style.backgroundColor = '#3B82F6';
            }}
          >
            Continue to Hospital Selection
          </button>
        </div>
      </div>
    );
  }

  // Step 2: Select Hospital
  if (step === 2) {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setStep(1)} 
                className="mr-3 p-2 transition-all rounded-full"
                style={{ background: 'none', border: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
              </button>
              <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Select Hospital</h3>
            </div>
            <span style={{ color: '#64748B', fontSize: '13px' }}>Step 2 of 3</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <ProgressIndicator current={2} total={3} />
          
          <div className="mb-4 p-3 flex items-center justify-between" style={{ 
            backgroundColor: '#EFF6FF', 
            borderRadius: '14px',
            border: '1px solid #BFDBFE'
          }}>
            <span style={{ color: '#64748B', fontSize: '13px' }}>Selected Component:</span>
            <span style={{ color: '#3B82F6', fontSize: '14px', fontWeight: '600' }}>{selectedComponent}</span>
          </div>
          
          <div className="mb-4" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h4 className="mb-2" style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>Available Hospitals</h4>
            <p style={{ color: '#64748B', fontSize: '13px' }}>Select based on distance and stock</p>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'City General Hospital', units: '12 units', distance: '2.3 km', freshness: '2 days', stock: 80 },
              { name: 'Apollo Blood Bank', units: '8 units', distance: '4.1 km', freshness: '1 day', stock: 60 },
              { name: 'RedCross Center', units: '15 units', distance: '5.8 km', freshness: '4 days', stock: 95 },
            ].map((hospital) => {
              const isSelected = selectedHospital === hospital.name;
              return (
                <button
                  key={hospital.name}
                  onClick={() => setSelectedHospital(hospital.name)}
                  className="w-full p-4 text-left transition-all"
                  style={{
                    borderRadius: '16px',
                    border: `2px solid ${isSelected ? '#10B981' : '#E5E7EB'}`,
                    backgroundColor: isSelected ? '#F0FDF4' : '#FFFFFF',
                    boxShadow: isSelected ? '0 4px 12px rgba(16,185,129,0.2)' : '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#10B98160';
                      e.currentTarget.style.backgroundColor = '#F9FAFB';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                    }
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className="p-2 mr-3" style={{ backgroundColor: '#F0FDF4', borderRadius: '10px' }}>
                        <Building2 className="w-5 h-5" style={{ color: '#10B981' }} />
                      </div>
                      <h5 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>{hospital.name}</h5>
                    </div>
                    {isSelected && <CheckCircle className="w-5 h-5" style={{ color: '#10B981' }} />}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3" style={{ fontSize: '13px' }}>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" style={{ color: '#64748B' }} />
                      <span style={{ color: '#64748B' }}>{hospital.distance}</span>
                    </div>
                    <div className="px-2.5 py-1" style={{ 
                      backgroundColor: '#10B98120', 
                      borderRadius: '8px',
                      color: '#10B981',
                      fontWeight: '500'
                    }}>
                      {hospital.units}
                    </div>
                  </div>
                  
                  {/* Stock Progress Bar */}
                  <div>
                    <div className="flex justify-between mb-1" style={{ fontSize: '11px' }}>
                      <span style={{ color: '#64748B' }}>Stock Level</span>
                      <span style={{ color: '#10B981', fontWeight: '500' }}>{hospital.stock}%</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#E5E7EB', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ 
                        width: `${hospital.stock}%`, 
                        height: '100%', 
                        backgroundColor: '#10B981',
                        transition: 'width 0.3s'
                      }} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
          <button
            onClick={() => setStep(3)}
            disabled={!selectedHospital}
            className="w-full py-3.5 transition-all"
            style={{
              backgroundColor: selectedHospital ? '#10B981' : '#CBD5E1',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '14px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: selectedHospital ? 'pointer' : 'not-allowed',
              opacity: selectedHospital ? 1 : 0.6
            }}
            onMouseEnter={(e) => {
              if (selectedHospital) e.currentTarget.style.backgroundColor = '#059669';
            }}
            onMouseLeave={(e) => {
              if (selectedHospital) e.currentTarget.style.backgroundColor = '#10B981';
            }}
          >
            Review Request
          </button>
        </div>
      </div>
    );
  }

  // Step 3: Request Summary
  if (step === 3) {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setStep(2)} 
                className="mr-3 p-2 transition-all rounded-full"
                style={{ background: 'none', border: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
              </button>
              <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Review & Confirm</h3>
            </div>
            <span style={{ color: '#64748B', fontSize: '13px' }}>Step 3 of 3</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <ProgressIndicator current={3} total={3} />
          
          {/* Summary Card */}
          <div className="p-4 space-y-3" style={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h5 className="mb-3" style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Request Details</h5>
            
            <div className="flex justify-between py-3" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Component</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>{selectedComponent}</span>
            </div>
            <div className="flex justify-between py-3" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Hospital</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>{selectedHospital}</span>
            </div>
            <div className="flex justify-between py-3" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Blood Group</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>B+</span>
            </div>
            <div className="flex justify-between py-3">
              <span style={{ color: '#64748B', fontSize: '13px' }}>Units Requested</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>2 units</span>
            </div>
          </div>
          
          {/* Urgency Indicator */}
          <div className="p-4" style={{ 
            backgroundColor: '#FFF7ED', 
            borderRadius: '16px',
            border: '2px solid #FED7AA'
          }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" style={{ color: '#F97316' }} />
                <h5 style={{ color: '#F97316', fontSize: '14px', fontWeight: '600' }}>Urgency Level: High</h5>
              </div>
              <span style={{ 
                color: '#F97316', 
                fontSize: '18px', 
                fontWeight: '600'
              }}>7/10</span>
            </div>
            <div className="h-3 mb-2" style={{ backgroundColor: '#FFFFFF', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ width: '70%', height: '100%', backgroundColor: '#F97316', transition: 'width 0.3s' }} />
            </div>
            <p style={{ color: '#C2410C', fontSize: '12px' }}>Based on your medical history and current need</p>
          </div>
          
          {/* Estimated Time */}
          <div className="p-4 flex items-center justify-between" style={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div className="flex items-center">
              <div className="p-2 mr-3" style={{ backgroundColor: '#EFF6FF', borderRadius: '10px' }}>
                <Clock className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Estimated Delivery</span>
            </div>
            <span style={{ color: '#3B82F6', fontSize: '15px', fontWeight: '600' }}>45-60 min</span>
          </div>
          
          {/* Thalassemia Support */}
          <div className="p-4" style={{ 
            backgroundColor: '#F5F3FF', 
            borderRadius: '16px',
            border: '2px solid #C4B5FD'
          }}>
            <div className="flex items-center justify-between">
              <div>
                <h5 className="mb-1" style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: '600' }}>Thalassemia Patient</h5>
                <p style={{ color: '#7C3AED', fontSize: '12px' }}>Priority processing enabled</p>
              </div>
              <div className="px-3 py-1.5" style={{ 
                backgroundColor: '#8B5CF6', 
                color: '#FFFFFF',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Priority
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
          <button
            onClick={() => setStep(4)}
            className="w-full py-3.5 transition-all"
            style={{ 
              backgroundColor: '#EF4444', 
              color: '#FFFFFF', 
              border: 'none',
              borderRadius: '14px',
              fontSize: '15px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(239,68,68,0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EF4444'}
          >
            Confirm Request
          </button>
        </div>
      </div>
    );
  }

  // Step 4: Confirmation
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="mb-6 p-6 transition-all" style={{ 
          backgroundColor: '#F0FDF4', 
          borderRadius: '100px',
          boxShadow: '0 8px 24px rgba(16,185,129,0.2)'
        }}>
          <CheckCircle className="w-20 h-20" style={{ color: '#10B981' }} />
        </div>
        
        <h2 className="mb-2 text-center" style={{ color: '#1F2937', fontSize: '24px', fontWeight: '600' }}>
          Request Confirmed!
        </h2>
        <p className="text-center mb-8" style={{ color: '#64748B', fontSize: '14px', maxWidth: '280px' }}>
          Your blood request has been submitted and sent to the hospital
        </p>
        
        <div className="w-full p-4 mb-6" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div className="flex justify-between mb-3 pb-3" style={{ borderBottom: '1px solid #E5E7EB' }}>
            <span style={{ color: '#64748B', fontSize: '13px' }}>Request ID</span>
            <span style={{ color: '#10B981', fontSize: '14px', fontWeight: '600' }}>BRQ-2024-8745</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: '#64748B', fontSize: '13px' }}>Status</span>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: '#10B981' }} />
              <span style={{ color: '#10B981', fontSize: '14px', fontWeight: '600' }}>Sent to Hospital</span>
            </div>
          </div>
        </div>
        
        {/* Status Timeline */}
        <div className="w-full p-4 mb-6" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <h5 className="mb-4" style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>Request Progress</h5>
          <div className="space-y-3">
            {[
              { label: 'Request Sent', completed: true },
              { label: 'Hospital Accepted', completed: false },
              { label: 'Unit Prepared', completed: false },
              { label: 'Dispatched', completed: false },
              { label: 'Delivered', completed: false },
            ].map((status, idx) => (
              <div key={idx} className="flex items-center">
                <div
                  className="flex items-center justify-center transition-all"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '12px',
                    marginRight: '12px',
                    backgroundColor: status.completed ? '#10B981' : '#FFFFFF',
                    border: `2px solid ${status.completed ? '#10B981' : '#E5E7EB'}`
                  }}
                >
                  {status.completed && (
                    <CheckCircle className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  )}
                </div>
                <span style={{ 
                  color: status.completed ? '#1F2937' : '#94A3B8',
                  fontSize: '13px',
                  fontWeight: status.completed ? '500' : '400'
                }}>
                  {status.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
        <button
          onClick={() => navigateTo('tracking')}
          className="w-full py-3.5 transition-all"
          style={{ 
            backgroundColor: '#3B82F6', 
            color: '#FFFFFF', 
            border: 'none',
            borderRadius: '14px',
            fontSize: '15px',
            fontWeight: '600'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
        >
          Track Live Status →
        </button>
      </div>
    </div>
  );
}
