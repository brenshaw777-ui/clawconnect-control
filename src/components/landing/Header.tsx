import { useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Docs", href: "#how-it-works" },
  { label: "Installation", href: "#install" },
  { label: "API", href: "#api" },
  { label: "OpenClaw Skill", href: "#openclaw" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-claw-border bg-claw-deepest">
      <div className="container mx-auto flex h-12 items-center justify-between px-4 lg:px-6">
        <a href="#" className="text-[13px] font-bold text-claw-green">[ClawConnect]</a>

        <nav className="hidden items-center gap-0 md:flex">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center">
              {i > 0 && <span className="text-claw-border px-2 text-[11px]">|</span>}
              <a href={link.href} className="text-[12px] text-claw-muted transition-colors hover:text-claw-green">
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#open-source" className="text-[12px] text-claw-muted transition-colors hover:text-claw-green">
            [GitHub]
          </a>
          <a href="#install" className="text-[12px] font-bold text-claw-green transition-colors hover:text-claw-green/80">
            [Get Started]
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-claw-muted md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-claw-border bg-claw-deepest px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[12px] text-claw-muted hover:text-claw-green"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#open-source" className="text-[12px] text-claw-muted">[GitHub]</a>
            <a href="#install" className="text-[12px] font-bold text-claw-green">[Get Started]</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
