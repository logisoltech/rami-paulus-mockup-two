"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import FadeIn from "./components/gsap/FadeIn";
import SiteLoader from "./components/gsap/SiteLoader";
import StaggerFadeIn from "./components/gsap/StaggerFadeIn";
import SiteHeader from "./components/SiteHeader";

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

function SectionTag({ number, children }) {
  return (
    <FadeIn className="mb-10 flex items-center gap-4" y={16} duration={0.7}>
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" />
      {/* <span className="font-mono text-xs text-subtle">{number}</span> */}
    </FadeIn>
  );
}

function PrimaryButton({ href, children, dark = false }) {
  return (
    <a
      href={href}
      className={`inline-flex min-w-[13.5rem] items-center justify-center whitespace-nowrap rounded-none px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-80 ${
        dark
          ? "bg-background text-foreground"
          : "bg-foreground text-background"
      }`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, dark = false }) {
  return (
    <a
      href={href}
      className={`inline-flex min-w-[22rem] items-center justify-center whitespace-nowrap rounded-none border px-12 py-3.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
        dark
          ? "border-zinc-700 text-background hover:bg-zinc-900"
          : "border-foreground text-foreground hover:bg-surface"
      }`}
    >
      {children}
    </a>
  );
}

function CTAGroup({ dark = false, stacked = false }) {
  return (
    <div
      className={
        stacked
          ? "flex flex-col items-center gap-3"
          : "flex flex-col gap-3 sm:flex-row sm:items-center"
      }
    >
      <SecondaryButton href="/request-operator-review" dark={dark}>
        Request an Operator Review →
      </SecondaryButton>
      <PrimaryButton href="/onboarding" dark={dark}>
        Apply for Onboarding
      </PrimaryButton>
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteLoader>
      <SiteHeader reveal />

      <main>
        <section id="hero" className="border-b border-border bg-white pt-16">
          <Container className="flex min-h-[calc(100vh-4rem)] flex-col justify-start pt-10 pb-20 lg:pt-12 lg:pb-28">
            <p className="reveal-hero mb-8 font-sans text-[11px] font-normal uppercase tracking-[0.18em] text-zinc-900">
              Environmental Infrastructure for ABA
            </p>

            <h1 className="font-hero-georgia reveal-hero w-full text-[3.75rem] font-normal leading-[0.90] tracking-[-0.06em] text-black sm:text-8xl lg:text-[7rem] lg:leading-[0.88]">
              Controlled Environments
              <br />
              For Growing ABA
              <br />
              Organizations.
            </h1>

            <div className="reveal-hero mt-12 ml-2 grid max-w-3xl gap-6 sm:ml-3 sm:grid-cols-[1.45fr_0.85fr] sm:gap-0 lg:mt-14 lg:ml-4">
              <p className="font-sans text-lg leading-[1.55] text-black sm:pr-4 lg:text-[1.1875rem] lg:leading-[1.55]">
                We help ABA operators create calmer, more consistent clinic
                environments so staff stay regulated, parents stay confident,
                and leadership stays focused on growth.
              </p>

              <p className="border-t border-zinc-300 pt-6 font-sans text-lg leading-[1.55] text-black sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0 lg:text-[1.1875rem] lg:leading-[1.55]">
                Because in ABA, cleanliness isn&apos;t cosmetic. It&apos;s{" "}
                <span className="font-semibold text-black">
                  emotional infrastructure.
                </span>
              </p>
            </div>

            <div className="reveal-hero mt-12">
              <CTAGroup />
            </div>
          </Container>
        </section>

        <section className="bg-black py-24 text-white lg:py-32">
          <Container>
            <FadeIn className="mb-12 flex items-center gap-4" y={16} duration={0.7}>
              <span className="text-[11px] font-normal uppercase tracking-[0.18em] text-zinc-400">
                The Real Problem
              </span>
              <span className="h-px flex-1 bg-zinc-700" />
            </FadeIn>

            <FadeIn className="relative mx-auto w-full max-w-3xl">
              <ArrowRight
                aria-hidden
                className="pointer-events-none absolute -left-10 top-[48%] h-6 w-6 -translate-y-1/2 text-white sm:-left-12"
                strokeWidth={2}
              />
              <Image
                src="/your_environment_diagram_poppins.svg?v=4"
                alt="Your environment is either a stabilizing force or another source of stress"
                width={568}
                height={376}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full object-contain"
              />
            </FadeIn>

            <FadeIn className="mx-auto mt-16 w-full max-w-6xl text-center lg:mt-20">
              <p className="font-sans text-xs font-medium uppercase leading-[1.7] tracking-[0.08em] text-white sm:text-sm lg:text-[0.9375rem] lg:leading-[1.75] lg:tracking-[0.1em]">
                ABA operators manage hundreds of variables they can&apos;t
                control.
                <br />
                The environment is one of the few they can.
                <br />
                <span className="inline-block sm:whitespace-nowrap">
                  We believe great clinical infrastructure depends on equally
                  strong environmental infrastructure.
                </span>
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="border-b border-border bg-white py-24 lg:py-32">
          <Container className="flex flex-col items-center text-center">
            <FadeIn>
              <h2 className="max-w-4xl font-serif text-3xl font-normal tracking-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                We create stability through consistency.
              </h2>
            </FadeIn>

            <StaggerFadeIn
              className="mt-14 flex max-w-5xl flex-col items-center gap-4 sm:mt-16 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-3 lg:mt-20 lg:gap-x-4"
              stagger={0.08}
              y={16}
            >
              {[
                ["Controlled", "Environment"],
                ["Staff", "Regulation"],
                ["Higher", "Retention"],
                ["Leadership", "Capacity"],
              ].map(([first, second], index, arr) => (
                <div
                  key={`${first}-${second}`}
                  data-stagger-item
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-black sm:text-xs lg:text-sm lg:tracking-[0.16em]">
                    <span className="font-normal">{first}</span>{" "}
                    <span className="font-bold">{second}</span>
                  </p>
                  {index < arr.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden text-zinc-400 sm:inline"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </StaggerFadeIn>

            <FadeIn className="mt-8 lg:mt-10">
              <p className="font-sans text-sm leading-relaxed text-zinc-600 sm:whitespace-nowrap lg:text-base">
                Environmental control isn&apos;t the outcome. It&apos;s the
                starting point.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-foreground py-24 text-background lg:py-32 [&_.text-muted]:text-zinc-400 [&_.text-subtle]:text-zinc-500 [&_.bg-border]:bg-zinc-800 [&_.border-border]:border-zinc-800">
          <Container>
            <SectionTag number="02">The Environment</SectionTag>

            <FadeIn>
              <p className="text-base text-zinc-400">Your environment is either:</p>
            </FadeIn>

            <StaggerFadeIn
              className="mt-12 space-y-6 lg:mt-16"
              stagger={0.18}
              y={32}
            >
              <p
                data-stagger-item
                className="font-serif text-6xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
              >
                A stabilizing force
              </p>
              <p
                data-stagger-item
                className="text-sm font-medium mt-8 uppercase tracking-[0.2em] text-zinc-500"
              >
                or
              </p>
              <p
                data-stagger-item
                className="font-serif text-6xl font-semibold tracking-tight text-zinc-300 sm:text-6xl lg:text-7xl"
              >
                Another source of stress.
              </p>
            </StaggerFadeIn>
          </Container>
        </section>

        <section className="border-b border-border py-24 lg:py-32">
          <Container>
            <SectionTag number="03">Why We Exist</SectionTag>

            <FadeIn className="max-w-3xl">
              <p className="font-serif text-3xl leading-snug text-muted lg:text-4xl lg:leading-snug">
                Every ABA operator manages hundreds of variables they can&apos;t
                control.{" "}
                <span className="font-medium text-foreground">
                  The environment is one of the few they can.
                </span>
              </p>
              <p className="mt-3 font-sans text-sm leading-snug text-zinc-700">
                We believe great clinical infrastructure depends on equally
                strong environmental infrastructure.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <SectionTag number="04">What We Build</SectionTag>

            <div className="max-w-5xl">
              <FadeIn>
                <h2 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                  Environmental infrastructure for calmer clinics.
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-snug text-zinc-700">
                  We build environmental infrastructure that creates calmer,
                  more consistent clinic environments.
                </p>
              </FadeIn>

              <StaggerFadeIn
                as="ul"
                className="mt-7 grid max-w-xl grid-cols-1 gap-y-2"
                stagger={0.08}
              >
                {[
                  "Environments that staff trust",
                  "Environments that parents feel confident in",
                  "Consistency across every clinic",
                  "Clear accountability",
                  "Fewer operational distractions",
                  "More capacity for leadership to focus on growth",
                ].map((item) => (
                  <li
                    key={item}
                    data-stagger-item
                    className="flex gap-2.5 text-sm font-medium leading-snug tracking-tight text-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-foreground"
                    >
                      <Check className="h-2 w-2" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </StaggerFadeIn>
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-surface py-24 lg:py-32">
          <Container>
            <SectionTag number="05">Built For Growing Organizations</SectionTag>

            <FadeIn className="max-w-4xl">
              <p className="text-sm leading-snug text-zinc-700 lg:text-base">
                As organizations grow, environmental consistency becomes harder
                to maintain.
              </p>
              <p className="mt-6 font-serif text-3xl font-semibold leading-snug tracking-tight text-foreground lg:text-5xl lg:leading-snug">
                Without strong systems, every location slowly becomes its own
                version of &ldquo;good enough.&rdquo;
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-snug text-zinc-700">
                We help operators create consistency across every clinic they
                oversee so growth doesn&apos;t come at the expense of quality.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <SectionTag number="06">Partnership</SectionTag>

            <FadeIn className="max-w-3xl">
              <h2 className="font-serif text-4xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                We become part of the environmental infrastructure behind your
                clinics.
              </h2>
              <p className="mt-4 text-sm leading-snug text-zinc-700 lg:text-base">
                The team responsible for helping your environments
                remain calm, consistent, and operationally dependable as your
                organization grows.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="border-t border-border py-24 lg:py-32">
          <Container>
            <SectionTag number="07">Client Story</SectionTag>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <FadeIn className="flex flex-col justify-center">
                <p className="text-sm font-medium text-muted">
                  Hear it from an operator in 80 seconds
                </p>
                <blockquote className="mt-8">
                  <p className="font-serif text-2xl font-semibold leading-snug tracking-tight text-foreground lg:text-3xl">
                    &ldquo;Not having to worry about how clean our clinic is or
                    the quality of cleanliness has been a huge lift, both for me
                    and for my team.&rdquo;
                  </p>
                </blockquote>
              </FadeIn>

              <FadeIn delay={0.15} y={40}>
                <div
                  className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface lg:aspect-video"
                  role="img"
                  aria-label="Video player placeholder"
                >
                  <button
                    type="button"
                    className="group flex flex-col items-center gap-4 text-muted transition-colors hover:text-foreground"
                    aria-label="Play operator testimonial"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-foreground">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M0 0v18l16-9L0 0z" />
                      </svg>
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.14em]">
                      Play testimonial
                    </span>
                  </button>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section
          id="begin"
          className="border-t border-border bg-white py-24 lg:py-32"
        >
          <Container>
            <FadeIn className="mb-16 flex items-center gap-4 lg:mb-20" y={16} duration={0.7}>
              <span className="text-[11px] font-normal uppercase tracking-[0.18em] text-zinc-500">
                Begin
              </span>
              <span className="h-px flex-1 bg-border" />
            </FadeIn>

            <FadeIn className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-normal tracking-tight text-black sm:text-4xl lg:text-[2.75rem] lg:leading-[1.25]">
                We intentionally partner with
                <br />
                only a handful of growing multi-clinic
                <br />
                organizations each year.
              </h2>

              <p className="mt-8 max-w-2xl font-sans text-[11px] font-normal uppercase tracking-[0.14em] text-black sm:text-xs lg:tracking-[0.16em]">
                Because protecting the standard matters more than accelerating
                our own growth.
              </p>

              <div className="mt-12">
                <CTAGroup stacked />
              </div>
            </FadeIn>
          </Container>
        </section>
      </main>

      <FadeIn as="footer" className="border-t border-border py-10" y={20}>
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black"
          >
            We Clean ABA™
          </a>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} We Clean ABA. All rights reserved.
          </p>
        </Container>
      </FadeIn>
    </SiteLoader>
  );
}
