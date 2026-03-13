import { motion } from "framer-motion";

const items = [
  "Stable Firefox packaging",
  "Signed extension builds and checksums",
  "Team and collaboration API endpoints",
  "Installer scripts for Windows, macOS, Linux",
];

const Roadmap = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">--- /roadmap ---</span>
        <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text">
          Planned updates
        </h2>

        <div className="mt-8 max-w-lg space-y-1">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="flex items-center gap-3 py-1.5 text-[13px] rounded-sm transition-colors hover:bg-claw-panel-hover"
            >
              <span className="text-claw-muted/50">[ ]</span>
              <span className="text-claw-muted">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
