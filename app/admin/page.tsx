import { AdminPopupDemo } from "./AdminPopupDemo";
//make a admin page with

export default function AdminPage() {
  // You can change these values and the whole section updates:
  const entityName = "User";
  const actionName = "Suspend";

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Admin</h1>
          <p className="text-muted">
            Example admin page that reuses the popup components. All wording
            comes from simple props so you can adapt it for different resources.
          </p>
        </div>

        {/* Reusable popup block: change entityName/actionName to reuse for other admin areas */}
        <AdminPopupDemo entityName={entityName} actionName={actionName} />
      </div>
    </main>
  );
}

