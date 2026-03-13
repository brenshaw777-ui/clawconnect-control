import { motion } from "framer-motion";
import { Plug, ChevronRight } from "lucide-react";

const points = [
  "Install and startup steps",
  "attach and focus workflow",
  "host strategy setup",
  "command execution guardrails",
];

const OpenClawIntegration = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="container relative mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-[20px] border border-claw-border/50 bg-claw-panel panel-shadow"
        >
          <div className="flex items-center gap-2 border-b border-claw-border/30 px-5 py-3">
            <Plug size={14} className="text-claw-blue/60" />
            <span className="font-mono text-[12px] text-claw-muted/60">/integration</span>
          </div>
          <div className="p-6 md:p-8">
            <h2 className="font-heading text-[26px] font-bold tracking-tight text-claw-text md:text-[36px]">
              Native integration for OpenClaw
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-claw-muted">
              Use the ClawConnect OpenClaw skill to wire browser tab operations directly into your agent workflows.
            </p>

            <ul className="mt-6 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <ChevronRight size={13} className="text-claw-blue/50 flex-shrink-0" />
                  <span className="font-mono text-[13px] text-claw-muted">{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex h-[44px] items-center rounded-[12px] border border-claw-border bg-claw-panel px-5 font-sans text-[14px] font-medium text-claw-muted transition-all hover:-translate-y-px hover:border-claw-muted/40 hover:text-claw-text"
            >
              View OpenClaw Skill Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenClawIntegration;
