"use client";

import * as React from "react";
import { useTheme } from "next-themes";

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7.5 7.5 0 1 0 11.5 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"
      }
      aria-pressed={mounted ? isDark : undefined}
      className={[
        "group relative inline-flex h-9 w-[74px] items-center rounded-full border border-border",
        "bg-background/70 backdrop-blur",
        "shadow-sm shadow-black/5",
        "transition-colors hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
      ].join(" ")}
    >
      {/* Track icons */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-muted">
        <SunIcon className="h-4 w-4 transition-opacity group-hover:opacity-90" />
        <MoonIcon className="h-4 w-4 transition-opacity group-hover:opacity-90" />
      </span>

      {/* Thumb */}
      <span
        className={[
          "pointer-events-none relative ml-1 grid h-7 w-7 place-items-center rounded-full",
          "bg-foreground text-background",
          "shadow-md shadow-black/15",
          "transition-transform duration-200 ease-out",
          mounted && isDark ? "translate-x-[37px]" : "translate-x-0",
        ].join(" ")}
      >
        {mounted ? (
          isDark ? (
            <MoonIcon className="h-4 w-4" />
          ) : (
            <SunIcon className="h-4 w-4" />
          )
        ) : (
          <span className="h-4 w-4 rounded-full bg-background/40" />
        )}
      </span>
    </button>
  );
}

