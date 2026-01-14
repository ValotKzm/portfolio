export const DisplayProjects = () => {
    return (
        <div id="projects" className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
                <h2 className="text-4xl mb-8">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-8">
                    {/* Placeholder projects */}
                    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl mb-2">Projet 1</h3>
                        <p>Description du projet 1. Technologies utilisées, etc.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl mb-2">Projet 2</h3>
                        <p>Description du projet 2. Technologies utilisées, etc.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl mb-2">Projet 3</h3>
                        <p>Description du projet 3. Technologies utilisées, etc.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl mb-2">Projet 4</h3>
                        <p>Description du projet 4. Technologies utilisées, etc.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl mb-2">Projet 5</h3>
                        <p>Description du projet 5. Technologies utilisées, etc.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl mb-2">Projet 6</h3>
                        <p>Description du projet 6. Technologies utilisées, etc.</p>
                    </div>
                </div>
            </div>
    )
}
            
            