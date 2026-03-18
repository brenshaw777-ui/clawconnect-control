import { useState } from "react";
import { LayoutGrid, Globe, SlidersHorizontal, Activity, Terminal } from "lucide-react";
import Dashboard from "@/components/desktop/Dashboard";
import DashboardOffline from "@/components/desktop/DashboardOffline";
import BrowserTabs from "@/components/desktop/BrowserTabs";
import Settings from "@/components/desktop/Settings";
import Doctor from "@/components/desktop/Doctor";
import Setup from "@/components/desktop/Setup";

type Page = "dashboard" | "browser" | "settings" | "doctor" | "setup";

const navItems: { id: Page; icon: typeof LayoutGrid; bottom?: boolean }[] = [
  { id: "dashboard", icon: LayoutGrid },
  { id: "browser", icon: Globe },
  { id: "settings", icon: SlidersHorizontal },
  { id: "doctor", icon: Activity },
  { id: "setup", icon: Terminal, bottom: true },
];

const DesktopApp = () => {
  const [activePage, setActivePage] = useState<Page>("dashboard");
  const [showOffline, setShowOffline] = useState(false);

  const topItems = navItems.filter((n) => !n.bottom);
  const bottomItems = navItems.filter((n) => n.bottom);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return showOffline ? <DashboardOffline /> : <Dashboard />;
      case "browser":
        return <BrowserTabs />;
      case "settings":
        return <Settings />;
      case "doctor":
        return <Doctor />;
      case "setup":
        return <Setup onFinish={() => setActivePage("dashboard")} />;
    }
  };

  return (
    <div className="min-h-screen bg-claw-deepest flex items-center justify-center font-mono">
      {/* Window frame */}
      <div
        className="flex border border-claw-border rounded-sm overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]"
        style={{ width: 900, height: 680 }}
      >
        {/* Sidebar */}
        <div className="w-14 bg-[#0f0f0f] border-r border-claw-border flex flex-col items-center py-3 flex-shrink-0">
          <div className="flex flex-col gap-1 flex-1">
            {topItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`w-10 h-10 flex items-center justify-center rounded-sm transition-colors relative ${
                    active
                      ? "bg-claw-elevated text-primary"
                      : "text-claw-muted hover:text-claw-text hover:bg-claw-panel-hover"
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1 bottom-1 w-0.5 bg-primary rounded-r" />
                  )}
                  <Icon size={18} />
                </button>
              );
            })}
          </div>

          {/* Bottom items */}
          <div className="flex flex-col gap-1">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`w-10 h-10 flex items-center justify-center rounded-sm transition-colors relative ${
                    active
                      ? "bg-claw-elevated text-primary"
                      : "text-claw-muted hover:text-claw-text hover:bg-claw-panel-hover"
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1 bottom-1 w-0.5 bg-primary rounded-r" />
                  )}
                  <Icon size={18} />
                </button>
              );
            })}
          </div>

          {/* Offline toggle (demo) */}
          {activePage === "dashboard" && (
            <button
              onClick={() => setShowOffline(!showOffline)}
              className={`w-10 h-6 mt-2 flex items-center justify-center rounded-sm text-[8px] uppercase font-bold tracking-wider transition-colors ${
                showOffline
                  ? "bg-claw-danger/20 text-claw-danger border border-claw-danger/30"
                  : "bg-claw-border text-claw-muted"
              }`}
              title="Toggle offline state"
            >
              {showOffline ? "OFF" : "ON"}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 bg-[#0a0a0a] flex flex-col overflow-hidden">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default DesktopApp;
