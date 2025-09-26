// ContactSection.jsx
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Lado izquierdo */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Comunícate conmigo
          </h2>
          <div className="space-y-6">
            {/* Email */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope className="text-2xl text-gray-700" />
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
              <p className="text-gray-600">gibrantarrillo@gmail.com</p>
              <a
                href="mailto:gibrantarrillo@gmail.com"
                className="text-sm text-blue-600 mt-2 inline-block hover:underline"
              >
                Escríbeme →
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <FaWhatsapp className="text-2xl text-green-600" />
                <h3 className="font-semibold text-lg">WhatsApp</h3>
              </div>
              <p className="text-gray-600">960165362</p>
              <a
                href="https://wa.me/9606165362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 mt-2 inline-block hover:underline"
              >
                Escríbeme →
              </a>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Escríbeme sobre tu proyecto
          </h2>
          <form className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail
              </label>
              <input
                type="email"
                placeholder="Escribe tu Correo"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Proyecto */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              Enviar Mensaje
              <span>✈️</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
