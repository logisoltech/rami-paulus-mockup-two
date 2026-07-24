"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";
import FadeIn from "./components/gsap/FadeIn";
import SiteLoader from "./components/gsap/SiteLoader";
import StaggerFadeIn from "./components/gsap/StaggerFadeIn";
import SiteHeader from "./components/SiteHeader";

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>
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
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-none px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
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
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-none border px-6 py-3 text-sm font-medium transition-colors ${
        dark
          ? "border-zinc-700 text-background hover:bg-zinc-900"
          : "border-border text-foreground hover:bg-surface"
      }`}
    >
      {children}
    </a>
  );
}

function CTAGroup({ dark = false }) {
  const divider = dark ? "text-zinc-500" : "text-subtle";
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <PrimaryButton href="/onboarding" dark={dark}>
        Apply for Onboarding
      </PrimaryButton>
      {/* <span className={`hidden text-sm ${divider} sm:block`}>or</span> */}
      <SecondaryButton href="/request-operator-review" dark={dark}>
        Request an Operator Review
      </SecondaryButton>
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteLoader>
      <SiteHeader reveal />

      <main>
        <section id="hero" className="border-b border-border bg-white pt-16">
          <Container className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 lg:py-28">
            <p className="reveal-hero mb-6 font-sans text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Environmental infrastructure for ABA
            </p>

            <h1
              className="reveal-hero text-[3.25rem] font-normal leading-[1.04] tracking-[-0.02em] text-foreground sm:text-7xl lg:text-[5.75rem] lg:leading-[1.02]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Controlled Environments
              <br />
              For Growing ABA
              <br />
              Organizations.
            </h1>

            <div className="reveal-hero mt-10 grid max-w-5xl gap-10 sm:grid-cols-2 lg:ml-[min(24vw,16rem)] lg:mt-14 lg:max-w-4xl lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-14">
              <p className="font-sans text-base leading-relaxed text-muted lg:text-[1.0625rem] lg:leading-[1.7]">
                We help ABA operators create calmer, more consistent clinic
                environments so staff stay regulated, parents stay confident,
                and leadership stays focused on growth.
              </p>

              <div className="min-w-0">
                <p className="border-l border-foreground/30 pl-6 font-serif text-[1.125rem] font-bold leading-[1.55] tracking-[-0.01em] text-muted sm:whitespace-nowrap lg:pl-8 lg:text-[1.25rem]">
                  Because in ABA, cleanliness is not cosmetic.
                </p>
                <p className="mt-3 pl-6 font-serif text-[1.375rem] font-bold leading-[1.35] tracking-[-0.02em] text-foreground sm:whitespace-nowrap lg:pl-8 lg:text-[1.625rem]">
                  It is emotional infrastructure.
                </p>
                <div className="mt-8 pl-6 lg:pl-8">
                  <CTAGroup />
                </div>
              </div>
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
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    Every ABA clinic operates under constant emotional and
                    operational pressure.
                  </p>
                </FadeIn>

                <StaggerFadeIn
                  as="ul"
                  className="mt-12 grid grid-cols-1 gap-y-5"
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
                      className="flex gap-3 text-base font-medium leading-relaxed tracking-tight text-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground"
                      >
                        <X className="h-3 w-3" strokeWidth={2.5} />
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
              <p className="text-lg text-zinc-400">Your environment is either:</p>
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
              <p className="mt-3 font-sans text-base leading-relaxed text-muted">
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
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                  We build environmental infrastructure that creates calmer,
                  more consistent clinic environments.
                </p>
              </FadeIn>

              <StaggerFadeIn
                as="ul"
                className="mt-12 grid max-w-xl grid-cols-1 gap-y-5"
                stagger={0.08}
              >
                {[
                  "environments that staff trust",
                  "environments that parents feel confident in",
                  "consistency across every clinic",
                  "clear accountability",
                  "fewer operational distractions",
                  "more capacity for leadership to focus on growth",
                ].map((item) => (
                  <li
                    key={item}
                    data-stagger-item
                    className="flex gap-3 text-base font-medium leading-relaxed tracking-tight text-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground"
                    >
                      <Check className="h-3 w-3" strokeWidth={2.5} />
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
              <p className="text-base leading-relaxed text-muted lg:text-lg">
                As organizations grow, environmental consistency becomes harder
                to maintain.
              </p>
              <p className="mt-6 font-serif text-3xl font-semibold leading-snug tracking-tight text-foreground lg:text-5xl lg:leading-snug">
                Without strong systems, every location slowly becomes its own
                version of &ldquo;good enough.&rdquo;
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
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
              <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
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
                <p className="mt-4 mb-6 text-base leading-relaxed text-zinc-400 lg:text-lg">
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
