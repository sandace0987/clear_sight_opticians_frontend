import * as React from "react";
import { Search, RotateCcw, SlidersHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterState {
  search: string;
  maxPrice: number;
  shapes: string[];
  types: string[];
  colors: string[];
}

interface BrandFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  availableShapes: string[];
  availableColors: string[];
  availableTypes: string[];
  maxPriceLimit: number;
}

const COLOR_MAP: Record<string, { bgClass: string; borderClass: string; label: string }> = {
  black: { bgClass: "bg-black", borderClass: "border-neutral-800", label: "Black" },
  grey: { bgClass: "bg-neutral-500 dark:bg-neutral-400", borderClass: "border-neutral-600 dark:border-neutral-300", label: "Grey" },
  gold: { bgClass: "bg-yellow-500 dark:bg-yellow-400", borderClass: "border-yellow-600 dark:border-yellow-300", label: "Gold" },
  silver: { bgClass: "bg-neutral-300 dark:bg-neutral-200", borderClass: "border-neutral-400 dark:border-neutral-100", label: "Silver" },
  brown: { bgClass: "bg-amber-800 dark:bg-amber-700", borderClass: "border-amber-900 dark:border-amber-600", label: "Brown" },
  blue: { bgClass: "bg-blue-600", borderClass: "border-blue-700", label: "Blue" },
  green: { bgClass: "bg-green-600", borderClass: "border-green-700", label: "Green" },
  red: { bgClass: "bg-red-600", borderClass: "border-red-700", label: "Red" },
  clear: { bgClass: "bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur", borderClass: "border-neutral-300 dark:border-neutral-700", label: "Clear" },
  white: { bgClass: "bg-white", borderClass: "border-neutral-300", label: "White" },
};

export function BrandFilters({
  filters,
  onChange,
  onReset,
  availableShapes,
  availableColors,
  availableTypes,
  maxPriceLimit,
}: BrandFiltersProps) {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, search: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, maxPrice: Number(e.target.value) });
  };

  const toggleShape = (shape: string) => {
    const isSelected = filters.shapes.includes(shape);
    const newShapes = isSelected
      ? filters.shapes.filter((s) => s !== shape)
      : [...filters.shapes, shape];
    onChange({ ...filters, shapes: newShapes });
  };

  const toggleType = (type: string) => {
    const isSelected = filters.types.includes(type);
    const newTypes = isSelected
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    onChange({ ...filters, types: newTypes });
  };

  const toggleColor = (color: string) => {
    const isSelected = filters.colors.includes(color);
    const newColors = isSelected
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    onChange({ ...filters, colors: newColors });
  };

  const hasActiveFilters =
    filters.search !== "" ||
    filters.maxPrice < maxPriceLimit ||
    filters.shapes.length > 0 ||
    filters.types.length > 0 ||
    filters.colors.length > 0;

  return (
    <div className="bg-secondary/40 border border-border/80 rounded-3xl p-5 lg:p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 font-bold uppercase tracking-[0.16em] text-xs text-foreground/90 hover:text-electric transition-colors"
        >
          <SlidersHorizontal className="size-4 text-electric" />
          <span>Filters & Search</span>
          <ChevronDown
            className={cn("size-4 transition-transform duration-300", !isExpanded && "-rotate-90")}
          />
        </button>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-electric transition-colors"
          >
            <RotateCcw className="size-3" /> Reset
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="space-y-6 animate-fadeIn">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search model names..."
              value={filters.search}
              onChange={handleSearchChange}
              className="w-full bg-background border border-border/60 hover:border-border rounded-full pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {/* Price filter */}
            {maxPriceLimit > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Budget (Max)
                </span>
                <div className="flex justify-between items-center text-xs font-semibold text-foreground/80 mt-1">
                  <span>₹0</span>
                  <span className="text-electric font-bold">₹{filters.maxPrice.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={maxPriceLimit}
                  step="500"
                  value={filters.maxPrice}
                  onChange={handlePriceChange}
                  className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-electric mt-1"
                />
              </div>
            )}

            {/* Shape filter */}
            {availableShapes.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Frame Shape
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {availableShapes.map((shape) => {
                    const isSelected = filters.shapes.includes(shape);
                    return (
                      <button
                        key={shape}
                        type="button"
                        onClick={() => toggleShape(shape)}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.08em] border transition-colors",
                          isSelected
                            ? "bg-electric text-white border-electric"
                            : "bg-background/80 hover:bg-accent border-border/60 text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {shape}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Frame type filter */}
            {availableTypes.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Frame Type
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {availableTypes.map((type) => {
                    const isSelected = filters.types.includes(type);
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => toggleType(type)}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.08em] border transition-colors",
                          isSelected
                            ? "bg-electric text-white border-electric"
                            : "bg-background/80 hover:bg-accent border-border/60 text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {type.replace("-", " ")}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Color swatches filter */}
            {availableColors.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Colors
                </span>
                <div className="flex flex-wrap gap-2.5 mt-1.5">
                  {availableColors.map((color) => {
                    const isSelected = filters.colors.includes(color);
                    const config = COLOR_MAP[color] || { bgClass: "bg-neutral-500", borderClass: "border-neutral-600", label: color };
                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => toggleColor(color)}
                        aria-label={config.label}
                        title={config.label}
                        className={cn(
                          "relative block size-6 rounded-full border shadow-sm transition-transform hover:scale-110",
                          config.bgClass,
                          config.borderClass,
                          isSelected && "ring-2 ring-electric ring-offset-2 ring-offset-background"
                        )}
                      >
                        {isSelected && (
                          <span
                            className={cn(
                              "absolute inset-0 flex items-center justify-center text-[10px] font-bold",
                              color === "white" || color === "clear" || color === "silver" ? "text-black" : "text-white"
                            )}
                          >
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
