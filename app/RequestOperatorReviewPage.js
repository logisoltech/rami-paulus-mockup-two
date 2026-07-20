"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
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

function CircleList({ items, icon = "check", dark = false }) {
  const Icon = icon === "x" ? X : Check;
  const border = dark ? "border-background" : "border-foreground";

  return (
    <StaggerFadeIn
      as="ul"
      className="mt-12 grid max-w-xl grid-cols-1 gap-y-5"
      stagger={0.08}
    >
      {items.map((item) => (
        <li
          key={item}
          data-stagger-item
          className="flex gap-3 text-base font-medium leading-relaxed tracking-tight"
        >
          <span
            aria-hidden
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${border}`}
          >
            <Icon className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </StaggerFadeIn>
  );
}

const SYMPTOMS = [
  "Staff burnout.",
  "Parent complaints.",
  "Constant follow-up.",
  "Operational drift.",
  "Reactive leadership.",
];

const LOOK_FOR = [
  "environmental consistency across locations",
  "operational friction points",
  "communication gaps",
  "quality control systems",
  "flooring and restroom standards",
  "supply organization",
  "overall environmental stability",
];

const WALK_AWAY = [
  "Where environmental friction exists",
  "What's creating operational drag",
  "What can be corrected immediately",
  "What requires a longer-term systems approach",
];

const STEPS = [
  {
    number: "01",
    title: "Operator Conversation",
    body: "We begin by understanding your organization, your current challenges, and where you believe unnecessary friction exists.",
  },
  {
    number: "02",
    title: "Environmental Review",
    body: "We'll review your clinics, current systems, and the environment's role in day-to-day operations.",
  },
  {
    number: "03",
    title: "Findings",
    body: "We'll share our observations, identify opportunities for improvement, and answer your questions.",
  },
  {
    number: "04",
    title: "Next Steps",
    body: "If we're a good fit, we'll discuss what a partnership could look like. If we're not, you'll still leave with greater clarity than you started with.",
  },
];

export default function RequestOperatorReviewPage() {
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
              <p className="mb-6 text-sm font-medium text-muted">
                Request an Operator Review
              </p>
              <h1 className="max-w-xl font-serif text-[2.75rem] font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                Sometimes the problem isn&apos;t where it appears.
              </h1>
            </FadeIn>

            <CircleList items={SYMPTOMS} icon="x" />

            <FadeIn className="mt-10 max-w-lg">
              <p className="text-base leading-relaxed text-muted lg:text-lg">
                Most of the time, the environment is contributing long before
                anyone realizes it.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <SectionTag>What We&apos;ll Look For</SectionTag>

            <FadeIn>
              <h2 className="max-w-3xl font-serif text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-tight">
                During your Operator Review, we&apos;ll assess:
              </h2>
            </FadeIn>

            <CircleList items={LOOK_FOR} />
          </Container>
        </section>

        <section className="bg-[#F3F3F3] py-24 lg:py-32">
          <Container>
            <SectionTag>What You&apos;ll Walk Away With</SectionTag>

            <FadeIn>
              <h2 className="max-w-3xl font-serif text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-tight">
                You&apos;ll leave with a clearer understanding of:
              </h2>
            </FadeIn>

            <CircleList items={WALK_AWAY} />

            <FadeIn className="mt-12 max-w-2xl">
              <p className="text-base leading-relaxed text-muted lg:text-lg">
                Whether you continue with your current provider or explore a new
                partnership, you&apos;ll leave with greater clarity.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <SectionTag>What Happens Next</SectionTag>

            <StaggerFadeIn
              as="ol"
              className="max-w-3xl space-y-14 lg:space-y-16"
              stagger={0.1}
              y={28}
            >
              {STEPS.map((step) => (
                <li
                  key={step.number}
                  data-stagger-item
                  className="flex gap-6 lg:gap-10"
                >
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
            <SectionTag>The Goal</SectionTag>

            <FadeIn className="max-w-3xl">
              <h2 className="font-serif text-3xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                The goal is to understand whether the environment is quietly
                contributing to operational friction, and what can be done about
                it.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-400 lg:text-lg">
                This isn&apos;t about criticizing your current provider.
              </p>
              <p className="mt-3 font-serif text-2xl font-semibold tracking-tight lg:text-3xl">
                It&apos;s about creating clarity.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section
          id="request"
          className="border-t border-border bg-[#F8F8F8] py-24 lg:py-32"
        >
          <Container>
            <FadeIn className="max-w-3xl">
              <h2 className="font-serif text-3xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                A controlled environment becomes a stabilizing force.
              </h2>
              <div className="mt-10">
                <PrimaryButton href="#request">
                  Request an Operator Review
                </PrimaryButton>
              </div>
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
