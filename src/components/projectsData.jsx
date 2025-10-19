import { desc } from "framer-motion/client";

const projectsData = [
  {
    title: "rcc.title",
    description: "rcc.description",
    detailedDescription: "rcc.detailedDescription",
    image: "/assets/project_rcc.png",
    techStack: [
      { name: ".NET", icon: ".NET.svg" },
      { name: "SQL", icon: "sql.svg" },
    ],
    demoLink: "",
    codeLink: "",
    type: "Trabajo"
  },
  {
    title: "la_once.title",
    description: "la_once.description",
    detailedDescription1: "la_once.detailedDescription1",
    detailedDescription2: "la_once.detailedDescription2",
    detailedDescription3: "la_once.detailedDescription3",
    image: "/assets/LAONCE.png",
    techStack: [
      { name: "React", icon: "react.svg" },
      { name: "Tailwind", icon: "tailwind-css.svg" },
    ],
    demoLink: "https://la-once.vercel.app/",
    codeLink: "",
    type: "Personal"
  },
  {
    title: "Flowers",
    description: "Proyecto de una página web de flores con React y Tailwind.",
    detailedDescription: "projects_section.details.flowers",
    image: "/assets/FLOWERS.png",
    techStack: [
      { name: "React", icon: "react.svg" },
      { name: "Tailwind", icon: "tailwind-css.svg" },
    ],
    demoLink: "https://flowers-pi-three.vercel.app/",
    codeLink: "",
    type: "Personal"
  },
  {
    title: "Reporte SBS ",
    description: "Proyecto de una página web para la presentación de reportes de la Superintendencia de Banca, Seguros y AFP.",
    detailedDescription: "projects_section.details.reporte_sbs",
    image: "/assets/ReporteSBS.png",
    techStack: [
      { name: "React", icon: "react.svg" },
      { name: "Tailwind", icon: "tailwind-css.svg" },
      { name: "Node.js", icon: "node-js.svg" },
    ],
    demoLink: "",
    codeLink: "",
    type: "Trabajo"
  },
  {
    title: "Convertidor",
    description: "Aplicación de escritorio para convertir boletas electrónicas y tabularlos en excel.",
    detailedDescription: "projects_section.details.convertidor",
    image: "/assets/convertidor.png",
    techStack: [
      { name: "Python", icon: "python.svg" },
      { name: "Tkinter", icon: "tkinter.png" },
    ],
    demoLink: "",
    codeLink: "",
    type: "Trabajo"
  }
];


export default projectsData;