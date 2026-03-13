import { motion } from "framer-motion";

const features = [
  { tag: "/tabs", title: "Attach, focus, and detach with control", text: "Manage multiple tabs explicitly by tab ID or host strategy." },
  { tag: "/command", title: "Deterministic command flow", text: "Commands return clear ACK status and structured result payloads." },
  { tag: "/capabilities", title: "Capability-aware routing", text: "Server checks supported extension actions and returns fallback errors without guessing." },
  { tag: "/reconnect", title: "Reliable reconnect behavior", text: "Built in retry and reconnect handling for real world session instability." },
  { tag: "/debug", title: "Health and debug endpoints", text: "/health, /state, /tabs, /debug/state, /debug/capabilities.", mono: true },
  { tag: "/security", title: "Security defaults", text: "Localhost binding and token auth. No mandatory cloud control plane." },
];

const CoreFeatures = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">--- /features ---</span>
        <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text max-w-2xl">
          Core features built for production
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="border border-claw-border bg-claw-panel transition-colors hover:border-claw-muted/30"
            >
              <div className="border-b border-claw-border px-3 py-1.5">
                <span className="text-[10px] text-claw-green/60">{f.tag}</span>
              </div>
              <div className="p-4">
                <h3 className="text-[13px] font-semibold text-claw-text">{f.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-claw-muted">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
