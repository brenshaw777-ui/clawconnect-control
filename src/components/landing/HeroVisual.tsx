import { motion } from "framer-motion";

const StatusChip = ({ label, status = "ok" }: { label: string; status?: "ok" | "pending" | "warn" }) => {
  const colors = {
    ok: "bg-claw-green/10 text-claw-green border-claw-green/20",
    pending: "bg-claw-blue/10 text-claw-blue border-claw-blue/20",
    warn: "bg-claw-warning/10 text-claw-warning border-claw-warning/20",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] ${colors[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status === "ok" ? "bg-claw-green" : status === "pending" ? "bg-claw-blue" : "bg-claw-warning"}`} />
      {label}
    </span>
  );
};

const PanelNode = ({
  title,
  subtitle,
  children,
  className = "",
  accent = false,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  accent?: boolean;
}) => (
  <div className={`rounded-[14px] border ${accent ? "border-claw-blue/25 glow-blue-sm" : "border-claw-border/60"} bg-claw-panel panel-shadow ${className}`}>
    <div className={`flex items-center justify-between border-b ${accent ? "border-claw-blue/15" : "border-claw-border/40"} px-3 py-2`}>
      <span className="font-mono text-[11px] font-medium text-claw-muted">{title}</span>
      {subtitle && <span className="font-mono text-[10px] text-claw-muted/60">{subtitle}</span>}
    </div>
    <div className="p-3">{children}</div>
  </div>
);

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-[520px]"
    >
      {/* Glow backdrop */}
      <div className="absolute -inset-8 rounded-3xl bg-claw-blue/[0.04] blur-3xl" />

      <div className="relative space-y-3">
        {/* Agent node */}
        <PanelNode title="AGENT" subtitle="pid:4821">
          <div className="space-y-1.5">
            <div className="font-mono text-[11px] text-claw-muted">
              <span className="text-claw-blue">POST</span> /command
            </div>
            <div className="font-mono text-[11px] text-claw-muted/70">
              {`{ "command": "snapshot", "tabId": "tab-0a3f" }`}
            </div>
            <StatusChip label="SENT" status="ok" />
          </div>
        </PanelNode>

        {/* Connection line */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="h-4 w-px bg-gradient-to-b from-claw-blue/40 to-claw-blue/10" />
            <span className="font-mono text-[9px] tracking-wider text-claw-blue/50">WSS</span>
            <div className="h-4 w-px bg-gradient-to-b from-claw-blue/10 to-claw-blue/40" />
          </div>
        </div>

        {/* Bridge node */}
        <PanelNode title="LOCAL BRIDGE" subtitle="127.0.0.1:18990" accent>
          <div className="flex flex-wrap gap-2">
            <StatusChip label="HEALTHY" status="ok" />
            <StatusChip label="TOKEN OK" status="ok" />
            <StatusChip label="1 EXT" status="pending" />
          </div>
          <div className="mt-2 font-mono text-[10px] text-claw-muted/60">
            routing: tab-0a3f → ext-chromium-01
          </div>
        </PanelNode>

        {/* Connection line */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="h-4 w-px bg-gradient-to-b from-claw-blue/40 to-claw-green/20" />
            <span className="font-mono text-[9px] tracking-wider text-claw-muted/40">PIPE</span>
            <div className="h-4 w-px bg-gradient-to-b from-claw-green/20 to-claw-green/40" />
          </div>
        </div>

        {/* Extension + Tab */}
        <div className="grid grid-cols-2 gap-3">
          <PanelNode title="EXTENSION" subtitle="v0.4.2">
            <div className="space-y-1.5">
              <StatusChip label="CONNECTED" status="ok" />
              <div className="font-mono text-[10px] text-claw-muted/60">caps: 12 actions</div>
            </div>
          </PanelNode>
          <PanelNode title="TARGET TAB" subtitle="tab-0a3f">
            <div className="space-y-1.5">
              <StatusChip label="ATTACHED" status="ok" />
              <div className="font-mono text-[10px] text-claw-muted/60 truncate">host: app.example.com</div>
            </div>
          </PanelNode>
        </div>

        {/* Result */}
        <div className="rounded-[10px] border border-claw-green/20 bg-claw-green/[0.04] px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-claw-green animate-pulse-glow" />
            <span className="font-mono text-[11px] text-claw-green/90">ACK: snapshot complete</span>
            <span className="ml-auto font-mono text-[10px] text-claw-muted/50">42ms</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroVisual;
