import React, { useState } from 'react';
import { Search, MapPin, Users, ChevronRight } from 'lucide-react';

interface OnboardingScreenProps {
  onNext: () => void;
}

export function OnboardingScreen({ onNext }: OnboardingScreenProps) {
  const [step, setStep] = useState(0);
  
  const slides = [
    {
      icon: Search,
      title: 'Request Blood Easily',
      description: 'Find blood components with real-time availability across hospitals and blood banks',
      color: '#3B82F6',
      bgColor: '#EFF6FF',
    },
    {
      icon: MapPin,
      title: 'Track Real-Time Delivery',
      description: 'Monitor your blood request from preparation to delivery with live GPS tracking',
      color: '#F97316',
      bgColor: '#FFF7ED',
    },
    {
      icon: Users,
      title: 'Find Nearby Donors',
      description: 'Connect with verified donors in your area for emergency situations',
      color: '#10B981',
      bgColor: '#F0FDF4',
    },
  ];

  if (step === 3) {
    return (
      <div className="h-full flex flex-col justify-between p-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="p-4 rounded-full mb-6" style={{ backgroundColor: '#F0FDF4' }}>
            <ChevronRight className="w-12 h-12" style={{ color: '#10B981' }} />
          </div>
          <h2 className="text-center mb-4" style={{ color: '#1F2937' }}>
            Ready to Get Started?
          </h2>
          <p className="text-center px-6" style={{ color: '#6B7280' }}>
            Join thousands of users saving lives through smart blood access
          </p>
        </div>
        
        <div className="space-y-3">
          <button 
            onClick={onNext}
            className="w-full py-4 px-6 rounded-lg transition-all shadow-md"
            style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  const currentSlide = slides[step];
  const Icon = currentSlide.icon;

  return (
    <div className="h-full flex flex-col justify-between p-8" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Skip button */}
      <div className="flex justify-end">
        <button 
          onClick={() => setStep(3)} 
          className="px-4 py-2 rounded-lg transition-all"
          style={{ color: '#6B7280', background: 'none', border: 'none' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
        >
          Skip
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div 
          className="mb-8 p-8 rounded-full shadow-lg transition-all"
          style={{ backgroundColor: currentSlide.bgColor }}
        >
          <Icon className="w-20 h-20" style={{ color: currentSlide.color }} />
        </div>
        
        <h2 className="text-center mb-4" style={{ color: '#1F2937' }}>
          {currentSlide.title}
        </h2>
        
        <p className="text-center" style={{ color: '#6B7280', maxWidth: '300px' }}>
          {currentSlide.description}
        </p>
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center items-center mb-8 space-x-2">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === step ? 'w-8' : 'w-2'
            }`}
            style={{ 
              backgroundColor: idx === step ? currentSlide.color : '#E5E7EB',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
      
      {/* Next button */}
      <button 
        onClick={() => setStep(step + 1)}
        className="w-full py-4 px-6 rounded-lg transition-all shadow-md"
        style={{ backgroundColor: currentSlide.color, color: '#FFFFFF', border: 'none' }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        Next
      </button>
    </div>
  );
}