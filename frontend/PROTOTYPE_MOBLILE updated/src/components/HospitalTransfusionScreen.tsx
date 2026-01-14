import React, { useState } from 'react';
import { ChevronLeft, User, Bed, Users as UsersIcon, Activity, AlertCircle, FileText } from 'lucide-react';

interface HospitalTransfusionScreenProps {
  navigateTo: (screen: string) => void;
}

type TransfusionPhase = 'pre' | 'during' | 'post';

export function HospitalTransfusionScreen({ navigateTo }: HospitalTransfusionScreenProps) {
  const [selectedPhase, setSelectedPhase] = useState<TransfusionPhase>('pre');

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#F5F3FF' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #8B5CF6' }}>
        <div className="flex items-center">
          <button onClick={() => navigateTo('hospital-home')} className="mr-3">
            <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#8B5CF6' }}>Transfusion Management</h3>
        </div>
      </div>
      
      {/* Phase Tabs */}
      <div className="flex" style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #E5E7EB' }}>
        {[
          { key: 'pre', label: 'Pre-Transfusion' },
          { key: 'during', label: 'During' },
          { key: 'post', label: 'Post-Transfusion' },
        ].map((phase) => (
          <button
            key={phase.key}
            onClick={() => setSelectedPhase(phase.key as TransfusionPhase)}
            className={`flex-1 py-3 ${selectedPhase === phase.key ? 'border-b-2' : ''}`}
            style={selectedPhase === phase.key ? { borderBottomColor: '#8B5CF6' } : {}}
          >
            <span style={{ color: selectedPhase === phase.key ? '#8B5CF6' : '#6B7280' }}>
              {phase.label}
            </span>
          </button>
        ))}
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Pre-Transfusion */}
        {selectedPhase === 'pre' && (
          <>
            {/* Patient & Bed Allocation */}
            <div className="p-4" style={{ border: '2px solid #8B5CF6', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Patient & Bed Allocation</h5>
              <div className="space-y-3">
                <div className="p-3" style={{ backgroundColor: '#F5F3FF', border: '1px solid #8B5CF6' }}>
                  <div className="flex items-center mb-2">
                    <User className="w-5 h-5 mr-2" style={{ color: '#8B5CF6' }} />
                    <div>
                      <p style={{ color: '#1F2937' }}>Patient ID: PT-****-6789</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>B+ • Platelets Transfusion</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2" style={{ color: '#8B5CF6' }} />
                    <span style={{ color: '#1F2937' }}>Ward 3A, Bed 12</span>
                  </div>
                </div>
                
                <button className="w-full py-2" style={{ border: '2px solid #8B5CF6', backgroundColor: '#F5F3FF', color: '#8B5CF6' }}>
                  Change Bed Assignment
                </button>
              </div>
            </div>
            
            {/* Staff Assignment */}
            <div className="p-4" style={{ border: '2px solid #8B5CF6', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Staff Assignment</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2" style={{ backgroundColor: '#F5F3FF', border: '1px solid #8B5CF6' }}>
                  <div className="flex items-center">
                    <UsersIcon className="w-5 h-5 mr-2" style={{ color: '#8B5CF6' }} />
                    <span style={{ color: '#1F2937' }}>Nurse: Priya Sharma</span>
                  </div>
                  <span className="text-xs" style={{ color: '#10B981' }}>Assigned</span>
                </div>
                <div className="flex items-center justify-between p-2" style={{ backgroundColor: '#F5F3FF', border: '1px solid #8B5CF6' }}>
                  <div className="flex items-center">
                    <UsersIcon className="w-5 h-5 mr-2" style={{ color: '#8B5CF6' }} />
                    <span style={{ color: '#1F2937' }}>Doctor: Dr. Kumar</span>
                  </div>
                  <span className="text-xs" style={{ color: '#F97316' }}>On Call</span>
                </div>
              </div>
            </div>
            
            {/* Pre-Transfusion Checklist */}
            <div className="p-4" style={{ border: '2px solid #8B5CF6', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Pre-Transfusion Checklist</h5>
              <div className="space-y-2">
                {[
                  { label: 'Patient consent obtained', checked: true },
                  { label: 'Blood unit verified', checked: true },
                  { label: 'Crossmatch compatible', checked: true },
                  { label: 'Patient ID wristband verified', checked: false },
                  { label: 'Baseline vitals recorded', checked: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-2"
                    style={{ border: '1px solid #E5E7EB', backgroundColor: item.checked ? '#F9FAFB' : '#FFFFFF' }}
                  >
                    <div
                      className="w-5 h-5 rounded mr-3 flex items-center justify-center"
                      style={{
                        border: '2px solid #E5E7EB',
                        backgroundColor: item.checked ? '#9CA3AF' : '#FFFFFF'
                      }}
                    >
                      {item.checked && <div className="w-2 h-2 rounded" style={{ backgroundColor: '#FFFFFF' }} />}
                    </div>
                    <span style={{ color: '#1F2937' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Baseline Vitals */}
            <div className="p-4" style={{ border: '2px solid #8B5CF6', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Baseline Vitals</h5>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'BP', value: '120/80', unit: 'mmHg' },
                  { label: 'Pulse', value: '78', unit: 'bpm' },
                  { label: 'Temp', value: '98.6', unit: '°F' },
                  { label: 'SpO2', value: '98', unit: '%' },
                ].map((vital, idx) => (
                  <div key={idx} className="p-3 text-center" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{vital.label}</p>
                    <p style={{ color: '#1F2937' }}>
                      {vital.value} <span className="text-sm">{vital.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        
        {/* During Transfusion */}
        {selectedPhase === 'during' && (
          <>
            {/* Transfusion In Progress */}
            <div className="p-4 text-center" style={{ border: '2px solid #9CA3AF', backgroundColor: '#F9FAFB' }}>
              <Activity className="w-12 h-12 mx-auto mb-3" style={{ color: '#9CA3AF' }} />
              <h4 className="mb-2" style={{ color: '#1F2937' }}>Transfusion In Progress</h4>
              <p style={{ color: '#6B7280' }}>Started: 11:30 AM</p>
              <p className="text-sm mt-2" style={{ color: '#6B7280' }}>
                Elapsed: 15 minutes • Estimated remaining: 30 minutes
              </p>
            </div>
            
            {/* Current Vitals Monitoring */}
            <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Live Vitals Monitoring</h5>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'BP', value: '118/78', status: 'Normal' },
                  { label: 'Pulse', value: '82', status: 'Normal' },
                  { label: 'Temp', value: '98.8', status: 'Normal' },
                  { label: 'SpO2', value: '97', status: 'Normal' },
                ].map((vital, idx) => (
                  <div key={idx} className="p-3" style={{ border: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
                    <p className="text-sm mb-1" style={{ color: '#6B7280' }}>{vital.label}</p>
                    <p className="mb-1" style={{ color: '#1F2937' }}>{vital.value}</p>
                    <span className="text-xs px-2 py-0.5" style={{ backgroundColor: '#9CA3AF', color: '#FFFFFF' }}>
                      {vital.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Volume Infused */}
            <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
              <div className="flex items-center justify-between mb-2">
                <h5 style={{ color: '#374151' }}>Volume Infused</h5>
                <span style={{ color: '#1F2937' }}>150 ml / 300 ml</span>
              </div>
              <div className="h-3 mb-2" style={{ backgroundColor: '#E5E7EB' }}>
                <div className="h-full" style={{ width: '50%', backgroundColor: '#9CA3AF' }} />
              </div>
              <p className="text-sm" style={{ color: '#6B7280' }}>50% complete • Rate: 10 ml/min</p>
            </div>
            
            {/* Observation Log */}
            <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Observation Log</h5>
              <div className="space-y-2">
                {[
                  { time: '11:30 AM', note: 'Transfusion started', status: 'Normal' },
                  { time: '11:40 AM', note: 'Patient comfortable, no reactions', status: 'Normal' },
                  { time: '11:45 AM', note: 'Vitals stable', status: 'Normal' },
                ].map((log, idx) => (
                  <div key={idx} className="p-2" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>{log.time}</span>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>{log.status}</span>
                    </div>
                    <p className="text-sm" style={{ color: '#1F2937' }}>{log.note}</p>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 mt-3" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}>
                Add Observation
              </button>
            </div>
            
            {/* Reaction Alert Button */}
            <button
              className="w-full py-3 flex items-center justify-center"
              style={{ border: '2px solid #9CA3AF', backgroundColor: '#F9FAFB' }}
            >
              <AlertCircle className="w-5 h-5 mr-2" style={{ color: '#9CA3AF' }} />
              <span style={{ color: '#9CA3AF' }}>Report Adverse Reaction</span>
            </button>
          </>
        )}
        
        {/* Post-Transfusion */}
        {selectedPhase === 'post' && (
          <>
            {/* Completion Summary */}
            <div className="p-4 text-center" style={{ border: '2px solid #9CA3AF', backgroundColor: '#F9FAFB' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#9CA3AF' }}>
                <FileText className="w-8 h-8" style={{ color: '#FFFFFF' }} />
              </div>
              <h4 className="mb-2" style={{ color: '#1F2937' }}>Transfusion Completed</h4>
              <p style={{ color: '#6B7280' }}>Duration: 45 minutes</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>Volume: 300 ml</p>
            </div>
            
            {/* Post-Transfusion Vitals */}
            <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Post-Transfusion Vitals</h5>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'BP', value: '122/80', change: '+2' },
                  { label: 'Pulse', value: '76', change: '-2' },
                  { label: 'Temp', value: '98.6', change: '0' },
                  { label: 'SpO2', value: '98', change: '0' },
                ].map((vital, idx) => (
                  <div key={idx} className="p-3" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{vital.label}</p>
                    <div className="flex items-center justify-between">
                      <p style={{ color: '#1F2937' }}>{vital.value}</p>
                      <span className="text-xs" style={{ color: '#6B7280' }}>({vital.change})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Adverse Reactions */}
            <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Adverse Reactions</h5>
              <div className="p-3 text-center" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                <p style={{ color: '#9CA3AF' }}>No adverse reactions reported</p>
              </div>
            </div>
            
            {/* Post-Transfusion Monitoring */}
            <div className="p-4" style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
              <h5 className="mb-3" style={{ color: '#374151' }}>Monitoring Schedule</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2" style={{ backgroundColor: '#F9FAFB' }}>
                  <span style={{ color: '#6B7280' }}>15 min check:</span>
                  <span style={{ color: '#9CA3AF' }}>Complete</span>
                </div>
                <div className="flex justify-between p-2" style={{ backgroundColor: '#F9FAFB' }}>
                  <span style={{ color: '#6B7280' }}>30 min check:</span>
                  <span style={{ color: '#9CA3AF' }}>Complete</span>
                </div>
                <div className="flex justify-between p-2" style={{ backgroundColor: '#F9FAFB' }}>
                  <span style={{ color: '#6B7280' }}>1 hour check:</span>
                  <span style={{ color: '#6B7280' }}>Scheduled</span>
                </div>
              </div>
            </div>
            
            {/* Completion Actions */}
            <div className="space-y-2">
              <button
                className="w-full py-3"
                style={{ backgroundColor: '#9CA3AF', color: '#FFFFFF', border: 'none' }}
              >
                Mark Transfusion Complete
              </button>
              <button
                className="w-full py-3"
                style={{ border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
              >
                Generate Report
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}