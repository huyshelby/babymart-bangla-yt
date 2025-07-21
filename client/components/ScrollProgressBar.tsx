"use client";

import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    // Height of the whole document
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // How much has been scrolled
    const scrolled = document.documentElement.scrollTop;

    const width = (scrolled / height) * 100;
    setWidth(width);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);

    return () => window.removeEventListener("scroll", scrollHeight);
  }, []);

  return (
    <div className="scroll-progress-bar" style={{ width: `${width}%` }}></div>
  );
}
