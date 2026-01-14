import React, { useState } from 'react';
import { ChevronLeft, MapPin, Phone, Star, Heart, MessageCircle, Shield, Navigation } from 'lucide-react';

interface DonorSearchScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorSearchScreen({ navigateTo }: DonorSearchScreenProps) {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('B+');

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
            <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Search Donors</h3>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Blood Group Selector - Pill Buttons */}
        <div>
          <h4 className="mb-3" style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Select Blood Group
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((group) => {
              const isSelected = selectedBloodGroup === group;
              return (
                <button
                  key={group}
                  onClick={() => setSelectedBloodGroup(group)}
                  className="py-3 transition-all"
                  style={{
                    borderRadius: '14px',
                    border: `2px solid ${isSelected ? '#10B981' : '#E5E7EB'}`,
                    backgroundColor: isSelected ? '#10B981' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#64748B',
                    fontSize: '14px',
                    fontWeight: '600',
                    boxShadow: isSelected ? '0 4px 12px rgba(16,185,129,0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = '#10B98160';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  {group}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Location Filter */}
        <div className="p-3 flex items-center" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          border: '2px solid #E5E7EB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <MapPin className="w-5 h-5 mr-3" style={{ color: '#64748B' }} />
          <input
            type="text"
            placeholder="Enter your location"
            className="flex-1 bg-transparent outline-none"
            style={{ color: '#1F2937', fontSize: '14px' }}
          />
        </div>
        
        {/* Donor List Header */}
        <div className="flex items-center justify-between">
          <h4 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Available Donors</h4>
          <span style={{ 
            color: '#10B981', 
            fontSize: '13px',
            backgroundColor: '#F0FDF4',
            padding: '4px 12px',
            borderRadius: '12px',
            fontWeight: '500'
          }}>
            24 donors
          </span>
        </div>
        
        {/* Donor Cards with Avatar & Readiness Ring */}
        <div className="space-y-3">
          {[
            { name: 'Amit Kumar', bloodGroup: 'B+', location: 'Indiranagar', distance: '2.1 km', donations: 12, verified: true, readiness: 95 },
            { name: 'Priya Sharma', bloodGroup: 'B+', location: 'Koramangala', distance: '3.5 km', donations: 8, verified: true, readiness: 88 },
            { name: 'Rahul Singh', bloodGroup: 'B+', location: 'Whitefield', distance: '5.2 km', donations: 15, verified: true, readiness: 92 },
            { name: 'Anita Desai', bloodGroup: 'B+', location: 'Jayanagar', distance: '4.8 km', donations: 6, verified: false, readiness: 75 },
          ].map((donor, idx) => (
            <div
              key={idx}
              className="p-4 transition-all"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: '1px solid #E5E7EB'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#10B981';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start">
                  {/* Avatar with Readiness Ring */}
                  <div className="relative mr-3">
                    <svg width="48" height="48" viewBox="0 0 48 48" style={{ transform: 'rotate(-90deg)' }}>
                      {/* Background ring */}
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      {/* Progress ring */}
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 22 * (donor.readiness / 100)} ${2 * Math.PI * 22}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ 
                        backgroundColor: '#F0FDF4',
                        color: '#10B981',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        {donor.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-1">
                      <h5 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600', marginRight: '6px' }}>
                        {donor.name}
                      </h5>
                      {donor.verified && (
                        <div className="flex items-center justify-center" style={{ 
                          width: '18px',
                          height: '18px',
                          backgroundColor: '#10B981',
                          borderRadius: '9px'
                        }}>
                          <Shield className="w-3 h-3" style={{ color: '#FFFFFF' }} />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center mb-1">
                      <MapPin className="w-3.5 h-3.5 mr-1" style={{ color: '#64748B' }} />
                      <span style={{ color: '#64748B', fontSize: '12px' }}>
                        {donor.location} • {donor.distance}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-3.5 h-3.5 mr-1" style={{ color: '#10B981' }} />
                      <span style={{ color: '#10B981', fontSize: '12px', fontWeight: '500' }}>
                        {donor.donations} donations
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Blood Group Badge */}
                <div className="px-3 py-1.5" style={{ 
                  backgroundColor: '#10B981',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '600'
                }}>
                  {donor.bloodGroup}
                </div>
              </div>
              
              {/* Readiness & Distance Badges */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 flex items-center justify-center py-2" style={{ 
                  backgroundColor: '#F0FDF4',
                  borderRadius: '10px'
                }}>
                  <span style={{ color: '#10B981', fontSize: '12px', fontWeight: '500' }}>
                    {donor.readiness}% Ready
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center py-2" style={{ 
                  backgroundColor: '#EFF6FF',
                  borderRadius: '10px'
                }}>
                  <Navigation className="w-3.5 h-3.5 mr-1.5" style={{ color: '#3B82F6' }} />
                  <span style={{ color: '#3B82F6', fontSize: '12px', fontWeight: '500' }}>
                    {donor.distance}
                  </span>
                </div>
              </div>
              
              {/* Call/Chat Icon Buttons */}
              <div className="flex gap-2">
                <button 
                  className="flex-1 py-2.5 flex items-center justify-center transition-all"
                  style={{ 
                    backgroundColor: '#10B981',
                    borderRadius: '12px',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
                >
                  <Phone className="w-4 h-4 mr-2" style={{ color: '#FFFFFF' }} />
                  <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: '600' }}>Call</span>
                </button>
                <button 
                  className="flex-1 py-2.5 flex items-center justify-center transition-all"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '2px solid #10B981'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F0FDF4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" style={{ color: '#10B981' }} />
                  <span style={{ color: '#10B981', fontSize: '13px', fontWeight: '600' }}>Chat</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Broadcast Request CTA Banner */}
        <div className="p-4" style={{ 
          backgroundColor: '#F0FDF4',
          borderRadius: '16px',
          border: '2px solid #BBF7D0',
          boxShadow: '0 2px 8px rgba(16,185,129,0.1)'
        }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h5 className="mb-1" style={{ color: '#10B981', fontSize: '15px', fontWeight: '600' }}>
                Didn't find a match?
              </h5>
              <p style={{ color: '#059669', fontSize: '12px' }}>
                Send a broadcast request to all nearby donors
              </p>
            </div>
            <div className="p-3" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
              <Heart className="w-6 h-6" style={{ color: '#10B981' }} />
            </div>
          </div>
          <button 
            className="w-full py-3 transition-all"
            style={{ 
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(16,185,129,0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
          >
            Broadcast Request to All Donors
          </button>
        </div>
        
        {/* Become a Donor CTA */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '2px dashed #E5E7EB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h5 className="mb-2" style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>
            Want to save lives?
          </h5>
          <p className="mb-3" style={{ color: '#64748B', fontSize: '12px' }}>
            Register as a blood donor and help patients in need
          </p>
          <button 
            onClick={() => navigateTo('role-selection')}
            className="w-full py-3 transition-all"
            style={{ 
              backgroundColor: '#FAFAFA',
              color: '#10B981',
              border: '2px solid #10B981',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F0FDF4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FAFAFA';
            }}
          >
            Register as Donor →
          </button>
        </div>
      </div>
    </div>
  );
}
