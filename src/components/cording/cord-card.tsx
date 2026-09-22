import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * CordCard — Discord panel / message container.
 * Surfaces: --card (#2b2d31), --background guild rail, --popover (#313338).
 * Rounded 8px like Discord modals/popouts.
 */
const CordCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
);
CordCard.displayName = "CordCard";

const CordCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1 p-5", className)} {...props} />
  )
);
CordCardHeader.displayName = "CordCardHeader";

const CordCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-[15px] font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CordCardTitle.displayName = "CordCardTitle";

const CordCardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);
CordCardDescription.displayName = "CordCardDescription";

const CordCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5 pt-0", className)} {...props} />
  )
);
CordCardContent.displayName = "CordCardContent";

const CordCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-5 pt-0 border-t border-border/50 -mx-0 mt-0 bg-cord-guild/20 rounded-b-lg",
        className
      )}
      {...props}
    />
  )
);
CordCardFooter.displayName = "CordCardFooter";

/** Discord message row: avatar + username + content, hover bg like --accent */
function CordMessage({
  avatar,
  username,
  timestamp,
  children,
  mention,
  className,
}: {
  avatar?: React.ReactNode;
  username: string;
  timestamp?: string;
  children: React.ReactNode;
  mention?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex gap-3 rounded-md px-3 py-2 hover:bg-accent",
        mention && "bg-cord-mention border-l-2 border-primary",
        className
      )}
    >
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-secondary flex items-center justify-center text-sm font-bold">
        {avatar ?? username.slice(0, 2).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-[15px] font-medium text-foreground">{username}</span>
          {timestamp && (
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          )}
        </div>
        <div className="text-sm text-foreground/90 leading-5">{children}</div>
      </div>
    </div>
  );
}

export { CordCard, CordCardHeader, CordCardTitle, CordCardDescription, CordCardContent, CordCardFooter, CordMessage };
