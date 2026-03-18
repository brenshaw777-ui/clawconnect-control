import { ArrowRight, X, Plus } from "lucide-react";

const tabs = [
  { id: 1, title: "OpenClaw Dashboard — Agent Overview", url: "https://app.openclaw.ai/dashboard", active: true },
  { id: 2, title: "GitHub — clawconnect/agent-core", url: "https://github.com/clawconnect/agent-core", active: false },
  { id: 3, title: "Stack Overflow — CDP protocol debug...", url: "https://stackoverflow.com/questions/7281...", active: false },
];

const BrowserTabs = () => (
  <div className="flex flex-col h-full font-mono">
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-claw-border">
      <span className="text-claw-text text-[13px] font-bold uppercase tracking-wider">Managed Browser</span>
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-primary/40 bg-primary/10 text-primary rounded-sm hover:bg-primary/20 transition-colors">
        <Plus size={12} />
        Open URL
      </button>
    </div>

    {/* Tab list */}
    <div className="flex-1 overflow-hidden">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center gap-3 px-4 py-2.5 border-b border-claw-border/50 hover:bg-claw-panel-hover transition-colors ${
            tab.active ? "border-l-2 border-l-primary bg-claw-panel" : "border-l-2 border-l-transparent"
          }`}
        >
          {/* Favicon placeholder */}
          <div className="w-4 h-4 bg-claw-muted/30 rounded-sm flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-claw-text text-[12px] truncate">{tab.title}</div>
            <div className="text-claw-muted text-[10px] truncate">{tab.url}</div>
          </div>
          <div className="flex gap-1 flex-shrink-0">
            <button className="p-1 text-claw-muted hover:text-primary transition-colors">
              <ArrowRight size={12} />
            </button>
            <button className="p-1 text-claw-muted hover:text-claw-danger transition-colors">
              <X size={12} />
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="px-4 py-2 border-t border-claw-border text-[10px] text-claw-muted flex justify-between">
      <span>Chrome/131.0.6778.85</span>
      <span>ws://127.0.0.1:9222</span>
    </div>
  </div>
);

export default BrowserTabs;
