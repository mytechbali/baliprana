import { useState } from "react";
import { Search, MapPin, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

const regions = ["All", "Ubud", "Uluwatu", "Canggu"];
const vibes = ["All", "Adventure", "Wellness", "Luxury"];
const durations = ["All", "3 Days", "5 Days", "7+ Days"];

interface QuickFiltersProps {
  filters: { region: string; vibe: string; duration: string };
  onFilterChange: (filters: { region: string; vibe: string; duration: string }) => void;
}

const FilterGroup = ({
  icon: Icon,
  label,
  options,
  selected,
  onSelect,
}: {
  icon: React.ElementType;
  label: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) => (
  <div className="flex flex-col gap-2">
    <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
      <Icon size={13} />
      {label}
    </span>
    <div className="flex gap-1.5 flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
            selected === opt
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary text-secondary-foreground hover:bg-muted"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

const QuickFilters = ({ filters, onFilterChange }: QuickFiltersProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 glass-strong shadow-soft"
    >
      <div className="section-padding py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-end">
          <div className="flex items-center gap-2 text-primary">
            <Search size={16} strokeWidth={2.5} />
            <span className="text-sm font-semibold tracking-wide">Quick Filter</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-1">
            <FilterGroup
              icon={MapPin}
              label="Region"
              options={regions}
              selected={filters.region}
              onSelect={(v) => onFilterChange({ ...filters, region: v })}
            />
            <FilterGroup
              icon={Sparkles}
              label="Vibe"
              options={vibes}
              selected={filters.vibe}
              onSelect={(v) => onFilterChange({ ...filters, vibe: v })}
            />
            <FilterGroup
              icon={Clock}
              label="Duration"
              options={durations}
              selected={filters.duration}
              onSelect={(v) => onFilterChange({ ...filters, duration: v })}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickFilters;
