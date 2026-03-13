const links = ["GitHub", "Docs", "Privacy", "Releases", "Issues"];

const Footer = () => {
  return (
    <footer className="border-t border-claw-border py-4">
      <div className="container mx-auto flex flex-col items-center gap-3 px-4 md:flex-row md:justify-between lg:px-6">
        <span className="text-[11px] text-claw-muted/40">
          ClawConnect by the Open Source community.
        </span>
        <nav className="flex flex-wrap items-center gap-0">
          {links.map((link, i) => (
            <span key={link} className="flex items-center">
              {i > 0 && <span className="text-claw-border px-2 text-[10px]">|</span>}
              <a href="#" className="text-[11px] text-claw-muted/40 transition-colors hover:text-claw-muted">
                {link}
              </a>
            </span>
          ))}
        </nav>
        <span className="text-[10px] text-claw-muted/20">
          // ClawConnect 2026
        </span>
      </div>
    </footer>
  );
};

export default Footer;
