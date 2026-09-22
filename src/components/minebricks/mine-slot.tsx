import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * MineSlot — Minecraft inventory slot.
 * Fill = --mine-well (#060911), frame = --mine-edge / --border like Laby
 * --slot-fill:#1a1f2b / --lui-frame-slot:#464d5e8c. Radius --radius-slot:6px.
 */
const mineSlotVariants = cva(
  "relative inline-flex items-center justify-center border bg-mine-well text-muted-foreground overflow-hidden select-none transition-colors",
  {
    variants: {
      size: {
        sm: "h-9 w-9 rounded-[6px]",
        default: "h-12 w-12 rounded-[6px]",
        lg: "h-16 w-16 rounded-lg",
        xl: "h-20 w-20 rounded-lg",
      },
      active: {
        true: "border-primary ring-2 ring-ring ring-offset-1 ring-offset-background text-foreground",
        false: "border-mine-edge",
      },
      interactive: {
        true: "cursor-pointer hover:border-primary/50 hover:text-foreground hover:bg-mine-well/90",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      active: false,
      interactive: false,
    },
  }
);

export interface MineSlotProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mineSlotVariants> {
  count?: number | string;
  selected?: boolean;
}

const MineSlot = React.forwardRef<HTMLDivElement, MineSlotProps>(
  ({ className, size, active, interactive, count, selected, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(mineSlotVariants({ size, active: active || selected, interactive, className }))}
      {...props}
    >
      {/* inner highlight like Laby --btn-slot-top:#fff3 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] border-t border-white/10"
      />
      <div className="relative flex items-center justify-center p-1">{children}</div>
      {count !== undefined && (
        <span className="absolute bottom-0.5 right-1 font-mono text-[10px] font-bold leading-none text-foreground drop-shadow-[0_1px_0_rgba(0,0,0,0.9)]">
          {count}
        </span>
      )}
    </div>
  )
);
MineSlot.displayName = "MineSlot";

/** Grid wrapper — Laby uses 9-slot hotbar + inventory wells */
function MineSlotGrid({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-grid grid-cols-9 gap-1.5", className)} {...props} />;
}

export { MineSlot, MineSlotGrid, mineSlotVariants };
