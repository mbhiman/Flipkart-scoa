import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            MyWebsite
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link
              href="/dashboard"
              className="transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link href="/#products" className="transition-colors hover:text-foreground">
              Products
            </Link>
            <Link href="/#about" className="transition-colors hover:text-foreground">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/signin"
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Sign up
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

