import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <p className="footer-copy">© 2026 Yannick Souza. Tous droits réservés.</p>
        <nav className="footer-links" aria-label="Liens de contact">
          <a
            href="https://www.linkedin.com/in/yannick-souza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={17} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ValotKzm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:yannick.souza@hotmail.com"
          >
            <Mail size={17} aria-hidden="true" />
            <span>Email</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}