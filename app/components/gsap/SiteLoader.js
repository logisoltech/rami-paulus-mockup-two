"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BRAND = "We Clean ABA";
const SUBTITLE = "Environmental infrastructure";

function finishLoading(setDone, overlayRef) {
  document.documentElement.classList.add("loader-complete");
  document.body.style.overflow = "";
  window.scrollTo({ top: 0, behavior: "instant" });

  window.dispatchEvent(new Event("loader-complete"));
  requestAnimationFrame(() => ScrollTrigger.refresh());

  if (overlayRef.current) {
    gsap.set(overlayRef.current, { display: "none" });
  }

  setDone(true);
}

export default function SiteLoader({ children }) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const counterRef = useRef(null);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!container || !overlay || !content) return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const navItems = content.querySelectorAll(".reveal-nav");
      const heroItems = content.querySelectorAll(".reveal-hero");
      const letters = overlay.querySelectorAll(".loader-letter span");
      const line = overlay.querySelector(".loader-line");
      const sub = overlay.querySelector(".loader-sub");
      const counterEl = overlay.querySelector(".loader-counter");
      const inner = overlay.querySelector(".loader-inner");
      const rings = overlay.querySelectorAll(".loader-ring");
      const progressFill = overlay.querySelector(".loader-progress-fill");

      if (!letters.length || !line || !sub || !counterEl || !inner) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set([content, navItems, heroItems], {
          opacity: 1,
          y: 0,
          clearProps: "transform",
        });
        finishLoading(setDone, overlayRef);
        return;
      }

      const counter = { val: 0 };

      gsap.set(letters, { yPercent: 110 });
      gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(sub, { opacity: 0, y: 8 });
      gsap.set(counterEl, { opacity: 0 });
      gsap.set(rings, { opacity: 0, scale: 0.9 });
      gsap.set(progressFill, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(navItems, { opacity: 0, y: 20 });
      gsap.set(heroItems, { opacity: 0, y: 36 });
      gsap.set(overlay, { yPercent: 0 });

      const tl = gsap.timeline({
        onComplete: () => finishLoading(setDone, overlayRef),
      });

      tl.to(counterEl, { opacity: 1, duration: 0.4, ease: "power2.out" });

      tl.to(
        counter,
        {
          val: 100,
          duration: 2.2,
          ease: "power1.inOut",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = String(
                Math.round(counter.val)
              ).padStart(3, "0");
            }
            if (progressFill) {
              gsap.set(progressFill, { scaleX: counter.val / 100 });
            }
          },
        },
        0
      );

      tl.to(
        rings,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.1
      );

      tl.to(
        letters,
        {
          yPercent: 0,
          duration: 0.75,
          stagger: 0.04,
          ease: "power3.out",
        },
        0.15
      );

      tl.to(
        line,
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0.55
      );

      tl.to(
        sub,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        1.1
      );

      tl.to({}, { duration: 0.35 });

      tl.to(inner, {
        opacity: 0,
        y: -16,
        duration: 0.45,
        ease: "power2.in",
      });

      tl.add(() => {
        document.documentElement.classList.add("loader-complete");
        gsap.set(content, { opacity: 1 });
      }, "reveal");

      tl.to(
        overlay,
        {
          yPercent: -100,
          duration: 1.05,
          ease: "power4.inOut",
        },
        "reveal"
      );

      tl.to(
        navItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "reveal+=0.55"
      );

      tl.to(
        heroItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        },
        "reveal+=0.7"
      );
    }, container);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div
        ref={overlayRef}
        className={`site-loader${done ? " site-loader--done" : ""}`}
        aria-hidden={done}
      >
        <div className="loader-counter">
          <span ref={counterRef}>000</span>
        </div>

        <div className="loader-ring loader-ring-outer" />
        <div className="loader-ring loader-ring-inner" />

        <div className="loader-inner">
          <div className="loader-word" aria-label={BRAND}>
            {BRAND.split("").map((char, i) => (
              <span className="loader-letter" key={`${char}-${i}`}>
                <span>{char === " " ? "\u00A0" : char}</span>
              </span>
            ))}
          </div>

          <div className="loader-line" />

          <p className="loader-sub">{SUBTITLE}</p>
        </div>

        <div className="loader-progress">
          <div className="loader-progress-fill" />
        </div>
      </div>

      <div ref={contentRef} className="site-content">
        {children}
      </div>
    </div>
  );
}
