export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">


      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h2 className="text-4xl font-bold">
          Build modern UI with Tailwind
        </h2>

        <p className="text-muted mt-4 max-w-xl mx-auto">
          This page demonstrates a clean color system using background,
          foreground, primary, muted and border colors.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">
            Get Started
          </button>

          <button className="bg-secondary text-white px-6 py-3 rounded-lg hover:opacity-90">
            Learn More
          </button>

          <h1 className="text-primary">sjkcasnkcj</h1>

        </div>

      </section>


      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">

        <div className="border border-border p-6 rounded-lg">
          <h3 className="font-semibold text-lg">
            Clean Design
          </h3>

          <p className="text-muted mt-2">
            Using a small color system makes your UI consistent and professional.
          </p>
        </div>

        <div className="border border-border p-6 rounded-lg">
          <h3 className="font-semibold text-lg">
            Simple Colors
          </h3>

          <p className="text-muted mt-2">
            Background, foreground, primary and muted colors are enough for most apps.
          </p>
        </div>

        <div className="border border-border p-6 rounded-lg">
          <h3 className="font-semibold text-lg">
            Easy Theming
          </h3>

          <p className="text-muted mt-2">
            With CSS variables you can easily add dark mode later.
          </p>
        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-border mt-16">

        <div className="max-w-6xl mx-auto px-6 py-6 text-muted text-sm text-center">
          © 2026 MyWebsite. All rights reserved.
        </div>

      </footer>

    </main>
  );
}