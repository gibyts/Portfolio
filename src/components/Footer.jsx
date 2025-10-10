import { useTranslation } from "react-i18next"; 

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className='flex flex-col items-center py-4 bg-gray-800 text-white'>
            <div className="text-center mb-2">
                <p>© {new Date().getFullYear()} Gibran Tarrillo. {t("footer.text")}</p>
            </div>

        </footer>
    );
};

export default Footer;