"use client";

import { useEffect, useMemo, useState } from "react";
import { Calendar, CreditCard, MapPin, Wrench } from "lucide-react";

type Service = {
  slug: string;
  title: string;
  short_desc: string;
  base_price_cents: number;
  duration_min: number;
  category: string;
};

const colors = {
  bg: "#0B0B0F",
  card: "#141420",
  gold: "#D4AF37",
  red: "#E11D48",
  mauve: "#7C3AED",
  text: "#EAEAF5",
  stroke: "#232336",
};

const catalog: Service[] = [
  { slug: "vidange-standard", title: "Vidange standard", short_desc: "Huile synthétique + filtre", base_price_cents: 8999, duration_min: 45, category: "entretien" },
  { slug: "freins-avant", title: "Freins avant", short_desc: "Plaquettes + main d’œuvre", base_price_cents: 18999, duration_min: 90, category: "reparation" },
  { slug: "lavage-premium", title: "Lavage premium", short_desc: "Intérieur/extérieur", base_price_cents: 4999, duration_min: 40, category: "lavage" },
];

function currencyFromCents(cents: number) {
  return (cents / 100).toFixed(2).replace(".", ",") + "$";
}

function Stat({ icon: Icon, label, value, hint, color }: { icon: any; label: string; value: string; hint?: string; color?: string }) {
  return (
    <div className="rounded-2xl p-4 border" style={{ background: colors.card, borderColor: colors.stroke }}>
      <div className="flex items-center gap-3">
        <div className="rounded-xl p-2" style={{ background: "#0f0f1a", border: `1px solid ${colors.stroke}` }}>
          <Icon size={18} color={color ?? colors.text} />
        </div>
        <div>
          <div className="text-white/60 text-xs">{label}</div>
          <div className="text-white/90 font-semibold text-sm">{value}</div>
          {hint ? <div className="text-white/40 text-xs mt-0.5">{hint}</div> : null}
        </div>
      </div>
    </div>
  );
}

function Step({ index, title, active, completed, onClick }: { index: number; title: string; active: boolean; completed: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 text-left w-full rounded-xl p-3 border transition hover:bg-white/5" style={{ borderColor: colors.stroke }}>
      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: active ? colors.gold : completed ? "#1e1e2a" : "transparent", color: active ? "#101010" : colors.text, border: `1px solid ${colors.stroke}` }}>
        {completed ? "✓" : index}
      </div>
      <div className="text-white/90 text-sm">{title}</div>
    </button>
  );
}

function BookingCard() {
  const [step, setStep] = useState<number>(1);
  const [serviceSlug, setServiceSlug] = useState<string>(catalog[0].slug);
  const [address, setAddress] = useState<string>("");
  const [vehicle, setVehicle] = useState<string>("");
  const [slots, setSlots] = useState<string[]>([]);
  const [slot, setSlot] = useState<string>("");
  const [quoteCents, setQuoteCents] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/slots")
      .then((r) => r.json())
      .then((data) => setSlots(data.slots ?? []))
      .catch(() => setSlots([]));
  }, []);

  useEffect(() => {
    async function loadQuote() {
      try {
        const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug: serviceSlug }) });
        const data = await res.json();
        setQuoteCents(typeof data.priceCents === "number" ? data.priceCents : null);
      } catch {
        setQuoteCents(null);
      }
    }
    loadQuote();
  }, [serviceSlug]);

  const selectedService = useMemo(() => catalog.find((c) => c.slug === serviceSlug)!, [serviceSlug]);

  return (
    <div className="rounded-2xl p-5 border grid md:grid-cols-2 gap-5" style={{ background: colors.card, borderColor: colors.stroke }}>
      <div className="space-y-3">
        <div className="text-white/80 text-sm">Flow 4 étapes</div>
        <Step index={1} title="Choisir service" active={step === 1} completed={step > 1} onClick={() => setStep(1)} />
        <Step index={2} title="Adresse & créneau" active={step === 2} completed={step > 2} onClick={() => setStep(2)} />
        <Step index={3} title="Véhicule" active={step === 3} completed={step > 3} onClick={() => setStep(3)} />
        <Step index={4} title="Paiement (simulé)" active={step === 4} completed={false} onClick={() => setStep(4)} />

        <div className="pt-2 border-t" style={{ borderColor: colors.stroke }}>
          <div className="text-white/60 text-xs">Promesse</div>
          <div className="text-white/90">Gérez, suivez et payez vos entretiens au même endroit.</div>
        </div>
      </div>

      <div className="space-y-4">
        {step === 1 && (
          <div className="space-y-3">
            <div className="text-white/80 text-sm">1) Choisir un service</div>
            <div className="grid gap-2">
              {catalog.map((s) => (
                <label key={s.slug} className="flex items-center justify-between gap-3 rounded-xl p-3 border cursor-pointer" style={{ borderColor: colors.stroke }}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" className="accent-current" checked={serviceSlug === s.slug} onChange={() => setServiceSlug(s.slug)} />
                    <div>
                      <div className="font-semibold text-white/90">{s.title}</div>
                      <div className="text-white/60 text-xs">{s.short_desc} · {s.duration_min} min</div>
                    </div>
                  </div>
                  <div className="text-white/80 text-sm">{currencyFromCents(s.base_price_cents)}</div>
                </label>
              ))}
            </div>
            <button className="rounded-lg py-2 px-3 font-semibold" style={{ background: colors.gold, color: "#101010" }} onClick={() => setStep(2)}>Continuer</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <div className="text-white/80 text-sm">2) Adresse & créneau</div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-white/60" />
                <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Adresse" className="rounded-lg border px-3 py-2 bg-transparent text-white placeholder:text-white/40 outline-none w-full" style={{ borderColor: colors.stroke }} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {slots.length === 0 && <div className="text-white/60 text-sm">Chargement des créneaux…</div>}
                {slots.map((s) => (
                  <button key={s} onClick={() => setSlot(s)} className="px-3 py-2 rounded-lg border text-sm" style={{ borderColor: colors.stroke, background: slot === s ? "#1f1f2a" : "transparent" }}>{new Date(s).toLocaleString()}</button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg py-2 px-3 border" style={{ borderColor: colors.stroke }} onClick={() => setStep(1)}>Retour</button>
              <button className="rounded-lg py-2 px-3 font-semibold disabled:opacity-50" style={{ background: colors.gold, color: "#101010" }} disabled={!address || !slot} onClick={() => setStep(3)}>Continuer</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <div className="text-white/80 text-sm">3) Véhicule</div>
            <input value={vehicle} onChange={(e) => setVehicle(e.target.value)} placeholder="Ex: Corolla 2020" className="rounded-lg border px-3 py-2 bg-transparent text-white placeholder:text-white/40 outline-none w-full" style={{ borderColor: colors.stroke }} />
            <div className="flex gap-2">
              <button className="rounded-lg py-2 px-3 border" style={{ borderColor: colors.stroke }} onClick={() => setStep(2)}>Retour</button>
              <button className="rounded-lg py-2 px-3 font-semibold disabled:opacity-50" style={{ background: colors.gold, color: "#101010" }} disabled={!vehicle} onClick={() => setStep(4)}>Continuer</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3">
            <div className="text-white/80 text-sm">4) Paiement (simulé)</div>
            <div className="rounded-xl p-3 border" style={{ borderColor: colors.stroke }}>
              <div className="text-white/80 text-sm">Résumé</div>
              <div className="text-white/90">{selectedService.title} · {address} · {slot ? new Date(slot).toLocaleString() : "—"}</div>
              <div className="text-white/60 text-sm mt-1">Montant estimé: {quoteCents ? currencyFromCents(quoteCents) : currencyFromCents(selectedService.base_price_cents)}</div>
            </div>
            <button className="rounded-lg py-2 px-3 font-semibold flex items-center gap-2" style={{ background: colors.mauve, color: "#ffffff" }} onClick={() => alert("Paiement simulé: succès")}> 
              <CreditCard size={16} /> Checkout simulé
            </button>
            <div className="text-white/60 text-xs">En prod: Stripe Checkout</div>
          </div>
        )}
      </div>
    </div>
  );
}

function TabsBar({ active, onChange }: { active: string; onChange: (k: string) => void }) {
  const tabs = [
    { key: "suivi", label: "Suivi" },
    { key: "rdv", label: "Réservations" },
    { key: "vehicules", label: "Véhicules" },
    { key: "historique", label: "Historique" },
    { key: "devis", label: "Devis" },
    { key: "aide", label: "Aide" },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`px-3 py-2 rounded-xl border text-sm transition ${active === t.key ? "bg-white/10 border-white/50" : "bg-transparent hover:bg-white/5 border-white/20"}`}
          style={{ borderColor: colors.stroke }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function TabPanels({ active }: { active: string }) {
  if (active === "suivi") {
    return (
      <div className="grid md:grid-cols-3 gap-4">
        <Stat icon={Wrench} label="Prochaine échéance" value="Vidange – 1 500 km" hint="Basé sur km saisis" color={colors.gold} />
        <Stat icon={Calendar} label="RDV à venir" value="Mar 10:00" hint="Garage Du Coin" color={colors.mauve} />
        <Stat icon={CreditCard} label="Dépenses ce mois" value="219 $" hint="2 opérations" color={colors.red} />
        <div className="md:col-span-3 rounded-2xl p-4 border" style={{ background: colors.card, borderColor: colors.stroke }}>
          <div className="text-white/80 text-sm">Conseil: Pensez au <b>changement de pneus</b> avant octobre pour éviter l’affluence.</div>
        </div>
      </div>
    );
  }
  if (active === "rdv") {
    return (
      <div className="space-y-3">
        {[
          { id: "#1024", svc: "Vidange standard", date: "Demain 09:00", lieu: "Garage Du Coin" },
          { id: "#1023", svc: "Lavage premium", date: "Samedi 10:00", lieu: "À domicile" },
        ].map((r) => (
          <div key={r.id} className="rounded-2xl p-3 border flex items-center justify-between" style={{ background: colors.card, borderColor: colors.stroke }}>
            <div className="text-white/80 text-sm">
              <span className="font-semibold">{r.svc}</span> — {r.date} · {r.lieu}
            </div>
            <button className="px-3 py-1 rounded-lg border text-xs" style={{ borderColor: colors.stroke }}>Gérer</button>
          </div>
        ))}
      </div>
    );
  }
  if (active === "vehicules") {
    return (
      <div className="rounded-2xl border overflow-x-auto" style={{ borderColor: colors.stroke }}>
        <table className="w-full text-sm">
          <thead className="text-white/60">
            <tr>
              <th className="p-3 text-left">Véhicule</th>
              <th className="p-3 text-left">Année</th>
              <th className="p-3 text-left">KM</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { make: "Toyota", model: "Corolla", year: 2020, km: 82500 },
              { make: "Tesla", model: "Model 3", year: 2022, km: 40200 },
            ].map((v) => (
              <tr key={v.make + v.model} className="border-t border-white/10">
                <td className="p-3">{v.make} {v.model}</td>
                <td className="p-3">{v.year}</td>
                <td className="p-3">{v.km.toLocaleString()}</td>
                <td className="p-3">
                  <button className="px-3 py-1 rounded-lg border text-xs" style={{ borderColor: colors.stroke }}>Suivi</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (active === "historique") {
    return (
      <div className="space-y-2">
        {[
          { d: "2025-08-12", txt: "Freins avant – payé 189,99$" },
          { d: "2025-07-30", txt: "Vidange standard – payé 89,99$" },
        ].map((i) => (
          <div key={i.d} className="rounded-xl border p-3 text-sm" style={{ borderColor: colors.stroke, background: "#0f0f1a" }}>
            <span className="text-white/60 mr-2">{i.d}</span> <span className="text-white/90">{i.txt}</span>
          </div>
        ))}
      </div>
    );
  }
  if (active === "devis") {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-4 border" style={{ background: colors.card, borderColor: colors.stroke }}>
          <div className="font-semibold mb-2">Obtenir un devis</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <input placeholder="Service (ex: vidange)" className="rounded-lg border px-3 py-2 bg-transparent text-white placeholder:text-white/40 outline-none" style={{ borderColor: colors.stroke }} />
            <input placeholder="Véhicule (ex: Corolla 2020)" className="rounded-lg border px-3 py-2 bg-transparent text-white placeholder:text-white/40 outline-none" style={{ borderColor: colors.stroke }} />
            <input placeholder="Adresse" className="rounded-lg border px-3 py-2 bg-transparent text-white placeholder:text-white/40 outline-none col-span-2" style={{ borderColor: colors.stroke }} />
            <button className="col-span-2 rounded-lg py-2 font-semibold" style={{ background: colors.gold, color: "#101010" }}>Calculer (demo)</button>
          </div>
          <div className="text-white/60 text-xs mt-2">En prod: appelle <code>/api/quote</code>.</div>
        </div>
        <div className="rounded-2xl p-4 border" style={{ background: colors.card, borderColor: colors.stroke }}>
          <div className="font-semibold mb-2">Estimation rapide</div>
          <div className="text-white/80 text-sm">Vidange standard ≈ 89,99$ · Freins avant ≈ 189,99$ · Lavage premium ≈ 49,99$</div>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      <div className="rounded-xl border p-3" style={{ borderColor: colors.stroke, background: "#0f0f1a" }}>📞 Support: 1-800-CARLOGIX · Lun–Ven 9h–18h</div>
      <div className="rounded-xl border p-3" style={{ borderColor: colors.stroke, background: "#0f0f1a" }}>✉️ Email: support@carlogix.app</div>
      <div className="rounded-xl border p-3" style={{ borderColor: colors.stroke, background: "#0f0f1a" }}>🔒 Paiement: Stripe Checkout en production (simulé ici)</div>
    </div>
  );
}

function TabsHost() {
  const [active, setActive] = useState("suivi");
  return (
    <div>
      <TabsBar active={active} onChange={setActive} />
      <div className="mt-4">
        <TabPanels active={active} />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: colors.bg, color: colors.text }}>
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <header className="space-y-3">
          <div className="text-sm text-white/60">Suivi & Réservation</div>
          <h1 className="text-3xl md:text-4xl font-bold">Carlogix</h1>
          <p className="text-white/80">Gérez, suivez et payez vos entretiens au même endroit.</p>
          <div className="flex gap-2">
            <a href="#book" className="rounded-lg py-2 px-3 font-semibold" style={{ background: colors.gold, color: "#101010" }}>Commencer maintenant</a>
            <a href="/book" className="rounded-lg py-2 px-3 border" style={{ borderColor: colors.stroke }}>Mode invité</a>
          </div>
        </header>

        <section id="book" className="space-y-4">
          <BookingCard />
        </section>

        <section className="space-y-3">
          <div className="text-white/80 text-sm">Tableau de bord (aperçu)</div>
          <TabsHost />
        </section>
      </div>
    </div>
  );
}
