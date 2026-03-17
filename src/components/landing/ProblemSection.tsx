import { motion } from "framer-motion";

const points = [
  "Headless scrapers get blocked.",
  "Cloud automation costs money every month and pushes browser activity off your machine.",
  "Browser extensions are a half measure that can only do what a tab can do.",
];

const ProblemSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] uppercase tracking-[0.18em] text-claw-muted">The problem with browser automation today</span>
        <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
          <div>
            <h2 className="max-w-3xl text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
              Most AI browser tools are either fake or fragile.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-claw-muted">
              Real automation means a real browser running locally under persistent control. That is what ClawConnect is.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="border border-claw-border bg-claw-panel"
          >
            <div className="border-b border-claw-border px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-claw-muted">
              Why current tools break
            </div>
            <div className="space-y-4 p-4">
              {points.map((point) => (
                <div key={point} className="border-b border-claw-border pb-4 last:border-b-0 last:pb-0">
                  <p className="text-[13px] leading-relaxed text-claw-text">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
