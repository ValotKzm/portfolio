import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            className="footer-logo"
            src="/brand/logo-ys-cyan.webp"
            alt="Logo Yannick Souza"
            width={312}
            height={640}
          />
        </div>
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
        <p className="footer-copy">© 2026 Yannick Souza. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
