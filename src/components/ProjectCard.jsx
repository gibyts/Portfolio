import { ExternalLink, Code } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({
  title,
  description,
  detailedDescription1,
  detailedDescription2,
  detailedDescription3,
  techStack,
  image,
  demoLink,
  codeLink,
  type,
  onOpenModal,
}) => {
  const { t } = useTranslation();

  const translatedType =
    type === "Trabajo"
      ? t("projects_section.filter_title3")
      : t("projects_section.filter_title2");

  return (
    <article className="relative flex flex-col md:flex-row md:space-x-8 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      {/* Imagen con overlay */}
      <div className="w-full md:w-1/2 relative group">
        <img
          src={image}
          alt={t(title)}
          className="object-cover w-full h-64 md:h-full transition-all duration-500 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-t-2xl flex items-end p-4">
          <h3 className="text-2xl font-bold text-white">{t(title)}</h3>
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        {/* Tipo */}
        <span
          className={`self-start mb-3 px-3 py-1 text-xs rounded-full font-medium ${
            type === "Trabajo"
              ? "bg-blue-600/80 text-white"
              : "bg-green-600/80 text-white"
          }`}
        >
          {translatedType}
        </span>

        {/* Descripción */}
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          {t(description)}
        </p>

        {/* Tecnologías */}
        <ul className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <li key={index}>
              <span className="flex items-center gap-x-1 bg-gray-800 text-gray-200 px-3 py-1 text-xs rounded-full transition-all hover:bg-gray-700 cursor-default">
                <img
                  src={`/assets/${tech.icon}`}
                  alt=""
                  className="size-4"
                />
                {tech.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Botones */}
        <footer className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-sm font-medium border border-gray-600 transition"
            >
              <Code size={16} /> Código
            </a>
          )}

          {/* Botón Ver Más */}
          <button
            onClick={() =>
              onOpenModal({
                title: t(title),
                detailedDescription1: t(detailedDescription1),
                detailedDescription2: t(detailedDescription2),
                detailedDescription3: t(detailedDescription3),
              })
            }
            className="ml-auto text-sm text-gray-400 hover:text-gray-100 underline transition"
          >
            {t("projects_section.more_info")}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
