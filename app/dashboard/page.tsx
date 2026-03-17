import { PopupDemo } from "./PopupDemo";

export default function DashboardPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted">
            You’re signed in (demo). This page uses the same token-based design
            system and looks great in both themes.
          </p>
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm shadow-black/5">
            <p className="text-sm font-medium">Quick stats</p>
            <p className="mt-2 text-3xl font-semibold">24</p>
            <p className="mt-1 text-sm text-muted">Tasks completed</p>
          </div>
          <div className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm shadow-black/5">
            <p className="text-sm font-medium">Messages</p>
            <p className="mt-2 text-3xl font-semibold">3</p>
            <p className="mt-1 text-sm text-muted">Unread conversations</p>
          </div>
          <div className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm shadow-black/5">
            <p className="text-sm font-medium">Plan</p>
            <p className="mt-2 text-3xl font-semibold">Pro</p>
            <p className="mt-1 text-sm text-muted">Renews in 12 days</p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/20 via-secondary/10 to-background p-8 shadow-sm shadow-black/5">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/25 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/25 blur-2xl" />
            <div className="relative">
              <p className="text-sm font-medium text-muted">Next steps</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Keep building
              </h2>
              <p className="mt-3 text-muted">
                Wire real authentication later; the UI + theming foundation is
                already set.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/"
                  className="rounded-xl border border-border bg-background/60 px-4 py-2 text-sm text-foreground transition-colors hover:bg-border/30"
                >
                  Back to home
                </a>
                <a
                  href="/signup"
                  className="rounded-xl bg-secondary px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  Invite a teammate
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background/60 p-8 shadow-sm shadow-black/5">
            <p className="text-sm font-medium text-muted">Recent activity</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3">
                <span>Signed in</span>
                <span className="text-muted">Just now</span>
              </li>
              <li className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3">
                <span>Visited dashboard</span>
                <span className="text-muted">Just now</span>
              </li>
              <li className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3">
                <span>Theme toggled</span>
                <span className="text-muted">Anytime</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Interactive section that shows all popup types in one place */}
        <PopupDemo />
      </div>
    </main>
  );
}

