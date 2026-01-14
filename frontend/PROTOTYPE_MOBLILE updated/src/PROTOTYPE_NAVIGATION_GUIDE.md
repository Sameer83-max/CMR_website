# Blood Bank Ecosystem - Complete Prototype Navigation Guide

## 📱 Device Specifications
- **Platform:** Android
- **Resolution:** 1080 × 2400 (scaled to 360 × 800 for display)
- **Interaction:** On Tap
- **Animation:** Smart Animate transitions

---

## 🎯 Global Navigation Principles

### Entry Point
**Start Screen:** Welcome Screen
**End Points:** 4 different role-based home dashboards

### Universal Actions
- **Back Button:** Android-style back navigation (ChevronLeft icon)
- **Bottom Navigation:** Persists within each role's screens
- **Logout:** Returns to Login/Signup screen
- **Role Switch:** Returns to "Choose Your Role" screen

---

## 🚀 APP ENTRY FLOW (Common for All Roles)

### Flow Path
```
Welcome Screen 
  ↓ [Tap "Get Started"]
Onboarding Screen (3 slides)
  ↓ [Tap "Get Started"]
Login / Signup Screen
  ↓ [Complete OTP]
Choose Your Role Screen
  ↓ [Select Role]
Role-Specific Home Dashboard
```

### Detailed Navigation

#### 1. Welcome Screen
- **"Get Started" button** → Onboarding Screen

#### 2. Onboarding Screen
- **Swipe or Next** → Next onboarding slide (3 total)
- **"Get Started" button** (final slide) → Login/Signup Screen

#### 3. Login/Signup Screen
- **Tabs:** Login ↔ Signup
- **"Send OTP" button** → OTP verification screen
- **"Verify OTP" button** → Choose Your Role Screen

#### 4. Choose Your Role Screen
- **"Patient" card** → Patient Home Screen
- **"Donor" card** → Donor Home Dashboard
- **"Rider" card** → Rider Home Dashboard
- **"Hospital / Blood Bank" card** → Hospital Dashboard
- **"?" Help icon** → Opens modal with role comparison

---

## 🩸 PATIENT POV - Complete Navigation Map

### Patient Home Screen (Primary Hub)

**Quick Actions:**
- **"Request Blood"** → Blood Search & Filters
- **"Search Donor"** → Donor Search Screen
- **"Track Order"** → Order Tracking Screen
- **"Upload Reports"** → Medical Report (OCR) Screen
- **"Manage Transfusion"** → Transfusion Booking Screen
- **Bell icon** → Notifications Screen

**Bottom Navigation Bar:**
- **Home** → Patient Home Screen (active)
- **Requests** → History Screen (filtered to active requests)
- **History** → History Screen
- **Profile** → Profile Screen

---

### Patient Journey Flow

#### Blood Request Journey
```
Patient Home
  ↓ [Request Blood]
Blood Search & Filters
  ↓ [Select component + filters]
  ↓ [Search Results]
  ↓ [Tap hospital card]
Request Workflow Screen (Hospital selected)
  ↓ [Review & Confirm]
Request Confirmation Screen
  ↓ [Track Live Status]
Order Tracking Screen
  ↓ [View delivery progress]
  ↓ [Delivery complete]
Patient Home (updated status)
```

#### Blood Search & Filters Screen
- **Component buttons:** Select blood component (updates selection)
- **Blood group dropdown:** Select blood group
- **Subtype dropdown:** Select subtype
- **"Search" button** → Shows hospital results
- **Hospital card** → Request Workflow Screen (with pre-filled data)
- **Back button** → Patient Home

#### Request Workflow Screen
- **Hospital info:** Display selected hospital
- **Component details:** Show blood component needed
- **Units selector:** Adjust quantity
- **Urgency selector:** Normal / Urgent / Emergency
- **"Continue to Payment"** → Payment Screen
- **Back button** → Blood Search

#### Payment Screen
- **Payment method selection:** Card / UPI / Wallet
- **"Pay Now" button** → Order Tracking Screen
- **Back button** → Request Workflow

#### Order Tracking Screen
- **Status timeline:** Live updates
- **Rider location map:** Real-time (simulated)
- **"Delivery OTP" button** → Shows OTP modal
- **"Contact Rider" button** → Phone simulation
- **"Download Invoice" button** → Download simulation
- **Back button** → Patient Home

---

#### Donor Search Journey
```
Patient Home
  ↓ [Search Donor]
Donor Search Screen
  ↓ [Search by filters]
  ↓ [Tap donor card]
Donor Request Details
  ↓ [Send Request]
Request Sent Confirmation
  ↓ [Back to home]
Patient Home
```

#### Donor Search Screen
- **Search filters:** Blood group, location, availability
- **Donor cards:** Tap to view details
- **"Send Request" button** → Confirmation message
- **Back button** → Patient Home

---

#### Medical Report Journey
```
Patient Home
  ↓ [Upload Reports]
Medical Report Screen
  ↓ [Upload image/PDF]
  ↓ [AI Processing]
Auto-Urgency Score Display
  ↓ [Request Automatically]
Request Workflow (pre-filled)
```

#### Medical Report Screen
- **"Scan with Camera" button** → Camera simulation
- **"Upload from Gallery" button** → File picker simulation
- **Upload progress:** Shows AI processing
- **"Request Automatically" button** → Request Workflow (if urgency detected)
- **Back button** → Patient Home

---

#### Transfusion Journey
```
Patient Home
  ↓ [Manage Transfusion]
Transfusion Booking Screen
  ↓ [Select hospital]
  ↓ [Choose date/time]
  ↓ [Confirm booking]
Booking Confirmation
  ↓ [View details]
Patient Home (booking saved)
```

#### Transfusion Screen
- **Hospital selector:** Choose hospital
- **Date picker:** Select date
- **Time slot selector:** Morning / Afternoon / Evening
- **Thalassemia support toggle:** Enable special protocol
- **"Confirm Booking" button** → Confirmation screen
- **Back button** → Patient Home

---

### Patient Bottom Navigation (Persistent)

**Always visible on Patient screens:**
- **Home icon** → Patient Home Screen
- **Requests icon** → History Screen (filtered view)
- **History icon** → History Screen (full view)
- **Profile icon** → Profile Screen

#### Notifications Screen
- **Notification cards:** Tap to view details
- **Filter tabs:** All / Orders / Alerts / Updates
- **Back button** → Previous screen

#### History Screen
- **Tabs:** Active / Completed / Cancelled
- **Order cards:** Tap to view Order Tracking (if active) or details
- **Filter button** → Opens filter modal
- **Back button** → Patient Home

#### Offline Screen
- **Sync button:** Shows sync status
- **SMS instructions:** Copy to clipboard on tap
- **IVR number:** Call simulation on tap
- **Back button** → Patient Home

#### Profile Screen
- **Edit profile button** → Edit mode
- **Medical history card** → Medical Report Screen
- **Thalassemia details** → Thalassemia management
- **Settings** → Settings screen
- **Logout button** → Login Screen
- **Switch Role button** → Choose Your Role Screen
- **Back button** → Patient Home

---

## 🩹 DONOR POV - Complete Navigation Map

### Donor Home Dashboard (Primary Hub)

**Quick Actions:**
- **"View Live Requests"** → Live Requests Screen
- **"Check Eligibility"** → Eligibility Check Screen
- **"Book Donation"** → Donation Scheduling Screen
- **"My Cohort"** → Donor Cohort Screen
- **Bell icon** → Notifications

**Bottom Navigation Bar:**
- **Home** → Donor Home Dashboard (active)
- **Requests** → Live Requests Screen
- **Camps** → Camps & Drives Screen
- **Profile** → Donor Profile Screen

---

### Donor Journey Flow

#### Live Request Response Journey
```
Donor Home
  ↓ [View Live Requests]
Live Requests List
  ↓ [Tap request card]
Request Detail Modal
  ↓ [Accept Request]
Navigation Screen (to hospital/camp)
  ↓ [Start Navigation]
Navigation with Live Map
  ↓ [Arrive at destination]
QR Check-In Screen
  ↓ [Scan QR]
Donation Process Screen (Pre)
  ↓ [Complete verification]
During Donation Screen
  ↓ [Complete donation]
Post-Donation Screen
  ↓ [Reward earned]
Donor Home (updated stats)
```

#### Live Requests Screen
- **Filter buttons:** Nearby / Blood Group / Urgent / All
- **Request cards:** Show patient blood type, location, urgency
- **Tap request card** → Opens request detail modal
- **Refresh button** → Updates list
- **Back button** → Donor Home

#### Request Detail Modal
- **Request info:** Blood type, units, urgency, location
- **Distance & ETA:** Shows travel time
- **"Accept Request" button** → Eligibility Check Screen (if eligible) or Navigation Screen
- **"Decline" button** → Returns to Live Requests
- **Close (X) button** → Returns to Live Requests

#### Navigation Screen
- **Map display:** Shows route to destination
- **Start navigation button** → Opens map app simulation
- **Cancel button** → Returns to Live Requests
- **Back button** → Donor Home

---

#### Eligibility Check Journey
```
Donor Home
  ↓ [Check Eligibility]
Eligibility Check Screen
  ↓ [Answer questionnaire]
Eligibility Result
  ↓ [If eligible: Book Donation]
Donation Scheduling Screen
```

#### Eligibility Check Screen
- **Health questionnaire:** Yes/No buttons for each question
- **"Check Eligibility" button** → Shows result (eligible/not eligible)
- **"Book Donation" button** (if eligible) → Scheduling Screen
- **Next eligible date** (if not eligible) → Shows countdown
- **Back button** → Donor Home

---

#### Donation Scheduling Journey
```
Donor Home
  ↓ [Book Donation]
Donation Scheduling Screen
  ↓ [Select hospital/camp]
  ↓ [Choose date/time slot]
  ↓ [Confirm booking]
Booking Confirmation
  ↓ [Add to calendar]
Donor Home (appointment booked)
```

#### Scheduling Screen
- **Location tabs:** Nearby Hospitals / Donation Camps
- **Location cards:** Tap to select
- **Date picker:** Select donation date
- **Time slot selector:** Morning / Afternoon / Evening slots
- **"Confirm Booking" button** → Confirmation screen
- **Back button** → Donor Home

---

#### Donation Process Flow
```
[Arrive at location]
QR Check-In Screen
  ↓ [Scan QR code]
Pre-Donation Verification
  ↓ [Complete health check]
During Donation
  ↓ [Monitor progress]
Post-Donation Care
  ↓ [Rest & refreshments]
Reward Screen
  ↓ [View earned points]
Donor Home
```

#### Donation Process Screen (3 Phases)
**Tabs:** Pre-Donation / During / Post-Donation

**Pre-Donation Phase:**
- **Vitals checklist:** BP, Pulse, Hemoglobin
- **Staff verification:** ID check
- **Consent form:** Digital signature
- **"Start Donation" button** → During Donation tab

**During Donation Phase:**
- **Progress bar:** Shows donation progress
- **Volume tracker:** ml donated
- **Staff notes:** Real-time updates
- **Vitals monitoring:** Live display
- **"Complete Donation" button** → Post-Donation tab

**Post-Donation Phase:**
- **Rest timer:** 15-minute countdown
- **Refreshment checklist:** Water, snacks taken
- **Post-donation vitals:** Final check
- **Certificate generation:** Download certificate
- **"Claim Rewards" button** → Rewards Screen

---

### Donor Bottom Navigation (Persistent)

**Always visible on Donor screens:**
- **Home icon** → Donor Home Dashboard
- **Requests icon** → Live Requests Screen
- **Camps icon** → Camps & Drives Screen
- **Profile icon** → Donor Profile Screen

#### Rewards Screen
- **Points balance:** Total points earned
- **Badge collection:** Achievement badges
- **Leaderboard:** Top donors
- **Redeem rewards:** Gift cards, certificates
- **Back button** → Donor Home

#### Camps & Drives Screen
- **Upcoming camps list:** Tap to view details
- **"Register for Camp" button** → Registration form
- **Filter by location:** Search nearby camps
- **Back button** → Donor Home

#### Donor Cohort Screen
- **Cohort members:** List of donors with same blood type
- **Group chat simulation:** Message donors
- **Blood drives:** Group donation events
- **Back button** → Donor Home

#### History Dashboard Screen
- **Donation history:** All past donations
- **Statistics:** Total donations, lives saved
- **Certificates:** Download past certificates
- **Back button** → Donor Home

#### Donor Profile Screen
- **Edit profile button** → Edit mode
- **Blood type badge:** Display with pride
- **Donation stats:** Total count, streaks
- **Settings** → Notification preferences
- **Logout button** → Login Screen
- **Switch Role button** → Choose Your Role Screen
- **Back button** → Donor Home

---

## 🚴 RIDER POV - Complete Navigation Map

### Rider Home Dashboard (Primary Hub)

**Quick Actions:**
- **"My Active Tasks"** → Assignment List Screen
- **"Start Navigation"** → Map Screen
- **"Emergency Mode"** → Emergency Screen
- **"View Earnings"** → Earnings Dashboard
- **Bell icon** → Notifications

**Bottom Navigation Bar:**
- **Home** → Rider Home Dashboard (active)
- **Tasks** → Incoming Task Screen
- **Deliveries** → Active Delivery Screen
- **Profile** → Rider Profile Screen

---

### Rider Journey Flow

#### Delivery Journey (Complete Flow)
```
Rider Home
  ↓ [My Active Tasks]
Assignment List (Incoming Tasks)
  ↓ [Tap task card]
Task Detail Screen
  ↓ [Accept Task]
Pickup Navigation Screen
  ↓ [Navigate to pickup]
  ↓ [Arrive at hospital]
Pickup Screen (Verification)
  ↓ [Scan QR / Enter OTP]
  ↓ [Verify blood packet]
Cold Chain Compliance Screen
  ↓ [Check temperature]
  ↓ [Confirm compliance]
Delivery Navigation Screen
  ↓ [Navigate to destination]
  ↓ [Arrive at destination]
Delivery Screen (Handover)
  ↓ [Enter delivery OTP]
  ↓ [Confirm delivery]
Delivery Success Screen
  ↓ [View earnings]
Rider Home (task completed)
```

#### Incoming Task Screen
- **Active tasks list:** Shows pending assignments
- **Task cards:** Display pickup/drop locations, blood type, urgency
- **Tap task card** → Task Detail Screen
- **Filter by:** Urgent / Nearby / All
- **Refresh button** → Updates task list
- **Back button** → Rider Home

#### Task Detail Screen
- **Pickup details:** Hospital name, address, contact
- **Drop details:** Patient address, contact
- **Blood component info:** Type, units, urgency
- **Distance & ETA:** Route information
- **Earnings preview:** Payment for delivery
- **"Accept Task" button** → Pickup Navigation Screen
- **"Reject Task" button** → Returns to task list
- **Back button** → Incoming Task Screen

---

#### Pickup Flow
```
Task Detail
  ↓ [Accept Task]
Pickup Navigation
  ↓ [Navigate]
  ↓ [Arrive]
Pickup Verification
  ↓ [Check-in with OTP]
  ↓ [Scan blood packet QR]
  ↓ [Verify details]
Cold Chain Check
  ↓ [Confirm packaging]
Pickup Complete
  ↓ [Start delivery]
Delivery Navigation
```

#### Pickup Navigation Screen
- **Map display:** Route to hospital
- **Live location:** Rider's current position
- **"Start Navigation" button** → Opens map app
- **"I've Arrived" button** → Pickup Screen
- **Call hospital button** → Phone simulation
- **Back button** → Task Detail

#### Pickup Screen
- **Hospital info:** Name, contact
- **OTP entry field:** 4-digit pickup OTP
- **"Verify OTP" button** → Unlocks packet scan
- **QR scanner:** Scan blood packet QR code
- **Packet verification:** Blood type, expiry check
- **Photo upload:** Packet condition photo
- **"Confirm Pickup" button** → Cold Chain Screen
- **Back button** → Pickup Navigation

#### Cold Chain Compliance Screen
- **Temperature sensor:** Current temperature display
- **Packaging checklist:** Insulation, ice packs verified
- **Cold chain status:** Within range / Alert
- **Start monitoring button** → Begins temp tracking
- **"Start Delivery" button** → Delivery Navigation Screen
- **Emergency cold chain breach** → Alert modal
- **Back button** → Pickup Screen

---

#### Delivery Flow
```
Cold Chain Screen
  ↓ [Start Delivery]
Delivery Navigation
  ↓ [Navigate to patient]
  ↓ [Arrive at destination]
Delivery Screen
  ↓ [Enter delivery OTP]
  ↓ [Patient verification]
  ↓ [Handover packet]
Delivery Success
  ↓ [View earnings]
Rider Home
```

#### Delivery Navigation Screen
- **Map display:** Route to patient location
- **Live tracking:** Real-time position updates
- **Cold chain monitor:** Temperature alerts
- **"I've Arrived" button** → Delivery Screen
- **Call patient button** → Phone simulation
- **Emergency SOS button** → Emergency Screen
- **Back button** → Rider Home

#### Delivery Screen
- **Patient info:** Name (masked), address
- **OTP entry field:** 4-digit delivery OTP
- **"Verify OTP" button** → Confirms patient identity
- **Packet handover:** Take handover photo
- **Signature collection:** Digital signature pad
- **"Complete Delivery" button** → Success Screen
- **Report issue button** → Issue reporting form
- **Back button** → Delivery Navigation

#### Delivery Success Screen
- **Success message:** Delivery completed
- **Earnings display:** Amount earned for delivery
- **Rating prompt:** Rate this delivery experience
- **"View Earnings" button** → Earnings Dashboard
- **"Next Task" button** → Incoming Task Screen
- **"Back to Home" button** → Rider Home

---

### Rider Bottom Navigation (Persistent)

**Always visible on Rider screens:**
- **Home icon** → Rider Home Dashboard
- **Tasks icon** → Incoming Task Screen
- **Deliveries icon** → Active Delivery Screen
- **Profile icon** → Rider Profile Screen

#### Emergency Screen
- **SOS button:** Alert support team
- **Call support:** Emergency helpline
- **Report accident:** Accident form
- **Cold chain breach:** Temperature alert
- **Location sharing:** Share live location
- **Back button** → Returns to active delivery

#### Compliance Screen
- **Vehicle documents:** Registration, insurance
- **Medical certification:** Health clearance
- **Training records:** Cold chain training
- **Equipment checklist:** Insulated bag, thermometer
- **Back button** → Rider Home

#### Earnings Dashboard
- **Today's earnings:** Current day total
- **Weekly summary:** Last 7 days
- **Monthly report:** Full month breakdown
- **Bonus & incentives:** Extra earnings
- **Payout schedule:** Next payment date
- **"Request Payout" button** → Payout screen
- **Back button** → Rider Home

#### Rider History Screen
- **Completed deliveries:** All past tasks
- **Delivery stats:** Success rate, on-time %
- **Ratings received:** Customer feedback
- **Certificates earned:** Achievement badges
- **Back button** → Rider Home

#### Rider Profile Screen
- **Edit profile button** → Edit mode
- **Vehicle details:** Bike info, license
- **Verification status:** Document approval
- **Settings** → App preferences
- **Logout button** → Login Screen
- **Switch Role button** → Choose Your Role Screen
- **Back button** → Rider Home

---

## 🏥 HOSPITAL/BLOOD BANK POV - Complete Navigation Map

### Hospital Dashboard (Primary Hub)

**Quick Actions:**
- **"Inventory"** → Inventory Dashboard
- **"Requests"** → Request Handling Screen
- **"Riders"** → Rider Coordination Screen
- **"Transfusions"** → Transfusion Workflow Screen
- **"Compliance"** → Compliance Dashboard
- **"Emergency Mode"** → Emergency Mode Screen
- **Bell icon** → Notifications

**Bottom Navigation Bar:**
- **Dashboard** → Hospital Home Dashboard (active)
- **Inventory** → Inventory Screen
- **Requests** → Request Handling Screen
- **Profile** → Hospital Profile Screen

---

### Hospital Journey Flow

#### Blood Request Handling Journey
```
Hospital Dashboard
  ↓ [Requests]
Request Handling Screen
  ↓ [Tap request card]
Request Detail Modal
  ↓ [Accept Request]
  ↓ [AI suggests unit]
Crossmatch Verification Screen
  ↓ [Complete verification]
Prepare Unit Screen
  ↓ [Scan blood unit QR]
  ↓ [Generate OTP]
Rider Coordination Screen
  ↓ [Assign rider]
Live Delivery Tracking
  ↓ [Monitor delivery]
Hospital Dashboard (updated)
```

#### Request Handling Screen
- **Request list:** Incoming patient requests
- **Filter tabs:** All / Emergency / Urgent / Normal
- **Request cards:** Patient ID (masked), component needed, urgency
- **Tap request card** → Request Detail Modal
- **Back button** → Hospital Dashboard

#### Request Detail Modal
- **Request summary:** Patient info, blood type, units
- **AI suggested unit:** Best match with freshness score
- **Alternative units:** Other compatible options
- **"Accept & Prepare Unit" button** → Crossmatch Screen
- **"Decline Request" button** → Returns to request list
- **Close button** → Returns to request list

#### Crossmatch Verification Screen
- **Auto-crossmatch result:** ABO, Rh compatibility
- **AI mismatch warnings:** If any issues detected
- **Dual human verification checklist:** Staff confirmation
- **Staff details:** Primary & secondary verifier
- **"Approve Crossmatch" button** → Prepare Unit Screen
- **"Reject with Reason" button** → Returns to requests
- **Back button** → Request Detail

#### Prepare Unit Screen
- **Selected unit details:** Unit ID, blood type, expiry
- **QR scanner:** Scan blood unit for verification
- **Status indicator:** Preparing → Ready
- **OTP generation:** 4-digit pickup OTP
- **"Assign Rider" button** → Rider Coordination Screen
- **Back button** → Hospital Dashboard

---

#### Inventory Management Journey
```
Hospital Dashboard
  ↓ [Inventory]
Inventory Dashboard
  ↓ [Add new unit]
Inventory Logging Screen
  ↓ [Scan QR or manual entry]
  ↓ [Enter details]
  ↓ [Add to inventory]
Inventory Dashboard (updated)
```

#### Inventory Screen
- **Component stock cards:** RBC, Platelets, Plasma, Cryo
- **Stock levels:** Units available, avg age
- **Alert banners:** Low stock, near expiry
- **Forecasted demand:** Next 7 days prediction
- **Emergency reserved stock:** Critical units
- **"Add New Unit" button (+ icon)** → Inventory Logging Screen
- **"View Details by Blood Group" button** → Filtered view
- **Back button** → Hospital Dashboard

#### Inventory Logging Screen
- **QR scanner:** Scan blood bag QR code
- **"Enter Manually" button** → Switches to form
- **Manual entry form:**
  - Blood group selector
  - Component type selector
  - Subtype input
  - Batch ID input
  - Collection date picker
  - Expiry date picker
  - Volume input
  - Storage location input
- **Summary preview:** Shows entered data
- **"Add to Inventory" button** → Returns to Inventory Screen
- **Back button** → Inventory Screen

---

#### Rider Coordination Journey
```
Prepare Unit Screen
  ↓ [Assign Rider]
Rider Coordination Screen
  ↓ [View available riders]
  ↓ [Select rider]
  ↓ [Assign delivery]
Live Delivery Tracking
  ↓ [Monitor progress]
  ↓ [Delivery complete]
Hospital Dashboard
```

#### Rider Coordination Screen
- **View tabs:** Assign Rider / Live Tracking
- **Available riders list:** Name, distance, ETA, rating
- **Rider cards:** Tap to view details
- **"Assign Rider" button** → Switches to tracking view
- **Live delivery tracking:**
  - Map display with rider location
  - ETA countdown
  - Status timeline
  - Rider info & contact
  - Handover log
- **"Request Return Delivery" button** → Reverse delivery
- **Back button** → Hospital Dashboard

---

#### Transfusion Management Journey
```
Hospital Dashboard
  ↓ [Transfusions]
Transfusion Management Screen
  ↓ [Select patient]
Pre-Transfusion Tab
  ↓ [Complete checklist]
During Transfusion Tab
  ↓ [Monitor vitals]
Post-Transfusion Tab
  ↓ [Complete observation]
  ↓ [Generate report]
Hospital Dashboard
```

#### Transfusion Screen
- **Phase tabs:** Pre / During / Post
- **Pre-Transfusion:**
  - Patient & bed allocation
  - Staff assignment
  - Pre-transfusion checklist
  - Baseline vitals
  - "Start Transfusion" button → During tab
- **During Transfusion:**
  - Live vitals monitoring
  - Volume infused progress bar
  - Observation log
  - "Report Adverse Reaction" button
  - "Complete Transfusion" button → Post tab
- **Post-Transfusion:**
  - Post-transfusion vitals
  - Adverse reactions check
  - Monitoring schedule
  - "Mark Complete" button
  - "Generate Report" button
- **Back button** → Hospital Dashboard

---

#### Emergency Mode Journey
```
Hospital Dashboard
  ↓ [Activate Emergency Mode]
Emergency Mode Screen
  ↓ [Notify nearby donors]
  ↓ [Request from blood banks]
  ↓ [Activate express delivery]
Emergency Response Dashboard
  ↓ [Monitor status]
  ↓ [Deactivate when resolved]
Hospital Dashboard
```

#### Emergency Screen
- **Emergency banner:** Big alert visual
- **Action buttons:**
  - "Notify Nearby Donors" → Sends alerts
  - "Notify Nearby Blood Banks" → Sends requests
  - "Activate Express Delivery" → Priority routing
- **Countdown timer:** Time since activation
- **Critical request list:** Emergency cases
- **Response status:** Donors notified, responses received
- **Active protocols:** Emergency procedures list
- **"Deactivate Emergency Mode" button** → Returns to dashboard
- **Back button** → Hospital Dashboard

---

### Hospital Bottom Navigation (Persistent)

**Always visible on Hospital screens:**
- **Dashboard icon** → Hospital Home Dashboard
- **Inventory icon** → Inventory Screen
- **Requests icon** → Request Handling Screen
- **Profile icon** → Hospital Profile Screen

#### Camps & Drives Screen
- **"Create New Camp" button** → Camp creation form
- **Upcoming camps list:** Registered camps
- **NGO partners:** Partner organizations
- **Slot management calendar:** Booking slots
- **Donor verification queue:** Pending verifications
- **"Generate Certificates" button** → Certificate generator
- **Back button** → Hospital Dashboard

#### Compliance Screen
- **Hospital KYC status:** Verified badge
- **License & certifications:** Document list with expiry
- **"Update Document" button** → Upload new document
- **Staff verification list:** All staff members
- **Audit log:** Recent activities
- **Regulatory compliance checklist:** Required items
- **Inspection reports:** Past inspection results
- **Back button** → Hospital Dashboard

#### Offline Operations Screen
- **Local server sync status:** Connected / Last sync time
- **"Sync Now" button** → Manual sync
- **QR-only operations guide:** Instructions
- **SMS-based updates:** SMS commands
- **IVR status check:** Phone number & instructions
- **Auto-sync settings:** Toggle switches
- **Back button** → Hospital Dashboard

#### Hospital Profile Screen
- **Hospital details:** Name, address, contact
- **Statistics:** Units in stock, requests today
- **Linked inventory systems:** Connected systems
- **Role & access controls:** Staff roles
- **"Manage Roles" button** → Role management
- **Quick links:**
  - Compliance & Verification → Compliance Screen
  - Offline Operations → Offline Screen
  - Reports & Analytics → Reports screen
- **Notification preferences:** Toggle switches
- **Settings & Support:** Settings options
- **Logout button** → Login Screen
- **Switch Role button** → Choose Your Role Screen
- **Back button** → Hospital Dashboard

---

## 🔄 CROSS-ROLE SIMULATION (Demo Flow)

### Simulated End-to-End Journey

#### Patient Orders → Rider Delivers → Hospital Updates

**For demonstration purposes, the prototype shows visual connections:**

1. **Patient places order:**
   - Order Tracking shows "Searching for blood"
   - Status updates to "Blood unit prepared"
   - Then "Rider assigned"

2. **Rider accepts task:**
   - Rider's task list highlights the same order
   - Navigation shows route to hospital
   - Pickup and delivery flow

3. **Hospital coordinates:**
   - Hospital sees same request ID
   - Prepares unit with matching details
   - Assigns rider from available list

4. **Delivery completion:**
   - Rider marks "Delivered"
   - Patient tracking shows "Delivered"
   - Hospital inventory auto-updates
   - All dashboards reflect completion

**Note:** This is visual simulation only - no actual backend sync.

---

## 🚪 LOGOUT & ROLE SWITCHING

### Universal Exit Points

**From any Profile Screen:**
- **Logout button** → Login/Signup Screen
- **Switch Role button** → Choose Your Role Screen

**From Login Screen:**
- **"Don't have an account?" link** → Signup tab
- **"Already have an account?" link** → Login tab

**Back Navigation:**
- **Android back button** → Previous screen in stack
- **From home screens** → Shows "Exit app?" confirmation

---

## 📊 PROTOTYPE TESTING CHECKLIST

### Entry Flow
- ✅ Welcome → Onboarding → Login → Role Selection
- ✅ All 4 roles accessible from role selection

### Patient Flow
- ✅ Home → Blood Search → Request → Payment → Tracking
- ✅ Home → Donor Search → Request
- ✅ Home → Medical Report → Auto Request
- ✅ Home → Transfusion Booking → Confirmation
- ✅ Bottom nav works on all patient screens
- ✅ Profile → Logout returns to login

### Donor Flow
- ✅ Home → Live Requests → Accept → Navigation → Donation Process
- ✅ Home → Eligibility → Scheduling → Booking
- ✅ Home → Rewards → Points & Badges
- ✅ Home → Camps → Registration
- ✅ Bottom nav works on all donor screens
- ✅ Profile → Switch Role works

### Rider Flow
- ✅ Home → Tasks → Accept → Pickup Nav → Pickup → Cold Chain → Delivery Nav → Delivery → Success
- ✅ Home → Earnings → Payout
- ✅ Home → Emergency → SOS
- ✅ Bottom nav works on all rider screens
- ✅ Profile → Logout works

### Hospital Flow
- ✅ Dashboard → Requests → Accept → Crossmatch → Prepare → Assign Rider → Track
- ✅ Dashboard → Inventory → Add Unit → Logging
- ✅ Dashboard → Transfusion → Pre/During/Post
- ✅ Dashboard → Emergency → Activate → Monitor
- ✅ Dashboard → Camps → Create → Manage
- ✅ Bottom nav works on all hospital screens
- ✅ Profile → Role Switch works

---

## 🎬 DEMO PRESENTATION FLOW

### Recommended Demo Sequence (10 minutes)

**1. Introduction (1 min)**
- Start at Welcome Screen
- Show onboarding slides
- Complete login with OTP

**2. Patient Journey (3 min)**
- Select Patient role
- Search for blood component
- Select hospital and confirm request
- Show payment process
- Display live order tracking with rider location

**3. Donor Journey (2 min)**
- Switch to Donor role (from Patient Profile)
- Show live request notification
- Accept request and check eligibility
- Navigate to donation center
- Quick view of donation process phases

**4. Rider Journey (2 min)**
- Switch to Rider role
- Show incoming task
- Accept delivery task
- Demonstrate pickup flow with OTP
- Show cold chain monitoring
- Complete delivery with OTP verification

**5. Hospital Journey (2 min)**
- Switch to Hospital role
- Show incoming request
- Accept and run crossmatch
- Prepare unit with QR scan
- Assign rider
- Show live tracking dashboard
- Demonstrate inventory update
- Quick view of emergency mode

**6. Cross-Role Demo (Optional - 1 min)**
- Show how one patient order flows through all roles:
  - Patient requests → Hospital prepares → Rider delivers → Patient receives

---

## 📱 ANDROID-SPECIFIC BEHAVIORS

### Navigation
- **Back button:** Always visible (ChevronLeft icon)
- **System back gesture:** Supported
- **Deep linking:** Each screen has unique route

### Animations
- **Screen transitions:** Slide from right (forward), slide to right (back)
- **Bottom nav:** Fade between tabs
- **Modals:** Fade in with backdrop
- **Lists:** Scroll with momentum

### Gestures
- **Swipe:** Onboarding slides, image gallery
- **Pull to refresh:** Request lists, inventory
- **Long press:** Quick actions on cards
- **Tap:** Primary interaction

### Notifications
- **Push notifications:** Simulated with notification icon badge
- **In-app alerts:** Toast messages for actions
- **Sound & vibration:** Indicated by UI feedback

---

## ✨ PROTOTYPE INTERACTION PRINCIPLES

### Consistent Patterns
1. **Primary actions:** Bold colored buttons at screen bottom
2. **Secondary actions:** Outlined buttons or text links
3. **Destructive actions:** Red text or borders
4. **Cards are tappable:** All list items navigate on tap
5. **Icons with labels:** Clear affordance for actions

### Visual Feedback
1. **Button press:** Slight scale down effect
2. **Loading states:** Spinner or progress bar
3. **Success states:** Green checkmark or confirmation message
4. **Error states:** Red icon with error message
5. **Empty states:** Helpful message with action

### Smart Defaults
1. **Auto-fill:** Pre-populate when data exists
2. **Remember choices:** Blood type, preferred hospital
3. **Skip unnecessary steps:** If user verified, skip verification
4. **Intelligent routing:** Suggest nearest locations

---

## 🎯 KEY USER JOURNEYS (Quick Reference)

### Patient: Request Blood (2 minutes)
Home → Search → Select Hospital → Confirm → Track

### Donor: Respond to Request (3 minutes)
Home → Requests → Accept → Navigate → Donate

### Rider: Complete Delivery (5 minutes)
Home → Tasks → Accept → Pickup → Deliver → Complete

### Hospital: Handle Request (4 minutes)
Dashboard → Requests → Accept → Prepare → Assign Rider

---

## 🏁 FINAL NOTES

- **Total Screens:** 53 screens across 4 user roles
- **Navigation Depth:** Maximum 4 levels deep
- **Back Navigation:** Always available
- **Role Switching:** Seamless via profile screens
- **Demo-Ready:** Complete end-to-end flows
- **Realistic Interactions:** All buttons functional
- **Android Compliant:** Follows Material Design principles

**The prototype is fully connected and ready for demonstration!** 🎉
