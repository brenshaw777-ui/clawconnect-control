import { motion } from "framer-motion";
import { AlertTriangle, Volume2, Eye } from "lucide-react";

const cards = [
  {
    icon: AlertTriangle,
    title: "Flaky tab targets",
    text: "Browser handles move, refresh, and focus changes without breaking long tasks.",
    accent: "warning",
  },
  {
    icon: Volume2,
    title: "Noisy failures",
    text: "Every action returns explicit results, not silent guesses.",
    accent: "danger",
  },
  {
    icon: Eye,
    title: "Poor observability",
    text: "Health and state endpoints let you inspect live status in one place.",
    accent: "blue",
  },
];

const accentColors = {
  warning: "text-claw-warning border-claw-warning/20 bg-claw-warning/5",
  danger: "text-claw-danger border-claw-danger/20 bg-claw-danger/5",
  blue: "text-claw-blue border-claw-blue/20 bg-claw-blue/5",
};

const ProblemSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="mb-4 inline-block font-mono text-[12px] tracking-widest text-claw-blue/50">
          /problem
        </span>
        <h2 className="font-heading text-[30px] font-bold tracking-tight text-claw-text md:text-[42px] max-w-2xl">
          Why teams stop using brittle browser automation
        </h2>
        <p className="mt-4 max-w-xl font-sans text-base text-claw-muted leading-relaxed">
          We built ClawConnect because most automation setups break exactly when reliability matters most.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-[18px] border border-claw-border/50 bg-claw-panel p-5 panel-shadow transition-all hover:border-claw-border hover:-translate-y-px"
            >
              <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border ${accentColors[card.accent as keyof typeof accentColors]}`}>
                <card.icon size={16} />
              </div>
              <h3 className="font-heading text-[18px] font-semibold text-claw-text">{card.title}</h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-claw-muted">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
