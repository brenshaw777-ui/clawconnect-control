import { motion } from "framer-motion";

const steps = [
  { num: "01", text: "Agent or tool sends a command to local bridge at 127.0.0.1:18990." },
  { num: "02", text: "Bridge authenticates and routes through websocket to attached extension." },
  { num: "03", text: "Extension executes action in target tab and returns structured result." },
  { num: "04", text: "Optional debug endpoints show state, health, and capabilities." },
];

const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">--- /flow ---</span>
        <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text">
          How ClawConnect works
        </h2>
        <p className="mt-2 text-[13px] text-claw-muted">
          // Simple local architecture.
        </p>

        <div className="mt-10 border border-claw-border bg-claw-panel panel-hover">
          <div className="border-b border-claw-border px-4 py-1.5">
            <span className="text-[10px] text-claw-muted/50">process flow</span>
          </div>
          <div className="p-4 md:p-6 space-y-1">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex gap-3 py-1.5"
              >
                <span className="text-claw-green text-[13px] font-bold flex-shrink-0">[{step.num}]</span>
                <span className="text-[13px] text-claw-muted leading-relaxed">{step.text}</span>
              </motion.div>
            ))}
            {steps.map((_, i) => i < steps.length - 1 && (
              <span key={`pipe-${i}`} className="hidden">|</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
