import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col items-center py-4 bg-gray-800 text-white text-sm">
      <div className="text-center mb-2">
        <p>
          © {new Date().getFullYear()} Gibran Tarrillo. {t("footer.text")}
        </p>
<p className="mt-1 opacity-80">
  Este sitio usa Google Analytics para analizar el tráfico.{" "}
  <a
    href="/politica-privacidad"
    target="_blank"           // 👈 abre en nueva pestaña
    rel="noopener noreferrer" // 👈 seguridad recomendada
    className="text-[#ff3131] hover:underline"
  >
    Política de Privacidad
  </a>
</p>

      </div>
    </footer>
  );
};

export default Footer;
