import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="absolute z-50 bottom-0 w-screen bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/yannick-souza-76b3121a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ValotKzm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-400 transition-colors"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:yannick.souza@hotmail.com"
            className="flex items-center space-x-2 hover:text-green-400 transition-colors"
          >
            <Mail size={24} />
            <span>Email</span>
          </a>
        </div>
        <div className="text-center mt-4 text-gray-400">
          © 2026 Yannick Souza. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}