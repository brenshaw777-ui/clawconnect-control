const links = ["GitHub", "Docs", "Privacy", "Releases", "Issues"];

const Footer = () => {
  return (
    <footer className="border-t border-claw-border/40 py-8">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:justify-between lg:px-6">
        <span className="font-sans text-[13px] text-claw-muted/60">
          ClawConnect by the Open Source community.
        </span>
        <nav className="flex flex-wrap items-center gap-5">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-[13px] text-claw-muted/50 transition-colors hover:text-claw-muted"
            >
              {link}
            </a>
          ))}
        </nav>
        <span className="font-mono text-[11px] text-claw-muted/30">
          ClawConnect 2026
        </span>
      </div>
    </footer>
  );
};

export default Footer;
