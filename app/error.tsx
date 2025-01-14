"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[60vh]">
      <h1 className="text-lg md:text-3xl font-semibold md:font-bold">
        Error: {error.message}
      </h1>
    </div>
  );
}
