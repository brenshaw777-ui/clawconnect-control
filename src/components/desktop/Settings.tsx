import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SectionHeader = ({ label }: { label: string }) => (
  <div className="text-primary/50 text-[11px] uppercase tracking-wider mb-3 mt-1">// {label}</div>
);

const FieldLabel = ({ children }: { children: string }) => (
  <label className="text-claw-muted text-[10px] uppercase tracking-wider block mb-1">{children}</label>
);

const TextInput = ({ defaultValue, placeholder, type = "text" }: { defaultValue?: string; placeholder?: string; type?: string }) => (
  <input
    type={type}
    defaultValue={defaultValue}
    placeholder={placeholder}
    className="w-full px-2 py-1.5 text-[11px] bg-claw-deepest border border-claw-border rounded-sm text-claw-text placeholder:text-claw-muted focus:outline-none focus:border-primary/40 font-mono"
  />
);

const SaveButton = ({ label }: { label: string }) => (
  <button className="px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-primary/40 bg-primary/10 text-primary rounded-sm hover:bg-primary/20 transition-colors mt-2">
    {label}
  </button>
);

const Settings = () => {
  const [showToken, setShowToken] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  return (
    <div className="p-4 space-y-0 font-mono overflow-y-auto h-full text-[12px]" style={{ scrollbarWidth: "none" }}>
      {/* Browser */}
      <SectionHeader label="Browser" />
      <div className="space-y-2 mb-3">
        <div><FieldLabel>Binary Path</FieldLabel><TextInput placeholder="auto-detect" /></div>
        <div><FieldLabel>Debug Port</FieldLabel><TextInput defaultValue="9222" type="number" /></div>
        <div><FieldLabel>Profile Directory</FieldLabel><TextInput defaultValue="~/.clawconnect/browser-profile" /></div>
        <SaveButton label="Save Browser Settings" />
      </div>

      <div className="border-t border-claw-border my-3" />

      {/* Gateway */}
      <SectionHeader label="Gateway" />
      <div className="space-y-2 mb-3">
        <div><FieldLabel>URL</FieldLabel><TextInput placeholder="https://gateway.openclaw.ai" /></div>
        <div>
          <FieldLabel>Token</FieldLabel>
          <div className="flex gap-1">
            <input
              type={showToken ? "text" : "password"}
              defaultValue="sk-claw-xxxxxxxxxxxx"
              className="flex-1 px-2 py-1.5 text-[11px] bg-claw-deepest border border-claw-border rounded-sm text-claw-text focus:outline-none focus:border-primary/40 font-mono"
            />
            <button
              onClick={() => setShowToken(!showToken)}
              className="px-2 py-1.5 border border-claw-border bg-claw-mid text-claw-muted rounded-sm hover:text-claw-text transition-colors"
            >
              {showToken ? <EyeOff size={12} /> : <Eye size={12} />}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTestResult("OK 42ms")}
            className="px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider border border-claw-border bg-claw-mid text-claw-text rounded-sm hover:bg-claw-elevated transition-colors"
          >
            Test Connection
          </button>
          {testResult && <span className="text-primary text-[11px] font-bold">{testResult}</span>}
        </div>
      </div>

      <div className="border-t border-claw-border my-3" />

      {/* App */}
      <SectionHeader label="App" />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-claw-text text-[11px]">Launch at login</span>
          <button className="w-8 h-4 rounded-full bg-primary/20 border border-primary/30 relative transition-colors">
            <span className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full bg-primary transition-transform translate-x-4" />
          </button>
        </div>
        <SaveButton label="Save App Settings" />
      </div>
    </div>
  );
};

export default Settings;
