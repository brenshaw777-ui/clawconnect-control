import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const items = [
  "Stable Firefox packaging",
  "Signed extension builds and checksums",
  "Team and collaboration API endpoints",
  "Installer scripts for Windows, macOS, Linux",
];

const Roadmap = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="mb-4 inline-block font-mono text-[12px] tracking-widest text-claw-blue/50">
          /roadmap
        </span>
        <h2 className="font-heading text-[30px] font-bold tracking-tight text-claw-text md:text-[42px]">
          Planned updates
        </h2>

        <div className="mt-10 max-w-lg space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative flex items-start gap-4 py-4"
            >
              {/* Vertical line */}
              {i < items.length - 1 && (
                <div className="absolute left-[7px] top-[28px] bottom-0 w-px bg-claw-border/30" />
              )}
              <Circle size={15} className="mt-0.5 flex-shrink-0 text-claw-blue/40 fill-claw-blue/10" />
              <span className="font-sans text-[15px] text-claw-muted">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
