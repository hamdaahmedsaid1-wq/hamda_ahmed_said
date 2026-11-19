import {
  GraduationCap,
  BookOpen,
  CalendarDays,
  MapPin,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Education() {
  return (
    <section
      id="formation"
      className="relative scroll-mt-20 bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* TITRE */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
            <GraduationCap size={17} />
            Mon parcours académique
          </span>

          <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">
            Ma{" "}
            <span className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              formation
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Un parcours universitaire en informatique,
            enrichi par des projets pratiques et une volonté
            constante de développer mes compétences.
          </p>
        </div>

        {/* CARTE FORMATION */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">

          {/* EN-TÊTE */}
          <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-600 p-8 text-white md:p-10">

            <div className="flex flex-col gap-5 md:flex-row md:items-center">

              <div className="w-fit rounded-2xl bg-white/20 p-5">
                <GraduationCap size={40} />
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-extrabold md:text-3xl">
                  Licence Informatique
                </h3>

                <p className="mb-3 text-lg text-white/90">
                  Université de Djibouti
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-white/90">

                  <span className="flex items-center gap-2">
                    <CalendarDays size={17} />
                    2024 – 2027
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={17} />
                    Djibouti
                  </span>

                </div>
              </div>
            </div>
          </div>

          {/* CONTENU */}
          <div className="p-8 md:p-10">

            <div className="mb-8 flex flex-wrap items-center gap-3">

              <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                Licence 3 — En cours
              </span>

              <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                <Award size={16} />
              L1 et L2 validées — Mention Assez bien
              </span>

            </div>

            <h4 className="mb-4 flex items-center gap-3 text-xl font-bold">
              <BookOpen className="text-indigo-600" size={24} />
              Domaines étudiés
            </h4>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Algorithmique et structures de données",
                "Programmation orientée objet",
                "Développement web",
                "Bases de données SQL",
                "Systèmes d'exploitation",
                "Réseaux informatiques",
                "Génie logiciel",
                "Gestion de projet informatique",
                "Mathématiques pour l'informatique",
                "Algorithmique des graphes",
              ].map((matiere) => (
                <div
                  key={matiere}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-indigo-600 dark:text-indigo-400"
                  />

                  <span className="text-sm font-medium">
                    {matiere}
                  </span>
                </div>
              ))}

            </div>

            {/* RÉSULTATS */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl bg-indigo-50 p-6 text-center dark:bg-indigo-500/10">
                <p className="mb-2 text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  12,85
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Moyenne L1 / 20
                </p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-6 text-center dark:bg-purple-500/10">
                <p className="mb-2 text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                  12,92
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Moyenne L2 / 20
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-6 text-center dark:bg-emerald-500/10">
                <p className="mb-2 text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  120
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  ECTS validés
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}