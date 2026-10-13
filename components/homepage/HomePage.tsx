import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { DisplayProjects } from "./DisplayProjects";
import { HeroEye } from "./HeroEye";
import { Ornament } from "./Ornament";

export default function HomePage() {
    return (
        <div className="portfolio-page">
            <section className="hero-section" aria-labelledby="hero-title">
                <header className="site-header">
                    <a className="site-mark" href="#top" aria-label="Yannick Souza, accueil">
                        <Image
                            className="site-mark-logo"
                            src="/brand/logo-ys-cyan.webp"
                            alt=""
                            width={312}
                            height={640}
                        />
                        <span className="site-mark-label">Portfolio</span>
                    </a>
                    <nav className="site-nav" aria-label="Navigation principale">
                        <a href="#projects">Projets <ArrowDownRight size={16} aria-hidden="true" /></a>
                        <a href="#contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a>
                    </nav>
                </header>

                <div className="hero-inner" id="top">
                    <div className="hero-copy">
                        <h1 id="hero-title">
                            <span>Yannick</span>
                            <span>Souza</span>
                        </h1>
                        <p className="hero-role">Développeur Fullstack – Spécialisé Backend &amp; NLP</p>
                        <p className="hero-intro">
                            Master en Traitement Automatique des Langues, actuellement en formation développeur fullstack, à la recherche d’une alternance.
                        </p>
                        <div className="hero-actions">
                            <a className="button-primary" href="#projects">
                                Voir mes projets <ArrowDownRight size={18} aria-hidden="true" />
                            </a>
                            <a className="text-link" href="mailto:yannick.souza@hotmail.com">
                                Me contacter <ArrowUpRight size={16} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <HeroEye />
                </div>

                <div className="hero-topics" aria-label="Domaines d’intérêt">
                    <div className="hero-topics-inner">
                        <span className="hero-topics-label">Domaines</span>
                        <span>Backend</span>
                        <span>NLP</span>
                        <span>Applications data &amp; IA</span>
                    </div>
                </div>
            </section>

            <DisplayProjects />

            <section className="profile-section" aria-labelledby="profile-title">
                <div className="profile-inner">
                    <h2 id="profile-title">Parcours</h2>
                    <Ornament />
                    <p className="profile-detail">
                        Diplômé d’un master en Traitement Automatique des Langues, j’ai développé une forte appétence pour le développement logiciel et les systèmes backend. Actuellement en école de développement fullstack, je recherche une alternance en développement fullstack, backend ou frontend, avec un intérêt particulier pour les applications data et IA.
                    </p>
                </div>
            </section>
        </div>
    );
}
