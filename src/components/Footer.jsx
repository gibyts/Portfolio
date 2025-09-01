



const Footer = () => {
    return (
        <footer className='flex flex-col items-center py-4 bg-gray-800 text-white'>
            <div className="text-center mb-2">
                <p>© {new Date().getFullYear()} Gibran Tarrillo. Todos los derechos reservados.</p>
            </div>

        </footer>
    );
};

export default Footer;