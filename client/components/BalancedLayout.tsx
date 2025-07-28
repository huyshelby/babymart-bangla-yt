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
        className={`max-w-[1300px] w-full ${!fullWidth ? "px-4 md:px-6" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
