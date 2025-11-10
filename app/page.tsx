const pipelineStages = [
  {
    title: "Prospection & qualification",
    description:
      "Centralisez les demandes web, appels et visites salon en une seule file de leads, avec des fiches enrichies automatiquement.",
    highlights: [
      "Formulaires multimarques adaptés au Québec",
      "Vérification instantanée du permis de conduire",
      "Score d'intention basé sur l'historique"
    ],
  },
  {
    title: "Négociation & financement",
    description:
      "Suivez chaque scénario de financement avec vos partenaires Desjardins, Banque Nationale et caisses populaires locales.",
    highlights: [
      "Comparaison de taux et programmes spéciaux",
      "Gestion des échanges et inspections",
      "Documents électroniques bilingues"
    ],
  },
  {
    title: "Livraison & fidélisation",
    description:
      "Planifiez la préparation du véhicule, les immatriculations SAAQ et le suivi post-livraison sur 36 mois.",
    highlights: [
      "Checklist de livraison personnalisable",
      "Rappels d'entretiens et campagnes de service",
      "Sondages de satisfaction automatisés"
    ],
  },
];

const intelligenceModules = [
  {
    name: "Vue 360° du client",
    description:
      "Fiche client unifiée: profil, préférences de véhicules, activités marketing et historique d'entretien du concessionnaire.",
  },
  {
    name: "Automatisation marketing",
    description:
      "Séquences SMS, courriels et notifications push en français/anglais avec personnalisation régionale (Saguenay, Montérégie...).",
  },
  {
    name: "Rapports décisionnels",
    description:
      "Tableaux de bord pour directeurs des ventes, F&I et service: objectifs hebdomadaires, taux de conversion et marge moyenne.",
  },
];

const complianceChecklist = [
  {
    title: "Conformité québécoise",
    details: [
      "Contrats électroniques conformes à l'OPC",
      "Gestion des consentements linguistiques (loi 96)",
      "Archivage sécurisé des dossiers clients au Canada",
    ],
  },
  {
    title: "Sécurité des données",
    details: [
      "Authentification multifacteur pour les équipes",
      "Journalisation des accès selon les rôles",
      "Sauvegardes chiffrées sur serveurs canadiens",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-slate-900 to-blue-900/40 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-blue-200">
                CRM Automobile Québec
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Orchestrer chaque transaction automobile du premier lead à la livraison clé en main.
              </h1>
              <p className="text-lg text-slate-200">
                Propulsez vos équipes de ventes, financement et service avec un CRM pensé pour les concessions du Québec. Une plateforme unifiée qui respecte la réglementation locale et accélère la fidélisation des clients.
              </p>
              <div className="flex flex-col gap-3 text-sm text-blue-100 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  12 500+ dossiers actifs suivis en temps réel
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                  Intégrations OEM (GM, Stellantis, Hyundai) et DMS (Serti, PBS)
                </div>
              </div>
            </div>
            <div className="mt-10 flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 lg:mt-0 lg:max-w-sm">
              <h2 className="text-xl font-semibold">Plan de transaction guidé</h2>
              <p className="text-sm text-slate-200">
                Suivez en un coup d'œil les étapes, responsables et échéances de chaque dossier client. Idéal pour les directeurs des ventes multi-toits.
              </p>
              <div className="space-y-3">
                {pipelineStages.map((stage) => (
                  <div
                    key={stage.title}
                    className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
                  >
                    <p className="text-sm font-medium text-blue-100">{stage.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{stage.description}</p>
                  </div>
                ))}
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
                Réserver une démo personnalisée
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:px-12">
        <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Un pipeline structuré pour vos équipes québécoises</h2>
            <p className="text-slate-200">
              Visualisez la progression de chaque opportunité, affectez des tâches aux représentants et automatisez les suivis selon la région, la langue et le type de véhicule.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {pipelineStages.map((stage) => (
                <div
                  key={stage.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium text-blue-100">{stage.title}</p>
                    <span className="rounded-full border border-blue-300/40 bg-blue-300/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-100">
                      Étape clé
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{stage.description}</p>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {stage.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-4 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <h3 className="text-xl font-semibold text-emerald-200">
              Connecté à votre écosystème
            </h3>
            <p className="text-sm text-emerald-100">
              Synchronisez le CRM avec vos outils existants: DMS, plateformes publicitaires, Marketplace des manufacturiers et centrales d'appels.
            </p>
            <ul className="space-y-2 text-sm text-emerald-100">
              <li>• Import automatique des leads WebPDM, Trader, Kijiji</li>
              <li>• API temps réel vers votre DMS pour inventaires et coûts</li>
              <li>• Notifications mobiles pour les représentants sur la route</li>
            </ul>
          </aside>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {intelligenceModules.map((module) => (
            <article
              key={module.name}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-100">
                Module
              </div>
              <h3 className="text-xl font-semibold text-white">{module.name}</h3>
              <p className="text-sm text-slate-200">{module.description}</p>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-blue-100"
              >
                Découvrir le module
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Conformité et sécurité intégrées</h2>
            <p className="text-slate-200">
              Nous avons conçu la plateforme pour respecter les exigences spécifiques du marché québécois et protéger les données de vos clients.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {complianceChecklist.map((item) => (
                <div key={item.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-lg font-medium text-blue-100">{item.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6">
            <div>
              <h3 className="text-2xl font-semibold text-blue-100">Tableaux de bord instantanés</h3>
              <p className="mt-2 text-sm text-blue-100/80">
                Suivez vos indicateurs clés: délais de suivi, taux d'approbation, valeur moyenne par transaction et marges F&I.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="rounded-xl bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-wide text-blue-300">Temps moyen de réponse</p>
                <p className="text-2xl font-semibold text-white">1 h 12</p>
                <p className="text-xs text-blue-200">-32% vs. le mois dernier</p>
              </div>
              <div className="rounded-xl bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-wide text-blue-300">Taux de conversion leads → ventes</p>
                <p className="text-2xl font-semibold text-white">28,4%</p>
                <p className="text-xs text-blue-200">+6 pts grâce aux relances automatisées</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-white/10 bg-slate-950/80"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 lg:flex-row lg:items-start lg:justify-between lg:px-12">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-semibold">Prêt à moderniser votre concession?</h2>
            <p className="text-slate-200">
              Notre équipe basée à Montréal vous accompagne pour migrer vos données, former vos équipes et lancer votre CRM automobile en moins de 30 jours.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Support bilingue 7j/7</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Intégrations API ouvertes</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Déploiement cloud canadien</span>
            </div>
          </div>
          <form className="flex w-full max-w-md flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div>
              <label className="text-sm font-medium text-slate-100" htmlFor="name">
                Nom & concession
              </label>
              <input
                id="name"
                name="name"
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
                placeholder="Ex.: Julie Tremblay – Kia Laval"
                type="text"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-100" htmlFor="email">
                Courriel professionnel
              </label>
              <input
                id="email"
                name="email"
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
                placeholder="vous@concession.qc.ca"
                type="email"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-100" htmlFor="message">
                Objectifs prioritaires
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
                placeholder="Ex.: Automatiser les suivis, intégrer le DMS, améliorer le NPS"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Planifier une rencontre
            </button>
            <p className="text-xs text-slate-400">
              En soumettant ce formulaire, vous acceptez que nous vous contactions selon votre langue de préférence et les lois en vigueur au Québec.
            </p>
          </form>
        </div>
        <div className="border-t border-white/5 bg-slate-950/90">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <p>© {new Date().getFullYear()} CRM Automobile Québec. Tous droits réservés.</p>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-slate-300" href="#">Sécurité</a>
              <a className="hover:text-slate-300" href="#">Politique de confidentialité</a>
              <a className="hover:text-slate-300" href="#">Langue</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
