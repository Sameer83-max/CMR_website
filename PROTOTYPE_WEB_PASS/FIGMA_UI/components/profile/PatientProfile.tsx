import { useEffect, useMemo, useState } from 'react';
import { User, Mail, Phone, MapPin, Heart, Shield, Bell, Settings, ChevronRight, LogOut, CheckCircle, ArrowLeft, Users, Calendar } from 'lucide-react';
import { LogoutModal } from '../auth/LogoutModal';
import { toast } from 'sonner';
import { useAutoRefresh } from '../../context/AutoRefreshContext';

interface PatientProfileProps {
  onBack: () => void;
  onLogout: () => void;
}

export function PatientProfile({ onBack, onLogout }: PatientProfileProps) {
  const { refreshTick } = useAutoRefresh();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [userData, setUserData] = useState<any>({});
  const [cohortLoading, setCohortLoading] = useState(false);
  const [cohortError, setCohortError] = useState<string | null>(null);
  const [cohortRows, setCohortRows] = useState<
    Array<{
      cohort_id: string;
      cohort_name: string;
      start_date: string | null;
      sequence_order: number;
      donor_id: string;
      donor_name: string;
      donor_available: boolean;
      next_scheduled_for: string | null;
      next_transfusion_for: string | null;
    }>
  >([]);

  const openDashboardView = (view: string) => {
    onBack();
    if (typeof window === 'undefined') return;
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent('haemolink:navigate', { detail: { role: 'patient', view } }));
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
      setUserData({
        name: profile?.full_name || user?.email || 'Patient',
        role: 'Patient',
        email: user?.email || '',
        phone: profile?.phone || '',
        bloodGroup: profile?.blood_group || '',
        city: profile?.location || '',
        verified: !!profile,
        thalassemia: !!profile?.thalassemia_flag,
      });

      setCohortError(null);
      setCohortRows([]);
      if (role !== 'patient' || !user?.id) return;

      setCohortLoading(true);
      try {
        const { data, error } = await supabase.rpc('patient_get_cohort_details', { p_patient_id: user.id } as any);
        if (error) throw error;
        const rows = Array.isArray(data) ? (data as any[]) : [];
        const normalized = rows
          .map((r) => ({
            cohort_id: typeof r?.cohort_id === 'string' ? r.cohort_id : '',
            cohort_name: typeof r?.cohort_name === 'string' ? r.cohort_name : 'Cohort',
            start_date: typeof r?.start_date === 'string' ? r.start_date : null,
            sequence_order: typeof r?.sequence_order === 'number' ? r.sequence_order : 0,
            donor_id: typeof r?.donor_id === 'string' ? r.donor_id : '',
            donor_name: typeof r?.donor_name === 'string' ? r.donor_name : 'Donor',
            donor_available: !!r?.donor_available,
            next_scheduled_for: typeof r?.next_scheduled_for === 'string' ? r.next_scheduled_for : null,
            next_transfusion_for: typeof r?.next_transfusion_for === 'string' ? r.next_transfusion_for : null,
          }))
          .filter((r) => r.cohort_id)
          .sort((a, b) => (a.sequence_order || 0) - (b.sequence_order || 0));
        setCohortRows(normalized);
      } catch (e: any) {
        setCohortError(e?.message || 'Failed to load cohort.');
        setCohortRows([]);
      } finally {
        setCohortLoading(false);
      }
    })();
  }, [refreshTick]);

  const cohortMeta = useMemo(() => {
    if (!cohortRows.length) return null;
    const first = cohortRows[0];
    const donorsCount = cohortRows.length;
    const startDate = first.start_date ? new Date(first.start_date) : null;
    const nextTransfusion = first.next_transfusion_for ? new Date(first.next_transfusion_for) : null;
    return {
      cohortName: first.cohort_name,
      donorsCount,
      startDateLabel: startDate && !Number.isNaN(startDate.getTime()) ? startDate.toLocaleDateString() : '—',
      nextTransfusionLabel:
        nextTransfusion && !Number.isNaN(nextTransfusion.getTime()) ? nextTransfusion.toLocaleString() : '—',
    };
  }, [cohortRows]);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    // Call the logout handler which redirects to landing page
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
      onClick: () => openDashboardView('notifications'),
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
    ...(userData.thalassemia
      ? [
          {
            icon: Users,
            label: 'Cohort System',
            description: 'View your donor rotation and schedule',
            onClick: () => openDashboardView('cohort'),
          },
        ]
      : []),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-50">
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
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 mb-6">
          <div className="flex items-start gap-4 md:gap-6">
            {/* Avatar */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            {/* User Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl md:text-2xl text-gray-900 mb-1">{userData.name}</h2>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">
                      <Heart className="w-3 h-3 mr-1" />
                      {userData.role}
                    </span>
                    {userData.verified && (
                      <span className="inline-flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm truncate">{userData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm">{userData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Heart className="w-5 h-5 text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Blood Group</p>
                    <p className="text-sm">{userData.bloodGroup}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm">{userData.city}</p>
                  </div>
                </div>
              </div>

              {/* Special Status */}
              {userData.thalassemia && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-violet-50 text-violet-700 rounded-lg text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Enrolled in Thalassemia Cohort System</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {userData.thalassemia && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 mb-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Cohort Overview</h3>
                  <p className="text-sm text-gray-500">Your next transfusion and donor rotation</p>
                </div>
              </div>
              <button
                onClick={() => openDashboardView('cohort')}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Open
              </button>
            </div>

            {cohortLoading ? (
              <div className="p-4 bg-gray-50 rounded-xl text-gray-600">Loading cohort details...</div>
            ) : cohortError ? (
              <div className="p-4 bg-red-50 rounded-xl text-red-700">{cohortError}</div>
            ) : cohortMeta ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Cohort</div>
                  <div className="text-gray-900">{cohortMeta.cohortName}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Start date</div>
                  <div className="text-gray-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    {cohortMeta.startDateLabel}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Next transfusion</div>
                  <div className="text-gray-900">{cohortMeta.nextTransfusionLabel}</div>
                  <div className="text-xs text-gray-500 mt-1">{cohortMeta.donorsCount} donors in rotation</div>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-gray-50 rounded-xl text-gray-600">No cohort data available yet.</div>
            )}
          </div>
        )}

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
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
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
