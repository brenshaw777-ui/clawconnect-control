import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[22px] border border-claw-border/50 bg-claw-panel panel-shadow"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-claw-blue/[0.08] blur-[80px]" />

          <div className="relative px-6 py-14 text-center md:px-12 md:py-20">
            <h2 className="font-heading text-[28px] font-bold tracking-tight text-claw-text md:text-[44px]">
              Ready to build stable browser automation?
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-base text-claw-muted leading-relaxed">
              Deploy ClawConnect and remove brittle tab state from your AI stack.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="flex h-[52px] items-center rounded-[13px] bg-claw-blue px-8 font-sans text-[15px] font-bold text-claw-deepest transition-all hover:-translate-y-px glow-blue"
              >
                Get Started
              </a>
              <a
                href="#"
                className="flex h-[52px] items-center rounded-[13px] border border-claw-border bg-claw-panel px-8 font-sans text-[15px] font-medium text-claw-muted transition-all hover:-translate-y-px hover:border-claw-muted/40 hover:text-claw-text"
              >
                Star and fork on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
