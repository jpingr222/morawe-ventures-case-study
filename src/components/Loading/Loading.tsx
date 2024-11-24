export function Loading() {
  return (
    <div
      className="inline-block size-8 animate-spin rounded-full border-4 border-gray-500 border-e-transparent"
      role="status"
    >
      <p className="sr-only">Loading...</p>
    </div>
  );
}
