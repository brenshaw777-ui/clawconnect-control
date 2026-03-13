import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative border border-claw-border bg-claw-panel overflow-hidden panel-hover"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-64 bg-claw-green/[0.04] blur-[80px]" />

          <div className="relative px-6 py-12 text-center md:px-10 md:py-16">
            <h2 className="text-[22px] md:text-[36px] font-bold tracking-tight text-claw-text">
              Ready to build stable browser automation?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[13px] text-claw-muted leading-relaxed">
              Deploy ClawConnect and remove brittle tab state from your AI stack.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="flex h-[40px] items-center border border-claw-green bg-claw-green/10 px-6 text-[13px] font-bold text-claw-green transition-all hover:bg-claw-green/20 glow-green-sm"
              >
                &gt; get started_
              </a>
              <a
                href="#"
                className="flex h-[40px] items-center border border-claw-border px-6 text-[13px] text-claw-muted transition-all hover:border-claw-muted/40 hover:text-claw-text"
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
