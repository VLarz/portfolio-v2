export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="mb-8 text-center">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h1 className="mt-2 text-2xl font-semibold text-foreground">
            Admin
          </h1>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-sm text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full bg-surface-2 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-sm text-muted">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full bg-surface-2 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-background font-medium text-sm rounded-lg py-2.5 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Sign in
          </button>
        </div>

      </div>
    </main>
  );
}
