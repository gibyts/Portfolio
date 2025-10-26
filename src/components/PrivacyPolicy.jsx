import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Política de Privacidad | Gibran Tarrillo";
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-gray-300 leading-relaxed mb-3">
          Este sitio utiliza Google Analytics para conocer estadísticas de uso y mejorar la experiencia del visitante.
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          No se recopila información personal identificable ni se comparte ningún dato con terceros.
        </p>
        <a
          href="/"
          className="mt-6 inline-block text-[#ff3131] hover:underline"
        >
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
