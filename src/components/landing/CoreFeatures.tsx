import { motion } from "framer-motion";
import { Layers, ArrowRightLeft, Cpu, RefreshCw, HeartPulse, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Attach, focus, and detach with control",
    text: "Manage multiple tabs explicitly by tab ID or host strategy.",
    tag: "/tabs",
  },
  {
    icon: ArrowRightLeft,
    title: "Deterministic command flow",
    text: "Commands return clear ACK status and structured result payloads.",
    tag: "/command",
  },
  {
    icon: Cpu,
    title: "Capability-aware routing",
    text: "Server checks supported extension actions and returns fallback errors without guessing.",
    tag: "/capabilities",
  },
  {
    icon: RefreshCw,
    title: "Reliable reconnect behavior",
    text: "Built in retry and reconnect handling for real world session instability.",
    tag: "/reconnect",
  },
  {
    icon: HeartPulse,
    title: "Health and debug endpoints",
    text: "/health, /state, /tabs, /debug/state, /debug/capabilities.",
    tag: "/debug",
    mono: true,
  },
  {
    icon: ShieldCheck,
    title: "Security defaults",
    text: "Localhost binding and token auth. No mandatory cloud control plane.",
    tag: "/security",
  },
];

const CoreFeatures = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="mb-4 inline-block font-mono text-[12px] tracking-widest text-claw-blue/50">
          /features
        </span>
        <h2 className="font-heading text-[30px] font-bold tracking-tight text-claw-text md:text-[42px] max-w-2xl">
          Core features built for production
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group rounded-[18px] border border-claw-border/50 bg-claw-panel panel-shadow transition-all hover:border-claw-border hover:-translate-y-px"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-claw-border/30 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <f.icon size={14} className="text-claw-blue/70" />
                  <span className="font-mono text-[11px] text-claw-muted/50">{f.tag}</span>
                </div>
              </div>
              <div className="p-4 pt-3.5">
                <h3 className="font-heading text-[16px] font-semibold text-claw-text">{f.title}</h3>
                <p className={`mt-2 text-[13px] leading-relaxed text-claw-muted ${f.mono ? "font-mono" : "font-sans"}`}>
                  {f.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
