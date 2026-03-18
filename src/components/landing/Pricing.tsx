import { motion } from "framer-motion";

const includedItems = [
  "Full desktop app",
  "Dedicated Chromium AI profile",
  "OpenClaw agent integration",
  "Local-first, no cloud required",
  "Updates for current major version",
  "No subscription. Ever.",
];

const Pricing = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">Pricing</span>
        <h2 className="mt-3 text-[22px] font-bold tracking-tight text-claw-text md:text-[32px]">
          One price. Yours forever.
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 max-w-2xl border border-claw-border bg-claw-panel panel-hover"
        >
          <div className="border-b border-claw-border px-4 py-1.5">
            <span className="text-[10px] text-claw-muted/50">single license</span>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="text-[18px] font-bold text-claw-text">ClawConnect for Windows</h3>
            <p className="mt-3 text-[28px] font-bold tracking-tight text-claw-green md:text-[36px]">
              $29 one-time
            </p>

            <div className="mt-6 space-y-3">
              {includedItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="pt-0.5 text-[12px] text-claw-green">&gt;</span>
                  <span className="text-[13px] leading-relaxed text-claw-muted">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 flex h-[40px] w-full items-center justify-center border border-claw-green bg-claw-green/10 px-6 text-[12px] font-bold text-claw-green transition-all hover:bg-claw-green/20 glow-green-sm sm:w-fit sm:text-[13px]"
            >
              Buy Now — Download Instantly
            </a>

            <p className="mt-4 text-[12px] leading-relaxed text-claw-muted/80">
              Works with your existing OpenClaw setup. Windows 10/11 required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
