import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Hash, Volume2, Megaphone } from "lucide-react";

/**
 * CordChannel — Discord sidebar channel row.
 * Selected = bg --accent (#35373c) + text --foreground; default muted.
 */
const cordChannelVariants = cva(
  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-[15px] font-medium transition-colors text-left",
  {
    variants: {
      active: {
        true: "bg-accent text-foreground",
        false: "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
      },
      unread: {
        true: "text-foreground",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
      unread: false,
    },
  }
);

export interface CordChannelProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cordChannelVariants> {
  icon?: "hash" | "voice" | "announcement";
  badge?: number | string;
}

const icons = {
  hash: Hash,
  voice: Volume2,
  announcement: Megaphone,
} as const;

const CordChannel = React.forwardRef<HTMLButtonElement, CordChannelProps>(
  ({ className, active, unread, icon = "hash", badge, children, ...props }, ref) => {
    const Icon = icons[icon];
    return (
      <button
        ref={ref}
        className={cn(cordChannelVariants({ active, unread, className }))}
        {...props}
      >
        {/* left pill for selected */}
        <span
          aria-hidden
          className={cn(
            "h-2 w-1 rounded-full bg-foreground transition-all -ml-1 mr-0",
            active ? "opacity-100" : "opacity-0"
          )}
        />
        <Icon className="h-4 w-4 shrink-0 opacity-70" />
        <span className="flex-1 truncate">{children}</span>
        {unread && !active && (
          <span className="h-2 w-2 shrink-0 rounded-full bg-foreground" />
        )}
        {badge !== undefined && (
          <span className="min-w-5 rounded-full bg-destructive px-1.5 py-0.5 text-center text-xs font-bold leading-none text-destructive-foreground">
            {badge}
          </span>
        )}
      </button>
    );
  }
);
CordChannel.displayName = "CordChannel";

function CordChannelList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-0.5", className)} {...props} />;
}

function CordSidebarShell({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-[240px] flex-col rounded-lg border bg-cord-channel p-2",
        className
      )}
      {...props}
    />
  );
}

export { CordChannel, CordChannelList, CordSidebarShell, cordChannelVariants };
