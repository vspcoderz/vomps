import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const MineTooltipProvider = TooltipPrimitive.Provider;
const MineTooltip = TooltipPrimitive.Root;
const MineTooltipTrigger = TooltipPrimitive.Trigger;

const MineTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-[6px] border border-mine-edge bg-mine-well px-2.5 py-1 text-xs font-medium text-foreground shadow-[0_4px_12px_rgba(0,0,0,0.5)] animate-in fade-in-0 zoom-in-95",
      className
    )}
    {...props}
  />
));
MineTooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { MineTooltip, MineTooltipTrigger, MineTooltipContent, MineTooltipProvider };
