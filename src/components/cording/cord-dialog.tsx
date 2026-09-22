import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const CordDialog = DialogPrimitive.Root;
const CordDialogTrigger = DialogPrimitive.Trigger;
const CordDialogPortal = DialogPrimitive.Portal;

const CordDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in", className)}
    {...props}
  />
));
CordDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const CordDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <CordDialogPortal>
    <CordDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-card p-6 shadow-xl sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-1 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring">
        <X className="h-4 w-4" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </CordDialogPortal>
));
CordDialogContent.displayName = DialogPrimitive.Content.displayName;

const CordDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5", className)} {...props} />
);
const CordDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex justify-end gap-2 bg-cord-guild -mx-6 -mb-6 mt-2 p-4 rounded-b-lg", className)} {...props} />
);
const CordDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-xl font-bold font-display", className)} {...props} />
));
CordDialogTitle.displayName = DialogPrimitive.Title.displayName;
const CordDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CordDialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  CordDialog,
  CordDialogTrigger,
  CordDialogContent,
  CordDialogHeader,
  CordDialogFooter,
  CordDialogTitle,
  CordDialogDescription,
  CordDialogOverlay,
};
