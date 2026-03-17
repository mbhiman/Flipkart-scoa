"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/popup/Modal";
import { Popover } from "../components/popup/Popover";
import { Tooltip } from "../components/popup/Tooltip";

/**
 * Dashboard section that showcases all popup types.
 * This keeps popup wiring in one place so you can see the flow.
 */
export function PopupDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="mt-8 rounded-3xl border border-border bg-background/60 p-6 shadow-sm shadow-black/5">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">Popups demo</h2>
        <p className="text-sm text-muted">
          Use these buttons to test toast, modal, popover, and tooltip.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {/* Toast example (Sonner) */}
        <Button
          variant="secondary"
          onClick={() =>
            toast.success("Toast works!", {
              description: "Triggered from the dashboard.",
            })
          }
        >
          Show toast
        </Button>

        {/* Modal example (Radix Dialog) */}
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Radix modal"
          description="This modal is controlled by React state and can trigger other popups."
          trigger={<Button variant="primary">Open modal</Button>}
        >
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() =>
                toast("You clicked inside the modal", {
                  description: "Modal can talk to the toaster too.",
                })
              }
            >
              Toast from modal
            </Button>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Close modal
            </Button>
          </div>
        </Modal>

        {/* Popover example (anchored popup) */}
        <Popover
          title="Popover"
          trigger={<Button variant="outline">Open popover</Button>}
        >
          This anchored popup is good for quick filters, short forms, or extra
          information.
        </Popover>

        {/* Tooltip example (hover/focus) */}
        <Tooltip content="This is a tooltip popup">
          <span className="inline-flex">
            <Button variant="outline" type="button">
              Hover me
            </Button>
          </span>
        </Tooltip>
      </div>
    </section>
  );
}

