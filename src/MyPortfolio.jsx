//import { MaterialSymbol } from 'react-material-symbols';
//import 'react-material-symbols/rounded';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import projectsData from "./components/projectsData";
import ContactSection from "./components/ContactSection";
import Section from "./components/Section";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const MyPortfolio = () => {
  const { t } = useTranslation();

  const filters = [
    { key: "All", title: t("projects_section.filter_title1") },
    { key: "Personal", title: t("projects_section.filter_title2") },
    { key: "Work", title: t("projects_section.filter_title3") },
  ];

  const [filter, setFilter] = useState("All");

  // Filtramos según la clave, no según la traducción
  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Personal") return project.type === "Personal";
    if (filter === "Work") return project.type === "Trabajo";
    return true;
  });

  // 🆕 Estado para manejar modal global
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    detailedDescription1: "",
    detailedDescription2: "",
    detailedDescription3: "",
  });

  // 🆕 Funciones para abrir/cerrar el modal
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // 🆕 Permitir cerrar modal con tecla Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main>
      <section
        id="home"
        className="text-center min-h-screen flex flex-col items-center justify-center pt-20 md:pt-24"
      >
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src="/assets/photo_profile.jpg"
            alt="Gibran Tarrillo"
            className="rounded-full shadow-lg w-24 h-24 md:w-40 md:h-40"
          />
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center md:text-left">
            Gibran Tarrillo
          </h1>
        </div>

        <h2 className="py-6 text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-center md:text-left">
          {t("home_section.profession")}
        </h2>
        <div className="mb-3 py-2">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn font-semibold border-none bg-[#ff3131] hover:bg-[#e02b2b] text-white 
             text-base sm:text-base md:text-base lg:text-lg 
             px-4 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3"
          >
            {t("home_section.workAvailable")}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://linkedin.com/in/gibrantarrillo"
            className="px-2 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="px-3 text-3xl icon-red"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/gibyts"
            className="px-2 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="px-3 text-3xl icon-red"
            />
            Github
          </a>
          <a
            href="mailto:gibrantarrillo@gmail.com "
            className="px-2 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="px-3 text-3xl icon-red"
            />
            Email
          </a>
        </div>
      </section>
      <div className="scroll-m-20 mx-auto container px-4 lg:max-w-4xl md:max-w-2xl">
        <Section
          id="experience"
          className="scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-16"
        >
          <h2 className="flex flex-wrap justify-center items-center mb-6 text-2xl md:text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
            <FontAwesomeIcon icon={faSuitcase} className="text-3xl" />
            {t("experience_section.title")}
          </h2>

          <ol className="relative border-l-4 border-gray-400 dark:border-gray-700 ml-4 md:ml-6">
            {/* Banco de la Nación */}
            <li className="mb-10 ml-4 md:ml-6 flex flex-col">
              <span className="absolute -left-6 md:-left-8 flex items-center justify-center w-8 md:w-10 h-8 md:h-10 bg-red-500 text-white rounded-full text-lg md:text-2xl">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white/80 dark:text-white">
                {t("experience_section.job_title1")}
              </h3>
              <p className="text-sm md:text-base text-white/80 dark:text-white">
                {t("experience_section.company1")}{" "}
                <span className="text-gray-400">
                  {t("experience_section.range1")}
                </span>
              </p>
              <div className="mt-2 p-3 md:p-4 bg-gray-800 text-white rounded-lg shadow-lg">
                <p className="mb-2">
                  📊 {t("experience_section.role1_description1")}
                </p>
                <p className="mb-2">
                  🔍 {t("experience_section.role1_description2")}
                </p>
                <p className="mb-2">
                  🚀 {t("experience_section.role1_description3")}
                </p>
                <p className="mb-2">
                  ⚙️ {t("experience_section.role1_description4")}
                </p>
              </div>
            </li>

            {/* Freelance */}
            <li className="mb-10 ml-4 md:ml-6 flex flex-col">
              <span className="absolute -left-6 md:-left-8 flex items-center justify-center w-8 md:w-10 h-8 md:h-10 bg-purple-500 text-white rounded-full text-lg md:text-2xl">
                <FontAwesomeIcon icon={faLaptopCode} />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white/80 dark:text-white">
                {t("experience_section.job_title2")}
              </h3>
              <p className="text-sm md:text-base text-white/80 dark:text-white">
                {t("experience_section.company2")}{" "}
                <span className="text-gray-400">
                  {t("experience_section.range2")}
                </span>
              </p>
              <div className="mt-2 p-3 md:p-4 bg-gray-800 text-white rounded-lg shadow-lg">
                <p className="mb-2">
                  🖥️ {t("experience_section.role2_description1")}
                </p>
                <p className="mb-2">
                  🌐 {t("experience_section.role2_description2")}
                </p>
                <p className="mb-2">
                  📈 {t("experience_section.role2_description3")}
                </p>
              </div>
            </li>
          </ol>
        </Section>

        <Section
          id="skills"
          className="scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-16"
        >
          <h2 className="flex items-center justify-center mb-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-3xl" />
            {t("skills_section.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5">
            {/* Lenguajes */}
            <div className="border-2 border-gray-300 pb-4">
              <div className="flex justify-center pb-4">
                <h3 className="mt-4 text-xl font-semibold text-white-700 uppercase tracking-wider p-3">
                  {t("skills_section.subtitle1")}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4 px-6">
                {[
                  "html",
                  "css",
                  "javascript",
                  "python",
                  "sql",
                  ".NET",
                  "C++",
                ].map((tech, index) => {
                  const techExtension = tech === "github" ? ".png" : ".svg";
                  const techName = tech.replace("-", " ").toUpperCase();
                  return (
                    <div
                      key={index}
                      className="relative group flex flex-col items-center gap-2 rounded-md border border-neutral-700 p-3 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                    >
                      <img
                        src={`/assets/${tech}${techExtension}`}
                        alt={techName}
                        className="self-center aspect-square"
                        width={45} // más chico
                        height={90}
                      />
                      <span className="absolute -top-7 text-xs text-white bg-[#ff3131] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Frameworks */}
            <div className="border-2 border-gray-300 pb-4">
              <div className="flex justify-center pb-4">
                <h3 className="mt-4 text-xl font-semibold text-white-700 uppercase tracking-wider p-3">
                  {t("skills_section.subtitle2")}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4 px-6">
                {[
                  "react",
                  "vite",
                  "tailwind-css",
                  "vue-js",
                  "flask",
                  "selenium",
                  "node-js",
                  "astro",
                ].map((tech, index) => {
                  const techExtension = tech === "selenium" ? ".png" : ".svg";
                  const techName = tech.replace("-", " ").toUpperCase();
                  return (
                    <div
                      key={index}
                      className="relative group flex flex-col items-center gap-2 rounded-md border border-neutral-700 p-3 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                    >
                      <img
                        src={`/assets/${tech}${techExtension}`}
                        alt={tech}
                        className="self-center aspect-square"
                        width={45} // más chico
                        height={90}
                      />
                      <span className="absolute -top-7 text-xs text-white bg-[#ff3131] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Herramientas */}
            <div className="border-2 border-gray-300 pb-4">
              <div className="flex justify-center pb-4">
                <h3 className="mt-4 text-xl font-semibold text-white-700 uppercase tracking-wider p-3">
                  {t("skills_section.subtitle3")}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4 px-6">
                {[
                  "vs-code",
                  "trello",
                  "git",
                  "visual-studio",
                  "jupyter",
                  "power-bi",
                  "figma",
                  "selenium",
                ].map((tech, index) => {
                  const techExtension = tech === "selenium" ? ".png" : ".svg";
                  const techName = tech.replace("-", " ").toUpperCase();
                  return (
                    <div
                      key={index}
                      className="relative group flex flex-col items-center gap-2 rounded-md border border-neutral-700 p-3 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                    >
                      <img
                        src={`/assets/${tech}${techExtension}`}
                        alt={tech}
                        className="self-center aspect-square"
                        width={45} // más chico
                        height={90}
                      />
                      <span className="absolute -top-7 text-xs text-white bg-[#ff3131] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nube */}
            <div className="border-2 border-gray-300 pb-4">
              <div className="flex justify-center pb-4">
                <h3 className="mt-4 text-xl font-semibold text-white-700 uppercase tracking-wider p-3">
                  {t("skills_section.subtitle4")}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4 px-6">
                {["aws", "vercel", "github"].map((tech, index) => {
                  const techExtension = tech === "heroku" ? ".png" : ".svg";
                  const techName = tech.replace("-", " ").toUpperCase();
                  return (
                    <div
                      key={index}
                      className="relative group flex flex-col items-center gap-2 rounded-md border border-neutral-700 p-3 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                    >
                      <img
                        src={`/assets/${tech}${techExtension}`}
                        alt={tech}
                        className="self-center aspect-square"
                        width={45} // más chico
                        height={90}
                      />
                      <span className="absolute -top-7 text-xs text-white bg-[#ff3131] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          className="scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-16"
        >
          <h2 className="flex items-center justify-center my-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
            <FontAwesomeIcon icon={faCode} className="text-3xl" />
            {t("projects_section.title")}
          </h2>

          {/* Botones de filtro */}
          <div className="flex gap-4 mb-8 flex-wrap justify-center py-6">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-xl border transition  ${
                  filter === f.key
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {f.title}
              </button>
            ))}
          </div>

          {/* Render de proyectos filtrados */}
          <div className="flex flex-col gap-y-16">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} onOpenModal={openModal} />
            ))}
          </div>
        </Section>

        <Section
          id="about"
          className="scroll-m-20 mx-auto container px-4 lg:max-w-4xl md:max-w-2xl pt-16"
        >
          <h2 className="flex items-center justify-center mb-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
            <FontAwesomeIcon icon={faUser} className="text-3xl" />
            {t("about_section.title")}
          </h2>

          <article className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-24 ">
            {/* Imagen a la izquierda */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start  p-4">
              <img
                src="/assets/profile.jpeg"
                alt="Foto de perfil"
                className="rounded-2xl shadow-lg w-48 h-48 md:w-80 md:h-80 object-cover"
              />
            </div>

            {/* Columna derecha: cards arriba + texto abajo */}
            <div className="w-full md:w-2/3">
              {/* Tres cajas (cards) */}
              <div className="w-full flex justify-center md:justify-center  ">
                <div className="flex gap-4">
                  {/* Card 1 */}
                  <div className="bg-gray-800 border  border-gray-700 rounded-xl p-4 shadow-sm flex flex-col items-center w-28 md:w-36">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 11c0 1.657-1.343 3-3 3S6 12.657 6 11s1.343-3 3-3 3 1.343 3 3zM21 21v-2a4 4 0 00-4-4h-4"
                      />
                    </svg>
                    <h4 className="text-sm font-medium mt-2">
                      {t("about_section.box_title1")}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {t("about_section.box_subtitle1")}
                    </span>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gray-800 border  border-gray-700 rounded-xl p-4 shadow-sm flex flex-col items-center w-28 md:w-36">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12h6M9 16h6M5 8h14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <h4 className="text-sm font-medium mt-2">
                      {t("about_section.box_title2")}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      +5
                    </span>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gray-800 border  border-gray-700 rounded-xl p-4 shadow-sm flex flex-col items-center w-28 md:w-36">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M18 8a6 6 0 10-12 0v4a6 6 0 0012 0V8zM12 20v-4"
                      />
                    </svg>
                    <h4 className="text-sm font-medium mt-2">
                      {t("about_section.box_title3")}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Online 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Texto (debajo de las cards) */}
              <div className="text-center  text-white/85 leading-relaxed">
                <p className="text-lg  mt-6">
                  {t("about_section.description")}
                </p>

                {/* Botón CV */}
                <div className="mt-6 flex justify-center md:justify-center">
                  <a
                    href="/assets/CV.pdf"
                    download
                    className="px-6 py-3 bg-[#ff3131] text-white rounded-xl shadow-md hover:bg-[#e02b2b] transition flex items-center gap-2"
                  >
                    {t("about_section.download_cv")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v12m8-8H4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Section>
        <ContactSection />
      </div>
      <ScrollToTopButton />

      {/* Modal global con portal */}
      {isModalOpen &&
        createPortal(
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
            <div className="relative bg-gray-900 text-gray-100 rounded-2xl shadow-2xl p-6 max-w-lg w-full">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-semibold mb-3">
                {modalContent.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {modalContent.detailedDescription1 && (
                  <p>• {modalContent.detailedDescription1}</p>
                )}
                {modalContent.detailedDescription2 && (
                  <p>• {modalContent.detailedDescription2}</p>
                )}
                {modalContent.detailedDescription3 && (
                  <p>• {modalContent.detailedDescription3}</p>
                )}
              </p>
            </div>
          </div>,
          document.body
        )}
    </main>
  );
};

export default MyPortfolio;
