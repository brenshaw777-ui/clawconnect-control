import { RefreshCw } from "lucide-react";

const checks = [
  { name: "Daemon Running", detail: "PID 14832 on port 7201", status: "pass" },
  { name: "Node.js Runtime", detail: "v22.13.1 at resources/bin/node.exe", status: "pass" },
  { name: "Browser Binary", detail: "Chrome 131.0.6778.85 detected", status: "pass" },
  { name: "CDP Responsive", detail: "ws://127.0.0.1:9222 — 3ms", status: "pass" },
  { name: "Gateway Reachable", detail: "https://gateway.openclaw.ai — 42ms", status: "pass" },
  { name: "Profile Directory", detail: "~/.clawconnect/browser-profile — permission denied", status: "fail" },
];

const statusIcon = (s: string) => {
  if (s === "pass") return <span className="text-primary text-[14px] font-bold">✓</span>;
  if (s === "fail") return <span className="text-claw-danger text-[14px] font-bold">✗</span>;
  return <span className="text-claw-warning text-[14px] font-bold">⚠</span>;
};

const Doctor = () => {
  const passed = checks.filter((c) => c.status === "pass").length;
  const total = checks.length;

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-claw-border">
        <span className="text-claw-text text-[13px] font-bold uppercase tracking-wider">System Diagnostics</span>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-primary/40 bg-primary/10 text-primary rounded-sm hover:bg-primary/20 transition-colors">
          <RefreshCw size={12} />
          Run Checks
        </button>
      </div>

      {/* Check list */}
      <div className="flex-1 overflow-hidden">
        {checks.map((check) => (
          <div
            key={check.name}
            className="flex items-start gap-3 px-4 py-2.5 border-b border-claw-border/50"
          >
            <div className="w-5 text-center flex-shrink-0 mt-0.5">{statusIcon(check.status)}</div>
            <div className="min-w-0">
              <div className="text-claw-text text-[12px]">{check.name}</div>
              <div className={`text-[10px] ${check.status === "fail" ? "text-claw-danger/70" : "text-claw-muted"}`}>
                {check.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="px-4 py-3 border-t border-claw-border">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-claw-text text-[11px]">
            {passed}/{total} checks passed
          </span>
          {passed < total && (
            <span className="text-claw-danger text-[10px] uppercase font-bold tracking-wider">
              Release Blocked
            </span>
          )}
        </div>
        <div className="w-full h-1.5 bg-claw-border rounded-sm overflow-hidden">
          <div
            className="h-full bg-primary rounded-sm transition-all"
            style={{ width: `${(passed / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Doctor;
