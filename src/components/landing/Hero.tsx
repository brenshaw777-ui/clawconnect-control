const trustPoints = [
  "One-time purchase",
  "Runs locally",
  "No subscription",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-claw-border pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(var(--accent)/0.08),transparent_48%)]" />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(540px,620px)] lg:gap-16">
          <div className="max-w-[620px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-claw-muted">
              Windows desktop app for OpenClaw
            </p>
            <h1 className="mt-5 text-[34px] font-semibold leading-[1.02] tracking-tight text-claw-text md:text-[52px] lg:text-[64px]">
              Your AI agent. A real browser. No cloud required.
            </h1>
            <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-claw-muted md:text-[17px]">
              ClawConnect gives your OpenClaw agent its own persistent Chrome browser installed on your machine, controlled by your agent, ready to work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex h-[46px] items-center justify-center border border-claw-border bg-claw-panel px-6 text-[13px] font-semibold text-claw-text transition-colors hover:bg-claw-panel-hover"
              >
                Download ClawConnect - Windows
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-[46px] items-center justify-center border border-claw-border px-6 text-[13px] font-medium text-claw-muted transition-colors hover:text-claw-text"
              >
                See how it works
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-[12px] text-claw-muted">
              {trustPoints.map((point, index) => (
                <span key={point} className="flex items-center gap-3">
                  {index > 0 && <span className="text-claw-border">•</span>}
                  <span>{point}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="overflow-hidden rounded-2xl border border-claw-border bg-claw-panel shadow-[0_20px_80px_hsl(var(--background)/0.45)]">
              <div className="flex items-center justify-between border-b border-claw-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-claw-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-claw-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-claw-border" />
                </div>
                <span className="text-[11px] text-claw-muted">ClawConnect Browser Session</span>
              </div>

              <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="border-b border-claw-border bg-claw-deepest/70 p-4 md:border-b-0 md:border-r">
                  <div className="rounded-xl border border-claw-border bg-claw-panel p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-claw-muted">Agent status</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-claw-green" />
                      <span className="text-[13px] font-medium text-claw-text">Connected locally</span>
                    </div>
                    <div className="mt-4 space-y-3 text-[12px] text-claw-muted">
                      <div>
                        <p className="text-claw-text">Profile</p>
                        <p>Dedicated Chromium workspace</p>
                      </div>
                      <div>
                        <p className="text-claw-text">Mode</p>
                        <p>Persistent session</p>
                      </div>
                      <div>
                        <p className="text-claw-text">OpenClaw</p>
                        <p>Ready for task input</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-claw-deepest p-4 md:p-5">
                  <div className="rounded-xl border border-claw-border bg-claw-panel">
                    <div className="flex items-center gap-2 border-b border-claw-border px-3 py-2 text-[11px] text-claw-muted">
                      <div className="min-w-0 flex-1 truncate rounded-md border border-claw-border bg-claw-deepest px-3 py-1.5">
                        https://dashboard.example.com/reports
                      </div>
                      <div className="rounded-md border border-claw-border px-2 py-1">Live browser</div>
                    </div>
                    <div className="space-y-4 p-4">
                      <div className="rounded-lg border border-claw-border bg-claw-deepest p-4">
                        <div className="h-3 w-24 rounded-full bg-claw-panel-hover" />
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-lg border border-claw-border bg-claw-panel p-3">
                            <div className="h-3 w-16 rounded-full bg-claw-panel-hover" />
                            <div className="mt-3 h-16 rounded-md border border-dashed border-claw-border" />
                          </div>
                          <div className="rounded-lg border border-claw-border bg-claw-panel p-3">
                            <div className="h-3 w-20 rounded-full bg-claw-panel-hover" />
                            <div className="mt-3 space-y-2">
                              <div className="h-2 rounded-full bg-claw-panel-hover" />
                              <div className="h-2 w-4/5 rounded-full bg-claw-panel-hover" />
                              <div className="h-2 w-3/5 rounded-full bg-claw-panel-hover" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-claw-border bg-claw-panel p-4">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-claw-muted">Task</p>
                        <p className="mt-2 text-[13px] text-claw-text">
                          Open the billing portal, sign in, and review the latest invoice.
                        </p>
                        <p className="mt-3 text-[12px] text-claw-muted">
                          Session state persists between tasks, so your agent does not start from zero every time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
