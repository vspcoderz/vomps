import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * MineProgress — stepped XP / bar like Laby's hero/stats reveals.
 * Track = --mine-well, fill uses --mine-* or --primary.
 */
const mineProgressVariants = cva("h-full transition-all duration-500 ease-out", {
  variants: {
    variant: {
      primary: "bg-primary",
      grass: "bg-mine-grass",
      gold: "bg-mine-gold",
      diamond: "bg-mine-diamond",
      redstone: "bg-mine-redstone",
      amethyst: "bg-mine-amethyst",
    },
    striped: {
      true: "bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(0,0,0,0.14)_6px,rgba(0,0,0,0.14)_12px)]",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    striped: false,
  },
});

export interface MineProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mineProgressVariants> {
  value: number;
  max?: number;
  showLabel?: boolean;
}

const MineProgress = React.forwardRef<HTMLDivElement, MineProgressProps>(
  ({ className, variant, striped, value, max = 100, showLabel, ...props }, ref) => {
    const pct = Math.max(0, Math.min(100, (value / max) * 100));
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          "relative h-3 w-full overflow-hidden rounded-full border border-mine-edge bg-mine-well",
          className
        )}
        {...props}
      >
        <div
          className={cn(mineProgressVariants({ variant, striped }))}
          style={{ width: `${pct}%` }}
        />
        {/* top highlight */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
        {showLabel && (
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold tracking-wide text-foreground drop-shadow-[0_1px_0_rgba(0,0,0,0.8)]">
            {Math.round(pct)}%
          </span>
        )}
      </div>
    );
  }
);
MineProgress.displayName = "MineProgress";

/** Segmented XP shelf — N blocks, used for bossbar-style displays */
function MineXpShelf({
  segments = 10,
  filled = 6,
  variant = "grass",
  className,
}: {
  segments?: number;
  filled: number;
  variant?: NonNullable<VariantProps<typeof mineProgressVariants>["variant"]>;
  className?: string;
}) {
  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-3 flex-1 rounded-sm border",
            i < filled
              ? cn(
                  "border-mine-edge",
                  variant === "primary" && "bg-primary",
                  variant === "grass" && "bg-mine-grass",
                  variant === "gold" && "bg-mine-gold",
                  variant === "diamond" && "bg-mine-diamond",
                  variant === "redstone" && "bg-mine-redstone",
                  variant === "amethyst" && "bg-mine-amethyst"
                )
              : "border-mine-edge bg-mine-well"
          )}
        />
      ))}
    </div>
  );
}

export { MineProgress, MineXpShelf, mineProgressVariants };
