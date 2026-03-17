 "use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-2">
        <section className="order-2 lg:order-1">
          <div className="max-w-md">
            <h1 className="text-3xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="mt-2 text-muted">
              Sign in to continue. Clean, token-based theming means this page
              looks great in light and dark mode.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6 shadow-sm shadow-black/5">
              <form className="space-y-4">
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
                    placeholder="••••••••"
                    className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-primary/35"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  className="h-11 w-full rounded-xl bg-primary px-4 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-4 text-center text-sm text-muted">
                Don’t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </section>

        <aside className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/20 via-secondary/10 to-background p-8 shadow-sm shadow-black/5">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/25 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/25 blur-2xl" />

            <div className="relative">
              <p className="text-sm font-medium text-muted">Design system</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                One palette. Two themes.
              </h2>
              <p className="mt-3 text-muted">
                Background, foreground, primary, secondary, muted and border —
                that’s all we need for a cohesive UI.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background/60 p-4">
                  <p className="text-xs text-muted">Primary</p>
                  <div className="mt-2 h-8 rounded-xl bg-primary" />
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-4">
                  <p className="text-xs text-muted">Secondary</p>
                  <div className="mt-2 h-8 rounded-xl bg-secondary" />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

