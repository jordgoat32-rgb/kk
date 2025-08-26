"use client";

import { useParams } from "next/navigation";

export default function BookingStatusPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  return (
    <div className="min-h-screen px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Statut de réservation</h1>
      <div className="rounded-xl border p-4">
        <div>ID: {id}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-300">Succès (simulation)</div>
      </div>
    </div>
  );
}

