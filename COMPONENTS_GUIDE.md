# Navbar & Footer Components - Usage Guide

## Overview
The Navbar and Footer have been extracted into separate reusable components located in `/src/components/`. This allows them to be imported and used across all pages of the application.

## Component Locations
- **Navbar**: `/src/components/Navbar.jsx`
- **Footer**: `/src/components/Footer.jsx`

## How to Use in Any Page

### Step 1: Import the components
```jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
```

### Step 2: Use them in your page
```jsx
export default function YourPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Your page content here */}
      <main className="flex-grow">
        {/* Page content */}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
```

## Current Implementation
- **Home Page**: Already updated to use `Navbar` and `Footer` components
- **Location**: `/src/pages/home.jsx`

## Component Features

### Navbar
- Fixed positioning (stays at top while scrolling)
- Responsive design (hidden menu on mobile, full menu on desktop)
- Navigation links to home and page sections
- Discord button
- Mobile menu icon

### Footer
- Compact single-row layout
- Brand information with copyright
- Quick navigation links
- Social media icons (Twitter, Instagram, Twitch, YouTube)
- Responsive design (stacks on mobile)

## Important Notes
1. Both components use absolute paths for navigation (`href="/"` and `href="/#games"`)
2. The components rely on Tailwind CSS and Iconify for styling and icons
3. The custom CSS classes (glass-panel, cursor-hover) are defined in `Home.css`
4. For pages outside the home route, ensure anchor links are properly configured

## Creating a New Page Example

```jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NewPage() {
  return (
    <div className="text-gray-300 selection:bg-indigo-500/30 selection:text-white text-base scroll-smooth">
      <Navbar />
      
      <main className="pt-20">
        {/* Your page content here */}
      </main>

      <Footer />
    </div>
  );
}
```

## Customization
To customize the Navbar or Footer:
1. Edit the respective component file in `/src/components/`
2. Changes will automatically apply to all pages using that component
3. Keep styling consistent with the existing design system (Tailwind + custom classes)
