import {
  ArrowUp,
  Heart,
  Code2,
  Mail,
} from "lucide-react";

export default function Footer() {
  const email = "";
  const linkedin = "";

  const liens = [
    { nom: "Accueil", href: "#accueil" },
    { nom: "À propos", href: "#apropos" },
    { nom: "Formation", href: "#formation" },
    { nom: "Compétences", href: "#competences" },
    { nom: "Expérience", href: "#experience" },
    { nom: "Projets", href: "#projets" },
    { nom: "Objectifs", href: "#objectifs" },
    { nom: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* CONTENU PRINCIPAL */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* IDENTITÉ */}
          <div>
            <h2 className="mb-4 text-3xl font-extrabold">
              Hamda
              <span className="text-indigo-400">.</span>
            </h2>

            <p className="max-w-sm leading-7 text-slate-400">
              Étudiante en troisième année de Licence
              Informatique à l'Université de Djibouti,
              passionnée par le développement web,
              le génie logiciel et les technologies
              numériques.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <Code2 size={18} className="text-indigo-400" />
              <span>Développeuse Full-Stack</span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {liens.map((lien) => (
                <a
                  key={lien.nom}
                  href={lien.href}
                  className="text-sm text-slate-400 transition-colors hover:text-indigo-400"
                >
                  {lien.nom}
                </a>
              ))}
            </div>
          </div>

          {/* RÉSEAUX SOCIAUX */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Retrouvez-moi
            </h3>

            <p className="mb-6 text-sm leading-7 text-slate-400">
              Découvrez mes projets et mes réalisations
              ou contactez-moi pour échanger sur une
              opportunité professionnelle.
            </p>

            <div className="flex flex-wrap gap-4">

              {/* GITHUB */}
              <a
                href="https://github.com/hamdaahmedsaid1-wq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mon profil GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600"
              >
                <Code2 size={22} />
              </a>

              {/* LINKEDIN */}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mon profil LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
                >
                  <span className="text-lg font-extrabold">
                    in
                  </span>
                </a>
              )}

              {/* EMAIL */}
              {email && (
                <a
                  href={`mailto:${email}`}
                  aria-label="Envoyer un email"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-600"
                >
                  <Mail size={22} />
                </a>
              )}

              {/* RETOUR EN HAUT */}
              <a
                href="#accueil"
                aria-label="Retour en haut"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700"
              >
                <ArrowUp size={22} />
              </a>

            </div>
          </div>
        </div>

        {/* SÉPARATEUR */}
        <div className="my-10 border-t border-slate-800" />

        {/* BAS DU FOOTER */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Hamda Ahmed Said.
            Tous droits réservés.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400">
            Conçu avec
            <Heart
              size={16}
              className="text-rose-500"
            />
            et développé avec
            <Code2
              size={17}
              className="text-indigo-400"
            />
            React & Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}