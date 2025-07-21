"use client";

import React from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function SmoothScrollLink({
  href,
  children,
  className = "",
  offset = 80, // Default offset to account for fixed headers
  style = {},
  onClick,
}: SmoothScrollLinkProps): React.ReactElement {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // Make sure href is an ID selector
    if (!href.startsWith("#")) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate the target scroll position with offset
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Optionally update the URL hash
      if (history.pushState) {
        history.pushState(null, "", href);
      } else {
        window.location.hash = href;
      }
    }

    // Call the provided onClick handler if it exists
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
