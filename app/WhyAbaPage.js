"use client";

import { useEffect } from "react";
import Image from "next/image";
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

const UNCONTROLLABLE = [
  "Clinical outcomes.",
  "Family dynamics.",
  "Recruiting and retention.",
  "Payer reimbursement.",
  "Growth.",
  "Scheduling.",
];

export default function WhyAbaPage() {
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
          <Container className="relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
            <div>
              <FadeIn y={20}>
                <p className="mb-6 text-sm font-medium text-muted">Why ABA</p>
                <h1 className="max-w-xl font-serif text-[2.75rem] font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                  Every ABA operator manages an organization filled with
                  variables they can&apos;t control.
                </h1>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-10 max-w-md border-l border-foreground/30 pl-6 lg:pl-8">
                <p className="font-serif text-[1.125rem] font-bold leading-[1.5] tracking-[-0.01em] text-muted lg:text-[1.25rem]">
                  We became obsessed with one of the few you can.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.08} y={28} className="relative w-full">
              <Image
                src="/why-aba-img.png"
                alt="Why environmental infrastructure matters in ABA"
                width={900}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-auto w-full object-contain"
              />
            </FadeIn>
          </Container>
        </section>

        <section className="bg-white py-24 lg:py-32">
          <Container>
            <SectionTag>The Variables</SectionTag>

            <StaggerFadeIn
              as="ul"
              className="max-w-3xl space-y-4"
              stagger={0.08}
              y={24}
            >
              {UNCONTROLLABLE.map((item) => (
                <li
                  key={item}
                  data-stagger-item
                  className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
                >
                  {item}
                </li>
              ))}
            </StaggerFadeIn>
          </Container>
        </section>

        <section className="py-24 bg-[#F3F3F3] lg:py-32">
          <Container>
            <FadeIn className="max-w-3xl">
              <p className="text-base leading-relaxed text-muted lg:text-lg">
                We became obsessed with one of the few variables you can control.
              </p>
              <p className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground lg:text-6xl lg:leading-tight">
                The environment.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-foreground py-24 text-background lg:py-32 [&_.text-muted]:text-zinc-400 [&_.bg-border]:bg-zinc-800 [&_.border-border]:border-zinc-800">
          <Container>
            <SectionTag>The Environment</SectionTag>

            <FadeIn>
              <p className="text-lg text-zinc-400">
                The environment is either:
              </p>
            </FadeIn>

            <StaggerFadeIn
              className="mt-12 space-y-6 lg:mt-16"
              stagger={0.18}
              y={32}
            >
              <p
                data-stagger-item
                className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
              >
                A stabilizing force
              </p>
              <p
                data-stagger-item
                className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
              >
                or
              </p>
              <p
                data-stagger-item
                className="font-serif text-5xl font-semibold tracking-tight text-zinc-300 sm:text-6xl lg:text-7xl"
              >
                Another source of stress.
              </p>
            </StaggerFadeIn>
          </Container>
        </section>

        <section className="border-b border-border py-24 lg:py-32">
          <Container>
            <FadeIn className="max-w-3xl">
              <p className="font-serif text-2xl leading-snug text-muted lg:text-3xl lg:leading-snug">
                A controlled environment reduces friction before therapy begins,
                reinforces parent confidence, supports staff who already carry
                enormous emotional weight, and creates consistency as
                organizations grow.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="border-t border-border bg-foreground py-24 text-background lg:py-32 [&_.text-muted]:text-zinc-400 [&_.bg-border]:bg-zinc-800 [&_.border-border]:border-zinc-800">
          <Container>
            <SectionTag>Why We Exist</SectionTag>

            <FadeIn className="max-w-3xl">
              <h2 className="font-serif text-3xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                Great clinical infrastructure depends on great environmental
                infrastructure.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 lg:text-lg">
                That&apos;s why We Clean ABA exists.
              </p>
              <div className="mt-10">
                <PrimaryButton href="/onboarding" dark>
                  Apply for Onboarding
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
