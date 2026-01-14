import React, { useState } from 'react';
import { User, Heart, Droplet, Hand, HelpCircle, X, Bike, Building2 } from 'lucide-react';

interface RoleSelectionScreenProps {
  navigateTo: (screen: string) => void;
}

export function RoleSelectionScreen({ navigateTo }: RoleSelectionScreenProps) {
  const [showModal, setShowModal] = useState(false);

  const roles = [
    {
      id: 'patient',
      name: 'Patient',
      description: 'Request blood, track orders, manage transfusions',
      icon: User,
      secondaryIcon: Heart,
      color: '#3B82F6',
      bgColor: '#EFF6FF',
      route: 'home',
    },
    {
      id: 'donor',
      name: 'Donor',
      description: 'Donate blood, accept requests, help patients',
      icon: Droplet,
      secondaryIcon: Hand,
      color: '#10B981',
      bgColor: '#F0FDF4',
      route: 'donor-home',
    },
    {
      id: 'rider',
      name: 'Rider (Delivery Agent)',
      description: 'Deliver blood safely with medical compliance',
      icon: Bike,
      secondaryIcon: null,
      color: '#F97316',
      bgColor: '#FFF7ED',
      route: 'rider-home',
    },
    {
      id: 'hospital',
      name: 'Hospital / Blood Bank',
      description: 'Manage inventory, requests, transfusions, and deliveries',
      icon: Building2,
      secondaryIcon: Droplet,
      color: '#8B5CF6',
      bgColor: '#F5F3FF',
      route: 'hospital-home',
    },
  ];

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Header */}
      <div className="p-6 text-center" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="mb-3">
          <div className="inline-block p-3 rounded-full" style={{ backgroundColor: '#EFF6FF' }}>
            <User className="w-6 h-6" style={{ color: '#3B82F6' }} />
          </div>
        </div>
        <h2 className="mb-2" style={{ color: '#1F2937' }}>Select Your User Type</h2>
        <p style={{ color: '#6B7280' }}>Choose how you want to use the app</p>
      </div>
      
      <div className="flex-1 flex flex-col justify-center p-6 space-y-4 overflow-y-auto">
        {roles.map((role) => {
          const Icon = role.icon;
          const SecondaryIcon = role.secondaryIcon;
          
          return (
            <button
              key={role.id}
              onClick={() => navigateTo(role.route)}
              className="p-6 rounded-xl shadow-md transition-all"
              style={{ 
                border: '2px solid #E5E7EB',
                backgroundColor: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = role.color;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="flex flex-col items-center">
                <div 
                  className="mb-4 p-6 rounded-full shadow-sm relative"
                  style={{ backgroundColor: role.bgColor }}
                >
                  <div className="flex items-center justify-center">
                    <Icon className="w-12 h-12" style={{ color: role.color }} />
                    {SecondaryIcon && (
                      <SecondaryIcon 
                        className="w-8 h-8 absolute -bottom-1 -right-1" 
                        style={{ color: role.color }} 
                      />
                    )}
                  </div>
                </div>
                <h3 className="mb-2" style={{ color: '#1F2937' }}>{role.name}</h3>
                <p className="text-center text-sm" style={{ color: '#6B7280' }}>
                  {role.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Help Link */}
      <div className="p-6 text-center">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center mx-auto px-4 py-2 rounded-lg transition-all"
          style={{ color: '#6B7280', background: 'none', border: 'none' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
        >
          <HelpCircle className="w-5 h-5 mr-2" />
          <span>What's the difference?</span>
        </button>
      </div>
      
      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center p-6" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="w-full max-w-md p-6 max-h-[90%] overflow-y-auto rounded-2xl shadow-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center justify-between mb-6">
              <h4 style={{ color: '#1F2937' }}>Role Comparison</h4>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg transition-all"
                style={{ background: 'none', border: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <X className="w-6 h-6" style={{ color: '#6B7280' }} />
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  title: 'Patient',
                  items: [
                    'Search for blood components',
                    'Request blood from hospitals',
                    'Track delivery in real-time',
                    'Manage medical reports',
                    'Schedule transfusions',
                  ],
                  color: '#3B82F6',
                  bgColor: '#EFF6FF',
                },
                {
                  title: 'Donor',
                  items: [
                    'Receive nearby blood requests',
                    'Accept/reject donation requests',
                    'Book donation appointments',
                    'Track eligibility status',
                    'Earn rewards and badges',
                  ],
                  color: '#10B981',
                  bgColor: '#F0FDF4',
                },
                {
                  title: 'Rider',
                  items: [
                    'Accept delivery assignments',
                    'Navigate to pickup/drop locations',
                    'Maintain cold chain compliance',
                    'Track deliveries and earnings',
                    'Handle emergency deliveries',
                  ],
                  color: '#F97316',
                  bgColor: '#FFF7ED',
                },
                {
                  title: 'Hospital / Blood Bank',
                  items: [
                    'Manage blood inventory',
                    'Handle patient requests',
                    'Coordinate with riders',
                    'Oversee transfusion workflows',
                    'Ensure regulatory compliance',
                  ],
                  color: '#8B5CF6',
                  bgColor: '#F5F3FF',
                },
              ].map((role, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-lg" 
                  style={{ border: `2px solid ${role.color}20`, backgroundColor: role.bgColor }}
                >
                  <h5 className="mb-3" style={{ color: role.color }}>{role.title}</h5>
                  <ul className="text-sm space-y-2" style={{ color: '#374151' }}>
                    {role.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2" style={{ color: role.color }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3.5 mt-6 rounded-lg transition-all shadow-md"
              style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', border: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}