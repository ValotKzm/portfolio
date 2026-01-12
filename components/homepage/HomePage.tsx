// création d'une homepage de portfolio simple avec Next.js et TypeScript avec un petit effet stagger pour mon descriptif
// sans utiliser motion ni styles, maintenant avec Tailwind et transition d'opacité en fondu
"use client"
import React from "react";
import DecryptedText from "./DecryptedText";

const descriptionLines = [
    "Développeur Full-Stack passionné.",
    "Spécialisé en Next.js et TypeScript.",
    "Créateur de solutions web élégantes.",
];

export default function HomePage() {
    const [visibleLines, setVisibleLines] = React.useState<string[]>([]);

    React.useEffect(() => {
        descriptionLines.forEach((line, index) => {
            setTimeout(() => {
                setVisibleLines((prev) => [...prev, line]);
            }, index * 500); // délai de 500ms entre chaque ligne
        });
    }, []);

    return (
        <div className="p-8 font-sans">
            <h1 className="text-4xl mb-4">
                <DecryptedText text="Yannick Souza" sequential={true} revealDirection="center" animateOn="view" speed={90}
/>
                Yannick Souza
            </h1>
            <div className="text-xl leading-relaxed">
                {descriptionLines.map((line, index) => (
                    <p 
                        key={index} 
                        className={`m-2 transition-opacity duration-500 ease-in-out ${
                            visibleLines.includes(line) ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}
