# CMR_MOBLIE — Project Documentation

## 1) Overview

This repository contains a blood bank / transfusion logistics prototype with:

- A primary **mobile app** (Expo + React Native) that supports role-based flows for **Patient**, **Donor**, **Rider**, and related hospital workflows.
- A secondary **web prototype** (Vite + React) that serves as a UI demo/screen switcher.
- A **Supabase** backend (Auth + Postgres) with Row Level Security (RLS) and Realtime subscriptions used for live updates (requests, locations, notifications, etc).

---

## 2) Repository Structure

The main code is inside:

- `frontend/PROTOTYPE_MOBLILE updated/mobile` — Expo React Native app (primary)
- `frontend/PROTOTYPE_MOBLILE updated` — Vite React web prototype (secondary)

Key mobile folders:

- `mobile/src/screens` — all screens for Patient/Donor/Rider/Hospital
- `mobile/src/context` — app-wide state (Auth + Theme)
- `mobile/src/lib/supabase.ts` — Supabase client setup
- `mobile/src/types/supabase.ts` — TypeScript database types used by screens
- `mobile/supabase_schema.sql` — schema + policies used by Supabase
- `mobile/supabase/migrations` — incremental schema changes

---

## 3) Mobile App (Expo React Native)

### 3.1 Tech Stack

- Expo SDK (see `mobile/package.json`)
- React Native + TypeScript
- Supabase (`@supabase/supabase-js`)
- Map rendering and route line drawing via `@maplibre/maplibre-react-native`
- Location via `expo-location`
- Styling: NativeWind + ThemeContext tokens

### 3.2 App Entry Points

- `mobile/index.ts` — JS entry
- `mobile/App.tsx` — root component and navigation setup

### 3.3 Navigation Model (Role-Based Stacks)

The app uses React Navigation with:

- Root stack with:
  - `Auth` stack (welcome/onboarding/login/role selection/registration)
  - `Patient` stack
  - `Donor` stack
  - `Rider` stack

This is defined in `mobile/App.tsx`.

### 3.4 Authentication & Profile Strategy

Auth state is managed by Supabase sessions:

- `AuthProvider` subscribes to `supabase.auth.onAuthStateChange(...)`.
- On login, the app reads `session.user.user_metadata` for `role` and basic profile fields.
- On sign-up, it creates an auth user and also inserts a row into a role-specific profile table:
  - Patient → `patient_profile`
  - Donor → `donor_profile`
  - Rider → `rider_profile` (with schema-compat fallback)

Implementation: `mobile/src/context/AuthContext.tsx`.

### 3.5 Theme System

The theme is controlled by `ThemeContext`:

- Persists `light/dark` mode in AsyncStorage
- Feeds NativeWind’s `useColorScheme()` and provides a small color token set

Implementation: `mobile/src/context/ThemeContext.tsx`.

### 3.6 Notifications (In-App Overlay)

The app listens for new rows inserted into the `notifications` table:

- A root-level overlay shows a slide-down banner when the app is active.
- Notification preferences (in-app, sound, vibration, quiet hours) are stored in AsyncStorage per role.
- Sounds are generated locally (WAV bytes) and played via `expo-av`.

Implementation:

- Overlay: `mobile/App.tsx` (component `InAppNotificationOverlay`)
- Sound generation: `mobile/src/lib/notificationSounds.ts`

### 3.7 Maps, Tracking, and Routing (MapLibre + OSRM)

Map rendering is done using `@maplibre/maplibre-react-native`, with multiple fallbacks:

- Preferred style: Carto basemap style URL
- Fallback: MapLibre demo style
- Fallback: OSM raster tiles

Routing uses the public OSRM endpoint:

- `https://router.project-osrm.org/route/v1/driving/...`
- Geometry is requested as GeoJSON and rendered as a `LineLayer`.

Important note: multiple screens dynamically check for native MapLibre view manager availability using `UIManager.getViewManagerConfig(...)`. If MapLibre is not present, the screen shows a “Map unavailable” fallback, which usually indicates the app is running without the native module (e.g., needs a dev client build rather than plain Expo Go).

---

## 4) Core User Flows (Mobile)

### 4.1 Patient Flow — Request & Track Donation

Data model used: `donor_requests` + `donor_profile`.

Tracking behavior (high level):

1) Load all requests for the logged-in patient:
   - Select includes a join to donor profile fields for display.
2) Subscribe to realtime changes on `donor_requests` filtered by the patient’s id.
3) If a request has an assigned donor, subscribe to realtime changes on the donor’s `donor_profile` row for live lat/lng.
4) Fetch a route polyline from donor → request destination using OSRM.
5) Render map markers + route line for live tracking.

Primary implementation: `mobile/src/screens/PatientOrderTrackingScreen.tsx`.

### 4.2 Donor Flow — Navigation & Live Location Updates

Donor navigation behavior:

1) Ask for foreground location permission (`expo-location`).
2) Capture current location and update `donor_profile.latitude/longitude`.
3) Start a watcher and periodically update location (with throttling to avoid excessive writes).
4) Fetch a route to destination using OSRM and render on the MapLibre map.

Primary implementation: `mobile/src/screens/DonorNavigationScreen.tsx`.

### 4.3 Rider Flow — Open Ride Monitoring + Navigation

Rider behavior includes:

- Realtime monitoring of `ride_requests` (open requests) when not assigned to a specific ride.
- Writing rider location to `rider_profile`, with schema fallback support:
  - Some schemas use `latitude/longitude`, others use `current_latitude/current_longitude`.

Primary implementation: `mobile/src/screens/RiderNavigationScreen.tsx`.

---

## 5) Supabase Backend

### 5.1 Client Configuration

Supabase client is created in `mobile/src/lib/supabase.ts`.

Configuration is read from environment variables:

- `EXPO_PUBLIC_SUPABASE_URL` (preferred)
- or `EXPO_PUBLIC_SUPABASE_PROJECT_ID`
- `EXPO_PUBLIC_SUPABASE_ANON_KEY` (preferred)
- or `EXPO_PUBLIC_SUPABASE_KEY`

If environment variables are missing, the current code contains a default project id/key. For production, you should set your own environment variables and avoid relying on hardcoded defaults.

### 5.2 Database Types in App

The app uses a typed `Database` interface in:

- `mobile/src/types/supabase.ts`

Screens reference table types like:

- `Database['public']['Tables']['donor_requests']['Row']`

### 5.3 Schema Source of Truth

Canonical schema and policies are in:

- `mobile/supabase_schema.sql`

There are also migrations in:

- `mobile/supabase/migrations`

### 5.4 Key Tables (High Level)

Core:

- `patient_profile`
- `donor_profile` (includes live `latitude/longitude`)
- `rider_profile`
- `hospitals`
- `donor_requests` (blood request workflow)
- `ride_requests` (transport workflow)
- `notifications`
- `patient_reports`

Additional feature sets in schema:

- Donation camps + registrations + carpool offers
- Patient cohorts + members + transfusion events
- Rewards system (wallets, transactions, coupons)

### 5.5 Row Level Security (RLS) Patterns

The schema enables RLS and then selectively opens access:

- Many “read” policies are `using (true)` to allow authenticated clients to display lists.
- “write” policies are typically limited to the authenticated user (`auth.uid()`) being the row owner/party.

Examples:

- `donor_requests`:
  - Patients can insert their own requests.
  - Patients/donors can update requests based on ownership/assignment.
- `ride_requests`:
  - Patients create ride requests.
  - Patient/donor/rider can view/update their own ride.
  - Riders can see open requests (`status = 'searching_rider'`) and claim them when available.
- `notifications`:
  - Users can read their own notifications and update read status.

---

## 6) Web Prototype (Vite React)

Location:

- `frontend/PROTOTYPE_MOBLILE updated`

This is a demo app that:

- Uses a `currentScreen` state and a switch statement to render various role screens/components.
- Includes UI components (Radix-based) under `src/components/ui`.

Primary entry: `frontend/PROTOTYPE_MOBLILE updated/src/App.tsx`.

---

## 7) Running the Project

### 7.1 Mobile (Expo)

From:

- `frontend/PROTOTYPE_MOBLILE updated/mobile`

Commands (from `mobile/package.json`):

- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run web`
- `npm run lint`
- `npm run typecheck`

### 7.2 Web Prototype (Vite)

From:

- `frontend/PROTOTYPE_MOBLILE updated`

Commands:

- `npm run dev`
- `npm run build`

---

## 8) Implementation Notes / Common Pitfalls

- MapLibre screens may show “Map unavailable” if the native module is not available at runtime.
- Live tracking depends on Realtime subscriptions:
  - Ensure Realtime is enabled for the relevant tables in Supabase.
- Location updates can generate frequent writes; throttling is used in navigation screens to reduce load.

