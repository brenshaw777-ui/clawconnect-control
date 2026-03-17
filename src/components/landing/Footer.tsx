import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-claw-border py-6">
      <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between lg:px-6">
        <div className="flex items-center gap-2 text-[12px] text-claw-muted">
          <img src={logo} alt="ClawConnect" className="h-5 w-5" />
          <span>ClawConnect by OpenClaw</span>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-[12px] text-claw-muted">
          <a href="#pricing" className="transition-colors hover:text-claw-text">Download</a>
          <a href="#how-it-works" className="transition-colors hover:text-claw-text">Docs</a>
          <a href="#faq" className="transition-colors hover:text-claw-text">Support</a>
        </nav>

        <span className="text-[11px] text-claw-muted">© 2026 OpenClaw. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
