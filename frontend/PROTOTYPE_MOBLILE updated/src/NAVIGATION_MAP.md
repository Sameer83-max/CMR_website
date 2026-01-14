# Blood Bank Ecosystem - Visual Navigation Map

## 🗺️ Complete App Flow Diagram

```
                        ┌──────────────────┐
                        │  WELCOME SCREEN  │
                        │  (Entry Point)   │
                        └────────┬─────────┘
                                 │
                                 ↓ [Get Started]
                        ┌──────────────────┐
                        │   ONBOARDING     │
                        │   (3 Slides)     │
                        └────────┬─────────┘
                                 │
                                 ↓ [Get Started]
                        ┌──────────────────┐
                        │  LOGIN / SIGNUP  │
                        │  (with OTP)      │
                        └────────┬─────────┘
                                 │
                                 ↓ [OTP Verified]
                        ┌──────────────────┐
                        │ CHOOSE YOUR ROLE │
                        │  (Role Select)   │
                        └────────┬─────────┘
                                 │
                 ┌───────────────┼───────────────┬───────────────┐
                 │               │               │               │
        [Patient]│      [Donor] │      [Rider] │   [Hospital] │
                 ↓               ↓               ↓               ↓
       ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
       │   PATIENT   │ │    DONOR    │ │    RIDER    │ │  HOSPITAL   │
       │    HOME     │ │    HOME     │ │    HOME     │ │  DASHBOARD  │
       └──────┬──────┘ └──────┬──────┘ └──────┬──────┘ └──────┬──────┘
              │               │               │               │
     ┌────────┴────────┐      │               │               │
     │                 │      │               │               │
     ↓                 ↓      ↓               ↓               ↓
  16 PATIENT       12 DONOR       12 RIDER       13 HOSPITAL
  SCREENS          SCREENS        SCREENS        SCREENS
```

---

## 👤 PATIENT FLOW (16 Screens)

```
PATIENT HOME (Hub)
    ├─→ Blood Search & Filters
    │       └─→ Request Workflow
    │               └─→ Payment
    │                       └─→ Order Tracking ──┐
    │                                            │
    ├─→ Donor Search                             │
    │       └─→ Donor Request Details            │
    │                                            │
    ├─→ Medical Report (OCR)                     │
    │       └─→ Auto-Request ───────────────────┤
    │                                            │
    ├─→ Transfusion Booking                      │
    │       └─→ Confirmation                     │
    │                                            │
    ├─→ Notifications                            │
    ├─→ History                                  │
    ├─→ Offline Support                          │
    └─→ Profile ────────────────────────────────┘
            ├─→ Logout → LOGIN
            └─→ Switch Role → ROLE SELECTION

Bottom Nav: Home | Requests | History | Profile
```

### Patient Key Journeys

**Journey 1: Request Blood**
```
Home → Search → Select Hospital → Payment → Tracking ✓
```

**Journey 2: Find Donor**
```
Home → Donor Search → Send Request ✓
```

**Journey 3: Upload Medical Report**
```
Home → Medical Report → OCR Scan → Auto-Request ✓
```

---

## 🩹 DONOR FLOW (12 Screens)

```
DONOR HOME (Hub)
    ├─→ Live Requests
    │       └─→ Request Detail (Modal)
    │               ├─→ Accept → Navigation
    │               │               └─→ Donation Process
    │               │                       ├─→ Pre-Donation
    │               │                       ├─→ During
    │               │                       └─→ Post-Donation
    │               │                               └─→ Rewards
    │               └─→ Decline → Back
    │
    ├─→ Eligibility Check
    │       └─→ Result → Scheduling
    │
    ├─→ Donation Scheduling
    │       └─→ Confirmation
    │
    ├─→ Rewards & Badges
    ├─→ Camps & Drives
    ├─→ Donor Cohort
    ├─→ History Dashboard
    ├─→ Offline Mode
    └─→ Profile
            ├─→ Logout → LOGIN
            └─→ Switch Role → ROLE SELECTION

Bottom Nav: Home | Requests | Camps | Profile
```

### Donor Key Journeys

**Journey 1: Respond to Request**
```
Home → Requests → Accept → Navigate → Donate (3 phases) → Rewards ✓
```

**Journey 2: Schedule Donation**
```
Home → Eligibility → Scheduling → Confirm ✓
```

**Journey 3: Join Camp**
```
Home → Camps → Register → Confirmation ✓
```

---

## 🚴 RIDER FLOW (12 Screens)

```
RIDER HOME (Hub)
    ├─→ Incoming Tasks
    │       └─→ Task Detail
    │               ├─→ Accept → Pickup Navigation
    │               │               └─→ Pickup Screen
    │               │                       └─→ Cold Chain Check
    │               │                               └─→ Delivery Navigation
    │               │                                       └─→ Delivery Screen
    │               │                                               └─→ Success
    │               └─→ Reject → Back
    │
    ├─→ Navigation (Map)
    ├─→ Cold Chain Monitoring
    ├─→ Emergency Mode
    ├─→ Compliance
    ├─→ Earnings Dashboard
    ├─→ History
    ├─→ Offline Mode
    └─→ Profile
            ├─→ Logout → LOGIN
            └─→ Switch Role → ROLE SELECTION

Bottom Nav: Home | Tasks | Deliveries | Profile
```

### Rider Key Journeys

**Journey 1: Complete Delivery**
```
Home → Tasks → Accept → Pickup Nav → Pickup (OTP) → 
Cold Chain → Delivery Nav → Delivery (OTP) → Success ✓
```

**Journey 2: Handle Emergency**
```
Delivery Nav → Emergency → SOS → Support ✓
```

**Journey 3: Check Earnings**
```
Home → Earnings → View Details → Request Payout ✓
```

---

## 🏥 HOSPITAL FLOW (13 Screens)

```
HOSPITAL DASHBOARD (Hub)
    ├─→ Inventory Dashboard
    │       └─→ Inventory Logging
    │               └─→ Add Unit → Back to Inventory
    │
    ├─→ Request Handling
    │       └─→ Request Detail
    │               └─→ Crossmatch Verification
    │                       └─→ Prepare Unit
    │                               └─→ Rider Coordination
    │                                       └─→ Live Tracking
    │
    ├─→ Transfusion Management
    │       ├─→ Pre-Transfusion
    │       ├─→ During Transfusion
    │       └─→ Post-Transfusion
    │
    ├─→ Emergency Mode
    │       └─→ Activate Protocols
    │
    ├─→ Camps Management
    ├─→ Compliance & Verification
    ├─→ Offline Operations
    └─→ Profile
            ├─→ Logout → LOGIN
            └─→ Switch Role → ROLE SELECTION

Bottom Nav: Dashboard | Inventory | Requests | Profile
```

### Hospital Key Journeys

**Journey 1: Handle Blood Request**
```
Dashboard → Requests → Accept → Crossmatch → 
Prepare Unit → Assign Rider → Track ✓
```

**Journey 2: Add Blood Unit**
```
Dashboard → Inventory → Add (+) → Log/Scan → Confirm ✓
```

**Journey 3: Manage Transfusion**
```
Dashboard → Transfusions → Pre → During → Post → Complete ✓
```

**Journey 4: Emergency Response**
```
Dashboard → Emergency → Activate → Notify All → Monitor ✓
```

---

## 🔄 CROSS-ROLE CONNECTIONS (Demo Simulation)

### Complete End-to-End Journey Simulation

```
┌─────────────────────────────────────────────────────────────┐
│                   PATIENT REQUESTS BLOOD                     │
│  Patient Home → Search → Select Hospital → Pay → Track      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓ [Request ID: REQ-4521]
┌─────────────────────────────────────────────────────────────┐
│              HOSPITAL RECEIVES & PROCESSES                   │
│  Dashboard → Requests → Accept → Crossmatch → Prepare       │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓ [Unit Ready: PLT-2024-4521]
┌─────────────────────────────────────────────────────────────┐
│                RIDER ASSIGNED FOR DELIVERY                   │
│  Home → Tasks → Accept → Pickup → Cold Chain → Deliver      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓ [Delivery Complete]
┌─────────────────────────────────────────────────────────────┐
│              PATIENT RECEIVES CONFIRMATION                   │
│  Order Tracking → Status: "Delivered" → Success ✓           │
└─────────────────────────────────────────────────────────────┘
```

### Visual Sync Points (for Demo)

**When Patient places order:**
- Patient sees: "Order Confirmed - REQ-4521"
- Hospital sees: "New Request - REQ-4521" (notification badge)
- Status: Pending

**When Hospital accepts & prepares:**
- Hospital sees: "Unit Ready - OTP: 5749"
- Patient sees: "Blood unit prepared - Assigning rider"
- Status: Processing

**When Rider accepts:**
- Rider sees: "Task Accepted - Navigate to pickup"
- Patient sees: "Rider assigned - En route"
- Hospital sees: "Rider: Rajesh Kumar - ETA 5 min"
- Status: In Transit

**When Delivery completes:**
- Rider sees: "Delivery complete - Earnings: ₹250"
- Patient sees: "Delivered successfully ✓"
- Hospital sees: "Delivery confirmed - Inventory updated"
- Status: Complete

---

## 🎯 NAVIGATION PATTERNS

### Universal Patterns

**Header Navigation:**
```
[← Back]  [Screen Title]  [Actions/Icons →]
```

**Bottom Navigation (Persistent per role):**
```
[Icon] [Icon] [Icon] [Icon]
Home   Tab2   Tab3  Profile
```

**Card Tap Navigation:**
```
[Card Content]
[Subtitle/Meta]
[Action Indicator →]
       ↓
  Detail Screen
```

### Modal Patterns

**Request Detail Modal:**
```
┌────────────────────────┐
│ [X Close]              │
│ [Content]              │
│ [Primary Action]       │
│ [Secondary Action]     │
└────────────────────────┘
```

**Confirmation Modal:**
```
┌────────────────────────┐
│ ✓ Success              │
│ [Message]              │
│ [OK Button]            │
└────────────────────────┘
```

---

## 📊 SCREEN COUNT SUMMARY

| Role | Screens | Navigation Type |
|------|---------|----------------|
| **Common Entry** | 4 | Linear flow |
| **Patient** | 16 | Hub + bottom nav |
| **Donor** | 12 | Hub + bottom nav |
| **Rider** | 12 | Hub + bottom nav |
| **Hospital** | 13 | Hub + bottom nav |
| **TOTAL** | **57** | Mixed |

---

## 🎬 DEMO SCRIPT (10-Minute Presentation)

### Act 1: Patient Journey (3 min)
```
1. Welcome → Login → Choose Patient
2. Search for Platelets (B+)
3. Select City General Hospital
4. Complete payment
5. Track live delivery on map
```

### Act 2: Hospital Response (2 min)
```
1. Switch to Hospital role
2. Show incoming request (same ID)
3. Accept & run crossmatch
4. Prepare unit with QR scan
5. Assign available rider
```

### Act 3: Rider Delivery (2 min)
```
1. Switch to Rider role
2. Accept delivery task
3. Navigate to hospital (pickup)
4. Verify OTP & blood packet
5. Navigate to patient (delivery)
6. Complete with delivery OTP
```

### Act 4: Donor Flow (2 min)
```
1. Switch to Donor role
2. Show live request notification
3. Check eligibility
4. Accept & navigate
5. Quick view of donation process
```

### Act 5: Cross-Role Summary (1 min)
```
Show all 4 dashboards side-by-side:
- Patient: Order delivered ✓
- Hospital: Inventory updated
- Rider: Earnings added
- Donor: New request available
```

---

## ✅ INTERACTION CHECKLIST

### Global Interactions
- ✅ Welcome → Onboarding works
- ✅ Onboarding → Login works
- ✅ Login → OTP → Role Selection works
- ✅ All 4 roles accessible from role selection
- ✅ Logout returns to login
- ✅ Role switch returns to role selection

### Patient Interactions
- ✅ All bottom nav tabs work
- ✅ Blood search → Request → Payment → Tracking
- ✅ Donor search functional
- ✅ Medical report upload works
- ✅ Transfusion booking works
- ✅ All "Back" buttons return correctly

### Donor Interactions
- ✅ All bottom nav tabs work
- ✅ Live requests → Accept → Navigate → Donate
- ✅ Eligibility → Scheduling works
- ✅ Rewards screen functional
- ✅ Camps registration works
- ✅ All "Back" buttons return correctly

### Rider Interactions
- ✅ All bottom nav tabs work
- ✅ Tasks → Accept → Pickup → Deliver → Success
- ✅ Navigation screens work
- ✅ Cold chain monitoring works
- ✅ Emergency mode accessible
- ✅ Earnings view works
- ✅ All "Back" buttons return correctly

### Hospital Interactions
- ✅ All bottom nav tabs work
- ✅ Requests → Accept → Prepare → Assign → Track
- ✅ Inventory → Add unit works
- ✅ Transfusion phases work
- ✅ Emergency activation works
- ✅ Camps management works
- ✅ All "Back" buttons return correctly

---

## 🎨 VISUAL FEEDBACK ELEMENTS

### Button States
- **Default:** Normal appearance
- **Hover:** Slightly darker (web only)
- **Active/Pressed:** Scale 0.95
- **Disabled:** Gray with reduced opacity
- **Loading:** Spinner replaces text

### Status Indicators
- **Success:** ✓ Green checkmark
- **Error:** ✗ Red X
- **Warning:** ⚠ Orange alert
- **Info:** ℹ Blue info icon
- **In Progress:** 🔄 Animated spinner

### Color Coding (Grayscale maintained)
- **Emergency/Urgent:** Dark gray (#9CA3AF)
- **Success/Complete:** Medium gray (#9CA3AF)
- **Warning/Pending:** Light gray (#D1D5DB)
- **Normal/Default:** White (#FFFFFF)
- **Background:** Light gray (#F9FAFB)

---

## 📱 ANDROID BEHAVIORS

### Back Navigation
- **Pattern:** Stack-based navigation
- **Home screens:** Show "Exit app?" prompt
- **Detail screens:** Return to list
- **Modals:** Close modal, return to screen

### Bottom Navigation
- **Behavior:** Switches between top-level screens
- **State:** Persists within role
- **Animation:** Cross-fade between tabs
- **Active indicator:** Bottom border or icon color

### Notifications
- **Badge:** Red dot on bell icon
- **Toast:** Bottom sheet message (3 seconds)
- **Modal:** Full-screen alert for critical actions

### Gestures
- **Tap:** Primary interaction
- **Swipe:** Onboarding, image gallery
- **Pull to refresh:** Lists (requests, inventory)
- **Long press:** Quick actions (future feature)

---

## 🏁 PROTOTYPE STATUS

### ✅ COMPLETED
- All 57 screens created
- All navigation links connected
- All 4 roles fully functional
- Bottom navigation persistent
- Back navigation works
- Role switching works
- Logout functionality works
- Cross-role demo flow ready

### 🎯 READY FOR
- Live demonstration
- User testing
- Stakeholder review
- Design handoff
- Development specification

### 📝 NOTES
- All screens are grayscale wireframes
- No backend integration (visual only)
- Cross-role sync is simulated for demo
- All interactions use navigateTo() function
- Fully clickable and explorable

---

## 🚀 HOW TO USE THE PROTOTYPE

### Starting the Prototype
1. App starts at **Welcome Screen**
2. Click through onboarding (3 slides)
3. Complete login with OTP simulation
4. Choose any of the 4 roles

### Navigating Between Roles
**Method 1:** From any Profile screen
- Tap "Switch Role" → Returns to role selection
- Select different role

**Method 2:** Using screen navigation menu
- Click "All Screens" button at bottom
- Select any screen from any role
- Jump directly to that screen

### Testing Specific Flows
**Quick jump to key screens:**
- **Patient flow:** Start → Patient Home
- **Donor flow:** Start → Donor Home
- **Rider flow:** Start → Rider Home
- **Hospital flow:** Start → Hospital Dashboard

### Demo Mode
**For presentations:**
1. Use "All Screens" menu for quick navigation
2. Follow the demo script (see above)
3. Show cross-role connections
4. Highlight key features per role

---

**The prototype is complete and ready for demonstration! 🎉**

Total: **57 screens, 4 user roles, fully connected navigation**
