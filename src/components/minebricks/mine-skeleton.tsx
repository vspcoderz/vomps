import { cn } from "@/lib/utils";

function MineSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-mine-well border border-mine-edge/30", className)}
      {...props}
    />
  );
}
export { MineSkeleton };
