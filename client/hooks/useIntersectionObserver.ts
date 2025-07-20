"use client";

import { useEffect, useState, useRef, MutableRefObject } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

type IntersectionObserverHookReturn<T extends HTMLElement> = [
  MutableRefObject<T | null>,
  boolean,
  IntersectionObserverEntry | null
];

export function useIntersectionObserver<T extends HTMLElement>(
  options: IntersectionObserverOptions = {},
  freezeOnceVisible = false
): IntersectionObserverHookReturn<T> {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const elementRef = useRef<T | null>(null);
  const frozen = isIntersecting && freezeOnceVisible;

  const updateEntry = ([newEntry]: IntersectionObserverEntry[]): void => {
    setEntry(newEntry);
    setIsIntersecting(newEntry.isIntersecting);
  };

  useEffect(() => {
    const node = elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options, frozen]);

  return [elementRef, isIntersecting, entry];
}
