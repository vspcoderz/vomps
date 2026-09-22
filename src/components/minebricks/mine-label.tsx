import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const mineLabelVariants = cva(
  "text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      pixel: {
        true: "font-pixel text-[10px] tracking-[0.12em] uppercase text-muted-foreground",
        false: "text-foreground",
      },
    },
    defaultVariants: { pixel: false },
  }
);

const MineLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof mineLabelVariants>
>(({ className, pixel, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(mineLabelVariants({ pixel, className }))}
    {...props}
  />
));
MineLabel.displayName = LabelPrimitive.Root.displayName;
export { MineLabel };
