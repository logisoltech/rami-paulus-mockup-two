"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import FadeIn from "./components/gsap/FadeIn";
import StaggerFadeIn from "./components/gsap/StaggerFadeIn";
import SiteHeader from "./components/SiteHeader";

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

function SectionTag({ children }) {
  return (
    <FadeIn className="mb-10 flex items-center gap-4" y={16} duration={0.7}>
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" />
    </FadeIn>
  );
}

function PrimaryButton({ href, children, dark = false }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
        dark
          ? "bg-background text-foreground"
          : "bg-foreground text-background"
      }`}
    >
      {children}
    </a>
  );
}

const STEPS = [
  {
    number: "01",
    title: "Operator Alignment",
    body: "We begin by understanding how your organization operates, where friction exists, and what success looks like.",
  },
  {
    number: "02",
    title: "Environmental Reset",
    body: "Every clinic is brought back to a consistent baseline so we begin from a known standard—not inherited problems.",
  },
  {
    number: "03",
    title: "Standardization",
    body: "We implement consistent systems, communication, and accountability across every location, creating an experience that doesn't depend on personalities.",
  },
  {
    number: "04",
    title: "Ongoing Oversight",
    body: "Through inspections, communication, and proactive follow-through, we prevent small issues from becoming operational distractions.",
  },
  {
    number: "05",
    title: "Portfolio Stability",
    body: "As your organization grows, your environments remain consistent, professional, and ready to support the people inside them.",
  },
];

const SIGNALS = ["structure", "calm", "professionalism", "consistency"];

const BEFORES = [
  "Before therapy begins.",
  "Before parents speak to staff.",
  "Before leadership walks the building.",
];

export default function HowWeWorkPage() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("loader-complete")) {
      document.documentElement.classList.add("loader-complete");
      window.dispatchEvent(new Event("loader-complete"));
    }
  }, []);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-border bg-[#F8F8F8] pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(9,9,11,0.05),transparent_55%),radial-gradient(ellipse_50%_40%_at_100%_20%,rgba(9,9,11,0.035),transparent_50%)]"
          />
          <Container className="relative py-24 lg:py-32">
            <FadeIn y={20}>
              <p className="mb-6 text-sm font-medium text-muted">How We Work</p>
              <h1 className="max-w-4xl font-serif text-[2.75rem] font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                A Structured System Built for Multi-Clinic ABA Operators
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
                Our process is designed to create calm, consistency, and
                accountability across every clinic you operate.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <SectionTag>The Process</SectionTag>

            <StaggerFadeIn
              as="ol"
              className="max-w-3xl space-y-14 lg:space-y-16"
              stagger={0.1}
              y={28}
            >
              {STEPS.map((step) => (
                <li key={step.number} data-stagger-item className="flex gap-6 lg:gap-10">
                  <span className="mt-1 shrink-0 font-mono text-xs font-medium tracking-[0.14em] text-subtle">
                    {step.number}
                  </span>
                  <div>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </StaggerFadeIn>
          </Container>
        </section>

        <section className="bg-foreground py-24 text-background lg:py-32 [&_.text-muted]:text-zinc-400 [&_.bg-border]:bg-zinc-800 [&_.border-border]:border-zinc-800">
          <Container>
            <SectionTag>The Closing</SectionTag>

            <FadeIn>
              <h2 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                The Environment Sets The Tone
              </h2>
            </FadeIn>

            <StaggerFadeIn
              as="ul"
              className="mt-12 max-w-xl space-y-4"
              stagger={0.08}
              y={20}
            >
              {BEFORES.map((line) => (
                <li
                  key={line}
                  data-stagger-item
                  className="font-serif text-2xl font-semibold tracking-tight text-zinc-300 lg:text-3xl"
                >
                  {line}
                </li>
              ))}
            </StaggerFadeIn>

            <FadeIn className="mt-14 max-w-xl">
              <p className="text-base leading-relaxed text-zinc-400 lg:text-lg">
                The environment has already communicated something.
              </p>
              <p className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
                We make sure it communicates
              </p>
            </FadeIn>

            <StaggerFadeIn
              as="ul"
              className="mt-8 grid max-w-md grid-cols-1 gap-y-5"
              stagger={0.08}
            >
              {SIGNALS.map((item) => (
                <li
                  key={item}
                  data-stagger-item
                  className="flex gap-3 text-base font-medium leading-relaxed tracking-tight"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-background"
                  >
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </StaggerFadeIn>

            <FadeIn className="mt-12">
              <PrimaryButton href="/onboarding" dark>
                Apply for Onboarding
              </PrimaryButton>
            </FadeIn>
          </Container>
        </section>
      </main>

      <FadeIn as="footer" className="border-t border-border py-10" y={20}>
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="inline-flex items-center">
            <Image
              src="/logo-asset1-8.png"
              alt="We Clean ABA"
              width={160}
              height={28}
              className="h-4 w-auto object-contain"
            />
          </a>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} We Clean ABA. All rights reserved.
          </p>
        </Container>
      </FadeIn>
    </>
  );
}
