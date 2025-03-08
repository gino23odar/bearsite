import { FaCommentDots, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { href: "https://docs.google.com/forms/d/1bzdTdtWYxA9HcTdyM347yyCdFkfyXGcUlSvVM-XJYyM/edit", icon: <FaCommentDots /> },
  { href: "https://www.youtube.com/watch?v=_qiRHeMCfNQ", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-center text-sm font-light">
          ©SVINKA 2025. All rights reserved
        </p>
      </div>
    </footer>

  );
};

export default Footer;
