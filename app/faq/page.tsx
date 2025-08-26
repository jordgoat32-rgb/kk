"use client";

export default function FAQPage() {
  return (
    <div className="min-h-screen px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">FAQ</h1>
      <div className="space-y-4">
        <div>
          <div className="font-semibold">Comment réserver ?</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">Choisissez un service, un créneau, entrez votre véhicule, validez.</div>
        </div>
        <div>
          <div className="font-semibold">Pré-paiement ?</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">Oui, Stripe Checkout en prod.</div>
        </div>
        <div>
          <div className="font-semibold">Flotte ?</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">Oui, suivi multi-véhicules.</div>
        </div>
      </div>
    </div>
  );
}

