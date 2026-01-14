import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, MapPin, Upload, Droplet, CheckCircle2, AlertCircle } from 'lucide-react';

interface AuthScreenProps {
  onComplete: () => void;
}

export function AuthScreen({ onComplete }: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  // Password strength validation
  const getPasswordStrength = (pwd: string) => {
    const hasMinLength = pwd.length >= 8;
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    return { hasMinLength, hasUpperCase, hasNumber };
  };

  const passwordStrength = getPasswordStrength(password);

  if (mode === 'forgot') {
    return (
      <div className="h-full flex flex-col p-6" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Header */}
        <div className="mb-8 pt-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full" style={{ backgroundColor: '#EFF6FF' }}>
              <Mail className="w-8 h-8" style={{ color: '#3B82F6' }} />
            </div>
          </div>
          <h2 className="text-center mb-2" style={{ color: '#1F2937' }}>Forgot Password?</h2>
          <p className="text-center" style={{ color: '#6B7280' }}>
            {resetSent ? 'Check your email' : 'Enter your email to reset password'}
          </p>
        </div>
        
        {resetSent ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="p-4 rounded-full mb-4" style={{ backgroundColor: '#F0FDF4' }}>
              <CheckCircle2 className="w-12 h-12" style={{ color: '#10B981' }} />
            </div>
            <p className="text-center mb-8" style={{ color: '#374151' }}>
              A password reset link has been sent to
            </p>
            <p className="text-center mb-8" style={{ color: '#3B82F6' }}>
              {email}
            </p>
          </div>
        ) : (
          <div className="flex-1">
            {/* Email Input */}
            <div className="mb-6">
              <label className="block mb-2" style={{ color: '#374151' }}>Email Address</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all"
                  style={{ 
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#F9FAFB',
                    color: '#1F2937'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
                  onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Buttons */}
        <div className="mt-auto">
          {!resetSent && (
            <button 
              onClick={() => setResetSent(true)}
              className="w-full py-3.5 px-6 rounded-lg mb-4 transition-all"
              style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', border: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
            >
              Send Reset Link
            </button>
          )}
          
          <button 
            onClick={() => {
              setMode('login');
              setResetSent(false);
            }}
            className="text-center w-full py-3"
            style={{ color: '#3B82F6', background: 'none', border: 'none' }}
          >
            {resetSent ? 'Back to Login' : 'Cancel'}
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'signup') {
    return (
      <div className="h-full flex flex-col overflow-y-auto" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="p-6 pb-24">
          {/* Header */}
          <div className="mb-6 pt-4">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EFF6FF' }}>
                <Droplet className="w-8 h-8" style={{ color: '#3B82F6' }} />
              </div>
            </div>
            <h2 className="text-center mb-2" style={{ color: '#1F2937' }}>Create Account</h2>
            <p className="text-center" style={{ color: '#6B7280' }}>
              Enter your details to get started
            </p>
          </div>
          
          {/* Authentication Fields */}
          <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
            <h4 className="mb-4" style={{ color: '#374151' }}>Account Information</h4>
            
            {/* Email */}
            <div className="mb-4">
              <label className="block mb-2" style={{ color: '#374151' }}>Email Address</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all"
                  style={{ 
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#FFFFFF',
                    color: '#1F2937'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
                  onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
                />
              </div>
            </div>
            
            {/* Password */}
            <div className="mb-4">
              <label className="block mb-2" style={{ color: '#374151' }}>Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-12 py-3.5 rounded-lg outline-none transition-all"
                  style={{ 
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#FFFFFF',
                    color: '#1F2937'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
                  onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                  ) : (
                    <Eye className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                  )}
                </button>
              </div>
            </div>
            
            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block mb-2" style={{ color: '#374151' }}>Confirm Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full pl-12 pr-12 py-3.5 rounded-lg outline-none transition-all"
                  style={{ 
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#FFFFFF',
                    color: '#1F2937'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
                  onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                  ) : (
                    <Eye className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                  )}
                </button>
              </div>
            </div>
            
            {/* Password Requirements */}
            {password && (
              <div className="mt-3 p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                <p className="mb-2 text-xs" style={{ color: '#6B7280' }}>Password must contain:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {passwordStrength.hasMinLength ? (
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#10B981' }} />
                    ) : (
                      <AlertCircle className="w-4 h-4" style={{ color: '#9CA3AF' }} />
                    )}
                    <span className="text-xs" style={{ color: passwordStrength.hasMinLength ? '#10B981' : '#6B7280' }}>
                      Minimum 8 characters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordStrength.hasUpperCase ? (
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#10B981' }} />
                    ) : (
                      <AlertCircle className="w-4 h-4" style={{ color: '#9CA3AF' }} />
                    )}
                    <span className="text-xs" style={{ color: passwordStrength.hasUpperCase ? '#10B981' : '#6B7280' }}>
                      At least 1 uppercase letter
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordStrength.hasNumber ? (
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#10B981' }} />
                    ) : (
                      <AlertCircle className="w-4 h-4" style={{ color: '#9CA3AF' }} />
                    )}
                    <span className="text-xs" style={{ color: passwordStrength.hasNumber ? '#10B981' : '#6B7280' }}>
                      At least 1 number
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Role-Specific Fields (Patient) */}
          <div className="space-y-4">
            <h4 className="mb-3" style={{ color: '#374151' }}>Personal Details</h4>
            
            {/* Name */}
            <div>
              <label className="block mb-2" style={{ color: '#374151' }}>Full Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <User className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
                <input 
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all"
                  style={{ 
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#F9FAFB',
                    color: '#1F2937'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
                  onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
                />
              </div>
            </div>
            
            {/* Blood Group */}
            <div>
              <label className="block mb-2" style={{ color: '#374151' }}>Blood Group</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Droplet className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
                <select 
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all appearance-none"
                  style={{ 
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#F9FAFB',
                    color: '#1F2937'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
                  onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
                >
                  <option value="">Select your blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent" style={{ borderTopColor: '#9CA3AF' }} />
                </div>
              </div>
            </div>
            
            {/* Location */}
            <div>
              <label className="block mb-2" style={{ color: '#374151' }}>Location</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <MapPin className="w-5 h-5" style={{ color: '#9CA3AF' }} />
                </div>
                <input 
                  type="text"
                  placeholder="Enter your city"
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all"
                  style={{ 
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#F9FAFB',
                    color: '#1F2937'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
                  onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
                />
              </div>
            </div>
            
            {/* Medical History */}
            <div>
              <label className="block mb-2" style={{ color: '#374151' }}>
                Medical History <span style={{ color: '#9CA3AF' }}>(Optional)</span>
              </label>
              <button 
                className="w-full p-4 flex items-center justify-between rounded-lg transition-all"
                style={{ border: '1px dashed #E5E7EB', backgroundColor: '#F9FAFB' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3B82F6'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
              >
                <div className="flex items-center">
                  <Upload className="w-5 h-5 mr-3" style={{ color: '#9CA3AF' }} />
                  <span style={{ color: '#6B7280' }}>Upload medical documents</span>
                </div>
                <span className="text-xs" style={{ color: '#9CA3AF' }}>PDF/Image</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Fixed Bottom Buttons */}
        <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
          <button 
            onClick={onComplete}
            className="w-full py-3.5 px-6 rounded-lg mb-3 transition-all"
            style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', border: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
          >
            Create Account
          </button>
          
          <button 
            onClick={() => setMode('login')}
            className="text-center w-full py-3"
            style={{ color: '#3B82F6', background: 'none', border: 'none' }}
          >
            Already have an account? <span>Log In</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-6" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full" style={{ backgroundColor: '#EFF6FF' }}>
              <Droplet className="w-12 h-12" style={{ color: '#3B82F6' }} />
            </div>
          </div>
          <h2 className="text-center mb-2" style={{ color: '#1F2937' }}>Welcome Back</h2>
          <p className="text-center" style={{ color: '#6B7280' }}>
            Log in to continue to your account
          </p>
        </div>
        
        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-2" style={{ color: '#374151' }}>Email Address</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Mail className="w-5 h-5" style={{ color: '#9CA3AF' }} />
            </div>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all"
              style={{ 
                border: '1px solid #E5E7EB',
                backgroundColor: '#F9FAFB',
                color: '#1F2937'
              }}
              onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
              onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
            />
          </div>
        </div>
        
        {/* Password Input */}
        <div className="mb-2">
          <label className="block mb-2" style={{ color: '#374151' }}>Password</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Lock className="w-5 h-5" style={{ color: '#9CA3AF' }} />
            </div>
            <input 
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-12 pr-12 py-3.5 rounded-lg outline-none transition-all"
              style={{ 
                border: '1px solid #E5E7EB',
                backgroundColor: '#F9FAFB',
                color: '#1F2937'
              }}
              onFocus={(e) => e.target.style.border = '1px solid #3B82F6'}
              onBlur={(e) => e.target.style.border = '1px solid #E5E7EB'}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              ) : (
                <Eye className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              )}
            </button>
          </div>
        </div>
        
        {/* Forgot Password Link */}
        <div className="mb-6 text-right">
          <button 
            onClick={() => setMode('forgot')}
            style={{ color: '#3B82F6', background: 'none', border: 'none' }}
          >
            Forgot Password?
          </button>
        </div>
        
        {/* Login button */}
        <button 
          onClick={onComplete}
          className="w-full py-3.5 px-6 rounded-lg transition-all"
          style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', border: 'none' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
        >
          Log In
        </button>
      </div>
      
      {/* Switch to signup */}
      <button 
        onClick={() => setMode('signup')}
        className="text-center mt-6"
        style={{ color: '#6B7280', background: 'none', border: 'none' }}
      >
        New user? <span style={{ color: '#3B82F6' }}>Sign Up</span>
      </button>
    </div>
  );
}
