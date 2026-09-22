import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * CordBadge — Discord role/status pill.
 * Variants map to Discord semantics: blurple, online/idle/dnd/streaming + muted.
 */
const cordBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-border bg-secondary text-secondary-foreground",
        outline: "border-border text-foreground",
        online: "border-transparent bg-cord-online text-white",
        idle: "border-transparent bg-cord-idle text-[#1e1f22]",
        dnd: "border-transparent bg-cord-dnd text-white",
        streaming: "border-transparent bg-cord-streaming text-white",
      },
      dot: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CordBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cordBadgeVariants> {
  showDot?: boolean;
}

function CordBadge({ className, variant, showDot, children, ...props }: CordBadgeProps) {
  return (
    <div className={cn(cordBadgeVariants({ variant, className }))} {...props}>
      {showDot && <span aria-hidden className="h-2 w-2 rounded-full bg-current" />}
      {children}
    </div>
  );
}

/** 10px status dot like Discord presence */
function CordStatusDot({
  status,
  className,
}: {
  status: "online" | "idle" | "dnd" | "offline" | "streaming";
  className?: string;
}) {
  const bg =
    status === "online"
      ? "bg-cord-online"
      : status === "idle"
        ? "bg-cord-idle"
        : status === "dnd"
          ? "bg-cord-dnd"
          : status === "streaming"
            ? "bg-cord-streaming"
            : "bg-muted-foreground";
  return (
    <span className={cn("inline-block h-3 w-3 rounded-full border-2 border-card", bg, className)} />
  );
}

export { CordBadge, CordStatusDot, cordBadgeVariants };
