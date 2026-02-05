import { useState } from "react"
import { projects } from "@/lib/db/schema"

type Project = typeof projects.$inferSelect

export const ProjectCard = ({project}:{project: Project}) => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg hover:bg-gray-700 transition-colors relative pb-16 md:pb-20">
                <h3 className="text-lg md:text-xl mb-2">{project.title}</h3>
                <img src={project.thumbnail ?? undefined} alt={project.title} className="w-full h-32 md:h-40 object-cover rounded mb-4" />
                <p className="text-sm md:text-base">{project.description}</p>
                <button onClick={() => setIsOpen(true)} className="absolute bottom-4 left-4 px-3 py-2 md:px-4 md:py-2 bg-[#54C3EA] text-white rounded hover:bg-[#3b8ba8] text-sm md:text-base">Détails</button>
            </div>

            <div className={`fixed top-0 left-0 right-0 bottom-0 md:top-0 md:left-0 md:right-0 md:bottom-24 w-screen bg-gray-800 text-white flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button onClick={() => { setIsOpen(false); document.getElementById('projects')?.scrollIntoView(); }} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
                <div className="p-4 md:p-8 max-w-4xl w-full max-h-[calc(100vh-6rem)] overflow-y-auto pb-32 md:pb-32">
                    <h2 className="text-2xl md:text-3xl mb-4">{project.title}</h2>
                    <p className="mb-4 text-sm md:text-base">{project.description}</p>
                    {project.thumbnail && (
                        <div className="mb-4">
                            <h3 className="text-lg md:text-xl mb-2">Thumbnail</h3>
                            <img src={project.thumbnail ?? undefined} alt={project.title} className="w-full h-full object-cover rounded" />
                        </div>
                    )}
                    <div className="mb-4">
                        {/* <h3 className="text-lg md:text-xl mb-2">Liens</h3> */}
                        <div className="flex justify-center m-5 gap-40">
                            {project.githubUrl && <a href={project.githubUrl} className="px-3 py-2 md:px-4 md:py-2 bg-[#6f00ff] text-white rounded hover:bg-[#5a00cf]">GitHub</a>}
                            {project.demoUrl && <a href={project.demoUrl} className="px-3 py-2 md:px-4 md:py-2 bg-[#0d9900] text-white rounded hover:bg-[#097000]">Demo</a>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg md:text-xl mb-2">Stack</h3>
                        <p className="text-sm md:text-base">{project.stack}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
