"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";
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

function CTAGroup({ dark = false }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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

            <h1 className="font-hero-georgia reveal-hero w-full text-[3.5rem] font-normal leading-[1.04] tracking-[-0.02em] text-black sm:text-7xl lg:text-[6.25rem] lg:leading-[1.01]">
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

        <section className="bg-[#F3F3F3] py-24 lg:py-32">
          <Container>
            <SectionTag number="01">The Real Problem</SectionTag>

            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
              <div className="max-w-xl">
                <FadeIn>
                  <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground lg:text-5xl lg:leading-tight">
                    When the environment slips, everyone feels it.
                  </h2>
                  <p className="mt-3 text-sm leading-snug text-zinc-700">
                    Every ABA clinic operates under constant emotional and
                    operational pressure.
                  </p>
                </FadeIn>

                <StaggerFadeIn
                  as="ul"
                  className="mt-7 grid grid-cols-1 gap-y-2"
                >
                  {[
                    "Staff nervous systems stay elevated.",
                    "Parents quietly lose confidence.",
                    "Children become harder to regulate.",
                    "Leadership gets pulled into noise instead of growth.",
                  ].map((line) => (
                    <li
                      key={line}
                      data-stagger-item
                      className="flex gap-2.5 text-sm font-medium leading-snug tracking-tight text-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-foreground"
                      >
                        <X className="h-2 w-2" strokeWidth={3} />
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </StaggerFadeIn>
              </div>

              <FadeIn
                delay={0}
                y={20}
                start="top 95%"
                className="relative mt-12 w-full"
              >
                <Image
                  src="/boxed-2.svg"
                  alt="Clinic environment"
                  width={680}
                  height={460}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full origin-center scale-110 object-contain lg:scale-125"
                />
              </FadeIn>
            </div>
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
          className="border-t border-border bg-foreground py-24 text-background lg:py-32 [&_.text-muted]:text-zinc-400 [&_.text-subtle]:text-zinc-500 [&_.bg-border]:bg-zinc-800 [&_.border-border]:border-zinc-800"
        >
          <Container>
            <SectionTag number="08">Begin</SectionTag>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-24">
              <FadeIn>
                <h2 className="font-serif text-4xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                  We intentionally partner with only a handful of multi-clinic
                  organizations each year.
                </h2>
                <p className="mt-4 mb-6 text-sm leading-snug text-zinc-400 lg:text-base">
                  Because protecting the standard matters more than accelerating
                  growth.
                </p>
                <CTAGroup dark />

              </FadeIn>

              {/* <FadeIn delay={0.12} id="review">
              </FadeIn> */}
            </div>
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
    </SiteLoader>
  );
}
