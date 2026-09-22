import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * MineBricks Button — LabyMod chunky 3D button.
 * Face color + 3px bottom-edge in --mine-edge, pressed shift replicates
 * Laby's --btn-primary-bottom / --btn-bottom:3px → :active collapse.
 * All colors via tokens; no hex.
 */
const mineButtonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-bold tracking-wide uppercase transition-[transform,box-shadow,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 select-none active:translate-y-[2px]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.22)] hover:brightness-[1.06] active:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-secondary/90 active:shadow-none",
        destructive:
          "bg-destructive text-destructive-foreground border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.18)] hover:brightness-[1.06] active:shadow-none",
        slot:
          "bg-card text-card-foreground border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-accent hover:text-accent-foreground active:shadow-none",
        grass:
          "bg-mine-grass text-white border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.18)] hover:brightness-[1.07] active:shadow-none",
        gold:
          "bg-mine-gold text-mine-edge border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.22)] hover:brightness-[1.06] active:shadow-none",
        diamond:
          "bg-mine-diamond text-mine-edge border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.22)] hover:brightness-[1.06] active:shadow-none",
        redstone:
          "bg-mine-redstone text-white border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.14)] hover:brightness-[1.06] active:shadow-none",
        amethyst:
          "bg-mine-amethyst text-white border border-mine-edge shadow-[0_3px_0_var(--mine-edge),inset_0_1px_0_rgba(255,255,255,0.16)] hover:brightness-[1.06] active:shadow-none",
      },
      size: {
        default: "h-9 px-5 py-2 rounded-md",
        sm: "h-7 px-3 text-[11px] rounded-md",
        lg: "h-11 px-8 text-base rounded-lg",
        icon: "h-9 w-9 rounded-md",
      },
      pixel: {
        true: "font-mono text-[11px] tracking-[0.14em]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      pixel: false,
    },
  }
);

export interface MineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof mineButtonVariants> {
  asChild?: boolean;
}

const MineButton = React.forwardRef<HTMLButtonElement, MineButtonProps>(
  ({ className, variant, size, pixel, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(mineButtonVariants({ variant, size, pixel, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
MineButton.displayName = "MineButton";

export { MineButton, mineButtonVariants };
