import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    text: "Agent or tool sends a command to local bridge at 127.0.0.1:18990.",
  },
  {
    num: "02",
    text: "Bridge authenticates and routes through websocket to attached extension.",
  },
  {
    num: "03",
    text: "Extension executes action in target tab and returns structured result.",
  },
  {
    num: "04",
    text: "Optional debug endpoints show state, health, and capabilities.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="container relative mx-auto px-4 lg:px-6">
        <span className="mb-4 inline-block font-mono text-[12px] tracking-widest text-claw-blue/50">
          /flow
        </span>
        <h2 className="font-heading text-[30px] font-bold tracking-tight text-claw-text md:text-[42px]">
          How ClawConnect works
        </h2>
        <p className="mt-3 font-sans text-base text-claw-muted">
          Simple local architecture.
        </p>

        {/* Desktop: horizontal flow */}
        <div className="mt-14 hidden md:grid md:grid-cols-4 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative flex flex-col"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+24px)] right-0 h-px bg-gradient-to-r from-claw-blue/30 to-claw-border/30 z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-claw-blue/25 bg-claw-panel font-mono text-[13px] font-semibold text-claw-blue glow-blue-sm">
                  {step.num}
                </div>
                <p className="mt-4 max-w-[220px] font-sans text-[14px] leading-relaxed text-claw-muted px-2">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative flex gap-4"
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px bg-claw-border/30" />
              )}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-claw-blue/25 bg-claw-panel font-mono text-[13px] font-semibold text-claw-blue">
                {step.num}
              </div>
              <p className="pt-2 font-sans text-[14px] leading-relaxed text-claw-muted">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
