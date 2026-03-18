

# ClawConnect Desktop App UI — Implementation Plan

## Overview
Build a design mockup of the ClawConnect Windows desktop app as a separate route (`/app`) within the existing project. The UI follows the same Terminal Noir design system with a 56px icon-only sidebar and 5 pages, all using mock data.

## Route & Layout

- Add `/app` route in `App.tsx` pointing to a new `DesktopApp` page
- `DesktopApp` renders a fixed 900×680 container centered on screen, with the sidebar + content area
- Sidebar: 56px wide, icon-only, vertical icon stack with active state (green left border)
- Content area fills remaining width
- Internal state manages which "page" is shown (no nested routes needed)

## File Structure

```
src/pages/DesktopApp.tsx          — main layout + sidebar + page switcher
src/components/desktop/Dashboard.tsx
src/components/desktop/DashboardOffline.tsx
src/components/desktop/BrowserTabs.tsx
src/components/desktop/Settings.tsx
src/components/desktop/Doctor.tsx
src/components/desktop/Setup.tsx
```

## Component Details

### DesktopApp.tsx
- Fixed-size container (900×680) with `bg-[#0a0a0a]` and `overflow-hidden`
- Left sidebar: 56px, `bg-[#0f0f0f]`, border-right `#1a1a1a`
- 5 icon buttons (Lucide: `LayoutGrid`, `Globe`, `SlidersHorizontal`, `Activity`, `Terminal`)
- State: `activePage` controls which component renders in main area
- State: `showOffline` toggle to demo the offline variant

### Dashboard.tsx (RUNNING state)
- Status card: green "RUNNING" pill, uptime counter, port/profile info, START/STOP/RESTART buttons
- Gateway section: CONNECTED dot, URL, latency
- Quick actions: OPEN BROWSER, NEW TAB input+button, SCREENSHOT

### DashboardOffline.tsx
- Centered warning panel with amber icon, "Daemon Offline" message, RETRY/VIEW LOGS buttons

### BrowserTabs.tsx
- Header with "MANAGED BROWSER" + OPEN URL button
- 3 mock tab rows with favicon placeholder, title, URL, focus/close icons
- Active tab with green left border
- Footer bar: browser version + CDP endpoint

### Settings.tsx
- 3 sections (Browser, Gateway, App) separated by dividers
- Section headers in muted green (`// BROWSER` style)
- Text inputs, number input, password with toggle, toggle switch
- Save/test buttons per section

### Doctor.tsx
- Header + RUN CHECKS button
- 6 diagnostic rows with status icons (✓/✗/⚠), name, detail text
- Summary bar: "5/6 checks passed" with progress bar

### Setup.tsx
- 4-step wizard with numbered step indicators at top
- Shows Step 2 by default (gateway connection test in progress)
- Each step's content as described in the prompt
- Navigation buttons between steps

## Styling Approach
- Uses existing Tailwind config + CSS variables already in the project
- All `font-mono`, sharp corners (`rounded-sm`), uppercase button labels, `text-[12px]` buttons
- Colors map directly to existing CSS vars where possible, hex overrides where needed
- No scrollbars — content fits within 680px height
- Dense spacing throughout

## Mock Data
All data is hardcoded — status values, tab lists, diagnostic results, form defaults. No API calls.

