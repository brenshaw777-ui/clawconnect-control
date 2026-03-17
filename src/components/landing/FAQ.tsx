import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need a Chrome extension?",
    a: "No. ClawConnect manages the browser at the application level.",
  },
  {
    q: "Does my data go to the cloud?",
    a: "No. ClawConnect runs on your Windows machine and keeps the browsing/control path local-first.",
  },
  {
    q: "What’s the difference between ClawConnect and a headless browser?",
    a: "ClawConnect uses a real visible Chromium browser with a persistent profile, so sessions persist and sites behave more naturally.",
  },
  {
    q: "Does this work without OpenClaw?",
    a: "No. ClawConnect is built for the OpenClaw ecosystem and requires OpenClaw.",
  },
  {
    q: "What’s included in future updates?",
    a: "Bug fixes and improvements within the current major version are included.",
  },
  {
    q: "Is there a Mac or Linux version?",
    a: "Windows is the launch platform. Other platforms may come later.",
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
