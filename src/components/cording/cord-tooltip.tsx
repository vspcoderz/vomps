import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const CordTooltipProvider = TooltipPrimitive.Provider;
const CordTooltip = TooltipPrimitive.Root;
const CordTooltipTrigger = TooltipPrimitive.Trigger;

const CordTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-[#111214] px-2.5 py-1.5 text-xs font-semibold text-white shadow-lg animate-in fade-in-0",
      className
    )}
    {...props}
  />
));
CordTooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { CordTooltip, CordTooltipTrigger, CordTooltipContent, CordTooltipProvider };
