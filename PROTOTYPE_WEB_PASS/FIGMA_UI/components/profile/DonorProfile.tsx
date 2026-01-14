import { useEffect, useMemo, useState } from 'react';
import { User, Mail, Phone, MapPin, Droplet, Shield, Bell, Settings, ChevronRight, LogOut, CheckCircle, ArrowLeft, Award, Heart, Users, Calendar } from 'lucide-react';
import { LogoutModal } from '../auth/LogoutModal';
import { toast } from 'sonner';
import { useAutoRefresh } from '../../context/AutoRefreshContext';

interface DonorProfileProps {
  onBack: () => void;
  onLogout: () => void;
}

export function DonorProfile({ onBack, onLogout }: DonorProfileProps) {
  const { refreshTick } = useAutoRefresh();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [userData, setUserData] = useState<any>({});
  const [availability, setAvailability] = useState(true);
  const [savingAvailability, setSavingAvailability] = useState(false);
  const [scheduleLoading, setScheduleLoading] = useState(false);
  const [scheduleError, setScheduleError] = useState<string | null>(null);
  const [nextScheduledFor, setNextScheduledFor] = useState<string | null>(null);
  const [assignmentsCount, setAssignmentsCount] = useState<number>(0);

  const openDashboardView = (view: string) => {
    onBack();
    if (typeof window === 'undefined') return;
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent('haemolink:navigate', { detail: { role: 'donor', view } }));
    }, 0);
  };

  useEffect(() => {
    (async () => {
      const [{ getSessionAndRole, getProfile }, { supabase }] = await Promise.all([
        import('../../services/auth'),
        import('../../supabase/client'),
      ]);
      const { role } = await getSessionAndRole();
      const profilePromise = role ? getProfile(role) : Promise.resolve(null);
      const userPromise = supabase.auth.getUser();
      const [profile, userResult] = await Promise.all([profilePromise, userPromise]);
      const user = userResult.data.user;
      const isAvailable = profile?.is_available;
      setUserData({
        name: profile?.full_name || user?.email || 'Donor',
        role: 'Donor',
        email: user?.email || '',
        phone: profile?.phone || '',
        bloodGroup: profile?.blood_group || '',
        city: profile?.location || '',
        verified: !!profile,
        totalDonations: profile?.total_donations ?? 0,
        eligibilityStatus: profile?.eligibility_status || 'Eligible',
      });
      setAvailability(typeof isAvailable === 'boolean' ? isAvailable : true);

      setScheduleError(null);
      setNextScheduledFor(null);
      setAssignmentsCount(0);
      if (role !== 'donor' || !user?.id) return;

      setScheduleLoading(true);
      try {
        const [assignmentsRes, scheduledRes] = await Promise.all([
          supabase.rpc('donor_list_cohort_assignments'),
          supabase.rpc('donor_list_scheduled_donations', { p_only_upcoming: true } as any),
        ]);

        const aRows = Array.isArray(assignmentsRes.data) ? (assignmentsRes.data as any[]) : [];
        setAssignmentsCount(aRows.length);

        const sRows = Array.isArray(scheduledRes.data) ? (scheduledRes.data as any[]) : [];
        const minUpcoming = sRows
          .map((r) => (typeof r?.scheduled_for === 'string' ? r.scheduled_for : null))
          .filter(Boolean)
          .sort((a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0))[0] as string | undefined;
        setNextScheduledFor(minUpcoming || null);
      } catch (e: any) {
        setScheduleError(e?.message || 'Failed to load schedule.');
      } finally {
        setScheduleLoading(false);
      }
    })();
  }, [refreshTick]);

  const nextScheduledLabel = useMemo(() => {
    if (!nextScheduledFor) return '—';
    const d = new Date(nextScheduledFor);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleString();
  }, [nextScheduledFor]);

  const setDonorAvailability = async (nextValue: boolean) => {
    if (savingAvailability) return;
    setSavingAvailability(true);
    setScheduleError(null);
    try {
      const [{ supabase }] = await Promise.all([import('../../supabase/client')]);
      const res = await supabase.rpc('donor_set_availability', { p_available: nextValue } as any);
      if (res.error) throw res.error;
      setAvailability(nextValue);
    } catch (e: any) {
      setScheduleError(e?.message || 'Failed to update availability.');
    } finally {
      setSavingAvailability(false);
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    onLogout();
  };

  const profileOptions = [
    {
      icon: User,
      label: 'Edit Profile',
      description: 'Update your personal information',
      onClick: () =>
        toast('Edit Profile', {
          description: 'Profile editing is coming soon.',
        }),
    },
    {
      icon: Settings,
      label: 'Preferences',
      description: 'Manage your account preferences',
      onClick: () => openDashboardView('profile'),
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: 'Configure notification settings',
      onClick: () =>
        toast('Notifications', {
          description: 'Notification settings are coming soon.',
        }),
    },
    {
      icon: Shield,
      label: 'Security & Privacy',
      description: 'View privacy policy and data usage',
      onClick: () =>
        toast('Security & Privacy', {
          description: 'Security options are coming soon.',
        }),
    },
    {
      icon: Users,
      label: 'Cohort Assignments',
      description: 'See your patient cohorts and rotation order',
      onClick: () => openDashboardView('cohort'),
    },
    {
      icon: Calendar,
      label: 'Schedule Donation',
      description: 'Book your next donation slot',
      onClick: () => openDashboardView('schedule'),
    },
  ];

  const getEligibilityColor = () => {
    switch (userData.eligibilityStatus) {
      case 'Eligible': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Ineligible': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </button>
            <div className="flex-1" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-xl text-gray-900 hidden sm:inline">HAEMOLINK</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your donor account and preferences</p>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 mb-6">
          <div className="flex items-start gap-4 md:gap-6">
            {/* Avatar */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            {/* User Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl md:text-2xl text-gray-900 mb-1">{userData.name}</h2>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm">
                      <Droplet className="w-3 h-3 mr-1" />
                      {userData.role}
                    </span>
                    {userData.verified && (
                      <span className="inline-flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                    )}
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-sm ${getEligibilityColor()}`}>
                      {userData.eligibilityStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-green-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm truncate">{userData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm">{userData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Droplet className="w-5 h-5 text-green-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Blood Group</p>
                    <p className="text-sm">{userData.bloodGroup}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm">{userData.city}</p>
                  </div>
                </div>
              </div>

              {/* Donation Stats */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
                  <Award className="w-4 h-4" />
                  <span><strong>{userData.totalDonations}</strong> lives saved through donations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 mb-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-gray-900">Availability</h3>
              <p className="text-sm text-gray-500">Control whether patients can request you</p>
            </div>
            <button
              type="button"
              onClick={() => setDonorAvailability(!availability)}
              disabled={savingAvailability}
              className={`relative inline-flex h-10 w-20 items-center rounded-full transition ${
                availability ? 'bg-green-600' : 'bg-gray-300'
              } ${savingAvailability ? 'opacity-60 cursor-not-allowed' : ''}`}
              aria-pressed={availability}
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-white transition ${
                  availability ? 'translate-x-11' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {scheduleLoading ? (
            <div className="p-4 bg-gray-50 rounded-xl text-gray-600">Loading your next schedule...</div>
          ) : scheduleError ? (
            <div className="p-4 bg-red-50 rounded-xl text-red-700">{scheduleError}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">Status</div>
                <div className="text-gray-900">{availability ? 'Available' : 'Unavailable'}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">Next scheduled donation</div>
                <div className="text-gray-900">{nextScheduledLabel}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">Active cohorts</div>
                <div className="text-gray-900">{assignmentsCount}</div>
              </div>
            </div>
          )}
        </div>

        {/* Profile Options */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-6">
          {profileOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <button
                key={option.label}
                onClick={option.onClick}
                className={`w-full flex items-center gap-4 p-4 md:p-6 hover:bg-gray-50 transition ${
                  index !== profileOptions.length - 1 ? 'border-b border-gray-200' : ''
                } ${index === 0 ? 'rounded-t-2xl' : ''} ${
                  index === profileOptions.length - 1 ? 'rounded-b-2xl' : ''
                }`}
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <h3 className="text-gray-900 mb-1">{option.label}</h3>
                  <p className="text-sm text-gray-500 truncate">{option.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </button>
            );
          })}
        </div>

        {/* Logout Section (LAST ITEM) */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-red-100">
          <button
            onClick={handleLogoutClick}
            className="w-full flex items-center gap-4 p-4 md:p-6 hover:bg-red-50 transition rounded-2xl group"
          >
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition">
              <LogOut className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-red-600">Log out</h3>
              <p className="text-sm text-red-500/80">Sign out from your account</p>
            </div>
            <ChevronRight className="w-5 h-5 text-red-400 flex-shrink-0" />
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleConfirmLogout}
        userName={userData.name}
      />
    </div>
  );
}
