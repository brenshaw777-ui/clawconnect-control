const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-claw-muted">
              The problem with browser automation today
            </p>
            <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
              Most AI browser tools are either fake or fragile.
            </h2>
          </div>

          <div className="space-y-5 rounded-2xl border border-claw-border bg-claw-panel p-6 md:p-8">
            <p className="text-[15px] leading-relaxed text-claw-muted">
              Headless scrapers get blocked. Cloud automation costs money every month and leaks control. Browser extensions are a half-measure.
            </p>
            <p className="text-[15px] leading-relaxed text-claw-muted">
              Real automation means a real browser, running locally, under persistent control. That is what ClawConnect is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
