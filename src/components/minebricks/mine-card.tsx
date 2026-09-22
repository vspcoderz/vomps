import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * MineBricks Card — Laby "lui-frame" card.
 * Outer frame in --mine-edge / white/alpha like --lui-frame-card (#464d5e4d),
 * surface in --card, optional well inset for inventory-like sections.
 */

const MineCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-[0_2px_0_var(--mine-edge)] overflow-hidden",
        "border-border",
        className
      )}
      {...props}
    />
  )
);
MineCard.displayName = "MineCard";

const MineCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-1 p-5 border-b border-border bg-card",
        className
      )}
      {...props}
    />
  )
);
MineCardHeader.displayName = "MineCardHeader";

const MineCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { pixel?: boolean }
>(({ className, pixel, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-semibold leading-none tracking-tight",
      pixel && "font-mono text-xs tracking-[0.16em] uppercase text-foreground",
      className
    )}
    {...props}
  />
));
MineCardTitle.displayName = "MineCardTitle";

const MineCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
MineCardDescription.displayName = "MineCardDescription";

const MineCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5", className)} {...props} />
  )
);
MineCardContent.displayName = "MineCardContent";

const MineCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-2 p-5 pt-0", className)}
      {...props}
    />
  )
);
MineCardFooter.displayName = "MineCardFooter";

/** Inset well — minecraft inventory floor (#060911 alias --mine-well) */
const MineWell = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-md border border-mine-edge bg-mine-well p-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]",
        className
      )}
      {...props}
    />
  )
);
MineWell.displayName = "MineWell";

export {
  MineCard,
  MineCardHeader,
  MineCardTitle,
  MineCardDescription,
  MineCardContent,
  MineCardFooter,
  MineWell,
};
