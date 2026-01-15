"use client"
import { useEffect, useState } from "react"
import { db } from "@/lib/db/drizzle"
import { ProjectCard } from "./ProjectCard"
import { getProject } from "@/app/actions/getProjects"
import { projects } from "@/lib/db/schema"

type Project = typeof projects.$inferSelect

export const DisplayProjects = () => {
    const [allProjects, setAllProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProject().then((projects) => {
            setAllProjects(projects)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div id="projects" className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
                <h2 className="text-4xl mb-8">Mes Projets</h2>
                <p>Chargement des projets...</p>
            </div>
        )
    }

    return (
        <div id="projects" className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
                <h2 className="text-4xl mb-8">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-8">
                    {allProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
    )
}
            
            