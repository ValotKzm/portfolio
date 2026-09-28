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
                    <div className="projects-grid" role="region" aria-label="Galerie des projets" tabIndex={0}>
                        {allProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
