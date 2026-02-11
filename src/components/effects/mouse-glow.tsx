"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canTrack = window.matchMedia("(pointer: fine)").matches;
    if (!canTrack) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    const speed = 0.18;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let raf = 0;
    const animate = () => {
      glowX += (mouseX - glowX) * speed;
      glowY += (mouseY - glowY) * speed;
      el.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      raf = window.requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    raf = window.requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.18),transparent_60%)] blur-2xl"
    />
  );
}

