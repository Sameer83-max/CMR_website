import React from 'react';
import { ChevronLeft, Bell, CheckCircle, AlertCircle, Clock, Heart } from 'lucide-react';

interface NotificationsScreenProps {
  navigateTo: (screen: string) => void;
}

export function NotificationsScreen({ navigateTo }: NotificationsScreenProps) {
  const notifications = [
    {
      type: 'urgent',
      icon: AlertCircle,
      title: 'Blood Request Urgent',
      message: 'B+ blood needed immediately at City General Hospital',
      time: '5 mins ago',
      color: '#EF4444',
      bg: '#FEF2F2',
      unread: true
    },
    {
      type: 'delivery',
      icon: Clock,
      title: 'Order Arriving Soon',
      message: 'Your blood component will arrive in 25 minutes',
      time: '10 mins ago',
      color: '#F97316',
      bg: '#FFF7ED',
      unread: true
    },
    {
      type: 'success',
      icon: CheckCircle,
      title: 'Request Confirmed',
      message: 'Apollo Hospital confirmed your blood request #BRQ-8745',
      time: '1 hour ago',
      color: '#10B981',
      bg: '#F0FDF4',
      unread: false
    },
    {
      type: 'donor',
      icon: Heart,
      title: 'Donor Match Found',
      message: '3 donors with B+ blood type found near you',
      time: '2 hours ago',
      color: '#10B981',
      bg: '#F0FDF4',
      unread: false
    },
    {
      type: 'transfusion',
      icon: Bell,
      title: 'Transfusion Reminder',
      message: 'Your next transfusion is due in 6 days',
      time: '3 hours ago',
      color: '#8B5CF6',
      bg: '#F5F3FF',
      unread: false
    },
    {
      type: 'info',
      icon: Bell,
      title: 'Medical Report Analyzed',
      message: 'AI analysis of your blood test is ready',
      time: '1 day ago',
      color: '#3B82F6',
      bg: '#EFF6FF',
      unread: false
    },
  ];

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => navigateTo('home')} 
              className="mr-3 p-2 rounded-full transition-all"
              style={{ background: 'none', border: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#374151' }} />
            </button>
            <h3 style={{ color: '#1F2937' }}>Notifications</h3>
          </div>
          <button 
            className="px-3 py-1.5 rounded-lg transition-all"
            style={{ color: '#3B82F6', backgroundColor: '#EFF6FF', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DBEAFE'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EFF6FF'}
          >
            Mark all read
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Unread Section */}
        <div className="p-4">
          <h5 className="mb-3" style={{ color: '#374151' }}>New</h5>
          <div className="space-y-3">
            {notifications.filter(n => n.unread).map((notif, idx) => {
              const Icon = notif.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl shadow-sm transition-all cursor-pointer"
                  style={{ border: `2px solid ${notif.color}40`, backgroundColor: notif.bg }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.borderColor = notif.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = `${notif.color}40`;
                  }}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 p-2 rounded-full" style={{ backgroundColor: `${notif.color}20` }}>
                      <Icon className="w-5 h-5" style={{ color: notif.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h5 style={{ color: notif.color }}>{notif.title}</h5>
                        <div className="w-2 h-2 rounded-full ml-2 animate-pulse" style={{ backgroundColor: notif.color }} />
                      </div>
                      <p className="text-sm mb-2" style={{ color: '#4B5563' }}>{notif.message}</p>
                      <span className="text-xs" style={{ color: '#6B7280' }}>{notif.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Earlier Section */}
        <div className="p-4">
          <h5 className="mb-3" style={{ color: '#374151' }}>Earlier</h5>
          <div className="space-y-3">
            {notifications.filter(n => !n.unread).map((notif, idx) => {
              const Icon = notif.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl shadow-sm transition-all cursor-pointer"
                  style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                    e.currentTarget.style.borderColor = notif.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 p-2 rounded-full" style={{ backgroundColor: notif.bg }}>
                      <Icon className="w-5 h-5" style={{ color: notif.color }} />
                    </div>
                    <div className="flex-1">
                      <h5 className="mb-1" style={{ color: '#1F2937' }}>{notif.title}</h5>
                      <p className="text-sm mb-2" style={{ color: '#6B7280' }}>{notif.message}</p>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>{notif.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}