import * as React from "react";
import { cn } from "@/lib/utils";

/** Discord input: bg #2b2d31→#383a40, rounded 8px, 16px font-sans, placeholder #6d6f78 */
const CordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border-0 bg-cord-channel px-3 py-2 text-[15px] text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
CordInput.displayName = "CordInput";
export { CordInput };
