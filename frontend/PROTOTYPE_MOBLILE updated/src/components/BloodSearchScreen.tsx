import React, { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, ChevronLeft, Droplet, Clock, Activity } from 'lucide-react';

interface BloodSearchScreenProps {
  navigateTo: (screen: string, data?: any) => void;
}

export function BloodSearchScreen({ navigateTo }: BloodSearchScreenProps) {
  const [showFilters, setShowFilters] = useState(true);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('B+');
  const [selectedComponent, setSelectedComponent] = useState<string>('RBC');

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center mb-4">
          <button 
            onClick={() => navigateTo('home')} 
            className="mr-3 p-2 rounded-full transition-all"
            style={{ background: 'none', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Blood Search</h3>
        </div>
        
        {/* Search Bar - BLUE */}
        <div className="p-3.5 flex items-center mb-3 rounded-lg shadow-sm transition-all" style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
          <Search className="w-5 h-5 mr-3" style={{ color: '#3B82F6' }} />
          <input
            type="text"
            placeholder="Search blood component, hospital..."
            className="flex-1 bg-transparent outline-none"
            style={{ color: '#1F2937' }}
          />
        </div>
        
        {/* Filter Toggle - BLUE */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center px-4 py-2 rounded-lg transition-all"
          style={{ color: '#3B82F6', backgroundColor: '#EFF6FF', border: 'none' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EFF6FF'}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
        </button>
      </div>
      
      {/* Filters Panel - MULTI COLOR */}
      {showFilters && (
        <div className="p-4 space-y-4 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Blood Group - RED */}
          <div>
            <label className="block mb-3" style={{ color: '#374151' }}>Blood Group</label>
            <div className="grid grid-cols-4 gap-2">
              {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((group) => (
                <button
                  key={group}
                  onClick={() => setSelectedBloodGroup(group)}
                  className="py-2.5 rounded-lg shadow-sm transition-all"
                  style={{ 
                    border: selectedBloodGroup === group ? '2px solid #EF4444' : '2px solid #FEE2E2',
                    backgroundColor: selectedBloodGroup === group ? '#EF4444' : '#FEF2F2',
                    color: selectedBloodGroup === group ? '#FFFFFF' : '#EF4444'
                  }}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
          
          {/* Component - MULTI COLOR */}
          <div>
            <label className="block mb-3" style={{ color: '#374151' }}>Component</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'RBC', color: '#EF4444', bg: '#FEF2F2', icon: Droplet },
                { name: 'Platelets', color: '#F97316', bg: '#FFF7ED', icon: Activity },
                { name: 'Plasma', color: '#3B82F6', bg: '#EFF6FF', icon: Droplet },
                { name: 'Cryo', color: '#8B5CF6', bg: '#F5F3FF', icon: Activity },
              ].map((comp) => {
                const Icon = comp.icon;
                return (
                  <button
                    key={comp.name}
                    onClick={() => setSelectedComponent(comp.name)}
                    className="py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                    style={{ 
                      border: selectedComponent === comp.name ? `2px solid ${comp.color}` : `2px solid ${comp.bg}`,
                      backgroundColor: selectedComponent === comp.name ? comp.color : comp.bg,
                      color: selectedComponent === comp.name ? '#FFFFFF' : comp.color
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    {comp.name}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Freshness - GREEN */}
          <div>
            <label className="block mb-3" style={{ color: '#374151' }}>Freshness</label>
            <div className="space-y-2">
              {['0-3 days', '<7 days', 'Any'].map((option, idx) => (
                <button
                  key={option}
                  className="w-full py-3 text-left px-4 rounded-lg shadow-sm transition-all flex items-center gap-2"
                  style={{ 
                    border: idx === 0 ? '2px solid #10B981' : '2px solid #D1FAE5',
                    backgroundColor: idx === 0 ? '#10B981' : '#F0FDF4',
                    color: idx === 0 ? '#FFFFFF' : '#10B981'
                  }}
                >
                  <Clock className="w-4 h-4" />
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          {/* Distance - BLUE */}
          <div>
            <label className="block mb-3" style={{ color: '#374151' }}>Distance: <span style={{ color: '#3B82F6' }}>10 km</span></label>
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <div className="h-2 relative rounded-full" style={{ backgroundColor: '#DBEAFE' }}>
                <div className="absolute left-0 h-2 rounded-full" style={{ width: '50%', backgroundColor: '#3B82F6' }} />
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full shadow-lg border-2 border-white" style={{ backgroundColor: '#3B82F6' }} />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Results - GREEN ACCENTS */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4 flex items-center justify-between">
          <span style={{ color: '#10B981' }}>12 hospitals found</span>
          <span className="text-sm" style={{ color: '#6B7280' }}>Sorted by distance</span>
        </div>
        
        <div className="space-y-3">
          {[
            { name: 'City General Hospital', units: '12 units', freshness: '2 days', distance: '2.3 km', availability: 5 },
            { name: 'Apollo Blood Bank', units: '8 units', freshness: '1 day', distance: '4.1 km', availability: 4 },
            { name: 'RedCross Center', units: '15 units', freshness: '4 days', distance: '5.8 km', availability: 5 },
            { name: 'Metro Health Center', units: '6 units', freshness: '3 days', distance: '7.2 km', availability: 3 },
            { name: 'Regional Blood Bank', units: '20 units', freshness: '5 days', distance: '8.5 km', availability: 4 },
          ].map((hospital, idx) => (
            <button
              key={idx}
              onClick={() => navigateTo('request', { hospital: hospital.name })}
              className="w-full p-4 text-left rounded-xl shadow-sm transition-all"
              style={{ border: '2px solid #F0FDF4', backgroundColor: '#FFFFFF' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#10B981';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#F0FDF4';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 style={{ color: '#1F2937' }}>{hospital.name}</h4>
                <div className="px-3 py-1 rounded-full" style={{ backgroundColor: '#F0FDF4', color: '#10B981' }}>
                  {hospital.units}
                </div>
              </div>
              <div className="flex justify-between mb-3 text-sm" style={{ color: '#6B7280' }}>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{hospital.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{hospital.freshness}</span>
                </div>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#F0FDF4' }}>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: '#10B981' }}>Availability</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-2 rounded-full transition-all"
                        style={{ backgroundColor: i <= hospital.availability ? '#10B981' : '#D1FAE5' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}