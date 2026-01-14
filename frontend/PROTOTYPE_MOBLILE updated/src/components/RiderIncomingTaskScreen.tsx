import React, { useState } from 'react';
import { ChevronLeft, MapPin, Clock, Package, AlertCircle, ThermometerSun, X, Navigation } from 'lucide-react';

interface RiderIncomingTaskScreenProps {
  navigateTo: (screen: string) => void;
}

interface Task {
  id: number;
  pickup: string;
  drop: string;
  component: string;
  distance: string;
  eta: string;
  priority: 'Emergency' | 'Urgent' | 'Normal';
  specialInstructions?: string;
}

export function RiderIncomingTaskScreen({ navigateTo }: RiderIncomingTaskScreenProps) {
  const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const [acceptedTask, setAcceptedTask] = useState<number | null>(null);
  const [rejectedTask, setRejectedTask] = useState<number | null>(null);

  const tasks: Task[] = [
    {
      id: 1,
      pickup: 'City General Blood Bank',
      drop: 'Apollo Hospital, Sector 12',
      component: 'Platelets (6 units)',
      distance: '4.2 km',
      eta: '18 min',
      priority: 'Emergency',
      specialInstructions: 'Platelets are temperature sensitive - maintain 20-24°C'
    },
    {
      id: 2,
      pickup: 'Metro Blood Center',
      drop: 'Fortis Hospital, Indiranagar',
      component: 'RBC (3 units)',
      distance: '6.8 km',
      eta: '25 min',
      priority: 'Urgent',
    },
    {
      id: 3,
      pickup: 'Central Blood Bank',
      drop: 'Manipal Hospital, Jayanagar',
      component: 'Plasma (2 units)',
      distance: '3.5 km',
      eta: '15 min',
      priority: 'Normal',
    },
  ];

  // Task accepted view
  if (acceptedTask !== null) {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(16,185,129,0.1)', border: '4px solid #10B981' }}>
            <Package className="w-12 h-12" style={{ color: '#10B981' }} />
          </div>
          <h3 className="mb-2" style={{ color: '#1F2937' }}>Task Accepted</h3>
          <p className="text-center mb-6" style={{ color: '#6B7280' }}>
            Task has been assigned to you
          </p>
          <button
            onClick={() => navigateTo('rider-pickup')}
            className="w-full py-4 mb-3"
            style={{ borderRadius: '16px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}
          >
            Start Pickup Navigation
          </button>
          <button
            onClick={() => navigateTo('rider-home')}
            className="w-full py-4"
            style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#1F2937' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Task rejected view
  if (rejectedTask !== null) {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(229,231,235,0.5)', border: '4px solid #E5E7EB' }}>
            <X className="w-12 h-12" style={{ color: '#6B7280' }} />
          </div>
          <h3 className="mb-2" style={{ color: '#1F2937' }}>Task Declined</h3>
          <p className="text-center mb-6" style={{ color: '#6B7280' }}>
            Task reassigned to nearest rider
          </p>
          <button
            onClick={() => navigateTo('rider-home')}
            className="w-full py-4"
            style={{ borderRadius: '16px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Task details modal
  if (selectedTask !== null) {
    const task = tasks.find(t => t.id === selectedTask);
    if (!task) return null;

    const priorityColor = task.priority === 'Emergency' ? '#EF4444' : task.priority === 'Urgent' ? '#F97316' : '#3B82F6';
    const priorityBg = task.priority === 'Emergency' ? '#FEF2F2' : task.priority === 'Urgent' ? '#FFF7ED' : '#EFF6FF';

    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Header */}
        <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex items-center justify-between">
            <h3 style={{ color: '#1F2937' }}>Task Details</h3>
            <button onClick={() => setSelectedTask(null)} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <X className="w-5 h-5" style={{ color: '#6B7280' }} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Priority Banner */}
          <div className="p-5" style={{ borderRadius: '16px', borderLeft: `4px solid ${priorityColor}`, backgroundColor: priorityBg, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: priorityColor }}>
                  <AlertCircle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <h4 style={{ color: priorityColor }}>{task.priority} Priority</h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Immediate action required</p>
                </div>
              </div>
              <span className="px-4 py-2" style={{ borderRadius: '999px', backgroundColor: priorityColor, color: '#FFFFFF', fontSize: '12px' }}>
                {task.priority}
              </span>
            </div>
          </div>
          
          {/* Route Info */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Route Details</h5>
            
            <div className="mb-4">
              <div className="flex items-start mb-3">
                <div className="w-4 h-4 rounded-full mt-1 mr-3" style={{ backgroundColor: '#F97316' }} />
                <div className="flex-1">
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Pickup Location</p>
                  <p style={{ color: '#1F2937' }}>{task.pickup}</p>
                </div>
              </div>
              
              <div className="w-0.5 h-6 ml-1.5 mb-3" style={{ backgroundColor: '#F97316' }} />
              
              <div className="flex items-start">
                <div className="w-4 h-4 rounded-full mt-1 mr-3" style={{ border: '2px solid #F97316', backgroundColor: '#FFFFFF' }} />
                <div className="flex-1">
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Drop Location</p>
                  <p style={{ color: '#1F2937' }}>{task.drop}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3" style={{ borderRadius: '12px', backgroundColor: '#FFF7ED' }}>
                <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Distance</p>
                <p style={{ color: '#F97316' }}>{task.distance}</p>
              </div>
              <div className="p-3" style={{ borderRadius: '12px', backgroundColor: '#FFF7ED' }}>
                <p className="text-sm mb-1" style={{ color: '#6B7280' }}>ETA</p>
                <p style={{ color: '#F97316' }}>{task.eta}</p>
              </div>
            </div>
          </div>
          
          {/* Component Info */}
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-3" style={{ color: '#374151' }}>Blood Component</h5>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Package className="w-6 h-6" style={{ color: '#F97316' }} />
              </div>
              <div>
                <p style={{ color: '#1F2937' }}>{task.component}</p>
                <p className="text-sm" style={{ color: '#10B981' }}>Verified & Ready</p>
              </div>
            </div>
          </div>
          
          {/* Special Instructions */}
          {task.specialInstructions && (
            <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFF7ED', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.2)' }}>
                  <ThermometerSun className="w-5 h-5" style={{ color: '#F97316' }} />
                </div>
                <div>
                  <h6 className="mb-1" style={{ color: '#1F2937' }}>Special Instructions</h6>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{task.specialInstructions}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Map Placeholder */}
          <div className="h-48" style={{ borderRadius: '16px', backgroundColor: '#F5F5F5', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: '#F97316' }} />
                <p className="text-sm" style={{ color: '#6B7280' }}>Route Preview</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => setAcceptedTask(task.id)}
            className="w-full py-4"
            style={{ borderRadius: '16px', backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}
          >
            Accept Task
          </button>
          <button
            onClick={() => setRejectedTask(task.id)}
            className="w-full py-4"
            style={{ borderRadius: '16px', border: '2px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#6B7280' }}
          >
            Reject Task
          </button>
        </div>
      </div>
    );
  }

  // Main task list view
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
              <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Incoming Tasks</h3>
          </div>
          <span className="px-4 py-2" style={{ borderRadius: '999px', backgroundColor: '#F97316', color: '#FFFFFF' }}>
            {tasks.length} New
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {tasks.map((task) => {
            const priorityColor = task.priority === 'Emergency' ? '#EF4444' : task.priority === 'Urgent' ? '#F97316' : '#3B82F6';
            return (
              <button
                key={task.id}
                onClick={() => setSelectedTask(task.id)}
                className="w-full p-5 text-left"
                style={{ borderRadius: '16px', borderLeft: `4px solid ${priorityColor}`, backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                        <Package className="w-5 h-5" style={{ color: '#F97316' }} />
                      </div>
                      <h5 style={{ color: '#1F2937' }}>{task.component}</h5>
                    </div>
                    <div className="space-y-1.5 text-sm" style={{ color: '#6B7280' }}>
                      <div className="flex items-center gap-2">
                        <span>From:</span>
                        <span style={{ color: '#1F2937' }}>{task.pickup}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>To:</span>
                        <span style={{ color: '#1F2937' }}>{task.drop}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1.5 ml-2"
                    style={{
                      borderRadius: '999px',
                      backgroundColor: priorityColor,
                      color: '#FFFFFF',
                      fontSize: '12px'
                    }}
                  >
                    {task.priority}
                  </span>
                </div>
                
                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #E5E7EB' }}>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                    <MapPin className="w-4 h-4" />
                    <span>{task.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                    <Clock className="w-4 h-4" />
                    <span>ETA: {task.eta}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}