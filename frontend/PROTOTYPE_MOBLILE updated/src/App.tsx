import React, { useState } from 'react';
import { ChevronRight, Phone, User, MapPin, Upload, Search, Filter, Home, Clock, FileText, Menu } from 'lucide-react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { AuthScreen } from './components/AuthScreen';
import { RoleSelectionScreen } from './components/RoleSelectionScreen';
import { HomeScreen } from './components/HomeScreen';
import { BloodSearchScreen } from './components/BloodSearchScreen';
import { RequestWorkflowScreen } from './components/RequestWorkflowScreen';
import { OrderTrackingScreen } from './components/OrderTrackingScreen';
import { DonorSearchScreen } from './components/DonorSearchScreen';
import { MedicalReportScreen } from './components/MedicalReportScreen';
import { TransfusionScreen } from './components/TransfusionScreen';
import { PaymentScreen } from './components/PaymentScreen';
import { NotificationsScreen } from './components/NotificationsScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { OfflineScreen } from './components/OfflineScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { DonorHomeScreen } from './components/DonorHomeScreen';
import { DonorLiveRequestsScreen } from './components/DonorLiveRequestsScreen';
import { DonorEligibilityScreen } from './components/DonorEligibilityScreen';
import { DonorSchedulingScreen } from './components/DonorSchedulingScreen';
import { DonorNavigationScreen } from './components/DonorNavigationScreen';
import { DonorDonationProcessScreen } from './components/DonorDonationProcessScreen';
import { DonorRewardsScreen } from './components/DonorRewardsScreen';
import { DonorCampsScreen } from './components/DonorCampsScreen';
import { DonorCohortScreen } from './components/DonorCohortScreen';
import { DonorHistoryDashboardScreen } from './components/DonorHistoryDashboardScreen';
import { DonorOfflineScreen } from './components/DonorOfflineScreen';
import { DonorProfileScreen } from './components/DonorProfileScreen';
import { RiderHomeScreen } from './components/RiderHomeScreen';
import { RiderIncomingTaskScreen } from './components/RiderIncomingTaskScreen';
import { RiderNavigationScreen } from './components/RiderNavigationScreen';
import { RiderPickupScreen } from './components/RiderPickupScreen';
import { RiderColdChainScreen } from './components/RiderColdChainScreen';
import { RiderDeliveryScreen } from './components/RiderDeliveryScreen';
import { RiderEmergencyScreen } from './components/RiderEmergencyScreen';
import { RiderComplianceScreen } from './components/RiderComplianceScreen';
import { RiderEarningsScreen } from './components/RiderEarningsScreen';
import { RiderHistoryScreen } from './components/RiderHistoryScreen';
import { RiderOfflineScreen } from './components/RiderOfflineScreen';
import { RiderProfileScreen } from './components/RiderProfileScreen';
import { HospitalHomeScreen } from './components/HospitalHomeScreen';
import { HospitalInventoryScreen } from './components/HospitalInventoryScreen';
import { HospitalInventoryLoggingScreen } from './components/HospitalInventoryLoggingScreen';
import { HospitalRequestsScreen } from './components/HospitalRequestsScreen';
import { HospitalPrepareUnitScreen } from './components/HospitalPrepareUnitScreen';
import { HospitalCrossmatchScreen } from './components/HospitalCrossmatchScreen';
import { HospitalRidersScreen } from './components/HospitalRidersScreen';
import { HospitalTransfusionScreen } from './components/HospitalTransfusionScreen';
import { HospitalEmergencyScreen } from './components/HospitalEmergencyScreen';
import { HospitalCampsScreen } from './components/HospitalCampsScreen';
import { HospitalComplianceScreen } from './components/HospitalComplianceScreen';
import { HospitalOfflineScreen } from './components/HospitalOfflineScreen';
import { HospitalProfileScreen } from './components/HospitalProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [screenData, setScreenData] = useState<any>({});
  const [showMenu, setShowMenu] = useState(false);

  const navigateTo = (screen: string, data?: any) => {
    setCurrentScreen(screen);
    if (data) setScreenData(data);
    setShowMenu(false);
  };

  const screens = [
    { id: 'welcome', name: '1. Welcome', section: 'Patient' },
    { id: 'onboarding', name: '2. Onboarding', section: 'Patient' },
    { id: 'auth', name: '3. Login/Signup', section: 'Patient' },
    { id: 'role-selection', name: '4. Role Selection', section: 'Patient' },
    { id: 'home', name: '5. Patient Home', section: 'Patient' },
    { id: 'search', name: '6. Blood Search', section: 'Patient' },
    { id: 'request', name: '7. Request Workflow', section: 'Patient' },
    { id: 'tracking', name: '8. Order Tracking', section: 'Patient' },
    { id: 'donor-search', name: '9. Donor Search', section: 'Patient' },
    { id: 'medical-report', name: '10. Medical Report', section: 'Patient' },
    { id: 'transfusion', name: '11. Transfusion', section: 'Patient' },
    { id: 'payment', name: '12. Payment', section: 'Patient' },
    { id: 'notifications', name: '13. Notifications', section: 'Patient' },
    { id: 'history', name: '14. History', section: 'Patient' },
    { id: 'offline', name: '15. Offline Support', section: 'Patient' },
    { id: 'profile', name: '16. Profile', section: 'Patient' },
    { id: 'donor-home', name: '1. Donor Home', section: 'Donor' },
    { id: 'donor-requests', name: '2. Live Requests', section: 'Donor' },
    { id: 'donor-eligibility', name: '3. Eligibility', section: 'Donor' },
    { id: 'donor-scheduling', name: '4. Scheduling', section: 'Donor' },
    { id: 'donor-navigation', name: '5. Navigation', section: 'Donor' },
    { id: 'donor-donation-process', name: '6. Donation Process', section: 'Donor' },
    { id: 'donor-rewards', name: '7. Rewards', section: 'Donor' },
    { id: 'donor-camps', name: '8. Camps', section: 'Donor' },
    { id: 'donor-cohort', name: '9. Cohort', section: 'Donor' },
    { id: 'donor-history', name: '10. History', section: 'Donor' },
    { id: 'donor-offline', name: '11. Offline', section: 'Donor' },
    { id: 'donor-profile', name: '12. Profile', section: 'Donor' },
    { id: 'rider-home', name: '1. Rider Home', section: 'Rider' },
    { id: 'rider-incoming-task', name: '2. Incoming Task', section: 'Rider' },
    { id: 'rider-navigation', name: '3. Navigation', section: 'Rider' },
    { id: 'rider-pickup', name: '4. Pickup', section: 'Rider' },
    { id: 'rider-cold-chain', name: '5. Cold Chain', section: 'Rider' },
    { id: 'rider-delivery', name: '6. Delivery', section: 'Rider' },
    { id: 'rider-emergency', name: '7. Emergency', section: 'Rider' },
    { id: 'rider-compliance', name: '8. Compliance', section: 'Rider' },
    { id: 'rider-earnings', name: '9. Earnings', section: 'Rider' },
    { id: 'rider-history', name: '10. History', section: 'Rider' },
    { id: 'rider-offline', name: '11. Offline', section: 'Rider' },
    { id: 'rider-profile', name: '12. Profile', section: 'Rider' },
    { id: 'hospital-home', name: '1. Hospital Home', section: 'Hospital' },
    { id: 'hospital-inventory', name: '2. Inventory', section: 'Hospital' },
    { id: 'hospital-inventory-logging', name: '3. Inventory Logging', section: 'Hospital' },
    { id: 'hospital-requests', name: '4. Requests', section: 'Hospital' },
    { id: 'hospital-prepare-unit', name: '5. Prepare Unit', section: 'Hospital' },
    { id: 'hospital-crossmatch', name: '6. Crossmatch', section: 'Hospital' },
    { id: 'hospital-riders', name: '7. Riders', section: 'Hospital' },
    { id: 'hospital-transfusion', name: '8. Transfusion', section: 'Hospital' },
    { id: 'hospital-emergency', name: '9. Emergency', section: 'Hospital' },
    { id: 'hospital-camps', name: '10. Camps', section: 'Hospital' },
    { id: 'hospital-compliance', name: '11. Compliance', section: 'Hospital' },
    { id: 'hospital-offline', name: '12. Offline', section: 'Hospital' },
    { id: 'hospital-profile', name: '13. Profile', section: 'Hospital' },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNext={() => navigateTo('onboarding')} />;
      case 'onboarding':
        return <OnboardingScreen onNext={() => navigateTo('auth')} />;
      case 'auth':
        return <AuthScreen onComplete={() => navigateTo('role-selection')} />;
      case 'role-selection':
        return <RoleSelectionScreen navigateTo={navigateTo} />;
      case 'home':
        return <HomeScreen navigateTo={navigateTo} />;
      case 'search':
        return <BloodSearchScreen navigateTo={navigateTo} />;
      case 'request':
        return <RequestWorkflowScreen navigateTo={navigateTo} data={screenData} />;
      case 'tracking':
        return <OrderTrackingScreen navigateTo={navigateTo} />;
      case 'donor-search':
        return <DonorSearchScreen navigateTo={navigateTo} />;
      case 'medical-report':
        return <MedicalReportScreen navigateTo={navigateTo} />;
      case 'transfusion':
        return <TransfusionScreen navigateTo={navigateTo} />;
      case 'payment':
        return <PaymentScreen navigateTo={navigateTo} />;
      case 'notifications':
        return <NotificationsScreen navigateTo={navigateTo} />;
      case 'history':
        return <HistoryScreen navigateTo={navigateTo} />;
      case 'offline':
        return <OfflineScreen navigateTo={navigateTo} />;
      case 'profile':
        return <ProfileScreen navigateTo={navigateTo} />;
      case 'donor-home':
        return <DonorHomeScreen navigateTo={navigateTo} />;
      case 'donor-requests':
        return <DonorLiveRequestsScreen navigateTo={navigateTo} />;
      case 'donor-eligibility':
        return <DonorEligibilityScreen navigateTo={navigateTo} />;
      case 'donor-scheduling':
        return <DonorSchedulingScreen navigateTo={navigateTo} />;
      case 'donor-navigation':
        return <DonorNavigationScreen navigateTo={navigateTo} />;
      case 'donor-donation-process':
        return <DonorDonationProcessScreen navigateTo={navigateTo} />;
      case 'donor-rewards':
        return <DonorRewardsScreen navigateTo={navigateTo} />;
      case 'donor-camps':
        return <DonorCampsScreen navigateTo={navigateTo} />;
      case 'donor-cohort':
        return <DonorCohortScreen navigateTo={navigateTo} />;
      case 'donor-history':
        return <DonorHistoryDashboardScreen navigateTo={navigateTo} />;
      case 'donor-offline':
        return <DonorOfflineScreen navigateTo={navigateTo} />;
      case 'donor-profile':
        return <DonorProfileScreen navigateTo={navigateTo} />;
      case 'rider-home':
        return <RiderHomeScreen navigateTo={navigateTo} />;
      case 'rider-incoming-task':
        return <RiderIncomingTaskScreen navigateTo={navigateTo} />;
      case 'rider-navigation':
        return <RiderNavigationScreen navigateTo={navigateTo} />;
      case 'rider-pickup':
        return <RiderPickupScreen navigateTo={navigateTo} />;
      case 'rider-cold-chain':
        return <RiderColdChainScreen navigateTo={navigateTo} />;
      case 'rider-delivery':
        return <RiderDeliveryScreen navigateTo={navigateTo} />;
      case 'rider-emergency':
        return <RiderEmergencyScreen navigateTo={navigateTo} />;
      case 'rider-compliance':
        return <RiderComplianceScreen navigateTo={navigateTo} />;
      case 'rider-earnings':
        return <RiderEarningsScreen navigateTo={navigateTo} />;
      case 'rider-history':
        return <RiderHistoryScreen navigateTo={navigateTo} />;
      case 'rider-offline':
        return <RiderOfflineScreen navigateTo={navigateTo} />;
      case 'rider-profile':
        return <RiderProfileScreen navigateTo={navigateTo} />;
      case 'rider-tasks':
        return <RiderIncomingTaskScreen navigateTo={navigateTo} />;
      case 'rider-deliveries':
        return <RiderDeliveryScreen navigateTo={navigateTo} />;
      case 'hospital-home':
        return <HospitalHomeScreen navigateTo={navigateTo} />;
      case 'hospital-inventory':
        return <HospitalInventoryScreen navigateTo={navigateTo} />;
      case 'hospital-inventory-logging':
        return <HospitalInventoryLoggingScreen navigateTo={navigateTo} />;
      case 'hospital-requests':
        return <HospitalRequestsScreen navigateTo={navigateTo} />;
      case 'hospital-prepare-unit':
        return <HospitalPrepareUnitScreen navigateTo={navigateTo} />;
      case 'hospital-crossmatch':
        return <HospitalCrossmatchScreen navigateTo={navigateTo} />;
      case 'hospital-riders':
        return <HospitalRidersScreen navigateTo={navigateTo} />;
      case 'hospital-transfusion':
        return <HospitalTransfusionScreen navigateTo={navigateTo} />;
      case 'hospital-emergency':
        return <HospitalEmergencyScreen navigateTo={navigateTo} />;
      case 'hospital-camps':
        return <HospitalCampsScreen navigateTo={navigateTo} />;
      case 'hospital-compliance':
        return <HospitalComplianceScreen navigateTo={navigateTo} />;
      case 'hospital-offline':
        return <HospitalOfflineScreen navigateTo={navigateTo} />;
      case 'hospital-profile':
        return <HospitalProfileScreen navigateTo={navigateTo} />;
      default:
        return <WelcomeScreen onNext={() => navigateTo('onboarding')} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8" style={{ backgroundColor: '#1F2937' }}>
      {/* Screen Navigation Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setShowMenu(false)}>
          <div className="rounded-lg p-6 max-h-[80vh] overflow-y-auto" style={{ backgroundColor: '#FFFFFF' }} onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-4 pb-2" style={{ color: '#1F2937', borderBottom: '2px solid #E5E7EB' }}>Navigate to Screen</h3>
            
            {/* Patient Screens */}
            <div className="mb-4">
              <h4 className="mb-2 text-sm" style={{ color: '#6B7280' }}>PATIENT SCREENS</h4>
              <div className="grid grid-cols-1 gap-2">
                {screens.filter(s => s.section === 'Patient').map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => navigateTo(screen.id)}
                    className={`p-3 text-left`}
                    style={{
                      border: currentScreen === screen.id ? '2px solid #3B82F6' : '2px solid #E5E7EB',
                      backgroundColor: currentScreen === screen.id ? '#EFF6FF' : '#FFFFFF',
                      color: currentScreen === screen.id ? '#3B82F6' : '#374151'
                    }}
                  >
                    {screen.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Donor Screens */}
            <div>
              <h4 className="mb-2 text-sm" style={{ color: '#6B7280' }}>DONOR SCREENS</h4>
              <div className="grid grid-cols-1 gap-2">
                {screens.filter(s => s.section === 'Donor').map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => navigateTo(screen.id)}
                    className={`p-3 text-left`}
                    style={{
                      border: currentScreen === screen.id ? '2px solid #10B981' : '2px solid #E5E7EB',
                      backgroundColor: currentScreen === screen.id ? '#F0FDF4' : '#FFFFFF',
                      color: currentScreen === screen.id ? '#10B981' : '#374151'
                    }}
                  >
                    {screen.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Rider Screens */}
            <div>
              <h4 className="mb-2 text-sm" style={{ color: '#6B7280' }}>RIDER SCREENS</h4>
              <div className="grid grid-cols-1 gap-2">
                {screens.filter(s => s.section === 'Rider').map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => navigateTo(screen.id)}
                    className={`p-3 text-left`}
                    style={{
                      border: currentScreen === screen.id ? '2px solid #FF9900' : '2px solid #E5E7EB',
                      backgroundColor: currentScreen === screen.id ? '#FFF9DB' : '#FFFFFF',
                      color: currentScreen === screen.id ? '#FF9900' : '#374151'
                    }}
                  >
                    {screen.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Hospital Screens */}
            <div>
              <h4 className="mb-2 text-sm" style={{ color: '#6B7280' }}>HOSPITAL SCREENS</h4>
              <div className="grid grid-cols-1 gap-2">
                {screens.filter(s => s.section === 'Hospital').map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => navigateTo(screen.id)}
                    className={`p-3 text-left`}
                    style={{
                      border: currentScreen === screen.id ? '2px solid #FF5733' : '2px solid #E5E7EB',
                      backgroundColor: currentScreen === screen.id ? '#FFFAF0' : '#FFFFFF',
                      color: currentScreen === screen.id ? '#FF5733' : '#374151'
                    }}
                  >
                    {screen.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Android Frame - Scaled from 1080x2400 */}
      <div className="relative">
        <div className="relative shadow-2xl" style={{ width: '360px', height: '800px', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
          {renderScreen()}
        </div>
        
        {/* Navigation Button */}
        <button
          onClick={() => setShowMenu(true)}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 flex items-center gap-2 hover:opacity-90"
          style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', border: 'none' }}
        >
          <Menu className="w-5 h-5" />
          <span>All Screens ({screens.length})</span>
        </button>
      </div>
    </div>
  );
}
