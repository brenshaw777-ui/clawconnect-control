import { motion } from "framer-motion";

const points = [
  "Install and startup steps",
  "attach and focus workflow",
  "host strategy setup",
  "command execution guardrails",
];

const OpenClawIntegration = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl border border-claw-border bg-claw-panel"
        >
          <div className="border-b border-claw-border px-3 py-1.5">
            <span className="text-[10px] text-claw-muted/50"># integration.yaml</span>
          </div>
          <div className="p-4 md:p-6">
            <h2 className="text-[20px] md:text-[28px] font-bold tracking-tight text-claw-text">
              Native integration for OpenClaw
            </h2>
            <p className="mt-3 text-[13px] text-claw-muted leading-relaxed">
              Use the ClawConnect OpenClaw skill to wire browser tab operations directly into your agent workflows.
            </p>

            <div className="mt-5 space-y-1.5">
              {points.map((p) => (
                <div key={p} className="text-[12px] text-claw-muted">
                  <span className="text-claw-green/60">- </span>{p}
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-6 inline-flex h-[36px] items-center border border-claw-border px-4 text-[12px] text-claw-muted transition-colors hover:border-claw-muted/40 hover:text-claw-text"
            >
              [View OpenClaw Skill Docs]
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenClawIntegration;
