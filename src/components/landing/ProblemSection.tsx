const ProblemSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">The problem with browser automation today</span>
        <h2 className="mt-3 max-w-3xl text-[22px] font-bold tracking-tight text-claw-text md:text-[32px]">
          Most “AI browser” tools are either fake or fragile.
        </h2>
        <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-claw-muted md:text-[14px]">
          Headless scrapers get blocked. Cloud automation costs money every month and leaks control. Browser extensions are a half-measure.
        </p>
        <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-claw-muted md:text-[14px]">
          Real automation means a real browser, running locally, under persistent control. That’s what ClawConnect is.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
