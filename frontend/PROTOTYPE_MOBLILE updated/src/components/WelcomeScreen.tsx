import React from 'react';
import { Droplet } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-between p-8" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Top Section */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Animated Logo */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full animate-pulse" style={{ backgroundColor: '#EFF6FF', opacity: 0.5 }} />
          <div className="relative p-8 rounded-full shadow-lg" style={{ backgroundColor: '#3B82F6' }}>
            <Droplet className="w-24 h-24" style={{ color: '#FFFFFF' }} fill="#FFFFFF" />
          </div>
        </div>
        
        {/* Brand Name */}
        <h1 className="text-center mb-2" style={{ color: '#1F2937' }}>
          HAEMOLINK
        </h1>
        
        {/* Tagline */}
        <h2 className="text-center mb-4" style={{ color: '#374151' }}>
          Smart Blood Access System
        </h2>
        
        <p className="text-center px-4" style={{ color: '#6B7280', maxWidth: '280px' }}>
          Connecting patients with life-saving blood through technology and community
        </p>
      </div>
      
      {/* Bottom Section */}
      <div className="w-full">
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <div className="px-3 py-1.5 rounded-full text-xs" style={{ backgroundColor: '#EFF6FF', color: '#3B82F6' }}>
            Fast & Reliable
          </div>
          <div className="px-3 py-1.5 rounded-full text-xs" style={{ backgroundColor: '#F0FDF4', color: '#10B981' }}>
            24/7 Available
          </div>
          <div className="px-3 py-1.5 rounded-full text-xs" style={{ backgroundColor: '#FEF2F2', color: '#EF4444' }}>
            Emergency Ready
          </div>
        </div>
        
        {/* CTA */}
        <button 
          onClick={onNext}
          className="w-full py-4 px-6 rounded-lg transition-all shadow-lg"
          style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', border: 'none' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
        >
          Get Started
        </button>
        
        <p className="text-center mt-4 text-xs" style={{ color: '#9CA3AF' }}>
          Safe • Secure • Regulated
        </p>
      </div>
    </div>
  );
}