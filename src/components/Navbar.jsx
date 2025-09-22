import { useState } from "react";
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
      <div className="hidden md:flex space-x-6 text-gray-300 text-lg">
        <a href="#home" className="hover:text-[#ff3131]">
          inicio
        </a>
        <a href="#blog" className="hover:text-[#ff3131]">
          habilidades
        </a>
        <a href="#projects" className="hover:text-[#ff3131]">
          proyectos
        </a>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex items-center space-x-8 text-xl text-gray-300">
        <a
          href="https://x.com/GibyCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            className="hover:text-blue-400 cursor-pointer"
          />
        </a>
        <a
          href="https://www.instagram.com/gibran.tarrillo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:text-gray-100 cursor-pointer"
          />
        </a>
        <a
          href="https://discord.com/invite/your-invite-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faDiscord}
            className="hover:text-indigo-400 cursor-pointer"
          />
        </a>
        <a
          href="https://www.youtube.com/@gibycode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="hover:text-red-500 cursor-pointer"
          />
        </a>
        <div className="border-l border-gray-700 pl-4 text-xl">
          <FontAwesomeIcon
            icon={faGlobe}
            className="hover:text-green-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-gray-300 text-2xl"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900 rounded-b-2xl shadow-lg flex flex-col items-center space-y-4 py-6 text-gray-300 text-lg md:hidden">
          <a href="#home" className="hover:text-[#ff3131]" onClick={() => setIsOpen(false)}>
            inicio
          </a>
          <a href="#blog" className="hover:text-[#ff3131]" onClick={() => setIsOpen(false)}>
            habilidades
          </a>
          <a href="#projects" className="hover:text-[#ff3131]" onClick={() => setIsOpen(false)}>
            proyectos
          </a>
          <a href="#about" className="hover:text-[#ff3131]" onClick={() => setIsOpen(false)}>
            Acerca de mi
          </a>

          {/* Mobile Social Icons */}
          <div className="flex space-x-6 text-xl pt-4 border-t border-gray-700">
            <a href="https://x.com/GibyCode" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/gibran.tarrillo/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-100" />
            </a>
            <a href="https://www.youtube.com/@gibycode" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
