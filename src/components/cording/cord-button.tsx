import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * CordButton — Discord-style button.
 * Primary = blurple #5865F2, hover #4752c4, shapes pill-ish but using tokens.
 * Token-driven: --primary (blurple), --secondary (#404249), --destructive, --ring.
 */
const cordButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "bg-cord-online text-white hover:brightness-[0.96]",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        light: "bg-cord-light-blurple text-[#1e1f22] hover:bg-cord-light-blurple/90",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-md",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9 rounded-full",
      },
      pill: {
        true: "rounded-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      pill: false,
    },
  }
);

export interface CordButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cordButtonVariants> {
  asChild?: boolean;
}

const CordButton = React.forwardRef<HTMLButtonElement, CordButtonProps>(
  ({ className, variant, size, pill, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(cordButtonVariants({ variant, size, pill, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CordButton.displayName = "CordButton";

export { CordButton, cordButtonVariants };
