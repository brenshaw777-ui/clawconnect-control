import { motion } from "framer-motion";
import { AlertTriangle, Volume2, Eye } from "lucide-react";

const cards = [
  {
    icon: AlertTriangle,
    title: "Flaky tab targets",
    text: "Browser handles move, refresh, and focus changes without breaking long tasks.",
    color: "text-claw-warning",
  },
  {
    icon: Volume2,
    title: "Noisy failures",
    text: "Every action returns explicit results, not silent guesses.",
    color: "text-claw-danger",
  },
  {
    icon: Eye,
    title: "Poor observability",
    text: "Health and state endpoints let you inspect live status in one place.",
    color: "text-claw-green",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">--- /problem ---</span>
        <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text max-w-2xl">
          Why teams stop using brittle browser automation
        </h2>
        <p className="mt-3 text-[13px] text-claw-muted max-w-xl leading-relaxed">
          We built ClawConnect because most automation setups break exactly when reliability matters most.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="border border-claw-border bg-claw-panel p-4 transition-colors hover:border-claw-muted/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <card.icon size={14} className={card.color} />
                <span className="text-[11px] text-claw-muted/50 uppercase tracking-wider">
                  {card.title === "Flaky tab targets" ? "warn" : card.title === "Noisy failures" ? "err" : "info"}
                </span>
              </div>
              <h3 className="text-[14px] font-semibold text-claw-text">&gt; {card.title}</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-claw-muted">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
