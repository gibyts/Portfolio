// ProjectCard.jsx

import React, { useState } from "react";

const ProjectCard = ({ title, description, techStack, image, demoLink, codeLink, type }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
      {/* Imagen */}
      <div className="w-full md:w-1/2">
        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            src={image}
            alt={title}
            className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full md:w-1/2 md:max-w-lg">
        <h3 className="text-2xl font-bold text-white-800 dark:text-gray-100 mb-5">
          {title}
        </h3>

        {/* Tipo (Personal / Trabajo) */}
        <span className={`inline-block mb-4 px-3 py-1 text-xs rounded-full ${
          type === "Trabajo" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
        }`}>
          {type}
        </span>

        {/* Tecnologías */}
        <ul className="flex flex-row mb-2 gap-x-2">
          {techStack.map((tech, index) => (
            <li key={index}>
              <span className="flex gap-x-2 rounded-full text-xs bg-gray-100 text-black py-1 px-2">
                <img src={`/assets/${tech.icon}`} alt={tech.name} className="size-4" />
                {tech.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Descripción */}
        <div className="mt-2 text-white-700 dark:text-gray-400">{description}</div>

        {/* Botón Ver más */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 text-blue-400 hover:underline text-sm"
        >
          Ver más
        </button>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-lg w-full relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          </div>
        )}



        {/* Botones */}
        <footer className="flex items-end justify-start mt-4 gap-x-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 text-md hover:bg-gray-800 hover:border-gray-900 rounded-xl hover:text-white"
            >
              Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 text-md hover:bg-gray-800 hover:border-gray-900 rounded-xl hover:text-white"
            >
              Código
            </a>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
