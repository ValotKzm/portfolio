// création d'une homepage de portfolio simple avec Next.js et TypeScript avec un petit effet stagger pour mon descriptif
// sans utiliser motion ni styles, maintenant avec Tailwind et transition d'opacité en fondu
"use client"
import React from "react";
import DecryptedText from "./DecryptedText";
import FuzzyText from './FuzzyText';
import { DisplayProjects } from "./DisplayProjects";

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
        }, 10);

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
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-100, z-10' : 'opacity-0, -z-10'}`}>
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
                            <button 
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Voir mes projets
                            </button>
                        </div>
                </div>
            </div>
            {!isLoading && <DisplayProjects/>}
        </div>
    );
}
