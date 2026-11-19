import {
  ArrowRight,
  Download,
  MapPin,
  GraduationCap,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-white px-6 pb-20 pt-28 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      {/* DÉCORATION DU FOND */}
      <div
        className="pointer-events-none absolute rounded-full bg-indigo-100 blur-3xl dark:bg-indigo-900/20"
        style={{
          width: "350px",
          height: "350px",
          top: "-100px",
          right: "-100px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">

        {/* ================================= */}
        {/* PARTIE GAUCHE : PRÉSENTATION */}
        {/* ================================= */}

        <div className="order-2 lg:order-1">

          {/* BADGE */}
       <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
  <Sparkles size={16} className="shrink-0" />
  <span>Mon parcours &amp; Mes réalisations</span>
</div>

          {/* NOM */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Hamda
            <span className="block text-indigo-600 dark:text-indigo-400">
              Ahmed Said
            </span>
          </h1>

          {/* TITRE */}
     <h2 className="mt-5 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
  Développement web | Génie logiciel & Data Science
</h2>

          {/* FORMATION */}
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <GraduationCap size={18} />
        <span>
    Étudiante en Licence 3 Informatique à l'Université de Djibouti
  </span>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Étudiante en troisième année de Licence Informatique
            à l’Université de Djibouti, passionnée par le
            développement logiciel, la conception de systèmes
            d’information et les technologies web.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Je conçois des applications web Full-Stack et
            développe mes compétences en analyse de données.
            Mon ambition est de poursuivre un Master 1
            Informatique en France, avec une spécialisation
            en génie logiciel ou en science des données.
          </p>

          {/* ================================= */}
          {/* TECHNOLOGIES */}
          {/* ================================= */}

          <div className="mt-7 flex flex-wrap gap-3">

            {["React", "Node.js", "Python", "MySQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              )
            )}

          </div>

          {/* ================================= */}
          {/* BOUTONS */}
          {/* ================================= */}

          <div className="mt-9 flex flex-wrap items-center gap-4">

            {/* BOUTON PROJETS */}
            <a
              href="#projets"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
            >
              Voir mes projets
              <ArrowRight size={18} />
            </a>

            {/* BOUTON CV */}
            <a
              href={`${baseUrl}cv.pdf`}
              download="CV_Hamda_Ahmed_Said.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition duration-300 hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            >
              <Download size={18} />
              Télécharger mon CV
            </a>

          </div>

          {/* ================================= */}
          {/* INFORMATIONS */}
          {/* ================================= */}

          <div className="mt-9 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-6 dark:border-slate-700">

            {/* LOCALISATION */}
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={17} />
              <span>Djibouti</span>
            </div>

            {/* GITHUB */}
            <a
              href="https://github.com/hamdaahmedsaid1-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <Code2 size={17} />
              <span>GitHub</span>
            </a>

            {/* DOMAINE */}
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Database size={17} />
              <span>Développement web</span>
            </div>

          </div>

        </div>

        {/* ================================= */}
        {/* PARTIE DROITE : PHOTO */}
        {/* ================================= */}

        <div className="order-1 flex justify-center lg:order-2">

          <div className="relative w-full max-w-sm">

            {/* DÉCORATION DERRIÈRE LA PHOTO */}
            <div
              className="absolute rounded-3xl bg-indigo-500/10 blur-2xl"
              style={{
                top: "-16px",
                right: "-16px",
                bottom: "-16px",
                left: "-16px",
              }}
            />

            {/* CADRE DE LA PHOTO */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800">

              {/* IMAGE */}
              <div
                className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-700"
                style={{
                  aspectRatio: "4 / 5",
                }}
              >
                <img
                  src={`${baseUrl}images/hamda.png`}
                  alt="Portrait de Hamda Ahmed Said"
                  className="h-full w-full object-cover object-center"
                />
              </div>

            </div>

            {/* TEXTE SOUS LA PHOTO */}
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Database size={17} />
              <span>
                Développement web & Bases de données
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}