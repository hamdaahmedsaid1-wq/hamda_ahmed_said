import {
  Code2,
  Server,
  Database,
  Terminal,
  Wrench,
  Workflow,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function Skills() {
  const competences = [
    {
      icon: Code2,
      title: "Développement Frontend",
      description:
        "Création d'interfaces web modernes, interactives et responsives.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
      ],
      color: "text-indigo-500",
      background: "bg-indigo-500/10",
      border: "hover:border-indigo-400",
    },

    {
      icon: Server,
      title: "Développement Backend",
      description:
        "Développement de serveurs, d'API REST et de fonctionnalités métier.",
      technologies: [
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
      ],
      color: "text-cyan-500",
      background: "bg-cyan-500/10",
      border: "hover:border-cyan-400",
    },

    {
      icon: Database,
      title: "Bases de données",
      description:
        "Conception, gestion et manipulation de bases de données relationnelles.",
      technologies: [
        "MySQL",
        "PostgreSQL",
        "Oracle",
        "SQL",
      ],
      color: "text-emerald-500",
      background: "bg-emerald-500/10",
      border: "hover:border-emerald-400",
    },

    {
      icon: Terminal,
      title: "Programmation",
      description:
        "Développement d'algorithmes et de programmes dans différents langages.",
      technologies: [
        "Python",
        "Java",
        "C",
      ],
      color: "text-purple-500",
      background: "bg-purple-500/10",
      border: "hover:border-purple-400",
    },

    {
      icon: Wrench,
      title: "Outils de développement",
      description:
        "Utilisation d'outils de développement, de versionnement et de test.",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
      ],
      color: "text-orange-500",
      background: "bg-orange-500/10",
      border: "hover:border-orange-400",
    },

    {
      icon: Workflow,
      title: "Conception logicielle",
      description:
        "Analyse des besoins et modélisation des systèmes d'information.",
      technologies: [
        "Merise",
        "MCD",
        "MCT",
        "MOT",
      ],
      color: "text-pink-500",
      background: "bg-pink-500/10",
      border: "hover:border-pink-400",
    },
  ];

  return (
    <section
      id="competences"
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      {/* ================================= */}
      {/* DÉCORATION */}
      {/* ================================= */}

      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================================= */}
        {/* EN-TÊTE */}
        {/* ================================= */}

        <div className="mb-16 text-center">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">

            <Sparkles size={16} />

            Mon expertise technique

          </span>

          <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">

            Mes{" "}

            <span className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              compétences
            </span>

          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">

            Découvrez les langages, technologies et outils
            que j'utilise pour concevoir et développer
            des applications informatiques.

          </p>

        </div>

        {/* ================================= */}
        {/* GRILLE DES COMPÉTENCES */}
        {/* ================================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {competences.map((competence) => {
            const Icon = competence.icon;

            return (
              <div
                key={competence.title}
                className={`group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 ${competence.border}`}
              >

                {/* ICÔNE */}

                <div
                  className={`mb-6 inline-flex rounded-2xl p-4 ${competence.background}`}
                >

                  <Icon
                    size={28}
                    className={competence.color}
                  />

                </div>

                {/* TITRE */}

                <h3 className="mb-3 text-xl font-bold">

                  {competence.title}

                </h3>

                {/* DESCRIPTION */}

                <p className="mb-6 min-h-18 text-sm leading-7 text-slate-600 dark:text-slate-400">

                  {competence.description}

                </p>

                {/* TECHNOLOGIES */}

                <div className="flex flex-wrap gap-2">

                  {competence.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-indigo-500/30 dark:group-hover:bg-indigo-500/10 dark:group-hover:text-indigo-400"
                    >

                      {tech}

                    </span>
                  ))}

                </div>

                {/* ICÔNE DÉCORATIVE */}

                <ArrowUpRight
                  size={20}
                  className="absolute right-7 top-7 text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-500 dark:text-slate-600"
                />

              </div>
            );
          })}

        </div>

        {/* ================================= */}
        {/* MESSAGE FINAL */}
        {/* ================================= */}

        <div className="mt-16 text-center">

          <p className="text-base text-slate-600 dark:text-slate-400">

            Toujours curieuse et motivée, je continue
            à développer mes compétences à travers
            mes études, mes projets et l'apprentissage
            de nouvelles technologies.

          </p>

        </div>

      </div>
    </section>
  );
}