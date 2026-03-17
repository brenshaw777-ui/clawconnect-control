import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";

const stats = [
  { label: "Ticker", value: "$CCT" },
  { label: "Name", value: "ClawConnect" },
  { label: "Supply", value: "10,000" },
  { label: "Taxes", value: "0%" },
  { label: "Network", value: "Base" },
];

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="container relative mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">--- /tokenomics ---</span>
        <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text">
          $CCT Tokenomics
        </h2>
        <p className="mt-2 text-[13px] text-claw-muted">
          // Simple, transparent, zero-tax token on Base.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="border border-claw-border bg-claw-panel px-4 py-5 text-center panel-hover"
            >
              <span className="block text-[10px] uppercase tracking-widest text-claw-muted/60">
                {stat.label}
              </span>
              <span className="mt-1 block text-[18px] font-bold text-claw-green">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Contract address */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 border border-claw-border bg-claw-deepest"
        >
          <div className="flex items-center justify-between border-b border-claw-border px-3 py-1.5">
            <span className="text-[10px] text-claw-green/60">contract address (Base)</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[10px] text-claw-muted/40 transition-colors hover:text-claw-muted"
              aria-label="Copy contract address"
            >
              {copied ? (
                <>
                  <Check size={10} className="text-claw-green" />
                  <span className="text-claw-green">copied!</span>
                </>
              ) : (
                <>
                  <Copy size={10} />
                  <span>click to copy</span>
                </>
              )}
            </button>
          </div>
          <button
            onClick={handleCopy}
            className="w-full px-4 py-3 text-left text-[13px] text-claw-muted transition-colors hover:text-claw-text"
          >
            <code>{CONTRACT_ADDRESS}</code>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
