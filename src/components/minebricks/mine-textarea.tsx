import * as React from "react";
import { cn } from "@/lib/utils";

const MineTextarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[72px] w-full rounded-[6px] border border-mine-edge bg-mine-well px-3 py-2 text-sm text-foreground shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
MineTextarea.displayName = "MineTextarea";
export { MineTextarea };
