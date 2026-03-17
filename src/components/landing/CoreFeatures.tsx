const features = [
  {
    title: "Dedicated AI Browser Profile",
    text: "Chromium instance isolated from your personal browser. Persistent cookies, sessions, and state.",
  },
  {
    title: "No Extension Required",
    text: "ClawConnect manages the browser directly. No separate browser plugin to install or maintain.",
  },
  {
    title: "Local-First",
    text: "Everything runs on your machine. Your data does not leave your computer just to make the product work.",
  },
  {
    title: "OpenClaw Integration",
    text: "Direct connection to your OpenClaw agent for local control in a real browser.",
  },
  {
    title: "Windows Desktop App",
    text: "Native installer. Optional launch at login. Clean tray presence.",
  },
  {
    title: "One-Time Purchase",
    text: "Buy once. No recurring charges. Updates included for the current major version.",
  },
];

const CoreFeatures = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-claw-muted">
            What you get
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
            Built like a real desktop tool.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-claw-border bg-claw-panel p-6 md:p-7">
              <h3 className="text-[18px] font-semibold text-claw-text">{feature.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-claw-muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
