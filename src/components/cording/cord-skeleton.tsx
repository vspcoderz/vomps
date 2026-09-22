import { cn } from "@/lib/utils";

function CordSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-cord-channel", className)} {...props} />;
}
export { CordSkeleton };
