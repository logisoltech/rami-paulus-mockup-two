import Image from "next/image";

const NAV_LINKS = [
  { href: "/why-aba", label: "Why ABA" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/request-operator-review", label: "Request Operator Review" },
];

export default function SiteHeader({ reveal = false }) {
  const linkClass = reveal
    ? "reveal-nav text-sm text-muted transition-colors hover:text-foreground"
    : "text-sm text-muted transition-colors hover:text-foreground";
  const logoClass = reveal ? "reveal-nav inline-flex items-center" : "inline-flex items-center";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="/" className={logoClass}>
          <Image
            src="/logo-asset1-8.png"
            alt="We Clean ABA"
            width={160}
            height={28}
            priority
            className="h-4 w-auto object-contain sm:h-5"
          />
        </a>
        <nav className="flex items-center gap-4 sm:gap-6 lg:gap-8">
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
