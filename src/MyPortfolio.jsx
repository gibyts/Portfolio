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
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import projectsData from "./components/projectsData";
import ContactSection from "./components/ContactSection";
import { useState } from "react";

const MyPortfolio = () => {
const [filter, setFilter] = useState("Todos");
const filters = ["Todos", "Personal", "Trabajo"];

// Filtrar proyectos por type
const filteredProjects = projectsData.filter((project) =>
  filter === "Todos" ? true : project.type === filter
);

  return (
    <main>
      <section className="text-center min-h-screen flex flex-col items-center justify-center pt-20 md:pt-24">
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
          Ingeniero de Software
         
        </h2>
        <div className="mb-3 py-2">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-md font-semibold">
            <a href="https://linkedin.com/in/gibrantarrillo" target="_blank">
              Disponible para trabajar
            </a>
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
        <section id="experience" className="h-auto max-w-full p-4">
          <h2 className="flex flex-wrap items-center mb-6 text-2xl md:text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
            <FontAwesomeIcon icon={faSuitcase} className="text-3xl" />
            Experiencia laboral
          </h2>

          <ol className="relative border-l-4 border-gray-400 dark:border-gray-700 ml-4 md:ml-6">
            {/* Banco de la Nación */}
            <li className="mb-10 ml-4 md:ml-6 flex flex-col">
              <span className="absolute -left-6 md:-left-8 flex items-center justify-center w-8 md:w-10 h-8 md:h-10 bg-red-500 text-white rounded-full text-lg md:text-2xl">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white/80 dark:text-white">
                Practicante de Riesgo Crediticio
              </h3>
              <p className="text-sm md:text-base text-white/80 dark:text-white">
                Banco de la Nación{" "}
                <span className="text-gray-400">2024 - Actualidad</span>
              </p>
              <div className="mt-2 p-3 md:p-4 bg-gray-800 text-white rounded-lg shadow-lg">
                <p>
                  📊 Automatización de procesos de riesgo crediticio con SQL y
                  Python.
                </p>
                <p>
                  🔍 Análisis de datos para mejorar la toma de decisiones en el
                  área de riesgo.
                </p>
                <p>
                  🚀 Implementación de modelos predictivos para evaluación de
                  clientes.
                </p>
              </div>
            </li>

            {/* Freelance */}
            <li className="mb-10 ml-4 md:ml-6 flex flex-col">
              <span className="absolute -left-6 md:-left-8 flex items-center justify-center w-8 md:w-10 h-8 md:h-10 bg-purple-500 text-white rounded-full text-lg md:text-2xl">
                <FontAwesomeIcon icon={faLaptopCode} />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white/80 dark:text-white">
                Desarrollador Freelance
              </h3>
              <p className="text-sm md:text-base text-white/80 dark:text-white">
                Independiente{" "}
                <span className="text-gray-400">2023 - Actualidad</span>
              </p>
              <div className="mt-2 p-3 md:p-4 bg-gray-800 text-white rounded-lg shadow-lg">
                <p>
                  🖥️ Desarrollo de aplicaciones de escritorio en Python para
                  automatización de tareas.
                </p>
                <p>
                  🌐 Creación de páginas web dinámicas con React y backend en
                  Node.js.
                </p>
                <p>
                  📈 Implementación de dashboards interactivos para
                  visualización de datos.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section id="skills" className="w-full min-h-screen">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-3xl" />
            Habilidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5">
            {/* Lenguajes */}
            <div className="border-2 border-gray-300 pb-4">
              <h3 className="mt-4 text-xl font-semibold text-white-700 uppercase tracking-wider p-3">
                Lenguajes
              </h3>
              <div className="grid grid-cols-3 gap-4 px-6">
                {[
                  "html",
                  "css",
                  "javascript",
                  "python",
                  "sql_server",
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
                      <span className="absolute -top-8 text-xs text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Frameworks */}
            <div className="border-2 border-gray-300 pb-4">
              <h3 className="mt-4 text-xl font-semibold text-white-700 uppercase tracking-wider p-3">
                Frameworks y librerías
              </h3>
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
                      <span className="absolute -top-8 text-xs text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Herramientas */}
            <div className="border-2 border-gray-300 pb-4">
              <h3 className="mt-4 text-xl font-semibold text-white-700 uppercase tracking-wider p-3">
                Herramientas
              </h3>
              <div className="grid grid-cols-3 gap-4 px-6">
                {[
                  "visual-studio-code",
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
                      <span className="absolute -top-8 text-xs text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nube */}
            <div className="border-2 border-gray-300 pb-4">
              <h3 className="mt-4 text-xl font-semibold text-white-700 uppercase tracking-wider p-3">
                Nube y proveedores
              </h3>
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
                      <span className="absolute -top-8 text-xs text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h2 className="flex items-center my-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
            <FontAwesomeIcon icon={faCode} className="text-3xl" />
            PROYECTOS
          </h2>

          {/* Botones de filtro */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl border transition ${
                  filter === f
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Render de proyectos filtrados */}
          <div className="flex flex-col gap-y-16">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="scroll-m-20 mx-auto container px-4 lg:max-w-4xl md:max-w-2xl pt-20"
        >
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
            <FontAwesomeIcon icon={faUser} className="text-3xl" />
            SOBRE MI
          </h2>

          <article className="flex flex-col md:flex-row items-center justify-center gap-8 mb-24">
            {/* Imagen a la izquierda en pantallas grandes */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <img
                src="/assets/profile.jpeg" // tu imagen aquí
                alt="Foto de perfil"
                className="rounded-xl shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
              />
            </div>

            {/* Texto a la derecha */}
            <div className="w-full md:w-2/3 text-justify md:text-left text-white/80 dark:text-white leading-relaxed">
              <p>
                Ingeniero de software con experiencia en desarrollo web y
                análisis de datos. Apasionado por la tecnología y la creación de
                soluciones innovadoras.
              </p>
              <p className="mt-4">
                Me gusta innovar en cada proyecto y reto que me propongo. Si
                algo no lo sé, investigo. Me considero un buen solucionador de
                problemas.
              </p>
            </div>
          </article>
        </section>
        <ContactSection />
      </div>
    </main>
  );
};

export default MyPortfolio;
