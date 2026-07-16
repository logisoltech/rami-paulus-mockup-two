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

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  y = 28,
  start = "top 88%",
  fadeOut = true,
  as: Tag = "div",
  ...props
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

        gsap.from(el, {
          autoAlpha: 0,
          y,
          duration,
          delay,
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
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
