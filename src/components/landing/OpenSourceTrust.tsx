import { motion } from "framer-motion";

const OpenSourceTrust = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[11px] text-claw-green/40 tracking-widest">--- /oss ---</span>
            <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text">
              Built in the open
            </h2>
            <p className="mt-3 text-[13px] text-claw-muted leading-relaxed">
              ClawConnect is an open source project. Fork, inspect, audit, and run it yourself.
            </p>
            <p className="mt-2 text-[13px] text-claw-muted leading-relaxed">
              No black box model. No required cloud account. No lock in.
            </p>
            <a href="#" className="mt-5 inline-block text-[12px] text-claw-green hover:text-claw-green/80 transition-colors">
              &gt; browse the repository_
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="border border-claw-border bg-claw-panel"
          >
            <div className="border-b border-claw-border px-3 py-1.5 flex items-center justify-between">
              <span className="text-[10px] text-claw-muted/50">$ ls -la src/</span>
              <span className="text-[9px] text-claw-green/50">public</span>
            </div>
            <div className="p-3 space-y-1 text-[11px] text-claw-muted/70">
              <div className="flex justify-between"><span>drwxr-xr-x  bridge/</span><span className="text-claw-muted/40">core</span></div>
              <div className="flex justify-between"><span>drwxr-xr-x  extension/</span><span className="text-claw-muted/40">chrome ext</span></div>
              <div className="flex justify-between"><span>drwxr-xr-x  cli/</span><span className="text-claw-muted/40">tooling</span></div>
              <div className="flex justify-between"><span>drwxr-xr-x  docs/</span><span className="text-claw-muted/40">reference</span></div>
              <div className="border-t border-claw-border pt-2 mt-2 text-[10px] text-claw-muted/40">
                // MIT License · Contributions welcome
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceTrust;
