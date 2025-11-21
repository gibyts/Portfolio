import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { gsap } from "gsap";
import Section from "./Section";

const ContactSection = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const { t } = useTranslation();

  const emailTextRef = useRef(null);
  const emailArrowRef = useRef(null);

  // WHATSAPP refs
  const waTextRef = useRef(null);
  const waArrowRef = useRef(null);

  // Animación email
  const handleEnterEmail = () => {
    gsap.to(emailTextRef.current, {
      opacity: 1,
      width: "auto",
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(emailArrowRef.current, {
      x: 10,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleLeaveEmail = () => {
    gsap.to(emailTextRef.current, {
      opacity: 0,
      width: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
    gsap.to(emailArrowRef.current, {
      x: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  // Animación WhatsApp
  const handleEnterWA = () => {
    gsap.to(waTextRef.current, {
      opacity: 1,
      width: "auto",
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(waArrowRef.current, {
      x: 10,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleLeaveWA = () => {
    gsap.to(waTextRef.current, {
      opacity: 0,
      width: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
    gsap.to(waArrowRef.current, {
      x: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Tomamos los valores del formulario
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/myznpqll", {
        // ⚠️ reemplaza con tu propio endpoint de Formspree
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        e.target.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="w-full min-h-screen scroll-m-20 py-16">
      <h2 className="flex items-center justify-center mb-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
        <FontAwesomeIcon icon={faPhone} className="text-3xl" />
        {t("contact_section.title")}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Lado izquierdo */}
        <div>
          <div className="flex justify-center pt-6">
            <h2 className="text-2xl mb-8 text-white">
              {t("contact_section.subtitle")}
            </h2>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div
              className="p-6 bg-gray-800 border border-gray-200 rounded-xl shadow hover:scale-105 transition-transform "
              onMouseEnter={handleEnterEmail}
              onMouseLeave={handleLeaveEmail}
            >
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope className="text-2xl text-[#ff3131]" />
                <h3 className="font-semibold text-lg">
                  {t("contact_section.emailLabel")}
                </h3>
              </div>

              <p className="text-white">gibrantarrillo@gmail.com</p>

              <a
                href="mailto:gibrantarrillo@gmail.com"
                className="text-sm text-[#ff3131] mt-2 inline-flex items-center cursor-pointer "
              >
                {/* Texto oculto */}
                <span
                  ref={emailTextRef}
                  className="whitespace-nowrap opacity-0 inline-block w-0 mr-1"
                >
                  {t("contact_section.writeMe")}
                </span>

                {/* Flecha visible siempre */}
                <span ref={emailArrowRef}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>

            {/* WhatsApp */}
            <div
              className="p-6 bg-gray-800 border border-gray-200 rounded-xl shadow hover:scale-105 transition-transform"
              onMouseEnter={handleEnterWA}
              onMouseLeave={handleLeaveWA}
            >
              <div className="flex items-center gap-3 mb-2">
                <FaWhatsapp className="text-2xl text-[#ff3131]" />
                <h3 className="font-semibold text-lg">WhatsApp</h3>
              </div>
              <p className="text-white">960165362</p>
              <a
                href="https://wa.me/9606165362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#ff3131] mt-2 inline-flex items-center cursor-pointer "
              >
                <span
                  ref={waTextRef}
                  className="whitespace-nowrap opacity-0 inline-block w-0 mr-1"
                >
                  {t("contact_section.writeMe")}
                </span>
                <span ref={waArrowRef}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div>
          <div className="flex justify-center pt-6">
            <h2 className="text-2xl mb-8 text-white">
              {t("contact_section.projectTitle")}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                {t("contact_section.nameLabel")}
              </label>
              <input
                type="text"
                name="nombre"
                placeholder={t("contact_section.namePlaceholder")}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none bg-gray-800 text-white"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                {t("contact_section.emailLabel")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("contact_section.emailPlaceholder")}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none bg-gray-800 text-white"
                required
              />
            </div>

            {/* Proyecto */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                {t("contact_section.projectLabel")}
              </label>
              <textarea
                name="mensaje"
                rows="4"
                placeholder={t("contact_section.projectPlaceholder")}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none bg-gray-800 text-white resize-none"
                required
              ></textarea>
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#ff3131] text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#e02b2b] transition disabled:opacity-50"
            >
              {status === "loading"
                ? t("contact_section.sending")
                : t("contact_section.sendMessage")}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center mt-3">
                ✅ {t("contact_section.successMessage")}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center mt-3">
                ❌ {t("contact_section.errorMessage")}
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
