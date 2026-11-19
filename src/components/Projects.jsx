import { useState } from "react";
import ProjectGallery from "./ProjectGallery";

import {
  BriefcaseBusiness,
  Hospital,
  Building2,
  ChartNoAxesCombined,
  BookOpen,
  Code2,
  ExternalLink,
  Sparkles,
  Layers3,
  ArrowUpRight,
  Globe,
  ZoomIn,
  Images,
} from "lucide-react";

// ==================================================
// CONFIGURATION
// ==================================================

// Remplace cette valeur par le lien réel de ton
// application DjibJob déjà déployée.
const DJIBJOB_DEMO = "https://djibjob-55uv.vercel.app";

// Après le déploiement d'AL-SHIFA, ajoute son URL ici.
const AL_SHIFA_DEMO = "";

// ==================================================
// LISTE DES PROJETS
// ==================================================

const projets = [
  // ================================================
  // PROJET 1 : DJIBJOB
  // ================================================
  {
    id: 1,

    titre: "DjibJob",

    sousTitre: "Plateforme de recrutement Full-Stack",

    description:
      "Plateforme web de recrutement développée personnellement. " +
      "Elle permet aux entreprises de publier des offres d'emploi " +
      "et aux candidats de rechercher des opportunités, " +
      "de créer leur profil et de déposer leurs candidatures. " +
      "L'application intègre l'authentification, la gestion " +
      "des offres d'emploi et le suivi des candidatures.",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "API REST",
    ],

    categorie: "Full-Stack",

    icon: BriefcaseBusiness,

    couleur: "from-indigo-600 to-purple-600",

    image: "/images/djibjob.png",

    gallery: [
      "/images/djibjob.png",
      "/images/djibjob/dashboard-admin.png",
      "/images/djibjob/dashboard-candidat.png",
      "/images/djibjob/gestion-offres.png",
    ],

    github:
      "https://github.com/hamdaahmedsaid1-wq/djibjob",

    demo: DJIBJOB_DEMO,

    type: "Projet personnel",

    enLigne: Boolean(DJIBJOB_DEMO),
  },

  // ================================================
  // PROJET 2 : AL-SHIFA
  // ================================================
  {
    id: 2,

    titre: "AL-SHIFA",

    sousTitre: "Système d'information hospitalier",

    description:
      "Application de gestion hospitalière développée " +
      "en équipe dans le cadre d'un projet universitaire. " +
      "Elle permet de gérer les patients, les médecins, " +
      "les rendez-vous, les consultations, les ordonnances, " +
      "les hospitalisations, les factures et les paiements. " +
      "Le système repose sur une architecture client-serveur " +
      "et une base de données relationnelle.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Merise",
      "API REST",
    ],

    categorie: "Gestion",

    icon: Hospital,

    couleur: "from-orange-500 to-red-600",

    image: "/images/al-shifa.png",

    gallery: [
      "/images/al-shifa.png",
      "/images/hopital-al-shifa/page_de_connexion.png",
      "/images/hopital-al-shifa/tableu_de_board_administrateur.png",
      "/images/hopital-al-shifa/gestion_de_patient.png",
      "/images/hopital-al-shifa/geston_de_rendez-vous.png",
      "/images/hopital-al-shifa/gestion_de_consultation.png",
      "/images/hopital-al-shifa/gestion_d_hospitalisation.png",
      "/images/hopital-al-shifa/gestion_de_suivis_hospitalisation.png",
      "/images/hopital-al-shifa/gestion_sortis_patient.png",
      "/images/hopital-al-shifa/gestion_d_utilisateur.png",
      "/images/hopital-al-shifa/facturation.png",
      "/images/hopital-al-shifa/paiement.png",
      "/images/hopital-al-shifa/rapport.png",
    ],

    github:
      "https://github.com/hamdaahmedsaid1-wq/hopital-al-shifa",

    demo: AL_SHIFA_DEMO,

    type: "Projet universitaire en équipe",

    enLigne: Boolean(AL_SHIFA_DEMO),
  },

  // ================================================
  // PROJET 3 : PREFECTA
  // ================================================
  {
    id: 3,

    titre: "PREFECTA",

    sousTitre:
      "Gestion et analyse des activités administratives",

    description:
      "Système d'information développé durant mon stage " +
      "à la Préfecture d'Ali-Sabieh, de juin à août 2026. " +
      "L'application facilite la gestion des dossiers " +
      "administratifs, le suivi des activités des services " +
      "et la visualisation des statistiques à travers " +
      "des tableaux de bord interactifs.",

    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "API REST",
      "Statistiques",
    ],

    categorie: "Full-Stack",

    icon: Building2,

    couleur: "from-emerald-600 to-teal-600",

    image: "/images/Prefecta.png",

    gallery: [
      "/images/Prefecta.png",
      "/images/prefecta/page_d_accueil.png",
      "/images/prefecta/tableaux_de_board.png",
      "/images/prefecta/services_administrative.png",
      "/images/prefecta/rapport_statistique.png",
    ],

    github:
      "https://github.com/hamdaahmedsaid1-wq/PREFECTA",

    demo: "",

    type: "Projet de stage",

    enLigne: false,
  },

  // ================================================
  // PROJET 4 : ANALYSE DES OFFRES D'EMPLOI
  // ================================================
  {
    id: 4,

    titre: "Analyse des offres d'emploi DjibJob",

    sousTitre: "Analyse de données avec Python",

    description:
      "Projet d'analyse de données réalisé avec Python " +
      "à partir des offres d'emploi de ma plateforme " +
      "DjibJob. L'objectif est d'explorer les données, " +
      "d'identifier les métiers les plus recherchés, " +
      "d'étudier la répartition des offres et des contrats " +
      "et de visualiser les tendances du recrutement " +
      "à l'aide de graphiques statistiques.",

    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Analysis",
    ],

    categorie: "Data Science",

    icon: ChartNoAxesCombined,

    couleur: "from-violet-600 to-fuchsia-600",

    image:
      "/images/Tableau de bord DijiJob sur l’emploi.png",

    gallery: [
      "/images/Tableau de bord DijiJob sur l’emploi.png",
      "/images/python-data/offres_par_ville.png",
      "/images/python-data/salaires_par_poste.png",
      "/images/python-data/distribution_salaires.png",
    ],

    github:
      "https://github.com/hamdaahmedsaid1-wq/analyse-offres-emploi-python",

    demo: "",

    type: "Projet Python / Data Science",

    enLigne: false,
  },

  // ================================================
  // PROJET 5 : GESTION DE BIBLIOTHÈQUE
  // ================================================
  {
    id: 5,

    titre: "Gestion de bibliothèque",

    sousTitre: "Application de gestion avec Laravel",

    description:
      "Application web de gestion de bibliothèque " +
      "développée personnellement avec Laravel. " +
      "Elle permet de gérer les livres, les utilisateurs " +
      "et les opérations d'emprunt et de retour " +
      "à travers une interface d'administration. " +
      "Le projet utilise une base de données MySQL " +
      "et une architecture MVC.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "MVC",
    ],

    categorie: "Gestion",

    icon: BookOpen,

    couleur: "from-amber-500 to-orange-600",

    image: "/images/bibliotheque.png",

    gallery: [
      "/images/bibliotheque.png",
      "/images/bibliotheque/dashboard.png",
      "/images/bibliotheque/livres.png",
      "/images/bibliotheque/emprunts.png",
    ],

    github:
      "https://github.com/hamdaahmedsaid1-wq/gestion-bibliotheque-laravel",

    demo: "",

    type: "Projet personnel",

    enLigne: false,
  },
];

// ==================================================
// IMAGE PRINCIPALE DU PROJET
// ==================================================

function ProjectImage({ projet, onZoom }) {
  const [imageDisponible, setImageDisponible] = useState(true);

  const Icon = projet.icon;

  return (
    <div
      className={`relative flex h-60 items-center justify-center overflow-hidden bg-linear-to-br ${projet.couleur}`}
    >
      {/* Icône affichée si l'image est indisponible */}
      <Icon size={72} className="text-white/70" />

      {/* Capture principale */}
      {imageDisponible && projet.image && (
        <button
          type="button"
          onClick={() => onZoom(projet)}
          aria-label={`Voir les captures de ${projet.titre}`}
          className="group/image absolute inset-0 cursor-zoom-in"
        >
          <img
            src={projet.image}
            alt={`Capture du projet ${projet.titre}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
            onError={() => setImageDisponible(false)}
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/image:bg-black/20" />

          <span className="absolute bottom-4 right-4 rounded-full bg-black/60 p-3 text-white opacity-0 transition-opacity group-hover/image:opacity-100">
            <ZoomIn size={20} />
          </span>
        </button>
      )}

      {/* Type de projet */}
      <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/65 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
        {projet.type}
      </span>

      {/* Badge En ligne */}
      {projet.enLigne && projet.demo && (
        <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-2 text-xs font-bold text-white shadow-lg">
          <span className="h-2 w-2 rounded-full bg-white" />
          En ligne
        </span>
      )}
    </div>
  );
}

// ==================================================
// COMPOSANT PRINCIPAL
// ==================================================

export default function Projects() {
  const [filtre, setFiltre] = useState("Tous");

  const [projetSelectionne, setProjetSelectionne] =
    useState(null);

  const categories = [
    "Tous",
    "Full-Stack",
    "Gestion",
    "Data Science",
  ];

  const projetsFiltres =
    filtre === "Tous"
      ? projets
      : projets.filter(
          (projet) => projet.categorie === filtre
        );

  const ouvrirGalerie = (projet) => {
    setProjetSelectionne(projet);
  };

  const fermerGalerie = () => {
    setProjetSelectionne(null);
  };

  return (
    <section
      id="projets"
      className="relative scroll-mt-20 overflow-hidden bg-white px-6 py-24 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      {/* Décoration */}
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* TITRE */}
        <div className="mb-12 text-center">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
            <Sparkles size={16} />
            Mes réalisations
          </span>

          <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">
            Mes{" "}
            <span className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              projets
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Découvrez mes réalisations personnelles,
            universitaires et professionnelles dans
            le développement web, le génie logiciel
            et l'analyse de données.
          </p>

        </div>

        {/* FILTRES */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">

          {categories.map((categorie) => (
            <button
              key={categorie}
              type="button"
              onClick={() => setFiltre(categorie)}
              aria-pressed={filtre === categorie}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                filtre === categorie
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              {categorie}
            </button>
          ))}

        </div>

        {/* GRILLE DES PROJETS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projetsFiltres.map((projet) => (
            <article
              key={projet.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800"
            >

              {/* IMAGE */}
              <ProjectImage
                projet={projet}
                onZoom={ouvrirGalerie}
              />

              {/* CONTENU */}
              <div className="flex flex-1 flex-col p-7">

                {/* TITRE */}
                <div className="mb-4 flex items-start justify-between gap-3">

                  <div>
                    <h3 className="mb-2 text-2xl font-bold transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {projet.titre}
                    </h3>

                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {projet.sousTitre}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-600"
                  />

                </div>

                {/* DESCRIPTION */}
                <p className="mb-6 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {projet.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mb-6 flex flex-wrap gap-2">

                  {projet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* BOUTONS */}
                <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-5 dark:border-slate-700">

                  {/* GALERIE */}
                  <button
                    type="button"
                    onClick={() => ouvrirGalerie(projet)}
                    className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
                  >
                    <Images size={17} />
                    Voir les captures
                  </button>

                  {/* APPLICATION EN LIGNE */}
                  {projet.demo && (
                    <a
                      href={projet.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                    >
                      <Globe size={17} />
                      Voir l'application
                      <ExternalLink size={15} />
                    </a>
                  )}

                  {/* LIEN GITHUB */}
                  {projet.github && (
                    <a
                      href={projet.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                    >
                      <Code2 size={17} />
                      Voir le code
                      <ExternalLink size={15} />
                    </a>
                  )}

                  {/* PROJET SANS LIEN */}
                  {!projet.demo && !projet.github && (
                    <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                      <Layers3 size={17} />
                      Projet présenté
                    </span>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>

        {/* PROFIL GITHUB */}
        <div className="mt-16 text-center">

          <p className="mb-6 text-base text-slate-600 dark:text-slate-400">
            Retrouvez mes projets et mes contributions
            sur mon profil GitHub.
          </p>

          <a
            href="https://github.com/hamdaahmedsaid1-wq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-400"
          >
            <Code2 size={20} />
            Explorer mon GitHub
            <ExternalLink size={17} />
          </a>

        </div>
      </div>

      {/* GALERIE INTERACTIVE */}
      {projetSelectionne && (
        <ProjectGallery
          key={projetSelectionne.id}
          images={projetSelectionne.gallery}
          onClose={fermerGalerie}
        />
      )}
    </section>
  );
}