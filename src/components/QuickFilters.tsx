import { MapPin, Sparkles, Clock, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";

const regions = ["All", "Ubud", "Uluwatu", "Canggu"];
const vibes = ["All", "Adventure", "Wellness", "Luxury"];
const durations = ["All", "3 Days", "5 Days", "7+ Days"];

interface QuickFiltersProps {
  filters: { region: string; vibe: string; duration: string };
  onFilterChange: (filters: { region: string; vibe: string; duration: string }) => void;
}

const QuickFilters = ({ filters, onFilterChange }: QuickFiltersProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 glass-strong shadow-soft"
    >
      <div className="section-padding py-3">
        <div className="max-w-6xl mx-auto">
          <Menubar className="border-none bg-transparent p-0 h-auto gap-1">
            {/* Region Menu */}
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-muted data-[state=open]:bg-primary data-[state=open]:text-primary-foreground transition-all duration-200 cursor-pointer">
                <MapPin size={14} />
                <span>Region</span>
                {filters.region !== "All" && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-accent text-accent-foreground">
                    {filters.region}
                  </span>
                )}
                <ChevronDown size={12} className="ml-0.5 opacity-60" />
              </MenubarTrigger>
              <MenubarContent className="min-w-[160px] rounded-xl shadow-elevated border-border/50 bg-card p-1">
                {regions.map((r) => (
                  <MenubarItem
                    key={r}
                    onClick={() => onFilterChange({ ...filters, region: r })}
                    className={`rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors ${
                      filters.region === r
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {r === "All" ? "All Regions" : r}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>

            {/* Vibe Menu */}
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-muted data-[state=open]:bg-primary data-[state=open]:text-primary-foreground transition-all duration-200 cursor-pointer">
                <Sparkles size={14} />
                <span>Vibe</span>
                {filters.vibe !== "All" && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-accent text-accent-foreground">
                    {filters.vibe}
                  </span>
                )}
                <ChevronDown size={12} className="ml-0.5 opacity-60" />
              </MenubarTrigger>
              <MenubarContent className="min-w-[160px] rounded-xl shadow-elevated border-border/50 bg-card p-1">
                {vibes.map((v) => (
                  <MenubarItem
                    key={v}
                    onClick={() => onFilterChange({ ...filters, vibe: v })}
                    className={`rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors ${
                      filters.vibe === v
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {v === "All" ? "All Vibes" : v}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>

            {/* Duration Menu */}
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-muted data-[state=open]:bg-primary data-[state=open]:text-primary-foreground transition-all duration-200 cursor-pointer">
                <Clock size={14} />
                <span>Duration</span>
                {filters.duration !== "All" && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-accent text-accent-foreground">
                    {filters.duration}
                  </span>
                )}
                <ChevronDown size={12} className="ml-0.5 opacity-60" />
              </MenubarTrigger>
              <MenubarContent className="min-w-[160px] rounded-xl shadow-elevated border-border/50 bg-card p-1">
                {durations.map((d) => (
                  <MenubarItem
                    key={d}
                    onClick={() => onFilterChange({ ...filters, duration: d })}
                    className={`rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors ${
                      filters.duration === d
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {d === "All" ? "All Durations" : d}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickFilters;
