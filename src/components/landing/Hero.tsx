import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_560px] md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <h1 className="text-[34px] font-semibold leading-[1.02] tracking-tight text-claw-text md:text-[54px] lg:text-[62px]">
              Your AI agent. A real browser. No cloud required.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-claw-muted md:text-[16px]">
              ClawConnect gives your OpenClaw agent its own persistent Chrome browser, installed on your machine, controlled by your agent, and ready to work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex h-11 items-center justify-center border border-claw-border bg-claw-text px-5 text-[13px] font-semibold text-claw-deepest transition-opacity hover:opacity-90"
              >
                Download ClawConnect for Windows
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-11 items-center justify-center border border-claw-border bg-claw-panel px-5 text-[13px] font-semibold text-claw-text transition-colors hover:border-claw-text/30"
              >
                See how it works ↓
              </a>
            </div>

            <p className="mt-4 text-[12px] text-claw-muted">
              One-time purchase. Runs locally. No subscription.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative"
          >
            <div className="border border-claw-border bg-claw-panel shadow-[0_30px_80px_hsl(220_20%_4%/0.45)]">
              <div className="flex items-center justify-between border-b border-claw-border px-4 py-3">
                <div>
                  <p className="text-[12px] font-semibold text-claw-text">ClawConnect</p>
                  <p className="text-[11px] text-claw-muted">Dedicated browser session for OpenClaw</p>
                </div>
                <span className="border border-claw-border px-2 py-1 text-[10px] text-claw-muted">Windows app</span>
              </div>

              <div className="grid gap-4 p-4 md:grid-cols-[180px_minmax(0,1fr)]">
                <div className="space-y-3 border border-claw-border bg-claw-deepest p-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-claw-muted">Agent status</p>
                    <p className="mt-1 text-[13px] font-semibold text-claw-text">Connected</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-claw-muted">Browser profile</p>
                    <p className="mt-1 text-[13px] font-semibold text-claw-text">Persistent</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-claw-muted">Mode</p>
                    <p className="mt-1 text-[13px] font-semibold text-claw-text">Local only</p>
                  </div>
                </div>

                <div className="border border-claw-border bg-claw-deepest">
                  <div className="flex items-center gap-2 border-b border-claw-border px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-claw-muted/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-claw-muted/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-claw-muted/30" />
                    <span className="ml-3 text-[11px] text-claw-muted">Agent browser session</span>
                  </div>
                  <div className="space-y-4 p-4">
                    <div className="rounded-sm border border-claw-border bg-claw-panel p-3">
                      <p className="text-[11px] text-claw-muted">Task</p>
                      <p className="mt-1 text-[13px] text-claw-text">Log in, open dashboard, and export the latest report.</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-sm border border-claw-border bg-claw-panel p-3">
                        <p className="text-[11px] text-claw-muted">Session state</p>
                        <p className="mt-1 text-[13px] font-semibold text-claw-text">Cookies retained</p>
                      </div>
                      <div className="rounded-sm border border-claw-border bg-claw-panel p-3">
                        <p className="text-[11px] text-claw-muted">Browser type</p>
                        <p className="mt-1 text-[13px] font-semibold text-claw-text">Visible Chromium</p>
                      </div>
                    </div>
                    <div className="rounded-sm border border-claw-border bg-claw-panel p-3 text-[12px] leading-relaxed text-claw-muted">
                      ClawConnect launches a dedicated browser profile that persists between tasks, separate from your personal browsing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
