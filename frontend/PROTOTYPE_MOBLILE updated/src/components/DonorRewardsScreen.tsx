import React, { useState } from 'react';
import { ChevronLeft, Award, Heart, Download, Gift, TrendingUp, MapPin, Star, Zap } from 'lucide-react';

interface DonorRewardsScreenProps {
  navigateTo: (screen: string) => void;
}

export function DonorRewardsScreen({ navigateTo }: DonorRewardsScreenProps) {
  const [activeTab, setActiveTab] = useState('rewards');

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigateTo('donor-home')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <ChevronLeft className="w-5 h-5" style={{ color: '#374151' }} />
          </button>
          <h3 style={{ color: '#1F2937' }}>Rewards & Incentives</h3>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2">
          {['Rewards', 'Badges', 'Impact'].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className="flex-1 py-2"
              style={{
                borderRadius: '999px',
                backgroundColor: activeTab === tab.toLowerCase() ? '#10B981' : '#F5F5F5',
                color: activeTab === tab.toLowerCase() ? '#FFFFFF' : '#6B7280',
                border: 'none'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Health Credit Score - Always Visible */}
        <div className="p-6 text-center" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }}>
          <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '4px solid rgba(255,255,255,0.3)' }}>
            <div>
              <p style={{ color: '#FFFFFF', fontSize: '32px' }}>850</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.9)' }}>Points</p>
            </div>
          </div>
          <h4 className="mb-2" style={{ color: '#FFFFFF' }}>Health Credit Score</h4>
          <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>Excellent standing</p>
          <div className="flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" style={{ color: '#FFFFFF' }} />
            <span className="text-sm" style={{ color: '#FFFFFF' }}>+50 this month</span>
          </div>
        </div>
        
        {activeTab === 'rewards' && (
          <>
            {/* Available Rewards */}
            <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h5 className="mb-4" style={{ color: '#374151' }}>Available Rewards</h5>
              <div className="space-y-3">
                {[
                  { title: 'Health Checkup Voucher', points: 500, available: true, color: '#3B82F6' },
                  { title: 'Gym Membership (1 Month)', points: 800, available: true, color: '#10B981' },
                  { title: 'Tax Benefit Certificate', points: 100, available: true, color: '#F97316' },
                  { title: 'Free Blood Test', points: 1000, available: false, color: '#EF4444' },
                ].map((reward, idx) => (
                  <div key={idx} className="p-4" style={{ borderRadius: '14px', backgroundColor: '#FAFAFA', border: `2px solid ${reward.available ? reward.color : '#E5E7EB'}`, opacity: reward.available ? 1 : 0.5 }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${reward.color}15` }}>
                          <Gift className="w-5 h-5" style={{ color: reward.color }} />
                        </div>
                        <div>
                          <p style={{ color: '#1F2937' }}>{reward.title}</p>
                          <p className="text-sm" style={{ color: '#6B7280' }}>{reward.points} points</p>
                        </div>
                      </div>
                    </div>
                    <button
                      disabled={!reward.available}
                      className="w-full py-2 mt-2"
                      style={{
                        borderRadius: '8px',
                        backgroundColor: reward.available ? reward.color : '#E5E7EB',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: reward.available ? 'pointer' : 'not-allowed'
                      }}
                    >
                      {reward.available ? 'Redeem' : 'Not Enough Points'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Upcoming Rewards */}
            <div className="p-5" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  <Zap className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <h5 style={{ color: '#FFFFFF' }}>Next Milestone</h5>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>150 points to unlock</p>
                </div>
              </div>
              <div className="h-2 mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '999px', overflow: 'hidden' }}>
                <div className="h-full" style={{ width: '70%', backgroundColor: '#FFFFFF', borderRadius: '999px' }}></div>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Premium Health Insurance Discount</p>
            </div>
          </>
        )}
        
        {activeTab === 'badges' && (
          <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h5 className="mb-4" style={{ color: '#374151' }}>Your Badges</h5>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Consistent Donor', icon: Heart, earned: true, color: '#10B981' },
                { name: 'Emergency Hero', icon: Award, earned: true, color: '#EF4444' },
                { name: 'Life Saver', icon: Star, earned: true, color: '#F97316' },
                { name: '10 Donations', icon: Award, earned: false, color: '#9CA3AF' },
                { name: '50 Donations', icon: Award, earned: false, color: '#9CA3AF' },
                { name: 'Champion', icon: Award, earned: false, color: '#9CA3AF' },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 flex flex-col items-center"
                    style={{
                      borderRadius: '14px',
                      border: `2px solid ${badge.earned ? badge.color : '#E5E7EB'}`,
                      backgroundColor: badge.earned ? `${badge.color}10` : '#FAFAFA',
                      opacity: badge.earned ? 1 : 0.5
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: badge.earned ? badge.color : '#E5E7EB' }}>
                      <Icon className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                    </div>
                    <span className="text-xs text-center" style={{ color: badge.earned ? '#1F2937' : '#6B7280' }}>
                      {badge.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {activeTab === 'impact' && (
          <>
            <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h5 className="mb-4" style={{ color: '#374151' }}>Your Impact</h5>
              <div className="space-y-3">
                <div className="p-5" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                      <Heart className="w-6 h-6" style={{ color: '#FFFFFF' }} fill="#FFFFFF" />
                    </div>
                    <div>
                      <h6 style={{ color: '#FFFFFF' }}>Lives Saved</h6>
                      <p style={{ color: '#FFFFFF', fontSize: '24px' }}>36 lives</p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Each donation can save up to 3 lives</p>
                </div>
                
                <div className="p-5" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                      <TrendingUp className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                    </div>
                    <div>
                      <h6 style={{ color: '#FFFFFF' }}>Total Donations</h6>
                      <p style={{ color: '#FFFFFF', fontSize: '24px' }}>12</p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Thank you for your generosity</p>
                </div>
                
                <div className="p-5" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                      <Award className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                    </div>
                    <div>
                      <h6 style={{ color: '#FFFFFF' }}>Community Rank</h6>
                      <p style={{ color: '#FFFFFF', fontSize: '24px' }}>Top 5%</p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Among all donors in your area</p>
                </div>
              </div>
            </div>
            
            {/* Social Share */}
            <div className="p-5" style={{ borderRadius: '16px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h5 className="mb-4" style={{ color: '#374151' }}>Share Your Impact</h5>
              <button className="w-full py-3 flex items-center justify-center gap-2" style={{ borderRadius: '12px', backgroundColor: '#8B5CF6', color: '#FFFFFF', border: 'none', boxShadow: '0 2px 8px rgba(139,92,246,0.3)' }}>
                <Download className="w-5 h-5" />
                <span>Download Impact Certificate</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}