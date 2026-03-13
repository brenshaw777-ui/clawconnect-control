import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Docs", "GitHub", "Installation", "API", "OpenClaw Skill"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-claw-border/60 bg-claw-deepest/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <a href="#" className="font-heading text-lg font-bold tracking-tight text-claw-text">
          ClawConnect
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-[13px] font-medium text-claw-muted transition-colors hover:text-claw-text"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="flex h-[38px] items-center rounded-[12px] border border-claw-border bg-claw-panel px-4 font-sans text-[13px] font-medium text-claw-muted transition-all hover:-translate-y-px hover:border-claw-muted/40 hover:text-claw-text"
          >
            View on GitHub
          </a>
          <a
            href="#"
            className="flex h-[38px] items-center rounded-[12px] bg-claw-blue px-4 font-sans text-[13px] font-bold text-claw-deepest transition-all hover:-translate-y-px glow-blue-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-claw-muted md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-claw-border/40 bg-claw-deepest px-4 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="font-sans text-sm text-claw-muted hover:text-claw-text">
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a href="#" className="flex h-11 items-center justify-center rounded-[12px] border border-claw-border bg-claw-panel font-sans text-sm font-medium text-claw-muted">
              View on GitHub
            </a>
            <a href="#" className="flex h-11 items-center justify-center rounded-[12px] bg-claw-blue font-sans text-sm font-bold text-claw-deepest">
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
