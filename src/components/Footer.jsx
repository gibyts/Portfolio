import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <footer className='flex flex-col items-center py-4 bg-gray-800 text-white'>
            <div className="text-center mb-2">
                <p>© {new Date().getFullYear()} Gibran Tarrillo. Todos los derechos reservados.</p>
            </div>
            <div className='flex justify-center gap-4'>
                <a 
                    href="https://www.instagram.com/gibran.tarrillo/" 
                    className='text-xl text-red-400' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram"
                >
                    <FontAwesomeIcon icon={faInstagram} className='px-3 text-3xl icon-red' />
                </a>
                <a 
                    href="https://www.facebook.com/gibran.tarrillo/" 
                    className='text-xl text-red-400' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook"
                >
                    <FontAwesomeIcon icon={faFacebook} className='px-3 text-3xl icon-red' />
                </a>
                <a 
                    href="https://x.com/GibyCode" 
                    className='text-xl text-red-400' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="X"
                >
                    <FontAwesomeIcon icon={faXTwitter} className='px-3 text-3xl icon-red' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;