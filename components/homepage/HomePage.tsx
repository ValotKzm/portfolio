// création d'une homepage de portfolio simple avec Next.js et TypeScript avec un petit effet stagger pour mon descriptif
// sans utiliser motion ni styles, maintenant avec Tailwind et transition d'opacité en fondu
"use client"
import React from "react";
import DecryptedText from "./DecryptedText";
import FuzzyText from './FuzzyText';

const descriptionLines = [
    "Développeur Fullstack – Spécialisé Backend & NLP",
    "Master en Traitement Automatique des Langues, actuellement en formation développeur fullstack, à la recherche d’une alternance.",
    "Diplômé d’un master en Traitement Automatique des Langues, j’ai développé une forte appétence pour le développement logiciel et les systèmes backend. Actuellement en école de développement fullstack, je recherche une alternance en développement fullstack, backend ou frontend, avec un intérêt particulier pour les applications data et IA.",
];

function getRandomIntInclusive(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function HomePage() {
    const [visibleLines, setVisibleLines] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        // Simuler un délai de chargement avec progression
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsLoading(false);
                    return 100;
                }
                return prev + getRandomIntInclusive(0,3); // augmenter de 2% toutes les 50ms environ
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        if (!isLoading) {
            descriptionLines.forEach((line, index) => {
                setTimeout(() => {
                    setVisibleLines((prev) => [...prev, line]);
                }, index * 500); // délai de 500ms entre chaque ligne
            });
        }
    }, [isLoading]);

    return (
        <div className="relative min-h-screen max-h-screen bg-black text-white">
            {/* Loading Screen */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0'} duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
                <FuzzyText 
                    baseIntensity={0.2}
                    hoverIntensity={1} 
                    enableHover={true}
                    color={"#54C3EA"}
                    fontSize="4rem"
                >
                    Loading...
                </FuzzyText>
                <div className="mt-8 w-64">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-white h-2.5 rounded-full transition-all duration-100 ease-out" style={{width: `${progress}%`}}></div>
                    </div>
                    <p className="mt-2 text-center">{progress}%</p>
                </div>
            </div>

            {/* Main Content */}
            <div className={`transition-opacity duration-1000 ease-in-out ${!isLoading ? 'opacity-100' : 'opacity-0'}`}>
                <div className="p-8 font-sans flex flex-col items-center justify-between h-screen">
                    <h1 className="text-4xl mb-12">
                        {!isLoading && <DecryptedText text="Yannick Souza" sequential={true} revealDirection="center" animateOn="start" speed={90} />}
                        
                    </h1>
                    <div className="leading-relaxed text-center max-w-2xl">
                        {descriptionLines.map((line, index) => {
                            const sizeClasses = ['text-3xl', 'text-2xl', 'text-l'];
                            return (
                                <p 
                                key={index} 
                                className={`${sizeClasses[index] || 'text-xl'} mb-6 transition-all duration-500 ease-in-out ${
                                    visibleLines.includes(line) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                                >
                                    {line}
                                </p>
                            );
                        })}
                    </div>
                        <div className="mb-30">
                            <a href="#projects" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                                Voir mes projets
                            </a>
                        </div>
                </div>
            </div>
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
        </div>
    );
}
