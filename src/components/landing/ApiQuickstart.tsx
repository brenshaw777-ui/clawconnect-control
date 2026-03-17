import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const codeCards = [
  { title: "Check health", code: `curl -H "Authorization: Bearer <TOKEN>" http://127.0.0.1:18990/health` },
  { title: "List tabs", code: `curl -H "Authorization: Bearer <TOKEN>" http://127.0.0.1:18990/tabs` },
  { title: "Attach active tab", code: `curl -X POST -H "Authorization: Bearer <TOKEN>" -H "Content-Type: application/json" -d '{}' http://127.0.0.1:18990/attach` },
  { title: "Run command on active tab", code: `curl -X POST -H "Authorization: Bearer <TOKEN>" -H "Content-Type: application/json" -d '{"command":"snapshot"}' http://127.0.0.1:18990/command` },
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="border border-claw-border bg-claw-deepest panel-hover"
    >
      <div className="flex items-center justify-between border-b border-claw-border px-3 py-1.5">
        <span className="text-[10px] text-claw-green/60">user@clawconnect:~$ {title.toLowerCase()}</span>
        <button
          onClick={handleCopy}
          className="text-claw-muted/40 transition-colors hover:text-claw-muted"
          aria-label="Copy code"
        >
          {copied ? <Check size={12} className="text-claw-green" /> : <Copy size={12} />}
        </button>
      </div>
      <div className="p-3">
        <pre className="text-[11px] leading-relaxed text-claw-muted whitespace-pre-wrap break-all">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
};

const ApiQuickstart = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="container relative mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">--- /api ---</span>
        <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text">
          Quickstart in 60 seconds
        </h2>
        <p className="mt-2 text-[13px] text-claw-muted">
          // Try the bridge with curl commands after starting your local service.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {codeCards.map((card, i) => (
            <CodeCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiQuickstart;
