"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

/**
 * Anchored popup for small bits of content or quick actions.
 */
export function Popover({
  trigger,
  title,
  children,
}: {
  trigger: React.ReactNode;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          sideOffset={10}
          className="w-[320px] rounded-2xl border border-border bg-background p-4 text-foreground shadow-xl"
        >
          {title ? <p className="text-sm font-medium">{title}</p> : null}
          <div
            className={
              title ? "mt-2 text-sm text-muted" : "text-sm text-muted"
            }
          >
            {children}
          </div>
          <PopoverPrimitive.Arrow className="fill-border" />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

