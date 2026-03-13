import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalLines = [
  { text: "$ clawconnect start --port 18990", delay: 0 },
  { text: "[INFO] bridge listening on 127.0.0.1:18990", delay: 1.2 },
  { text: "[INFO] waiting for extension handshake...", delay: 2.0 },
  { text: "[OK] extension connected (tab: 3)", delay: 3.2, color: "green" },
  { text: "[OK] health check passed", delay: 4.0, color: "green" },
  { text: "> ready.", delay: 5.0, color: "green" },
];

const badges = [
  "[OPEN SOURCE]",
  "[LOCAL HOST]",
  "[TOKEN PROTECTED]",
  "[DIAGNOSABLE]",
];

const TerminalLine = ({ text, delay, color }: { text: string; delay: number; color?: string }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [started, text]);

  const colorClass = color === "green" ? "text-claw-green" : "text-claw-text";

  return (
    <div className={`${colorClass} text-[12px] md:text-[13px] leading-relaxed min-h-[1.6em]`}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="animate-cursor-blink">█</span>
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="container relative mx-auto px-4 lg:px-6">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl border border-claw-border bg-claw-deepest"
        >
          <div className="flex items-center justify-between border-b border-claw-border px-3 py-1.5">
            <span className="text-[10px] text-claw-muted">clawconnect@local:~</span>
            <span className="text-[10px] text-claw-muted/40">bash</span>
          </div>
          <div className="p-4 md:p-6 space-y-0.5">
            {terminalLines.map((line, i) => (
              <TerminalLine key={i} {...line} />
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6 }}
              className="pt-1"
            >
              <span className="text-claw-muted text-[12px] md:text-[13px]">$ </span>
              <span className="animate-cursor-blink text-claw-green text-[12px] md:text-[13px]">█</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Title below terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <h1 className="text-[28px] md:text-[48px] lg:text-[56px] font-bold leading-[1.0] tracking-tight text-claw-text">
            Browser automation that behaves in production
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-claw-muted">
            ClawConnect gives your agents stable control of browser tabs with explicit acknowledgments, diagnostics, and local-first security.
          </p>
          <p className="mt-2 text-[12px] text-claw-muted/60">
            // Open source, self-hosted bridge for commands, tabs, and workflows.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="flex h-[40px] items-center border border-claw-green bg-claw-green/10 px-5 text-[13px] font-bold text-claw-green transition-all hover:bg-claw-green/20 glow-green-sm"
            >
              View GitHub
            </a>
            <a
              href="#"
              className="flex h-[40px] items-center border border-claw-border px-5 text-[13px] text-claw-muted transition-all hover:border-claw-muted/40 hover:text-claw-text"
            >
              Install Extension
            </a>
          </div>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="text-[10px] text-claw-green/70 tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
