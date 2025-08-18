import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus traducciones
import translationES from "./locales/es/translation.json";
import translationEN from "./locales/en/translation.json";

// Define los recursos
const resources = {
  es: { translation: translationES },
  en: { translation: translationEN },
};

// Inicializa i18n
i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
