import { motion } from "framer-motion";
import { Package, Download } from "lucide-react";

const BrowserStore = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block font-mono text-[12px] tracking-widest text-claw-blue/50">
            /release
          </span>
          <h2 className="font-heading text-[30px] font-bold tracking-tight text-claw-text md:text-[42px]">
            Chrome extension release
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-claw-muted">
            ClawConnect ships as local extension plus bridge. Open-source code stays public and auditable.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="flex h-[48px] items-center gap-2.5 rounded-[13px] bg-claw-blue px-6 font-sans text-[14px] font-bold text-claw-deepest transition-all hover:-translate-y-px glow-blue"
            >
              <Package size={16} />
              Google Web Store (Unlisted)
            </a>
            <a
              href="#"
              className="flex h-[48px] items-center gap-2.5 rounded-[13px] border border-claw-border bg-claw-panel px-6 font-sans text-[14px] font-medium text-claw-muted transition-all hover:-translate-y-px hover:border-claw-muted/40 hover:text-claw-text"
            >
              <Download size={16} />
              Manual install (dev mode)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrowserStore;
