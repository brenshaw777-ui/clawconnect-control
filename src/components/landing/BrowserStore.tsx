import { motion } from "framer-motion";

const BrowserStore = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[11px] text-claw-green/40 tracking-widest">--- /release ---</span>
          <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text">
            Chrome extension release
          </h2>
          <p className="mt-3 text-[13px] text-claw-muted leading-relaxed max-w-xl">
            ClawConnect ships as local extension plus bridge. Open-source code stays public and auditable.
          </p>

          <div className="mt-6 border border-claw-border bg-claw-panel max-w-lg">
            <div className="border-b border-claw-border px-3 py-1.5">
              <span className="text-[10px] text-claw-muted/50">$ clawconnect install --target chrome</span>
            </div>
            <div className="p-3 space-y-2">
              <a href="#" className="flex items-center gap-2 text-[12px] text-claw-green hover:text-claw-green/80 transition-colors">
                &gt; Google Web Store (Unlisted)
              </a>
              <a href="#" className="flex items-center gap-2 text-[12px] text-claw-muted hover:text-claw-text transition-colors">
                &gt; Manual install (dev mode)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrowserStore;
