import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Onboarding — We Clean ABA",
};

export default function OnboardingPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-sm font-medium text-muted">Onboarding</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Coming soon.
          </h1>
        </div>
      </main>
    </>
  );
}
