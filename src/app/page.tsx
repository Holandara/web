"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SkillCard } from '@/app/components/skillcard';
import JSIcon from './public/JS.svg';
import ReactIcon from './public/reactlogo.svg';
import TailwindIcon from './public/tailwind.svg';
import FigmaIcon from './public/figma.svg';

export default function Home() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const roles = ["Web Developer", "Frontend Developer", "UI/UX Designer", "React Developer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Animação para a seção de skills
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
            {/* Hero Section */}
            <div className="bg-clip-border z-10 h-screen flex flex-col justify-center items-center text-2xl">
                <div className="justify-start">Hi I am</div>
                <div className="font-typographica text-7xl items-center text-center bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent">
                    SAROLANDA
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 text-xl md:text-2xl">
                    <div className="relative h-10 inline-flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentRoleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block"
                            >
                                {roles[currentRoleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="min-h-screen flex flex-col md:flex-row items-start md:items-center gap-8 py-12"> 
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:sticky md:top-1/2 md:-translate-y-1/2 md:w-1/3 px-4"
                >
                    <div className="font-typographica text-5xl md:text-7xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent">
                        SKILLS
                    </div>
                    <div className="font-sans text-gray-300 mt-4 text-base">
                        Algumas das minhas habilidades envolvem desenvolvimento web e design de interfaces. 
                        Além disso, tenho experiência com ferramentas de design como o Figma, e desenvolvimento de aplicações web com React JS.
                    </div>
                </motion.div>

                {/* Grid de Skills - Agora com scroll vertical quando necessário */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 grid sm:grid-cols-1 grid-cols-2 lg:grid-cols-2 gap-6 px-4"
                >
                    {/* Javascript */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={JSIcon}
                            title="Javascript"
                            items={["Lógica de programação", "Estrutura de dados", "API's"]}
                        />
                    </motion.div>

                    {/* React JS */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={ReactIcon}
                            title="React JS"
                            items={["UIX Design", "React Hooks", "Styled Components"]}
                        />
                    </motion.div>

                    {/* Tailwind CSS */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={TailwindIcon}
                            title="Tailwind CSS"
                            items={["UI/UX Design", "Componentes", "Responsividade", "Animações"]}
                        />
                    </motion.div>

                    {/* Figma */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={FigmaIcon}
                            title="Figma"
                            items={["Wireframes", "Prototipagem", "UI/UX Design", "Design System"]}
                        />
                    </motion.div>

                    {/* Adicione quantos cards quiser abaixo - todos manterão o mesmo tamanho */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={FigmaIcon}
                            title="Node.js"
                            items={["Servidores", "APIs REST", "Conexão com bancos de dados"]}
                        />
                    </motion.div>

                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={FigmaIcon}
                            title="TypeScript"
                            items={["Tipagem estática", "Interfaces", "Generics"]}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}