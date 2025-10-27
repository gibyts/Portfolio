import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();

  // 🌐 Cambiar idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  // 🔗 Lista de secciones
  const sections = [
    { id: "home", label: t("home") },
    { id: "experience", label: t("experience") },
    { id: "skills", label: t("skills") },
    { id: "projects", label: t("projects") },
    { id: "about", label: t("about") },
    { id: "contact", label: t("contact") },
  ];

  // 🖱️ Click en enlace
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // 👁️ Detectar sección visible (Scroll Spy)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Buscamos la sección con mayor proporción visible
        const visible = entries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        );

        if (visible && visible.isIntersecting) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: Array.from({ length: 20 }, (_, i) => i / 20), // detecta varios niveles de visibilidad
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
                 w-[90%] bg-gray-800 rounded-2xl shadow-lg z-50 
                 flex items-center justify-between px-6 py-4 
                 border border-gray-700"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 text-2xl">
        <span className="icon-red font-bold">❮⦢𝑖𝑏𝑦𝑐𝑜𝑑𝑒</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden min-[1280px]:flex space-x-6 text-gray-300 text-lg min-[1456px]:absolute min-[1456px]:left-1/2 min-[1456px]:transform min-[1456px]:-translate-x-1/2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleLinkClick(section.id)}
            className={`transition-colors duration-200 font-semibold ${
              activeSection === section.id
                ? "text-[#ff3131]" // activo
                : "hover:text-[#ff3131]"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Social Icons */}
      <div className="hidden min-[1280px]:flex items-center space-x-5 text-xl text-gray-300">
        {/* X */}
        <div className="relative group">
          <a
            href="https://x.com/GibyCode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:bg-black/40 group-hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-gray-300" />
          </a>

          {/* Tooltip debajo */}
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            X
          </span>
        </div>

        {/* Instagram */}
        <div className="relative group">
          <a
            href="https://www.instagram.com/gibran.tarrillo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:bg-black/40 group-hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-gray-300" />
          </a>
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Instagram
          </span>
        </div>

        {/* Discord */}
        <div className="relative group">
          <a
            href="https://discord.com/invite/your-invite-code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:bg-black/40 group-hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faDiscord} className="text-gray-300" />
          </a>
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Discord
          </span>
        </div>
        {/* YouTube */}
        <div className="relative group">
          <a
            href="https://www.youtube.com/@gibycode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:bg-black/40 group-hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-gray-300" />
          </a>
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            YouTube
          </span>
        </div>

        {/* Idioma */}
        <div className="flex items-center border-l border-gray-700 pl-4 text-xl space-x-1">
          <div className="relative group">
            <div
              onClick={toggleLanguage}
              className="flex items-center justify-center space-x-1 w-16 h-10 rounded-xl bg-transparent transition-all duration-200 group-hover:bg-[#1e1e1e] group-hover:shadow-lg cursor-pointer px-2"
              aria-label="Cambiar idioma"
            >
              {/* Icono */}
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-gray-300 text-lg"
              />

              {/* Texto del idioma al costado */}
              <span className="text-gray-300 text-sm font-medium">
                {i18n.language.toUpperCase()}
              </span>
            </div>

            {/* Tooltip debajo */}
            <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Cambiar idioma
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="min-[1280px]:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-gray-300 text-2xl"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900 rounded-b-2xl shadow-lg flex flex-col items-center space-y-4 py-6 text-gray-300 text-lg min-[1130px]:hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleLinkClick(section.id)}
              className={`transition-colors duration-200 font-semibold ${
                activeSection === section.id
                  ? "text-[#ff3131]"
                  : "hover:text-[#ff3131]"
              }`}
            >
              {section.label}
            </button>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex space-x-6 text-xl pt-4 border-t border-gray-700">
            <div className="relative group">
              <a
                href="https://x.com/GibyCode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:bg-black/40 group-hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-gray-300" />
              </a>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                X
              </span>
            </div>
            <div className="relative group">
              <a
                href="https://www.instagram.com/gibran.tarrillo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:bg-black/40 group-hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-gray-300" />
              </a>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Instagram
              </span>
            </div>
            <div className="relative group">
              <a
                href="https://www.youtube.com/@gibycode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:bg-black/40 group-hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-gray-300" />
              </a>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                YouTube
              </span>
            </div>
            <div className="relative group">
              <a
                href="https://discord.com/invite/your-invite-code"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:bg-black/40 group-hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faDiscord} className="text-gray-300" />
              </a>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Discord
              </span>
            </div>

            {/* Botón idioma móvil */}
            <div className="flex items-center border-l border-gray-700 pl-4 text-xl space-x-1">
              <div className="relative group">
                <div
                  onClick={toggleLanguage}
                  className="flex items-center justify-center space-x-1 w-16 h-10 rounded-xl bg-transparent transition-all duration-200 group-hover:bg-[#1e1e1e] group-hover:shadow-lg cursor-pointer px-2"
                  aria-label="Cambiar idioma"
                >
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-gray-300 text-lg"
                  />
                  <span className="text-gray-300 text-sm font-medium">
                    {i18n.language.toUpperCase()}
                  </span>
                </div>
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  Cambiar idioma
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
