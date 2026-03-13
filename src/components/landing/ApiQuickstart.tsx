import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const codeCards = [
  {
    title: "Check health",
    code: `curl -H "Authorization: Bearer <TOKEN>" http://127.0.0.1:18990/health`,
  },
  {
    title: "List tabs",
    code: `curl -H "Authorization: Bearer <TOKEN>" http://127.0.0.1:18990/tabs`,
  },
  {
    title: "Attach active tab",
    code: `curl -X POST -H "Authorization: Bearer <TOKEN>" -H "Content-Type: application/json" -d '{}' http://127.0.0.1:18990/attach`,
  },
  {
    title: "Run command on active tab",
    code: `curl -X POST -H "Authorization: Bearer <TOKEN>" -H "Content-Type: application/json" -d '{"command":"snapshot"}' http://127.0.0.1:18990/command`,
  },
];

const CodeCard = ({ title, code, index }: { title: string; code: string; index: number }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="rounded-[16px] border border-claw-border/50 bg-claw-deepest panel-shadow overflow-hidden"
    >
      <div className="flex items-center justify-between border-b border-claw-border/30 px-4 py-2.5">
        <span className="font-mono text-[12px] font-medium text-claw-muted">{title}</span>
        <button
          onClick={handleCopy}
          className="flex h-7 w-7 items-center justify-center rounded-md text-claw-muted/50 transition-colors hover:bg-claw-panel hover:text-claw-muted"
          aria-label="Copy code"
        >
          {copied ? <Check size={13} className="text-claw-green" /> : <Copy size={13} />}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-[12px] leading-relaxed text-claw-muted whitespace-pre-wrap break-all md:whitespace-pre md:break-normal">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
};

const ApiQuickstart = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="container relative mx-auto px-4 lg:px-6">
        <span className="mb-4 inline-block font-mono text-[12px] tracking-widest text-claw-blue/50">
          /api
        </span>
        <h2 className="font-heading text-[30px] font-bold tracking-tight text-claw-text md:text-[42px]">
          Quickstart in 60 seconds
        </h2>
        <p className="mt-3 max-w-lg font-sans text-base text-claw-muted">
          Try the bridge with curl commands after starting your local service.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {codeCards.map((card, i) => (
            <CodeCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiQuickstart;
