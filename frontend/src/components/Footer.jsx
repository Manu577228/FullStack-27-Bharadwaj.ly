import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sticky bottom-0 z-40 backdrop-blur-md bg-white/30 border-t border-white/30">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

        <div className="text-xs sm:text-sm text-gray-800 text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">
            Bharadwaj.<span className="text-yellow-500">ly</span>
          </span>
          <span className="mx-2 text-gray-500">•</span>
          <span>Shorten • Track • Analyze</span>
        </div>

        <div className="flex items-center gap-5 text-gray-700">
          <a
            href="https://www.linkedin.com/in/manu-bharadwaj-3507a345/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/Manu577228"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://youtube.com/@code-with-Bharadwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaYoutube size={18} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;