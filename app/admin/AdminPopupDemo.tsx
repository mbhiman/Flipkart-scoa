"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/popup/Modal";
import { Popover } from "../components/popup/Popover";
import { Tooltip } from "../components/popup/Tooltip";

type AdminPopupDemoProps = {
  /**
   * Name of the resource you are managing, e.g. "User", "Project".
   */
  entityName: string;
  /**
   * Main admin action, e.g. "Delete", "Suspend", "Promote".
   */
  actionName: string;
};

/**
 * Reusable popup section for admin pages.
 * You pass in entityName / actionName and it builds all labels dynamically.
 */
export function AdminPopupDemo({
  entityName,
  actionName,
}: AdminPopupDemoProps) {
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const entityLower = entityName.toLowerCase();

  return (
    <section className="mt-8 rounded-3xl border border-border bg-background/60 p-6 shadow-sm shadow-black/5">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">
          {entityName} admin actions ({actionName})
        </h2>
        <p className="text-sm text-muted">
          This block is fully driven by props. Change the values in the page and
          the copy updates without changing this component.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {/* Dynamic toast message */}
        <Button
          variant="secondary"
          onClick={() =>
            toast.success(`${entityName} ${actionName} prepared`, {
              description: `This is a dynamic toast for ${entityLower} ${actionName.toLowerCase()}.`,
            })
          }
        >
          Toast: {actionName} {entityName}
        </Button>

        {/* Dynamic confirmation modal */}
        <Modal
          open={confirmOpen}
          onOpenChange={setConfirmOpen}
          title={`${actionName} ${entityName}?`}
          description={`Are you sure you want to ${actionName.toLowerCase()} this ${entityLower}? You can reuse this component for any entity/action.`}
          trigger={
            <Button variant="primary">
              Confirm {actionName} {entityName}
            </Button>
          }
        >
          <div className="flex flex-wrap gap-3">
            <Button
              variant="secondary"
              onClick={() => {
                toast.success(`${entityName} ${actionName}d`, {
                  description: `The ${entityLower} has been ${actionName.toLowerCase()}d (demo only).`,
                });
                setConfirmOpen(false);
              }}
            >
              Yes, {actionName}
            </Button>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>

        {/* Popover with dynamic help text */}
        <Popover
          title={`${actionName} policy`}
          trigger={
            <Button variant="outline">
              View {actionName} policy for {entityName}
            </Button>
          }
        >
          For demo purposes this explains what happens when you{" "}
          {actionName.toLowerCase()} a {entityLower}. In a real app you would
          fetch or pass a longer description here.
        </Popover>

        {/* Tooltip with dynamic content */}
        <Tooltip
          content={`This button is related to ${actionName.toLowerCase()} ${entityLower}s.`}
        >
          <span className="inline-flex">
            <Button variant="outline" type="button">
              Hover: {actionName} hint
            </Button>
          </span>
        </Tooltip>
      </div>
    </section>
  );
}

