"use client";

import Image from "next/image";
import FadeIn from "./components/gsap/FadeIn";
import SiteLoader from "./components/gsap/SiteLoader";
import StaggerFadeIn from "./components/gsap/StaggerFadeIn";

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
      <span className="font-mono text-xs text-subtle">{number}</span>
      <span className="h-px flex-1 bg-border" />
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {children}
      </span>
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

function SecondaryButton({ href, children, dark = false }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-colors ${
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
      <PrimaryButton href="#onboarding" dark={dark}>
        Apply for Onboarding
      </PrimaryButton>
      <span className={`hidden text-sm ${divider} sm:block`}>or</span>
      <SecondaryButton href="#review" dark={dark}>
        Request an Operator Review
      </SecondaryButton>
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteLoader>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="reveal-nav font-serif text-lg font-semibold tracking-tight"
          >
            We Clean ABA
          </a>
          <nav className="flex items-center gap-8">
            <a
              href="#onboarding"
              className="reveal-nav hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
            >
              Onboarding
            </a>
            <a
              href="#review"
              className="reveal-nav text-sm text-muted transition-colors hover:text-foreground"
            >
              Review
            </a>
          </nav>
        </Container>
      </header>

      <main>
        <section id="hero" className="hero-glow border-b border-border pt-16">
          <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-24 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-32">
            <div>
              <p className="reveal-hero mb-6 text-sm font-medium text-muted">
                Environmental infrastructure for ABA
              </p>

              <h1 className="reveal-hero max-w-4xl font-serif text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-6xl lg:text-[3.5rem] lg:leading-[1.06]">
                Controlled environments for growing ABA organizations.
              </h1>

              <p className="reveal-hero mt-8 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">
                We help ABA operators create calmer, more consistent clinic
                environments so staff stay regulated, parents stay confident, and
                leadership stays focused on growth.
              </p>

              <div className="reveal-hero mt-12 max-w-xl rounded-2xl border border-border bg-surface p-6 lg:p-8">
                <p className="font-serif text-lg font-medium leading-snug tracking-tight text-foreground lg:text-xl">
                  Because in ABA, cleanliness is not cosmetic.
                </p>
                <p className="mt-2 font-serif text-lg font-medium leading-snug tracking-tight text-foreground lg:text-xl">
                  It is emotional infrastructure.
                </p>
              </div>

              <div className="reveal-hero mt-12">
                <CTAGroup />
              </div>
            </div>

            <div className="reveal-hero relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src="/ABA-Organizations-modified.webp"
                alt="Calm, consistent clinic environment for a growing ABA organization"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <SectionTag number="01">The Real Problem</SectionTag>

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <FadeIn>
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                  When the environment slips, everyone feels it.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  Every ABA clinic operates under constant emotional and
                  operational pressure.
                </p>
              </FadeIn>

              <StaggerFadeIn className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {[
                  "Staff nervous systems stay elevated.",
                  "Parents quietly lose confidence.",
                  "Children become harder to regulate.",
                  "Leadership gets pulled into noise instead of growth.",
                ].map((line) => (
                  <div
                    key={line}
                    data-stagger-item
                    className="bg-background p-6 lg:p-8"
                  >
                    <p className="text-base font-medium leading-relaxed tracking-tight text-foreground">
                      {line}
                    </p>
                  </div>
                ))}
              </StaggerFadeIn>
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
                className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              >
                a stabilizing force
              </p>
              <p
                data-stagger-item
                className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
              >
                or
              </p>
              <p
                data-stagger-item
                className="font-serif text-4xl font-semibold tracking-tight text-zinc-300 sm:text-5xl lg:text-6xl"
              >
                another source of stress.
              </p>
            </StaggerFadeIn>
          </Container>
        </section>

        <section className="border-b border-border py-24 lg:py-32">
          <Container>
            <SectionTag number="03">Why We Exist</SectionTag>

            <FadeIn className="max-w-3xl">
              <p className="font-serif text-2xl leading-relaxed text-muted lg:text-3xl lg:leading-relaxed">
                Every ABA operator manages hundreds of variables they can&apos;t
                control.{" "}
                <span className="font-medium text-foreground">
                  The environment is one of the few they can.
                </span>
              </p>

              <div className="mt-12 space-y-6 border-t border-border pt-12 text-lg leading-relaxed text-muted">
                <p>That&apos;s why we built We Clean ABA.</p>
                <p>
                  We believe great clinical infrastructure depends on equally
                  strong environmental infrastructure.
                </p>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <SectionTag number="04">What We Build</SectionTag>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
              <FadeIn>
                <h2 className="font-serif text-3xl font-semibold tracking-tight lg:text-4xl">
                  Environmental infrastructure for calmer clinics.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  We build environmental infrastructure that creates calmer,
                  more consistent clinic environments.
                </p>
              </FadeIn>

              <StaggerFadeIn
                as="ul"
                className="grid gap-3 sm:grid-cols-2"
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
                    className="rounded-xl border border-border bg-surface px-5 py-4 text-sm font-medium leading-relaxed text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </StaggerFadeIn>
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-surface py-24 lg:py-32">
          <Container>
            <SectionTag number="05">Built For Growing Organizations</SectionTag>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <FadeIn>
                <p className="text-lg leading-relaxed text-muted">
                  As organizations grow, environmental consistency becomes
                  harder to maintain.
                </p>
              </FadeIn>
              <FadeIn delay={0.12}>
                <div className="space-y-6">
                  <p className="font-serif text-2xl font-semibold leading-snug tracking-tight text-foreground lg:text-3xl">
                    Without strong systems, every location slowly becomes its own
                    version of &ldquo;good enough.&rdquo;
                  </p>
                  <p className="text-lg leading-relaxed text-muted">
                    We help operators create consistency across every clinic they
                    oversee so growth doesn&apos;t come at the expense of quality.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <SectionTag number="06">Partnership</SectionTag>

            <FadeIn className="max-w-3xl">
              <h2 className="font-serif text-3xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                We become part of the environmental infrastructure behind your
                clinics.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted lg:text-xl">
                We&apos;re the team responsible for helping your environments
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
          id="onboarding"
          className="border-t border-border bg-foreground py-24 text-background lg:py-32 [&_.text-muted]:text-zinc-400 [&_.text-subtle]:text-zinc-500 [&_.bg-border]:bg-zinc-800 [&_.border-border]:border-zinc-800"
        >
          <Container>
            <SectionTag number="08">Begin</SectionTag>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-24">
              <FadeIn>
                <h2 className="font-serif text-3xl font-semibold tracking-tight lg:text-5xl lg:leading-tight">
                  We intentionally partner with only a handful of multi-clinic
                  organizations each year.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                  Because protecting the standard matters more than accelerating
                  growth.
                </p>
              </FadeIn>

              <FadeIn delay={0.12} id="review">
                <CTAGroup dark />
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>

      <FadeIn as="footer" className="border-t border-border py-10" y={20}>
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-sm font-semibold tracking-tight">
            We Clean ABA
          </p>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} We Clean ABA. All rights reserved.
          </p>
        </Container>
      </FadeIn>
    </SiteLoader>
  );
}
