HEAMOLINK is a blood donation and transfusion logistics prototype that combines a role-based Expo React Native mobile app with a Vite React web prototype , backed by Supabase (Auth + Postgres + Realtime) .

The mobile app supports end-to-end workflows for multiple roles:

- Patients : create blood/donation requests, track request status, view assigned donor details, and follow live progress on a map.
- Donors : receive/live-view nearby requests, navigate to destinations, and publish live GPS updates for patient tracking.
- Riders : monitor open ride requests, accept/claim tasks, and navigate pickup → drop routes with live location updates.
- Hospital-oriented flows : screens for inventory/requests/compliance/emergency operations (prototype UI + workflow scaffolding).

Key platform capabilities included in this repository:

- Realtime updates using Supabase postgres_changes subscriptions for requests, profiles/locations, notifications, rides, cohorts, and transfusion events.
- Live tracking & routing using MapLibre maps and OSRM-based route polylines (donor/patient/rider navigation and tracking views).
- Secure data access via Supabase Row Level Security (RLS) policies for core tables like donor_requests , ride_requests , and notifications .
- In-app notifications overlay with per-role notification preferences (sound/vibration/quiet hours) persisted locally.
- A maintained Supabase schema + migrations alongside TypeScript database types used throughout the mobile app.
  
This repo is intended as a functional prototype and foundation for building a production-grade blood bank coordination system with real-time operations, location-based tracking, and role-specific experiences.
