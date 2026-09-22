import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * CordGuild — Discord server icon rail item.
 * Squircle → circle on hover, left pill indicator like Discord guild list.
 */
function CordGuild({
  active,
  unread,
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { active?: boolean; unread?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span
        aria-hidden
        className={cn(
          "w-1 shrink-0 rounded-full bg-foreground transition-all",
          active ? "h-8 opacity-100" : unread ? "h-2 opacity-100" : "h-0 opacity-0"
        )}
      />
      <button
        className={cn(
          "flex h-12 w-12 items-center justify-center overflow-hidden bg-card text-card-foreground transition-all",
          active
            ? "rounded-[16px] bg-primary text-primary-foreground"
            : "rounded-[24px] hover:rounded-[16px] hover:bg-primary hover:text-primary-foreground",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

function CordGuildRail({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-2 bg-cord-guild p-2 rounded-lg", className)} {...props} />
  );
}

export { CordGuild, CordGuildRail };
