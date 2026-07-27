const NAV_LINKS = [
  { href: "/why-aba", label: "Why ABA" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/request-operator-review", label: "Operator Review" },
];

export default function SiteHeader({ reveal = false }) {
  const linkClass = reveal
    ? "reveal-nav text-[11px] font-normal uppercase tracking-[0.14em] text-zinc-600 transition-colors hover:text-foreground"
    : "text-[11px] font-normal uppercase tracking-[0.14em] text-zinc-600 transition-colors hover:text-foreground";
  const logoClass = reveal
    ? "reveal-nav text-[13px] font-semibold uppercase tracking-[0.16em] text-black"
    : "text-[13px] font-semibold uppercase tracking-[0.16em] text-black";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/" className={logoClass}>
          We Clean ABA™
        </a>
        <nav className="flex items-center gap-6 sm:gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
