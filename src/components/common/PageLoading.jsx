export default function PageLoading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[rgba(255,255,255,0.2)]"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading</span>
      <div
        className="h-10 w-10 animate-pulse rounded-full bg-zinc-200"
        aria-hidden
      />
    </div>
  );
}
