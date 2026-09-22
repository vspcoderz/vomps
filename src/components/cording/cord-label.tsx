import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

const CordLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-xs font-bold uppercase tracking-wide text-muted-foreground peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
CordLabel.displayName = LabelPrimitive.Root.displayName;
export { CordLabel };
