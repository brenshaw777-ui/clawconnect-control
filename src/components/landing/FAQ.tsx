const FAQ = () => {
  const faqs = [
    {
      q: "Do I need a Chrome extension?",
      a: "No. ClawConnect manages the browser at the application level. No extension, no Web Store, and no browser permission prompts.",
    },
    {
      q: "Does my data go to the cloud?",
      a: "No. ClawConnect runs entirely on your Windows machine. Your browsing sessions, credentials, and agent activity stay local.",
    },
    {
      q: "What is the difference between ClawConnect and a headless browser?",
      a: "ClawConnect uses a real, visible Chromium browser with a persistent profile. Sites behave normally, sessions persist, and your agent works in the same environment a human would use.",
    },
    {
      q: "Does this work without OpenClaw?",
      a: "ClawConnect is built for the OpenClaw ecosystem. You need a working OpenClaw installation to use it.",
    },
    {
      q: "What is included in future updates?",
      a: "Bug fixes and improvements within the current major version are included. Major version upgrades may be offered at a discount to existing customers.",
    },
    {
      q: "Is there a Mac or Linux version?",
      a: "Windows is the launch platform. Other platforms may follow, but there is no commitment yet.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] uppercase tracking-[0.18em] text-claw-muted">FAQ</span>
        <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
          Common questions, answered clearly.
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="border border-claw-border bg-claw-panel px-5 py-4 group">
              <summary className="cursor-pointer list-none text-[14px] font-semibold text-claw-text">
                {faq.q}
              </summary>
              <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-claw-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
