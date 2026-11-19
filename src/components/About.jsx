import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Target,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="apropos"
      className="scroll-mt-20 bg-white px-6 py-24 text-slate-900 dark:bg-[#0b1220] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* TITRE */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            PRÉSENTATION
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            À propos de{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              moi
            </span>
          </h2>

          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
  Étudiante en L3 Informatique | Génie logiciel & Science des données
</p>
        </div>

        {/* CONTENU */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-10 dark:border-slate-700 dark:bg-slate-800/50">

          <div className="space-y-8">

            {/* PARCOURS ACADÉMIQUE */}
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <GraduationCap size={24} />
              </div>

              <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                Actuellement étudiante en troisième année de Licence
                Informatique à l’Université de Djibouti, j’ai validé
                mes deux premières années avec la mention{" "}
                <strong className="text-slate-900 dark:text-white">
                  Assez bien
                </strong>
                . Passionnée par le développement logiciel, la
                conception de systèmes d’information et l’analyse
                de données, je développe mes compétences à travers
                des projets concrets.
              </p>
            </div>

            {/* STAGE ET PROJETS */}
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <BriefcaseBusiness size={24} />
              </div>

              <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                Lors de mon stage à la Préfecture d’Ali-Sabieh,
                j’ai conçu et développé{" "}
                <strong className="text-slate-900 dark:text-white">
                  PREFECTA
                </strong>
                , une application de gestion et d’analyse
                statistique des activités administratives.
                J’ai également réalisé plusieurs projets
                informatiques, notamment{" "}
                <strong className="text-slate-900 dark:text-white">
                  DjibJob
                </strong>
                , une plateforme de recrutement Full-Stack
                développée personnellement, et{" "}
                <strong className="text-slate-900 dark:text-white">
                  AL-SHIFA
                </strong>
                , un système d’information hospitalier
                conçu en équipe.
              </p>
            </div>

            {/* COMPÉTENCES */}
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <Code2 size={24} />
              </div>

              <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                Ma maîtrise des technologies{" "}
                <strong className="text-slate-900 dark:text-white">
                  React, Node.js, Express, PHP, Laravel et MySQL
                </strong>
                , associée à mon apprentissage de Python pour
                l’analyse de données, me permet d’aborder
                différentes étapes du développement
                d’applications.
              </p>
            </div>

            {/* OBJECTIF */}
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <Target size={24} />
              </div>

              <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                Mon ambition est d’intégrer un{" "}
                <strong className="text-indigo-600 dark:text-indigo-400">
                  Master 1 Informatique en France
                </strong>
                , afin de me spécialiser en{" "}
                <strong className="text-slate-900 dark:text-white">
                  génie logiciel et en science des données
                </strong>
                , et de contribuer à la conception de solutions
                numériques innovantes, fiables et adaptées
                aux besoins des utilisateurs.
              </p>
            </div>

          </div>

          {/* BOUTON */}
          <div className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-700">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:gap-3 dark:text-indigo-400"
            >
              Découvrir mes réalisations
              <ArrowUpRight size={19} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}