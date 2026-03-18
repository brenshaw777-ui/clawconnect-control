import { Play, Square, RotateCcw, ExternalLink, Camera } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [newTabUrl, setNewTabUrl] = useState("");

  return (
    <div className="p-4 space-y-3 font-mono text-[13px]">
      {/* AI Browser Status */}
      <div className="border border-claw-border bg-claw-panel p-3 rounded-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-claw-muted text-[11px] uppercase tracking-wider">// AI Browser</span>
          <span className="px-2 py-0.5 text-[11px] uppercase font-bold tracking-wider bg-primary/15 text-primary border border-primary/30 rounded-sm">
            Running
          </span>
        </div>
        <div className="flex items-center gap-6 mb-3 text-[12px]">
          <div>
            <span className="text-claw-muted">Uptime </span>
            <span className="text-claw-text font-bold">02:14:33</span>
          </div>
          <div>
            <span className="text-claw-muted">Port </span>
            <span className="text-claw-text">9222</span>
          </div>
        </div>
        <div className="text-[11px] text-claw-muted mb-3">
          Profile: <span className="text-claw-text">~/.clawconnect/browser-profile</span>
        </div>
        <div className="flex gap-2">
          {["START", "STOP", "RESTART"].map((label, i) => (
            <button
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-claw-border bg-claw-mid hover:bg-claw-elevated text-claw-text rounded-sm transition-colors"
            >
              {i === 0 && <Play size={12} />}
              {i === 1 && <Square size={12} />}
              {i === 2 && <RotateCcw size={12} />}
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Gateway Connection */}
      <div className="border border-claw-border bg-claw-panel p-3 rounded-sm">
        <span className="text-claw-muted text-[11px] uppercase tracking-wider">// Gateway</span>
        <div className="mt-2 flex items-center gap-2 text-[12px]">
          <span className="w-2 h-2 rounded-full bg-primary inline-block shadow-[0_0_6px_rgba(0,255,136,0.5)]" />
          <span className="text-primary font-bold uppercase text-[11px]">Connected</span>
        </div>
        <div className="mt-1.5 text-[11px] text-claw-muted truncate">
          URL: <span className="text-claw-text">https://gateway.openclaw.ai/v1/connect...</span>
        </div>
        <div className="mt-1 text-[11px] text-claw-muted">
          Latency: <span className="text-primary">42ms</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border border-claw-border bg-claw-panel p-3 rounded-sm">
        <span className="text-claw-muted text-[11px] uppercase tracking-wider">// Quick Actions</span>
        <div className="mt-3 flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-primary/40 bg-primary/10 text-primary rounded-sm hover:bg-primary/20 transition-colors">
            <ExternalLink size={12} />
            Open Browser
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-claw-border bg-claw-mid text-claw-text rounded-sm hover:bg-claw-elevated transition-colors">
            <Camera size={12} />
            Screenshot
          </button>
        </div>
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={newTabUrl}
            onChange={(e) => setNewTabUrl(e.target.value)}
            placeholder="https://..."
            className="flex-1 px-2 py-1.5 text-[11px] bg-claw-deepest border border-claw-border rounded-sm text-claw-text placeholder:text-claw-muted focus:outline-none focus:border-primary/40"
          />
          <button className="px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-claw-border bg-claw-mid text-claw-text rounded-sm hover:bg-claw-elevated transition-colors">
            New Tab
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
