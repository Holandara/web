"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SkillCard from '@/app/components/skillcard';
import JSIcon from './public/JS.svg'; // Importar o icone do JS

export default function Home() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0); // estado inicial
    const roles = [
        "Web Developer",
        "Frontend Developer",
        "UI/UX Designer",
        "React Developer",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval); // limpar o intervalo
    }, []);

    return (
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
            <div className="bg-clip-border z-10 h-screen flex flex-col justify-center items-center text-2xl">
                <div className="justify-start">Hi I am</div>
                <div
                    className="font-typographica text-7xl items-center text-center
          bg-gradient-to-r from-purple to-danger bg-clip-text text-transparent"
                >
                    SAROLANDA
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 text-xl md:text-2xl">
                    <div className="relative h-10 inline-flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentRoleIndex}
                                initial={{ y: 20, opacity: 0 }} // estado inicial
                                animate={{ y: 0, opacity: 1 }} // estado final
                                exit={{ y: -20, opacity: 0 }} // estado de saida
                                transition={{ duration: 0.5 }} // duração da transição
                                className="inline-block " // Deixar o texto sem <br>
                            >
                                {roles[currentRoleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            {/* FIM DA HERO SECTION */}
            
            {/* INICIO DE SKILLS */}
            <div className="h-screen flex items-center justify-between gap-8 flex-col md:flex-row"> 

            <div className="align-text-top font-typographica text-7xl bg-gradient-to-r from-purple to-danger bg-clip-text text-transparent">
            SKILLS
            </div>
            <div className="flex flex-col gap-10 w-full max-w-[500px]">
            <div className="space-y-2">
                <div className="grid gap-2 md:grid-cols-2">
                <SkillCard
                                title="Javascript"
                                icon={JSIcon}
                                items={[
                                    "Lógica de programação",
                                    "Estrutura de dados",
                                    "API's"
                                ]}
                />

                    <SkillCard
                                title="Javascript"
                                icon={JSIcon}
                                items={[
                                    "Lógica de programação",
                                    "Estrutura de dados",
                                    "API's"
                                ]}
                />
                    <SkillCard
                                title="Javascript"
                                icon={JSIcon}
                                items={[
                                    "Lógica de programação",
                                    "Estrutura de dados",
                                    "API's"
                                ]}
                />
                    <SkillCard
                                title="Javascript"
                                icon={JSIcon}
                                items={[
                                    "Lógica de programação",
                                    "Estrutura de dados",
                                    "API's"
                                ]}
                />
                </div>
                    </div>
                    
                    </div>
                    </div>
        </main>
    );
}
