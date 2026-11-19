import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
  CheckCircle2,
  Code2,
} from "lucide-react";

export default function Experience() {
  const missions = [
    "Conception et développement d'un système d'information administratif.",
    "Gestion et suivi des dossiers administratifs.",
    "Création de tableaux de bord statistiques.",
    "Développement d'interfaces web.",
    "Organisation et exploitation des données.",
    "Tests et amélioration des fonctionnalités de l'application.",
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-white px-6 py-24 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <BriefcaseBusiness size={17} />
            Mon parcours professionnel
          </span>

          <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">
            Mon{" "}
            <span className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              expérience
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Une expérience professionnelle qui m'a permis
            d'appliquer mes connaissances en développement
            informatique à des besoins administratifs réels.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl dark:border-slate-700 dark:bg-slate-800">

          <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-600 p-8 text-white md:p-10">

            <div className="flex items-center gap-5">
              <div className="rounded-2xl bg-white/20 p-5">
                <Building2 size={38} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Stage en développement informatique
                </h3>

                <p className="mt-2 text-lg text-white/90">
                  Préfecture d'Ali-Sabieh
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm">
              <span className="flex items-center gap-2">
                <CalendarDays size={18} />
                Juin – Août 2026
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={18} />
                Ali-Sabieh, Djibouti
              </span>
            </div>
          </div>

          <div className="p-8 md:p-10">

            <div className="mb-8">
              <h4 className="mb-4 flex items-center gap-3 text-xl font-bold">
                <Code2 className="text-indigo-600" />
                Projet réalisé : PREFECTA
              </h4>

              <p className="leading-8 text-slate-600 dark:text-slate-300">
                Conception et développement d'un système
                de gestion et d'analyse statistique des
                activités administratives de la Préfecture
                d'Ali-Sabieh.
              </p>
            </div>

            <h4 className="mb-6 text-xl font-bold">
              Missions et réalisations
            </h4>

            <div className="grid gap-4 md:grid-cols-2">
              {missions.map((mission) => (
                <div
                  key={mission}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 dark:bg-slate-900"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-indigo-600"
                  />

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {mission}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}