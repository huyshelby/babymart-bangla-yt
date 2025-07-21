"use client";

import { useEffect, useState, RefObject, useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animation?:
    | "fade-in"
    | "slide-up"
    | "slide-right"
    | "scale-in"
    | "zoom-in"
    | "bounce"
    | "rotate";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  ref: RefObject<T>,
  options: ScrollAnimationOptions = {}
): boolean {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    animation = "fade-in",
    delay = 0,
    duration = 0.6,
    once = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, rootMargin, once]);

  useEffect(() => {
    if (isVisible && ref.current) {
      const element = ref.current;

      // Apply the animation
      element.style.opacity = "0";
      element.style.transition = `all ${duration}s ease ${delay}s`;

      // Different animations
      switch (animation) {
        case "fade-in":
          element.style.opacity = "0";
          break;
        case "slide-up":
          element.style.transform = "translateY(40px)";
          element.style.opacity = "0";
          break;
        case "slide-right":
          element.style.transform = "translateX(-40px)";
          element.style.opacity = "0";
          break;
        case "scale-in":
          element.style.transform = "scale(0.8)";
          element.style.opacity = "0";
          break;
        case "zoom-in":
          element.style.transform = "scale(0.5)";
          element.style.opacity = "0";
          break;
        case "bounce":
          element.style.transform = "translateY(40px)";
          element.style.opacity = "0";
          break;
        case "rotate":
          element.style.transform = "rotate(-10deg) scale(0.8)";
          element.style.opacity = "0";
          break;
      }

      // Trigger the animation
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translate(0) scale(1) rotate(0)";
      }, 50);
    }
  }, [isVisible, animation, delay, duration, ref]);

  return isVisible;
}

// Helper component for scroll animations
interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: ScrollAnimationOptions["animation"];
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function ScrollAnimationWrapper({
  children,
  animation = "fade-in",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  threshold = 0.1,
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref, {
    animation,
    delay,
    duration,
    once,
    threshold,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
