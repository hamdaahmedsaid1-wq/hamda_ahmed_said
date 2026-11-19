import {
  Mail,
  Code2,
  MapPin,
  Send,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  // =====================================
  // COORDONNÉES
  // =====================================

  const email = "hamdaahmedsaid1@gmail.com";

  const linkedin =
    "https://www.linkedin.com/in/hamda-ahmed-said-b70240347";

  const github =
    "https://github.com/hamdaahmedsaid1-wq";

  // Lien permettant d'ouvrir Gmail directement
  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  // =====================================
  // CARTES DE CONTACT
  // =====================================

  const contacts = [
    {
      titre: "Email",
      valeur: email,
      icon: Mail,
      lien: gmailLink,
      couleur: "from-indigo-500 to-purple-600",
    },
    {
      titre: "GitHub",
      valeur: "hamdaahmedsaid1-wq",
      icon: Code2,
      lien: github,
      couleur: "from-slate-700 to-slate-900",
    },
    {
      titre: "LinkedIn",
      valeur: "Consulter mon profil LinkedIn",
      icon: Code2,
      lien: linkedin,
      couleur: "from-blue-500 to-cyan-600",
    },
    {
      titre: "Localisation",
      valeur: "Djibouti",
      icon: MapPin,
      lien: null,
      couleur: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 bg-white px-6 py-24 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================
            TITRE
        ===================================== */}

        <div className="mb-14 text-center">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
            <MessageCircle size={17} />
            Restons en contact
          </span>

          <h2 className="mb-5 text-4xl font-extrabold sm:text-5xl">
            Contactez{" "}
            <span className="bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              moi
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vous souhaitez échanger sur un projet,
            une opportunité de stage, une collaboration
            ou mon parcours universitaire ?
            Je serai ravie de discuter avec vous.
          </p>

        </div>

        {/* =====================================
            CARTES DE CONTACT
        ===================================== */}

        <div className="grid gap-8 md:grid-cols-2">

          {contacts.map((contact) => {

            const Icon = contact.icon;

            const contenu = (
              <>

                {/* ICÔNE */}
                <div
                 className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${contact.couleur} text-white shadow-lg`}
                >
                  <Icon size={28} />
                </div>

                {/* INFORMATIONS */}
                <div className="min-w-0 flex-1">

                  <h3 className="mb-1 text-lg font-bold">
                    {contact.titre}
                  </h3>

                  <p className="break-all text-sm text-slate-600 dark:text-slate-400">
                    {contact.valeur}
                  </p>

                </div>

                {/* FLÈCHE */}
                {contact.lien && (
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-indigo-500"
                  />
                )}

              </>
            );

            const styleCarte =
              "flex items-center gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800";

            // Carte avec lien
            if (contact.lien) {
              return (
                <a
                  key={contact.titre}
                  href={contact.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styleCarte}
                >
                  {contenu}
                </a>
              );
            }

            // Carte sans lien
            return (
              <div
                key={contact.titre}
                className={styleCarte}
              >
                {contenu}
              </div>
            );

          })}

        </div>

        {/* =====================================
            BOUTON ENVOYER UN MESSAGE
        ===================================== */}

        <div className="mt-12 text-center">

          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700"
          >
            <Send size={20} />
            Envoyez-moi un message
          </a>

        </div>

      </div>
    </section>
  );
}