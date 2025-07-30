import React from "react";

interface BalancedLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function BalancedLayout({
  children,
  className = "",
  fullWidth = false,
}: BalancedLayoutProps) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div
        className={`max-w-[1300px] w-full ${
          !fullWidth ? "px-4 sm:px-6 md:px-8 lg:px-12" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
