"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

interface EventData {
  [key: string]: string | number | boolean | null;
}

export default function AnalyticsProvider({
  children,
}: AnalyticsProviderProps) {
  const pathname = usePathname();

  // Track page views
  useEffect(() => {
    // Track page view without searchParams to avoid SSR issues
    trackPageView(pathname);
  }, [pathname]);

  return <>{children}</>;
}

// Function to track page views
async function trackPageView(url: string) {
  try {
    // Send analytics data to your API
    await fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "pageview",
        url,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    // Silent failure in production
    console.error("Failed to track page view:", error);
  }
}

// Helper function to track specific events
export async function trackEvent(eventName: string, eventData: EventData = {}) {
  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "event",
        eventName,
        eventData,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error(`Failed to track event ${eventName}:`, error);
  }
} 