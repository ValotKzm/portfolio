import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/db/schema";

type Project = typeof projects.$inferSelect;

export const ProjectCard = ({ project }: { project: Project }) => (
    <article className="project-card">
        <div className="project-media">
            {project.thumbnail ? (
                <Image
                    src={project.thumbnail}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    sizes="(max-width: 520px) 82vw, (max-width: 980px) 46vw, 390px"
                    unoptimized
                />
            ) : (
                <div className="project-placeholder" aria-hidden="true">
                    <span>{project.title.slice(0, 1)}</span>
                </div>
            )}
        </div>
        <div className="project-content">
            <h3>{project.title}</h3>
            <details className="project-details">
                <summary>
                    <span>Détails</span>
                    <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <div className="project-expanded">
                    <p>{project.description}</p>
                    <span className="project-stack-label">Technologies</span>
                    <p>{project.stack}</p>
                    {(project.githubUrl || project.demoUrl) && (
                        <div className="project-links">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    GitHub <ExternalLink size={14} aria-hidden="true" />
                                </a>
                            )}
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    Démo <ExternalLink size={14} aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </details>
        </div>
    </article>
);
