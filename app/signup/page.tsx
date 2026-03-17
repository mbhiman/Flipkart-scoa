import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-2">
        <section>
          <div className="max-w-md">
            <h1 className="text-3xl font-semibold tracking-tight">
              Create your account
            </h1>
            <p className="mt-2 text-muted">
              Sign up in a minute. Same clean design language, same theme-aware
              tokens.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6 shadow-sm shadow-black/5">
              <form className="space-y-4">
                <label className="block">
                  <span className="text-sm text-muted">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-primary/35"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-muted">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-primary/35"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-muted">Password</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-primary/35"
                  />
                </label>

                <button
                  type="button"
                  className="h-11 w-full rounded-xl bg-primary px-4 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  Create account
                </button>
              </form>

              <div className="mt-4 text-center text-sm text-muted">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </section>

        <aside>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-secondary/20 via-primary/10 to-background p-8 shadow-sm shadow-black/5">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/25 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/25 blur-2xl" />

            <div className="relative">
              <p className="text-sm font-medium text-muted">Get started</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Build faster with a small color system
              </h2>
              <p className="mt-3 text-muted">
                Consistent components, consistent spacing, consistent tokens —
                and effortless dark mode.
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-muted">Included</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Theme-aware UI tokens
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    Modern form styles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-border" />
                    Reusable layout components
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

