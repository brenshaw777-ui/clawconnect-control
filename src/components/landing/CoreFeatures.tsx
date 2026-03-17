const features = [
  ["Dedicated AI Browser Profile", "Chromium instance isolated from your personal browser. Persistent cookies, sessions, and state."],
  ["No Extension Required", "ClawConnect manages the browser directly. No extension to install, maintain, or trust."],
  ["Local-First", "Everything runs on your machine. Your data does not leave your computer."],
  ["OpenClaw Integration", "Drop-in connection to your OpenClaw agent. Works out of the box."],
  ["Windows Desktop App", "Native installer. Starts with Windows if you want. Clean system tray presence."],
  ["One-Time Purchase", "Buy once. No recurring charges. Updates included for the current major version."],
];

const CoreFeatures = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] uppercase tracking-[0.18em] text-claw-muted">What you get</span>
        <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
          Built for serious local browser control.
        </h2>

        <div className="mt-10 overflow-hidden border border-claw-border bg-claw-panel">
          <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] border-b border-claw-border bg-claw-deepest px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-claw-muted">
            <div>Feature</div>
            <div>Detail</div>
          </div>
          {features.map(([feature, detail]) => (
            <div
              key={feature}
              className="grid grid-cols-1 border-b border-claw-border px-4 py-4 last:border-b-0 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-6"
            >
              <div className="text-[14px] font-semibold text-claw-text">{feature}</div>
              <div className="mt-2 text-[14px] leading-relaxed text-claw-muted md:mt-0">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
