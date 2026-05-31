export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar skeleton */}
      <aside className="hidden md:flex w-20 lg:w-64 border-r border-white/10 bg-[#0a0a0a] p-4 flex-col">
        <div className="h-8 w-32 rounded-lg bg-zinc-800 animate-pulse mb-10 hidden lg:block" />
        <nav className="flex flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl p-4"
            >
              <div className="h-6 w-6 rounded-md bg-zinc-800 animate-pulse" />
              <div className="h-4 w-20 rounded-md bg-zinc-800 animate-pulse hidden lg:block" />
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content skeleton */}
      <section className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hero tile skeleton */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-zinc-900 p-8">
            <div className="h-4 w-24 rounded-md bg-zinc-800 animate-pulse mb-3" />
            <div className="h-12 w-48 rounded-lg bg-zinc-800 animate-pulse mb-4" />
            <div className="h-4 w-64 rounded-md bg-zinc-800 animate-pulse mb-6" />
            <div className="h-10 w-48 rounded-full bg-zinc-800 animate-pulse" />
          </div>

          {/* Activity tile skeleton */}
          <div className="rounded-[32px] border border-white/10 bg-zinc-900 p-6">
            <div className="h-6 w-36 rounded-md bg-zinc-800 animate-pulse mb-2" />
            <div className="h-4 w-48 rounded-md bg-zinc-800 animate-pulse mb-8" />
            <div className="flex items-end justify-between h-40 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className="w-full rounded-full bg-zinc-800 animate-pulse"
                  style={{ height: `${30 + Math.random() * 50}%` }}
                />
              ))}
            </div>
          </div>

          {/* Course card skeletons */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-[32px] border border-white/10 bg-zinc-900 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-zinc-800 animate-pulse" />
                <div className="h-4 w-10 rounded-md bg-zinc-800 animate-pulse" />
              </div>
              <div className="h-6 w-40 rounded-md bg-zinc-800 animate-pulse mt-6" />
              <div className="h-2 w-full rounded-full bg-zinc-800 animate-pulse mt-5" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
