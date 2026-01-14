import React, { useState } from 'react';
import { ChevronLeft, CreditCard, Shield, CheckCircle, Wallet, Gift, Receipt, TrendingUp, ChevronDown, Download } from 'lucide-react';

interface PaymentScreenProps {
  navigateTo: (screen: string) => void;
}

export function PaymentScreen({ navigateTo }: PaymentScreenProps) {
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [expandedReceipt, setExpandedReceipt] = useState<number | null>(null);

  // Payment Success State
  if (paymentComplete) {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="mb-4 p-4 transition-all" style={{ 
            backgroundColor: '#F0FDF4', 
            borderRadius: '100px',
            boxShadow: '0 8px 24px rgba(16,185,129,0.2)'
          }}>
            <CheckCircle className="w-20 h-20" style={{ color: '#10B981' }} />
          </div>
          
          <h2 className="mb-2 text-center" style={{ color: '#1F2937', fontSize: '24px', fontWeight: '600' }}>
            Payment Successful!
          </h2>
          <p className="text-center mb-6" style={{ color: '#64748B', fontSize: '14px' }}>
            Your transaction has been completed
          </p>
          
          <div className="w-full p-4 mb-6" style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div className="flex justify-between mb-3 pb-3" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Transaction ID</span>
              <span style={{ color: '#10B981', fontSize: '14px', fontWeight: '600' }}>TXN-2024-89745</span>
            </div>
            <div className="flex justify-between mb-3 pb-3" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Amount Paid</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>₹2,500</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: '#64748B', fontSize: '13px' }}>Payment Mode</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>UPI</span>
            </div>
          </div>
          
          <button
            className="w-full py-3 mb-3 transition-all flex items-center justify-center"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#3B82F6',
              border: '2px solid #3B82F6',
              borderRadius: '14px',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Receipt
          </button>
          
          <button
            onClick={() => navigateTo('home')}
            className="w-full py-3.5 transition-all"
            style={{ 
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '14px',
              fontSize: '15px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(16,185,129,0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Header */}
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
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
          <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '600' }}>Payment & Wallet</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Wallet Balance Card */}
        <div className="p-4" style={{ 
          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(59,130,246,0.3)'
        }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2 mr-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '10px' }}>
                <Wallet className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </div>
              <span style={{ color: '#FFFFFF', fontSize: '13px', opacity: 0.9 }}>HAEMOLINK Wallet</span>
            </div>
            <button 
              className="px-3 py-1.5 transition-all"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '10px',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '500'
              }}
            >
              Add Money
            </button>
          </div>
          
          <div className="mb-2">
            <span style={{ color: '#FFFFFF', fontSize: '14px', opacity: 0.8 }}>Available Balance</span>
          </div>
          <div className="flex items-end justify-between">
            <span style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: '700' }}>₹1,250</span>
            <div className="flex items-center" style={{ color: '#FFFFFF', fontSize: '12px', opacity: 0.9 }}>
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+₹500 this month</span>
            </div>
          </div>
        </div>
        
        {/* Sponsor Coverage - Progress Bar */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 mr-3" style={{ backgroundColor: '#F5F3FF', borderRadius: '10px' }}>
                <Gift className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              </div>
              <div>
                <h5 style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>
                  Sponsor Coverage
                </h5>
                <p style={{ color: '#64748B', fontSize: '12px' }}>NGO Partnership Program</p>
              </div>
            </div>
            <span style={{ color: '#8B5CF6', fontSize: '16px', fontWeight: '700' }}>80%</span>
          </div>
          
          {/* Coverage Progress Bar */}
          <div className="mb-3" style={{ 
            height: '10px',
            backgroundColor: '#E5E7EB',
            borderRadius: '5px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: '80%',
              height: '100%',
              background: 'linear-gradient(to right, #8B5CF6, #A78BFA)',
              transition: 'width 0.3s'
            }} />
          </div>
          
          <div className="flex justify-between p-3" style={{ 
            backgroundColor: '#F5F3FF',
            borderRadius: '12px'
          }}>
            <div>
              <span style={{ color: '#64748B', fontSize: '11px', display: 'block' }}>Covered</span>
              <span style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: '600' }}>₹2,000</span>
            </div>
            <div className="text-right">
              <span style={{ color: '#64748B', fontSize: '11px', display: 'block' }}>Your Share</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>₹500</span>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="p-4" style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <h4 className="mb-4" style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600' }}>Order Summary</h4>
          <div className="space-y-3">
            <div className="flex justify-between py-2" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Blood Component</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>Packed RBC</span>
            </div>
            <div className="flex justify-between py-2" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Units</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>2 units</span>
            </div>
            <div className="flex justify-between py-2" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Processing Fee</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>₹500</span>
            </div>
            <div className="flex justify-between py-2" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ color: '#64748B', fontSize: '13px' }}>Delivery Charge</span>
              <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500' }}>₹200</span>
            </div>
            <div className="flex justify-between py-3" style={{ 
              backgroundColor: '#EFF6FF',
              padding: '12px',
              borderRadius: '12px',
              marginTop: '8px'
            }}>
              <span style={{ color: '#3B82F6', fontSize: '14px', fontWeight: '600' }}>Total Amount</span>
              <span style={{ color: '#3B82F6', fontSize: '18px', fontWeight: '700' }}>₹2,500</span>
            </div>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div>
          <h4 className="mb-3" style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Payment Method
          </h4>
          <div className="space-y-2">
            {[
              { name: 'UPI Payment', icon: CreditCard, recommended: true, color: '#10B981' },
              { name: 'Credit/Debit Card', icon: CreditCard, recommended: false, color: '#3B82F6' },
              { name: 'Wallet Balance', icon: Wallet, recommended: false, color: '#8B5CF6' },
              { name: 'Cash on Delivery', icon: Receipt, recommended: false, color: '#F97316' },
            ].map((method, idx) => {
              const Icon = method.icon;
              return (
                <button
                  key={idx}
                  className="w-full p-4 flex items-center justify-between text-left transition-all"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    border: `2px solid ${method.recommended ? method.color : '#E5E7EB'}`,
                    boxShadow: method.recommended ? `0 4px 12px ${method.color}30` : '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                  onMouseEnter={(e) => {
                    if (!method.recommended) e.currentTarget.style.borderColor = method.color + '60';
                  }}
                  onMouseLeave={(e) => {
                    if (!method.recommended) e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div className="flex items-center">
                    <div className="p-2 mr-3" style={{ 
                      backgroundColor: method.recommended ? method.color + '20' : '#F8FAFC',
                      borderRadius: '10px'
                    }}>
                      <Icon className="w-5 h-5" style={{ color: method.color }} />
                    </div>
                    <span style={{ 
                      color: method.recommended ? method.color : '#1F2937',
                      fontSize: '14px',
                      fontWeight: method.recommended ? '600' : '500'
                    }}>
                      {method.name}
                    </span>
                  </div>
                  {method.recommended && (
                    <span className="px-3 py-1" style={{ 
                      backgroundColor: method.color,
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: '600'
                    }}>
                      Recommended
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Previous Receipts - Expandable Cards */}
        <div>
          <h4 className="mb-3" style={{ color: '#64748B', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Recent Transactions
          </h4>
          <div className="space-y-2">
            {[
              { id: 'TXN-2024-89612', date: 'Dec 10, 2024', amount: '₹2,500', status: 'Completed', type: 'Blood Request' },
              { id: 'TXN-2024-87453', date: 'Nov 28, 2024', amount: '₹3,200', status: 'Completed', type: 'Transfusion' },
              { id: 'TXN-2024-85201', date: 'Nov 15, 2024', amount: '₹1,800', status: 'Completed', type: 'Blood Request' },
            ].map((receipt, idx) => (
              <div
                key={idx}
                className="transition-all"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setExpandedReceipt(expandedReceipt === idx ? null : idx)}
                  className="w-full p-3 flex items-center justify-between text-left"
                  style={{ background: 'none', border: 'none' }}
                >
                  <div className="flex items-center">
                    <div className="p-2 mr-3" style={{ backgroundColor: '#F0FDF4', borderRadius: '10px' }}>
                      <Receipt className="w-5 h-5" style={{ color: '#10B981' }} />
                    </div>
                    <div>
                      <p style={{ color: '#1F2937', fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>
                        {receipt.type}
                      </p>
                      <p style={{ color: '#64748B', fontSize: '12px' }}>{receipt.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600', marginRight: '8px' }}>
                      {receipt.amount}
                    </span>
                    <ChevronDown 
                      className="w-5 h-5 transition-transform" 
                      style={{ 
                        color: '#64748B',
                        transform: expandedReceipt === idx ? 'rotate(180deg)' : 'rotate(0deg)'
                      }} 
                    />
                  </div>
                </button>
                
                {/* Expandable Content */}
                {expandedReceipt === idx && (
                  <div className="px-3 pb-3 pt-0" style={{ borderTop: '1px solid #E5E7EB' }}>
                    <div className="pt-3 space-y-2">
                      <div className="flex justify-between">
                        <span style={{ color: '#64748B', fontSize: '12px' }}>Transaction ID</span>
                        <span style={{ color: '#1F2937', fontSize: '12px', fontWeight: '500' }}>{receipt.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: '#64748B', fontSize: '12px' }}>Status</span>
                        <span style={{ color: '#10B981', fontSize: '12px', fontWeight: '500' }}>{receipt.status}</span>
                      </div>
                      <button 
                        className="w-full py-2 mt-2 transition-all flex items-center justify-center"
                        style={{ 
                          backgroundColor: '#F8FAFC',
                          borderRadius: '8px',
                          border: '1px solid #E5E7EB',
                          color: '#3B82F6',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}
                      >
                        <Download className="w-3.5 h-3.5 mr-1.5" />
                        Download Receipt
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Security Note */}
        <div className="p-3 flex items-center" style={{ 
          backgroundColor: '#EFF6FF',
          borderRadius: '12px',
          border: '1px solid #BFDBFE'
        }}>
          <Shield className="w-5 h-5 mr-3" style={{ color: '#3B82F6' }} />
          <p style={{ color: '#3B82F6', fontSize: '12px' }}>
            All payments are secure and encrypted
          </p>
        </div>
      </div>
      
      <div className="p-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
        <button
          onClick={() => setPaymentComplete(true)}
          className="w-full py-3.5 transition-all"
          style={{ 
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '14px',
            fontSize: '15px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(16,185,129,0.3)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
        >
          Pay ₹2,500
        </button>
      </div>
    </div>
  );
}
