import { AlertTriangle } from "lucide-react";

const DashboardOffline = () => (
  <div className="flex-1 flex items-center justify-center font-mono">
    <div className="border border-claw-warning/30 bg-claw-panel p-6 rounded-sm text-center max-w-xs">
      <AlertTriangle size={32} className="text-claw-warning mx-auto mb-3" />
      <h2 className="text-claw-warning text-[14px] font-bold uppercase tracking-wider mb-1">
        Daemon Offline
      </h2>
      <p className="text-claw-muted text-[11px] mb-4">
        Cannot connect to ClawConnect daemon at 127.0.0.1:7201
      </p>
      <div className="flex gap-2 justify-center">
        <button className="px-4 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-claw-warning/40 bg-claw-warning/10 text-claw-warning rounded-sm hover:bg-claw-warning/20 transition-colors">
          Retry
        </button>
        <button className="px-4 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-claw-border bg-claw-mid text-claw-text rounded-sm hover:bg-claw-elevated transition-colors">
          View Logs
        </button>
      </div>
    </div>
  </div>
);

export default DashboardOffline;
