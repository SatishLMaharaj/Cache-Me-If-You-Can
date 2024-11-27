"use client";

import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export function SplineAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeContainer = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        containerRef.current.style.height = `${width}px`;
      }
    };

    resizeContainer();
    window.addEventListener('resize', resizeContainer);

    return () => {
      window.removeEventListener('resize', resizeContainer);
    };
  }, []);

  return (
    <div ref={containerRef} className=" fixed top-1/2 right-0 transform -translate-y-1/2 w-80 h-80">
      <Spline 
        scene="https://prod.spline.design/KXEIiQqJb9YNrV6R/scene.splinecode"
        className="fixed top-1/2 right-0 transform -translate-y-1/2 w-24 h-24"
      />
    </div>
  );
}
