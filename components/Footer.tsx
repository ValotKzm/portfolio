import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed z-50 bottom-0 w-screen bg-gray-950 text-white py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 md:space-x-6">
          <a
            href="https://www.linkedin.com/in/yannick-souza-76b3121a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} className="md:w-6 md:h-6" />
            <span className="text-sm md:text-base">LinkedIn</span>
          </a>
          <a
            href="https://github.com/ValotKzm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-400 transition-colors"
          >
            <Github size={24} className="md:w-6 md:h-6" />
            <span className="text-sm md:text-base">GitHub</span>
          </a>
          <a
            href="mailto:yannick.souza@hotmail.com"
            className="flex items-center space-x-2 hover:text-green-400 transition-colors"
          >
            <Mail size={24} className="md:w-6 md:h-6" />
            <span className="text-sm md:text-base">Email</span>
          </a>
        </div>
        <div className="text-center mt-2 md:mt-4 text-gray-400 text-sm md:text-base">
          © 2026 Yannick Souza. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}