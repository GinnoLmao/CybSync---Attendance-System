# CybSync - Attendance-System

Cyb:Org Attendance System Project

## Tech Stack

- **Next.js 15.5** - React framework with server-side rendering
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting
- **Turbopack** - Fast bundler

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── src/
│   ├── app/                    # App Router pages and layouts
│   │   ├── dashboard/          # Dashboard pages
│   │   │   ├── attendance/     # Attendance tracking
│   │   │   │   └── page.tsx    # Attendance page with RFID
│   │   │   ├── request/        # Event request
│   │   │   │   └── page.tsx    # Event request form
│   │   │   └── page.tsx        # Main dashboard
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Council login page
│   │   └── globals.css         # Global styles
│   └── components/             # Reusable components
│       ├── Sidebar.tsx         # Dashboard sidebar
│       └── StatCard.tsx        # Statistics card component
├── public/                     # Static assets
├── BACKEND_INTEGRATION.md      # Login backend guide
├── DASHBOARD_BACKEND_INTEGRATION.md  # Dashboard backend guide
├── ATTENDANCE_BACKEND_INTEGRATION.md # Attendance & RFID guide
├── REQUEST_BACKEND_INTEGRATION.md    # Event request guide
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── tailwind.config.ts          # Tailwind CSS configuration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Completed Features

- ✅ Council Login Page (/)
- ✅ Event Dashboard (/dashboard)
- ✅ Attendance Page (/dashboard/attendance)
- ✅ Request Event Page (/dashboard/request)
- ✅ RFID Scanner Integration
- ✅ Event Request Form with Validation
- ✅ Responsive Sidebar Navigation
- ✅ Real-time Statistics Display
- ✅ Attendance Charts (Donut & Bar)
- ✅ Attendance Records Table
- ✅ Upcoming Events Section
- ✅ Mobile Responsive Design

## Features to Implement

- ❌ Student Login Page
- ❌ Past Events View
- ❌ Reports Generation
- ❌ User Management
- ❌ Backend API Integration
