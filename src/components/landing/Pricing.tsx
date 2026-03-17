const included = [
  "Full desktop app",
  "Dedicated Chromium AI profile",
  "OpenClaw agent integration",
  "Local-first, no cloud required",
  "Updates for current major version",
  "No subscription. Ever.",
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-claw-muted">Pricing</p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
            One price. Yours forever.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-claw-border bg-claw-panel p-6 md:p-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-claw-muted">
            ClawConnect for Windows
          </p>
          <div className="mt-4 flex items-end justify-center gap-2 md:justify-start">
            <span className="text-[40px] font-semibold tracking-tight text-claw-text">$29</span>
            <span className="pb-2 text-[14px] text-claw-muted">one-time</span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="rounded-xl border border-claw-border bg-claw-deepest px-4 py-3 text-[13px] text-claw-muted">
                {item}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex h-[48px] w-full items-center justify-center border border-claw-border bg-claw-deepest px-6 text-[13px] font-semibold text-claw-text transition-colors hover:bg-claw-panel-hover"
          >
            Buy Now - Download Instantly
          </a>

          <p className="mt-4 text-[12px] text-claw-muted">
            Works with your existing OpenClaw setup. Windows 10/11 required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
