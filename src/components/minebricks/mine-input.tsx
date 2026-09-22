import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * MineInput — Laby slot-styled field.
 * Fill = --mine-well (#060911), border --mine-edge, radius 6px, placeholder --mine-muted.
 * Font: --font-sans; pixel-mode via .font-pixel on wrapper.
 */
const MineInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-9 w-full rounded-[6px] border border-mine-edge bg-mine-well px-3 py-1 text-sm text-foreground shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
MineInput.displayName = "MineInput";
export { MineInput };
