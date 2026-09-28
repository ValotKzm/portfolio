"use client";
import { useEffect, useState } from "react";
import { getProject } from "@/app/actions/getProjects";
import { projects } from "@/lib/db/schema";
import { ProjectCard } from "./ProjectCard";

type Project = typeof projects.$inferSelect;

export const DisplayProjects = () => {
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        let active = true;

        const loadProjects = async () => {
            setLoading(true);
            setHasError(false);

            try {
                const result = await getProject();
                if (active) setAllProjects(result);
            } catch {
                if (active) setHasError(true);
            } finally {
                if (active) setLoading(false);
            }
        };

        void loadProjects();
        return () => {
            active = false;
        };
    }, [attempt]);

    return (
        <section id="projects" className="projects-section" aria-labelledby="projects-title">
            <div className="projects-inner">
                <div className="projects-heading">
                    <h2 id="projects-title">Mes projets</h2>
                    <p>Quelques projets que j’ai réalisés ou que je développe.</p>
                </div>
                {loading ? (
                    <p className="projects-state" role="status">Chargement des projets…</p>
                ) : hasError ? (
                    <div className="projects-state" role="alert">
                        <p>Impossible de charger les projets pour le moment.</p>
                        <button className="projects-retry" onClick={() => setAttempt((value) => value + 1)}>
                            Réessayer
                        </button>
                    </div>
                ) : allProjects.length === 0 ? (
                    <p className="projects-state">Aucun projet à afficher pour le moment.</p>
                ) : (
                    <div data-impeccable-carbonize="aeccaac0" style={{ display: "contents" }}>
                      {/* impeccable-carbonize-start aeccaac0 */}
                      <style data-impeccable-css="aeccaac0">{`
                      @keyframes aeccaac0-detail-wipe {
                      from { clip-path: inset(0 0 100% 0); transform: translateY(calc(var(--p-wipe-distance, 12) * -1px)); }
                      to { clip-path: inset(0 0 0 0); transform: translateY(0); }
                      }
                      @keyframes aeccaac0-line-wipe {
                      from { clip-path: inset(0 100% 0 0); }
                      to { clip-path: inset(0 0 0 0); }
                      }
                      @scope ([data-impeccable-variant="1"]) {
                      :scope > .projects-grid .project-content h3 { min-height: 2.9em; }
                      :scope > .projects-grid .project-details { margin-top: 0; }
                      :scope > .projects-grid .project-details[open] .project-expanded {
                      animation: aeccaac0-detail-wipe calc(var(--p-wipe-speed, 220) * 1ms) cubic-bezier(0.16, 1, 0.3, 1) both;
                      }
                      @media (prefers-reduced-motion: reduce) {
                      :scope > .projects-grid .project-details[open] .project-expanded { animation: none; }
                      }
                      }
                      @scope ([data-impeccable-variant="2"]) {
                      :scope > .projects-grid .project-content h3 { min-height: 2.9em; }
                      :scope > .projects-grid .project-details { margin-top: 0; }
                      :scope > .projects-grid .project-details[open] .project-expanded > * {
                      animation: aeccaac0-line-wipe calc(var(--p-line-speed, 180) * 1ms) cubic-bezier(0.16, 1, 0.3, 1) both;
                      }
                      :scope > .projects-grid .project-details[open] .project-expanded > :nth-child(1) { animation-delay: 0ms; }
                      :scope > .projects-grid .project-details[open] .project-expanded > :nth-child(2) { animation-delay: calc(var(--p-row-stagger, 35) * 1ms); }
                      :scope > .projects-grid .project-details[open] .project-expanded > :nth-child(3) { animation-delay: calc(var(--p-row-stagger, 35) * 2ms); }
                      :scope > .projects-grid .project-details[open] .project-expanded > :nth-child(4) { animation-delay: calc(var(--p-row-stagger, 35) * 3ms); }
                      @media (prefers-reduced-motion: reduce) {
                      :scope > .projects-grid .project-details[open] .project-expanded > * { animation: none; }
                      }
                      }
                      @scope ([data-impeccable-variant="3"]) {
                      :scope > .projects-grid .project-content h3 { min-height: 2.9em; }
                      :scope > .projects-grid .project-details { margin-top: 0; }
                      :scope > .projects-grid:has(.project-details[open]) .project-card:not(:has(.project-details[open])) {
                      opacity: var(--p-neighbor-dim, 0.45);
                      }
                      :scope > .projects-grid .project-card:has(.project-details[open]) {
                      z-index: 1;
                      transform: translateY(calc(var(--p-focus-lift, 4) * -1px)) scale(1.015);
                      border-color: var(--accent);
                      }
                      @media (prefers-reduced-motion: reduce) {
                      :scope > .projects-grid .project-card { transition: none; }
                      }
                      }
                      `}</style>
                      {/* impeccable-param-values aeccaac0: {"row-stagger":40,"line-speed":180} */}
                      {/* impeccable-carbonize-end aeccaac0 */}
                      <div data-impeccable-variant="2" style={{ display: 'contents' }}>
                        <div className="projects-grid" role="region" aria-label="Galerie des projets" tabIndex={0}>
                            {allProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                      </div>
                    </div>
                )}
            </div>
        </section>
    );
};

