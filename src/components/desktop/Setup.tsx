import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import clawLogo from "@/assets/clawconnect-logo.png";

const steps = ["Welcome", "Gateway", "Browser", "Ready"];

const StepIndicator = ({ current }: { current: number }) => (
  <div className="flex items-center justify-center gap-2 py-3 border-b border-claw-border">
    {steps.map((s, i) => (
      <div key={s} className="flex items-center gap-2">
        <div
          className={`w-5 h-5 rounded-sm flex items-center justify-center text-[10px] font-bold ${
            i < current
              ? "bg-primary text-claw-deepest"
              : i === current
              ? "border border-primary text-primary"
              : "border border-claw-border text-claw-muted"
          }`}
        >
          {i < current ? <Check size={10} /> : i + 1}
        </div>
        {i < steps.length - 1 && <div className="w-6 h-px bg-claw-border" />}
      </div>
    ))}
  </div>
);

const Step1 = ({ onNext }: { onNext: () => void }) => (
  <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
    <img src={clawLogo} alt="ClawConnect" className="w-20 h-20 mb-3" />
    <div className="text-primary text-[28px] font-bold tracking-tight mb-1">ClawConnect</div>
    <div className="text-claw-muted text-[11px] mb-4">// your dedicated AI browser, managed.</div>
    <p className="text-claw-text text-[12px] max-w-xs mb-6 leading-relaxed">
      ClawConnect provisions and manages a dedicated Chromium browser for your AI agents, with full CDP access and zero configuration.
    </p>
    <button onClick={onNext} className="px-5 py-2 text-[11px] uppercase font-bold tracking-wider bg-primary text-claw-deepest rounded-sm hover:bg-primary/90 transition-colors">
      Get Started →
    </button>
  </div>
);

const Step2 = ({ onNext }: { onNext: () => void }) => {
  const [testing, setTesting] = useState(true);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8">
      <div className="text-primary/50 text-[11px] uppercase tracking-wider mb-4">// Connect to OpenClaw</div>
      <div className="w-full max-w-xs space-y-3">
        <div>
          <label className="text-claw-muted text-[10px] uppercase tracking-wider block mb-1">Gateway URL</label>
          <input
            defaultValue="https://gateway.openclaw.ai"
            className="w-full px-2 py-1.5 text-[11px] bg-claw-deepest border border-claw-border rounded-sm text-claw-text focus:outline-none focus:border-primary/40 font-mono"
          />
        </div>
        <div>
          <label className="text-claw-muted text-[10px] uppercase tracking-wider block mb-1">Gateway Token</label>
          <input
            type="password"
            defaultValue="sk-claw-xxxxxxxxxxxx"
            className="w-full px-2 py-1.5 text-[11px] bg-claw-deepest border border-claw-border rounded-sm text-claw-text focus:outline-none focus:border-primary/40 font-mono"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTesting(!testing)}
            className="px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-claw-border bg-claw-mid text-claw-text rounded-sm hover:bg-claw-elevated transition-colors"
          >
            Test Connection
          </button>
          {testing && (
            <span className="flex items-center gap-1 text-claw-warning text-[11px]">
              <Loader2 size={12} className="animate-spin" />
              Testing...
            </span>
          )}
        </div>
        <button
          onClick={onNext}
          disabled={testing}
          className="w-full px-4 py-2 text-[11px] uppercase font-bold tracking-wider bg-primary text-claw-deepest rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed mt-2"
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

const Step3 = ({ onNext }: { onNext: () => void }) => (
  <div className="flex-1 flex flex-col items-center justify-center px-8">
    <div className="text-primary/50 text-[11px] uppercase tracking-wider mb-4">// Configure AI Browser</div>
    <div className="w-full max-w-xs space-y-3">
      <div>
        <label className="text-claw-muted text-[10px] uppercase tracking-wider block mb-1">Debug Port</label>
        <input
          type="number"
          defaultValue="9222"
          className="w-full px-2 py-1.5 text-[11px] bg-claw-deepest border border-claw-border rounded-sm text-claw-text focus:outline-none focus:border-primary/40 font-mono"
        />
      </div>
      <div>
        <label className="text-claw-muted text-[10px] uppercase tracking-wider block mb-1">Profile Directory</label>
        <input
          defaultValue="~/.clawconnect/browser-profile"
          className="w-full px-2 py-1.5 text-[11px] bg-claw-deepest border border-claw-border rounded-sm text-claw-text focus:outline-none focus:border-primary/40 font-mono"
        />
      </div>
      <button className="px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-claw-border bg-claw-mid text-claw-text rounded-sm hover:bg-claw-elevated transition-colors">
        Detect Chrome
      </button>
      <button onClick={onNext} className="w-full px-4 py-2 text-[11px] uppercase font-bold tracking-wider bg-primary text-claw-deepest rounded-sm hover:bg-primary/90 transition-colors mt-2">
        Continue →
      </button>
    </div>
  </div>
);

const Step4 = ({ onFinish }: { onFinish: () => void }) => (
  <div className="flex-1 flex flex-col items-center justify-center px-8">
    <div className="text-primary text-[18px] font-bold mb-4">Ready to launch</div>
    <div className="w-full max-w-xs space-y-2 mb-6">
      {["Gateway connected", "Browser configured", "Profile directory set", "CDP port assigned"].map((item) => (
        <div key={item} className="flex items-center gap-2 text-[12px]">
          <span className="text-primary">✓</span>
          <span className="text-claw-text">{item}</span>
        </div>
      ))}
    </div>
    <button onClick={onFinish} className="px-5 py-2 text-[11px] uppercase font-bold tracking-wider bg-primary text-claw-deepest rounded-sm hover:bg-primary/90 transition-colors">
      Launch ClawConnect →
    </button>
  </div>
);

const Setup = ({ onFinish }: { onFinish?: () => void }) => {
  const [step, setStep] = useState(1); // default to step 2 (index 1) to show test in progress

  return (
    <div className="flex flex-col h-full font-mono">
      <StepIndicator current={step} />
      {step === 0 && <Step1 onNext={() => setStep(1)} />}
      {step === 1 && <Step2 onNext={() => setStep(2)} />}
      {step === 2 && <Step3 onNext={() => setStep(3)} />}
      {step === 3 && <Step4 onFinish={() => onFinish?.()} />}
    </div>
  );
};

export default Setup;
