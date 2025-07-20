"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function ContactPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  useEffect(() => {
    // Delay showing the popup to avoid immediate popup on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const togglePopup = (popup: string) => {
    if (activePopup === popup) {
      setActivePopup(null);
    } else {
      setActivePopup(popup);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">
      {/* Main contact button */}
      <button
        onClick={() => setActivePopup(activePopup ? null : "main")}
        className="bg-gradient-to-r from-orange-500 to-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
        aria-label="Contact options"
      >
        {activePopup ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}

        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full border-4 border-orange-300 animate-ping-slow opacity-75"></span>
      </button>

      {/* Contact popups */}
      <div
        className={`space-y-3 transition-all duration-300 transform origin-bottom-right ${
          activePopup ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Facebook Messenger */}
        <div
          className={`flex items-center transition-all duration-300 ${
            activePopup === "facebook"
              ? "bg-white rounded-lg shadow-xl p-3 pr-4"
              : ""
          }`}
        >
          <button
            onClick={() => togglePopup("facebook")}
            className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg ${
              activePopup !== "facebook" ? "bg-[#0084FF]" : ""
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0084FF] rounded-full"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                className="w-8 h-8 relative z-10"
              >
                <path
                  d="M400 0C174.4 0 0 165.2 0 388.4c0 116.4 47.6 220 126.4 290.4 6.8 6.4 11.2 15.2 11.6 24.4v75.6c0 16.8 18.8 27.2 33.6 18.8l86.4-47.6c8.4-4.8 18.8-5.6 28-2.4 36.8 12.8 76.8 20 119.2 20 225.6 0 400-165.2 400-388.4S625.6 0 400 0z"
                  fill="#FFFFFF"
                />
                <path
                  d="M159.6 501.2l97.6-156c15.6-24.8 48.8-30.8 71.6-12.8l77.2 61.6c7.6 6 18 6.4 26 0.8l104.4-73.6c15.2-10.8 34.4 6.4 24.4 22L382.4 499.6c-15.6 24.8-48.8 30.8-71.6 12.8l-77.2-61.6c-7.6-6-18-6.4-26-0.8l-104 73.6c-15.6 10.8-34.8-6.4-24-22.4z"
                  fill="#0084FF"
                />
              </svg>
            </div>
          </button>

          {activePopup === "facebook" && (
            <div className="ml-3 animate-fade-in">
              <h4 className="font-medium text-gray-900">Chat Facebook</h4>
              <p className="text-xs text-gray-500">(8h00 - 20h00)</p>
              <Link
                href="https://m.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Bắt đầu chat
              </Link>
            </div>
          )}
        </div>

        {/* Zalo */}
        <div
          className={`flex items-center transition-all duration-300 ${
            activePopup === "zalo"
              ? "bg-white rounded-lg shadow-xl p-3 pr-4"
              : ""
          }`}
        >
          <button
            onClick={() => togglePopup("zalo")}
            className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg ${
              activePopup !== "zalo" ? "bg-[#0068FF]" : ""
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0068FF] rounded-full"></div>
              <svg viewBox="0 0 50 50" className="w-8 h-8 relative z-10">
                <path
                  d="M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25s25-11.2,25-25S38.8,0,25,0z"
                  fill="#FFFFFF"
                />
                <path
                  d="M36.2,28c0,0-2,0.6-2.8,0.6c-0.8,0.1-2,0.2-2.2-0.4c-0.2-0.4-0.2-2.2-0.2-2.2s1.8-0.2,2.8-0.8 c1.2-0.7,1.8-2.3-0.4-2.8c-3.3-0.8-4.1,1.5-4.1,1.5v3.1c0,0,0,2.6-2.2,2.6c-1.4,0-2.2-0.9-2.2-2.2l0-5.4c0,0,0.1-1.5-1.8-1.5 c-1.4,0-1.8,1-1.8,1.8c0,0.7,0,5.2,0,5.2s-0.1,2.2-2.2,2.2c-1.3,0-2-0.9-2-2c0-0.6,0-8.2,0-8.2s0-1.6,1.5-1.6 c0.9,0,1-0.6,2.8-0.6c1.4,0,2.1,0.8,2.1,0.8s0.5-1,2.6-0.9c1.8,0,2.8,0.7,2.8,0.7S30,16,32,16c2,0,2.4,1.5,2.4,1.5 s0.5-0.6,2.2-0.6c1.7,0,2.4,1,2.4,1s0.2,0.7,0.2,3v4C39.2,28,36.2,27.9,36.2,28z"
                  fill="#0068FF"
                />
              </svg>
            </div>
          </button>

          {activePopup === "zalo" && (
            <div className="ml-3 animate-fade-in">
              <h4 className="font-medium text-gray-900">Chat Zalo</h4>
              <p className="text-xs text-gray-500">(8h00 - 20h00)</p>
              <Link
                href="https://zalo.me/yourphone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Bắt đầu chat
              </Link>
            </div>
          )}
        </div>

        {/* Phone */}
        <div
          className={`flex items-center transition-all duration-300 ${
            activePopup === "phone"
              ? "bg-white rounded-lg shadow-xl p-3 pr-4"
              : ""
          }`}
        >
          <button
            onClick={() => togglePopup("phone")}
            className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg ${
              activePopup !== "phone" ? "bg-green-600" : ""
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-green-600 rounded-full"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 relative z-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </button>

          {activePopup === "phone" && (
            <div className="ml-3 animate-fade-in">
              <h4 className="font-medium text-gray-900">0935.330.134</h4>
              <p className="text-xs text-gray-500">(8h00 - 20h00)</p>
              <Link
                href="tel:0935330134"
                className="text-sm text-green-500 hover:text-green-700"
              >
                Gọi ngay
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
