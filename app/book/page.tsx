"use client";

import Link from "next/link";

export default function BookPage() {
  return (
    <div className="min-h-screen px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Réservation</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">Mode invité: sélectionnez un service, un créneau et validez (simulation).</p>
      <div className="rounded-xl border p-4">
        <div>Ce module réutilise la carte de réservation de la page d’accueil.</div>
        <div className="mt-3">
          <Link className="underline" href="/">Retour</Link>
        </div>
      </div>
    </div>
  );
}

