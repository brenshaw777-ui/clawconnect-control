import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need extra browser setup?",
    a: "No. ClawConnect manages the browser at the application level.",
  },
  {
    q: "Does my data go to the cloud?",
    a: "No. ClawConnect runs on your Windows machine and keeps the browsing and control path local-first.",
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-claw-muted">FAQ</p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
            Questions before you install.
          </h2>
        </div>

        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="rounded-2xl border border-claw-border bg-claw-panel px-5"
              >
                <AccordionTrigger className="py-5 text-left text-[14px] font-medium text-claw-text hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14px] leading-relaxed text-claw-muted">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
