import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ContactSection.jsx
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-m-20 py-20  ">
      <h2 className="flex items-center justify-center mb-6 text-3xl font-semibold gap-x-3 text-white/80 dark:text-white">
        <FontAwesomeIcon icon={faPhone} className="text-3xl" />
        CONTÁCTAME
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Lado izquierdo */}
        <div>
          <div className="flex justify-center py-4">
            <h2 className="text-2xl  mb-8 text-white">Comunícate conmigo</h2>
          </div>
          <div className="space-y-6">
            {/* Email */}
            <div className="p-6 bg-gray-800 border border-gray-200  rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope className="text-2xl text-white" />
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
              <p className="text-white">gibrantarrillo@gmail.com</p>
              <a
                href="mailto:gibrantarrillo@gmail.com"
                className="text-sm icon-red mt-2 inline-block hover:underline"
              >
                Escríbeme →
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 bg-gray-800 border border-gray-200  rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <FaWhatsapp className="text-2xl text-green-600" />
                <h3 className="font-semibold text-lg">WhatsApp</h3>
              </div>
              <p className="text-white">960165362</p>
              <a
                href="https://wa.me/9606165362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm icon-red mt-2 inline-block hover:underline"
              >
                Escríbeme →
              </a>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div>
          <div className="flex justify-center py-4">
            <h2 className="text-2xl  mb-8 text-white">
              Escríbeme sobre tu proyecto
            </h2>
          </div>
          <form className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Escribe tu Nombre"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="Escribe tu Correo"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Proyecto */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Proyecto
              </label>
              <textarea
                rows="4"
                placeholder="Escribe acerca de tu proyecto"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              ></textarea>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-[#ff3131] text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#e02b2b] transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
