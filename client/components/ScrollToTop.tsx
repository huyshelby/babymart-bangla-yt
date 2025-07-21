"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll coordinate to 0
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            fixed bottom-8 right-8 z-50 p-3 rounded-full 
            bg-orange-500 text-white shadow-lg 
            hover:bg-orange-600 focus:outline-none
            transition-all duration-300
            transform ${isHovered ? "scale-110 translate-y-[-5px]" : ""}
            hover:shadow-xl
          `}
          aria-label="Cuộn lên đầu trang"
          title="Cuộn lên đầu trang"
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 ${
                isHovered ? "transform -translate-y-1" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>

            {/* Animated circle */}
            <span
              className={`
              absolute inset-0 rounded-full 
              ${isHovered ? "animate-ping" : ""}
              bg-orange-300 opacity-30
            `}
            ></span>
          </div>
        </button>
      )}
    </>
  );
}
