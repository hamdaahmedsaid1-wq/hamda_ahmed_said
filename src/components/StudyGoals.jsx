import {
  GraduationCap,
  BrainCircuit,
  Code2,
  ShieldCheck,
  ArrowUpRight,
  Target,
} from "lucide-react";

const objectifs = [
  {
    titre: "Génie logiciel",
    description:
      "Approfondir mes compétences en conception, architecture et développement d'applications robustes, évolutives et sécurisées.",
    icon: Code2,
    couleur: "from-indigo-500 to-purple-600",
  },
  {
    titre: "Data Science & Intelligence artificielle",
    description:
      "Développer mes connaissances en analyse de données, apprentissage automatique et conception de solutions intelligentes.",
    icon: BrainCircuit,
    couleur: "from-cyan-500 to-blue-600",
  },
  {
    titre: "Cybersécurité",
    description:
      "Renforcer mes compétences en sécurité des applications, protection des données et sécurisation des systèmes informatiques.",
    icon: ShieldCheck,
    couleur: "from-emerald-500 to-teal-600",
  },
];

export default function StudyGoals() {
  return (
    <section
      id="objectifs"
      className="relative scroll-mt-20 bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
            <Target size={17} />
            Mon avenir professionnel
          </span>

          <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">
            Mon projet{" "}
            <span className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              professionnel
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Passionnée par les technologies numériques, je souhaite
            poursuivre mes études en Master Informatique en France
            afin de renforcer mon expertise et de contribuer à des
            projets technologiques innovants.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {objectifs.map((objectif) => {
            const Icon = objectif.icon;

            return (
              <article
                key={objectif.titre}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-linear-to-br ${objectif.couleur} p-4 text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {objectif.titre}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {objectif.description}
                </p>

                <ArrowUpRight
                  size={23}
                  className="mt-6 text-indigo-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </article>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-600 p-8 text-white shadow-xl md:p-12">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="rounded-2xl bg-white/20 p-5">
              <GraduationCap size={42} />
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold">
                Mon ambition
              </h3>

              <p className="max-w-4xl leading-8 text-white/90">
                Construire une carrière dans le développement logiciel
                et les technologies intelligentes, en participant à
                la conception de solutions numériques utiles,
                performantes et accessibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}