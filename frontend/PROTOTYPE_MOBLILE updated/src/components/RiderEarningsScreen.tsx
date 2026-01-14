import React, { useState } from 'react';
import { ChevronLeft, DollarSign, TrendingUp, Calendar, Award, Star, Zap } from 'lucide-react';

interface RiderEarningsScreenProps {
  navigateTo: (screen: string) => void;
}

export function RiderEarningsScreen({ navigateTo }: RiderEarningsScreenProps) {
  const [period, setPeriod] = useState('month');

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo('rider-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Earnings & Incentives</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Total Earnings Summary */}
        <div className="p-6 text-center" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            <DollarSign className="w-8 h-8" style={{ color: '#FFFFFF' }} />
          </div>
          <h2 className="mb-1" style={{ color: '#FFFFFF', fontSize: '36px' }}>₹12,450</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>Total Earnings This Month</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <TrendingUp className="w-4 h-4" style={{ color: '#FFFFFF' }} />
            <span className="text-sm" style={{ color: '#FFFFFF' }}>+18% from last month</span>
          </div>
        </div>
        
        {/* Period Filter */}
        <div className="flex gap-2">
          {['Week', 'Month', 'Year'].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setPeriod(tab.toLowerCase())}
              className="flex-1 py-2"
              style={{
                borderRadius: '999px',
                backgroundColor: period === tab.toLowerCase() ? '#F97316' : '#F5F5F5',
                color: period === tab.toLowerCase() ? '#FFFFFF' : '#6B7280',
                border: 'none'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Earnings Breakdown */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Earnings Breakdown</h5>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 text-center" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' }}>
              <DollarSign className="w-8 h-8 mx-auto mb-2" style={{ color: '#FFFFFF' }} />
              <p style={{ color: '#FFFFFF', fontSize: '20px' }}>₹8,950</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>Base Earnings</p>
            </div>
            <div className="p-4 text-center" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}>
              <Zap className="w-8 h-8 mx-auto mb-2" style={{ color: '#FFFFFF' }} />
              <p style={{ color: '#FFFFFF', fontSize: '20px' }}>₹3,500</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>Bonuses</p>
            </div>
          </div>
        </div>
        
        {/* Daily Earnings Chart */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-between mb-4">
            <h5 style={{ color: '#374151' }}>Daily Earnings</h5>
            <Calendar className="w-5 h-5" style={{ color: '#6B7280' }} />
          </div>
          
          {/* Bar Chart */}
          <div className="h-40 flex items-end justify-between gap-2 mb-3 px-2" style={{ borderBottom: '2px solid #F5F5F5' }}>
            {[450, 520, 380, 650, 480, 590, 720].map((amount, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full relative group"
                  style={{
                    height: `${(amount / 720) * 100}%`,
                    background: idx === 6 ? 'linear-gradient(180deg, #10B981 0%, #059669 100%)' : 'linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)',
                    borderRadius: '4px 4px 0 0'
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderRadius: '6px', backgroundColor: '#1F2937', color: '#FFFFFF', fontSize: '10px', whiteSpace: 'nowrap' }}>
                    ₹{amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between text-xs" style={{ color: '#6B7280' }}>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
        
        {/* Performance Stats */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Performance Stats</h5>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                  <Star className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <span style={{ color: '#1F2937' }}>Average Rating</span>
              </div>
              <span style={{ color: '#10B981', fontSize: '18px' }}>4.9</span>
            </div>
            
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                  <TrendingUp className="w-5 h-5" style={{ color: '#3B82F6' }} />
                </div>
                <span style={{ color: '#1F2937' }}>Completed Deliveries</span>
              </div>
              <span style={{ color: '#3B82F6', fontSize: '18px' }}>156</span>
            </div>
            
            <div className="flex items-center justify-between p-3" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <Zap className="w-5 h-5" style={{ color: '#F97316' }} />
                </div>
                <span style={{ color: '#1F2937' }}>Bonus Eligible</span>
              </div>
              <span style={{ color: '#F97316', fontSize: '18px' }}>28</span>
            </div>
          </div>
        </div>
        
        {/* Active Bonuses */}
        <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h5 className="mb-4" style={{ color: '#374151' }}>Active Bonuses</h5>
          <div className="space-y-3">
            {[
              { title: 'Emergency Delivery Bonus', amount: '₹500', progress: 80, color: '#EF4444' },
              { title: 'On-Time Delivery Streak', amount: '₹300', progress: 65, color: '#10B981' },
              { title: 'Weekend Warrior', amount: '₹200', progress: 40, color: '#F97316' },
            ].map((bonus, idx) => (
              <div key={idx} className="p-4" style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
                <div className="flex items-center justify-between mb-2">
                  <p style={{ color: '#1F2937' }}>{bonus.title}</p>
                  <span style={{ color: bonus.color }}>{bonus.amount}</span>
                </div>
                <div className="h-2" style={{ backgroundColor: '#E5E7EB', borderRadius: '999px', overflow: 'hidden' }}>
                  <div 
                    className="h-full"
                    style={{ 
                      width: `${bonus.progress}%`,
                      backgroundColor: bonus.color,
                      borderRadius: '999px'
                    }}
                  ></div>
                </div>
                <p className="text-xs mt-1" style={{ color: '#6B7280' }}>{bonus.progress}% complete</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="p-5" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <Award className="w-6 h-6" style={{ color: '#FFFFFF' }} />
            </div>
            <div>
              <h5 style={{ color: '#FFFFFF' }}>Top Performer</h5>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Keep up the great work!</p>
            </div>
          </div>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>You're in the top 10% of riders this month</p>
        </div>
      </div>
    </div>
  );
}