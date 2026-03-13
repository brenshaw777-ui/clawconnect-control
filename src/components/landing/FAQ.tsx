import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is ClawConnect?",
    a: "ClawConnect is an open-source, local-first browser automation bridge that gives AI agents stable control over browser tabs with built-in diagnostics, acknowledgments, and security.",
  },
  {
    q: "What is $CCT?",
    a: "$CCT is the ClawConnect token on the Base network. It has a total supply of 10,000, zero taxes, and powers the ClawConnect ecosystem.",
  },
  {
    q: "Is ClawConnect open source?",
    a: "Yes. ClawConnect is fully open source. You can view, fork, and contribute to the codebase on GitHub.",
  },
  {
    q: "How does the bridge work?",
    a: "The bridge runs locally on your machine and communicates with a browser extension. AI agents send commands via a REST API, and the bridge relays them to the active browser tab with full acknowledgment and error reporting.",
  },
  {
    q: "What network is $CCT on?",
    a: "$CCT is deployed on the Base network (Coinbase L2). You can trade it on any Base-compatible DEX.",
  },
  {
    q: "Is there any tax on $CCT?",
    a: "No. $CCT has 0% buy and sell taxes. What you buy is what you get.",
  },
];

const FAQ = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container relative mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">--- /faq ---</span>
        <h2 className="mt-3 text-[22px] md:text-[32px] font-bold tracking-tight text-claw-text">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-[13px] text-claw-muted">
          // Common questions answered.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-claw-border bg-claw-panel px-4 data-[state=open]:border-claw-green/20"
              >
                <AccordionTrigger className="text-[13px] font-bold text-claw-muted hover:text-claw-green hover:no-underline py-4">
                  {`> ${faq.q}`}
                </AccordionTrigger>
                <AccordionContent className="text-[12px] leading-relaxed text-claw-muted/80 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
