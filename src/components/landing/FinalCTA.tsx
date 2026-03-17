const FinalCTA = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="border border-claw-border bg-claw-panel px-6 py-10 md:px-10 md:py-14">
          <h2 className="max-w-2xl text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
            Give your agent a real browser.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-claw-muted">
            Download ClawConnect and connect it to your OpenClaw agent in under five minutes.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex h-11 items-center justify-center border border-claw-border bg-claw-text px-5 text-[13px] font-semibold text-claw-deepest transition-opacity hover:opacity-90"
            >
              Download for Windows - $49 one-time
            </a>
          </div>

          <p className="mt-4 text-[12px] text-claw-muted">
            Local install. No subscription. No extension.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
