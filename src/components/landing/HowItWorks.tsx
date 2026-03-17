const steps = [
  {
    num: "01",
    title: "Install ClawConnect",
    text: "Download the Windows app and run the installer. It sets up a dedicated Chromium profile isolated from your personal browsing.",
  },
  {
    num: "02",
    title: "Connect your OpenClaw agent",
    text: "ClawConnect links directly to your local OpenClaw instance. Your agent now has eyes and hands in a real browser.",
  },
  {
    num: "03",
    title: "Give it tasks",
    text: "Tell your agent what to do. It opens pages, fills forms, clicks buttons, reads content, and works inside a real browser session that persists between tasks.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] uppercase tracking-[0.18em] text-claw-muted">How it works</span>
        <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
          Three things. That&apos;s it.
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="border border-claw-border bg-claw-panel p-5">
              <span className="text-[12px] font-semibold text-claw-muted">{step.num}</span>
              <h3 className="mt-5 text-[18px] font-semibold text-claw-text">{step.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-claw-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
