import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Download for Windows", href: "#pricing", sectionId: "pricing" },
  { label: "How It Works", href: "#how-it-works", sectionId: "how-it-works" },
  { label: "Pricing", href: "#pricing", sectionId: "pricing" },
  { label: "FAQ", href: "#faq", sectionId: "faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-claw-border bg-claw-deepest/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:px-6">
        <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-claw-text">
          <img src={logo} alt="ClawConnect" className="h-6 w-6" />
          <span>ClawConnect</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[12px] transition-colors ${
                activeSection === link.sectionId
                  ? "text-claw-text"
                  : "text-claw-muted hover:text-claw-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#pricing"
            className="inline-flex h-[38px] items-center border border-claw-border bg-claw-panel px-4 text-[12px] font-medium text-claw-text transition-colors hover:bg-claw-panel-hover"
          >
            Download for Windows
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-claw-muted transition-colors hover:text-claw-text md:hidden"
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
                className={`text-[13px] ${
                  activeSection === link.sectionId ? "text-claw-text" : "text-claw-muted hover:text-claw-text"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex h-[38px] items-center border border-claw-border bg-claw-panel px-4 text-[12px] font-medium text-claw-text"
          >
            Download for Windows
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
