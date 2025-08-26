"use client";

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Services</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {[{ t: "Vidange standard", d: "Huile synthétique + filtre", p: "89,99$" }, { t: "Freins avant", d: "Plaquettes + MO", p: "189,99$" }, { t: "Lavage premium", d: "Intérieur/extérieur", p: "49,99$" }].map((s) => (
          <div key={s.t} className="rounded-xl border p-4">
            <div className="font-semibold">{s.t}</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">{s.d}</div>
            <div className="mt-2 text-sm">{s.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

