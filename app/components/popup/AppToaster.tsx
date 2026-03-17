"use client";

import { Toaster } from "sonner";

/**
 * Global toast provider.
 * Placed once in the layout so any client component can trigger toasts.
 */
export function AppToaster() {
  return (
    <Toaster
      richColors
      closeButton
      duration={3500}
      toastOptions={{
        classNames: {
          toast:
            "bg-background text-foreground border border-border shadow-lg rounded-xl",
          title: "text-foreground",
          description: "text-muted",
          actionButton: "bg-primary text-white",
          cancelButton: "bg-border/40 text-foreground",
        },
      }}
    />
  );
}

