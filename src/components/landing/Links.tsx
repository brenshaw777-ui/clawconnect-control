import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "#", icon: "⟐" },
  { label: "Telegram", href: "#", icon: "⟐" },
  { label: "X (Twitter)", href: "#", icon: "⟐" },
  { label: "ClawHub", href: "#", icon: "⟐" },
];

const Links = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container relative mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">--- /links ---</span>
        <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text">
          Connect with us
        </h2>
        <p className="mt-2 text-[13px] text-claw-muted">
          // Find us across the web.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group flex flex-col items-center gap-3 border border-claw-border bg-claw-panel px-4 py-6 text-center transition-all hover:border-claw-green/30 hover:bg-claw-panel-hover"
            >
              <span className="text-[24px] text-claw-green/60 transition-colors group-hover:text-claw-green">
                {link.icon}
              </span>
              <span className="text-[13px] font-bold text-claw-muted transition-colors group-hover:text-claw-green">
                [{link.label}]
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
