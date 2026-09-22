import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * MineBadge — Laby category chip. Colors = Laby cat-* tokens
 * grass/gold/diamond/redstone/amethyst mapped to --mine-*.
 * Pixel font option uses monospace like --lui-font-pixel: Monocraft.
 */
const mineBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-border bg-secondary text-secondary-foreground",
        outline: "border-border text-foreground",
        grass: "border-transparent bg-mine-grass text-white",
        gold: "border-transparent bg-mine-gold text-mine-edge",
        diamond: "border-transparent bg-mine-diamond text-mine-edge",
        redstone: "border-transparent bg-mine-redstone text-white",
        amethyst: "border-transparent bg-mine-amethyst text-white",
      },
      pixel: {
        true: "font-mono text-[10px] tracking-[0.12em] uppercase rounded-[4px] border border-mine-edge/40",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      pixel: false,
    },
  }
);

export interface MineBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mineBadgeVariants> {
  dot?: boolean;
}

function MineBadge({ className, variant, pixel, dot, children, ...props }: MineBadgeProps) {
  return (
    <div className={cn(mineBadgeVariants({ variant, pixel, className }))} {...props}>
      {dot && (
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-current opacity-90"
        />
      )}
      {children}
    </div>
  );
}

export { MineBadge, mineBadgeVariants };
