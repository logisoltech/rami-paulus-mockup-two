"use client";

import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

function LenisScrollTrigger() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const sync = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(sync);
    gsap.ticker.lagSmoothing(0);
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(sync);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (!enabled) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.1,
        smoothWheel: true,
        anchors: true,
        stopInertiaOnNavigate: true,
        autoToggle: true,
      }}
    >
      <LenisScrollTrigger />
      {children}
    </ReactLenis>
  );
}
