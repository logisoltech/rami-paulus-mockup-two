"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function runWhenLoaderReady(callback) {
  if (document.documentElement.classList.contains("loader-complete")) {
    callback();
    return undefined;
  }

  window.addEventListener("loader-complete", callback, { once: true });
  return () => window.removeEventListener("loader-complete", callback);
}

export default function StaggerFadeIn({
  children,
  className = "",
  itemSelector = "[data-stagger-item]",
  stagger = 0.1,
  duration = 0.75,
  y = 24,
  start = "top 85%",
  fadeOut = true,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const setup = () => {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduced) return;

        const items = el.querySelectorAll(itemSelector);
        if (!items.length) return;

        gsap.from(items, {
          autoAlpha: 0,
          y,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: fadeOut
              ? "play reverse play reverse"
              : "play none none none",
          },
        });
      };

      return runWhenLoaderReady(setup);
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
