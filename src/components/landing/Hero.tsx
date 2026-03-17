import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroIcon from "@/assets/hero-icon-glow.png";

const terminalLines = [
  { text: "$ launch clawconnect.exe", delay: 0 },
  { text: "[OK] dedicated Chromium profile initialized", delay: 1.2, color: "green" },
  { text: "[OK] OpenClaw agent connected", delay: 2.2, color: "green" },
  { text: "[OK] persistent browser session ready", delay: 3.2, color: "green" },
  { text: "> waiting for tasks...", delay: 4.2, color: "green" },
];

const badges = [
  "One-time purchase",
  "Runs locally",
  "No subscription",
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
        <div className="grid items-center gap-12 md:min-h-[62vh] md:grid-cols-2 md:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex min-h-full items-center justify-center"
          >
            <div className="flex max-w-[520px] flex-col items-start text-left">
              <h1 className="text-[28px] font-bold leading-[1.0] tracking-tight text-claw-text md:text-[44px] lg:text-[52px]">
                Your AI agent. A real browser. No cloud required.
              </h1>
              <p className="mt-4 max-w-[38rem] text-[14px] leading-relaxed text-claw-muted md:text-[15px]">
                ClawConnect gives your OpenClaw agent its own persistent Chrome browser — installed on your machine, controlled by your agent, ready to work.
              </p>
              <p className="mt-2 text-[12px] text-claw-muted/60">
                One-time purchase. Runs locally. No subscription.
              </p>

              <div className="mt-6 flex flex-wrap justify-start gap-3">
                <a
                  href="#pricing"
                  className="flex h-[40px] items-center border border-claw-green bg-claw-green/10 px-5 text-[13px] font-bold text-claw-green transition-all hover:bg-claw-green/20 glow-green-sm"
                >
                  Download ClawConnect — Windows
                </a>
                <a
                  href="#how-it-works"
                  className="flex h-[40px] items-center border border-claw-border px-5 text-[13px] text-claw-muted transition-all hover:border-claw-muted/40 hover:text-claw-text"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-start gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] tracking-wider text-claw-green/70"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex min-h-full items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative flex h-[360px] w-[360px] items-center justify-center transform-gpu md:h-[560px] md:w-[560px] lg:h-[640px] lg:w-[640px]"
            >
              <div className="absolute inset-0 rounded-full bg-claw-green/10 blur-[60px] transition-all duration-300 group-hover:bg-claw-green/15 md:blur-[100px]" />
              <div className="absolute inset-8 rounded-full bg-claw-green/20 blur-[110px] transition-all duration-300 group-hover:bg-claw-green/30 group-hover:blur-[150px] md:inset-12 md:blur-[160px]" />
              <div className="absolute inset-16 rounded-full bg-claw-green/25 blur-[70px] transition-all duration-300 group-hover:bg-claw-green/35 group-hover:blur-[100px] md:inset-20 md:blur-[120px]" />
              <img
                src={heroIcon}
                alt="ClawConnect glowing hero icon"
                className="relative h-[320px] w-[320px] object-contain drop-shadow-[0_0_24px_rgba(0,255,136,0.18)] transition-all duration-300 group-hover:drop-shadow-[0_0_44px_rgba(0,255,136,0.3)] md:h-[520px] md:w-[520px] lg:h-[580px] lg:w-[580px]"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mx-auto mt-20 max-w-3xl border border-claw-border bg-claw-deepest md:mt-28"
        >
          <div className="flex items-center justify-between border-b border-claw-border px-3 py-1.5">
            <span className="text-[10px] text-claw-muted">clawconnect@local:~</span>
            <span className="text-[10px] text-claw-muted/40">bash</span>
          </div>
          <div className="space-y-0.5 p-4 md:p-6">
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
      </div>
    </section>
  );
};

export default Hero;
