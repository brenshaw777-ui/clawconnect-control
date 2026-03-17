const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="rounded-3xl border border-claw-border bg-claw-panel px-6 py-12 text-center md:px-10 md:py-16">
          <h2 className="text-[30px] font-semibold tracking-tight text-claw-text md:text-[42px]">
            Give your agent a real browser.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-claw-muted">
            Download ClawConnect and connect it to your OpenClaw agent in minutes.
          </p>

          <a
            href="#pricing"
            className="mx-auto mt-8 inline-flex h-[48px] items-center justify-center border border-claw-border bg-claw-deepest px-6 text-[13px] font-semibold text-claw-text transition-colors hover:bg-claw-panel-hover"
          >
            Download for Windows - $29 one-time
          </a>

          <p className="mt-4 text-[12px] text-claw-muted">
            Local install. No subscription. Real browser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
