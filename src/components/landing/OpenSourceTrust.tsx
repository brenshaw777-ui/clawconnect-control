import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";

const OpenSourceTrust = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block font-mono text-[12px] tracking-widest text-claw-blue/50">
              /oss
            </span>
            <h2 className="font-heading text-[30px] font-bold tracking-tight text-claw-text md:text-[42px]">
              Built in the open
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-claw-muted">
              ClawConnect is an open source project. Fork, inspect, audit, and run it yourself.
            </p>
            <p className="mt-3 font-sans text-base leading-relaxed text-claw-muted">
              No black box model. No required cloud account. No lock in.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-sans text-[14px] font-medium text-claw-blue transition-colors hover:text-claw-blue/80"
            >
              Browse the repository
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Repo-style panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-[18px] border border-claw-border/50 bg-claw-panel panel-shadow"
          >
            <div className="flex items-center gap-2 border-b border-claw-border/30 px-4 py-3">
              <GitBranch size={14} className="text-claw-blue/60" />
              <span className="font-mono text-[12px] text-claw-muted">clawconnect / clawconnect</span>
              <span className="ml-auto rounded-md border border-claw-green/20 bg-claw-green/5 px-2 py-0.5 font-mono text-[10px] text-claw-green">
                public
              </span>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-claw-muted/70">src/bridge/</span>
                <span className="font-mono text-[10px] text-claw-muted/40">core</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-claw-muted/70">src/extension/</span>
                <span className="font-mono text-[10px] text-claw-muted/40">chrome ext</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-claw-muted/70">src/cli/</span>
                <span className="font-mono text-[10px] text-claw-muted/40">tooling</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-claw-muted/70">docs/</span>
                <span className="font-mono text-[10px] text-claw-muted/40">reference</span>
              </div>
              <div className="border-t border-claw-border/20 pt-3 font-mono text-[11px] text-claw-muted/50">
                MIT License · Contributions welcome
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceTrust;
