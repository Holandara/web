"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SkillCard } from '@/app/components/skillcard';
import JSIcon from '@/assets/JS.svg';
import ReactIcon from '@/assets/reactlogo.svg';
import TailwindIcon from '@/assets/tailwind.svg';
import FigmaIcon from '@/assets/figma.svg';
import { SoftSkill } from '@/app/components/softskills';
import NodeIcon  from '@/assets/nodejs.svg';
import TSIcon  from '@/assets/typescript.svg';
import FlutterIcon  from '@/assets/flutter.svg';
import GitIcon  from '@/assets/git.svg';
import { Projetos } from '@/app/components/projetos';
import Aurora  from '@/assets/aurora.svg';
import Curso from '@/assets/curso.svg';

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
                staggerChildren: 0.2,
                delayChildren: 0.1
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
            <div className="bg-clip-border z-10 h-screen flex flex-col justify-center items-center text-2xl "> 
                <div className="justify-start">Oie! Eu me chamo</div>
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
            <div className="min-h-screen flex flex-col md:flex-row items-start md:items-top gap-8  mt-50"> 
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.01 }}
                    viewport={{ once: true }}
                    className="md:sticky md:top-1/2 md:-translate-y-1/2 md:w-1/3 px-4"
                >
                    <div className="font-typographica text-5xl md:text-7xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent">
                        HARD SKILLS
                    </div>
                    <div className="grid-flow-row-dense w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-1 px-1">

                    <div className="pt-4 col-span-2 text-2xl">
                    <div className="bg-amber-50 h-1 w-10"/>
                    Soft Skills
                    </div>
                        <div className="col-span-2">
                        <SoftSkill
                        title="Inglês Avançado"
                        />
                        </div>
                        <SoftSkill
                        title="Scrum"
                        />
                        <div className="col-span-2">
                        <SoftSkill
                        title="Desenvolvimento ágil"
                        />
                        </div>
                        <SoftSkill
                        title="Comunicação"
                        />
                        <div className="col-span-full">
                        <SoftSkill 
                        title="Trabalho em equipe"
                        />
                        </div>
                        <div className="col-span-full">
                        <SoftSkill 
                        title="Proatividade"
                        />
                        </div>
                        
                    </div>
                </motion.div>

                {/* Grid de Skills */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6"
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

                    {/* Node.js */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={NodeIcon}
                            title="Node.js"
                            items={["Servidores", "APIs REST", "Conexão com bancos de dados"]}
                        />
                    </motion.div>

                    {/* TypeScript */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={TSIcon}
                            title="TypeScript"
                            items={["Interfaces", "Lógica de Programação, ","Estrutura de Dados"]}
                        />
                    </motion.div>

                    {/* Git */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={GitIcon}
                            title="Git"
                            items={["Controle de versão", "Branches", "Pull Requests", "Issues"]}
                        />
                    </motion.div>

                    {/*flutter */}
                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard
                            icon={FlutterIcon}
                            title="Flutter"
                            items={["UI/UX Design", "Componentes", "Responsividade", "Animações"]}
                        />
                    </motion.div>
                </motion.div>
            </div>
            
            
            {/* PROJETOS */}
            <div className="min-h-screen flex flex-col md:flex-row items-start md:items-top gap-8 py-12 mt-50"> 
                
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:sticky md:top-1/2 md:-translate-y-1/2 md:w-1/3 px-4 py-5 mb-1"
                >
                    
                    <div className="font-typographica text-5xl md:text-7xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent">
                        PROJETOS
                    </div>
                    <div className="bg-amber-50 h-1 w-10"/>
                    <div className="grid-flow-row-dense w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-1 px-1">
                    </div>
                </motion.div>

                {/* Grid de Projetos */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6 px-4"
                >

                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <Projetos
                            icon={Aurora}
                            title="Aurora"
                            items={["Projeto de aplicativo para mulheres vítima de violência doméstica"]}     
                            habilidades={["Figma", "Flutter", "ui/ux design"]}  
                        />
                    </motion.div>

                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <Projetos
                            icon={ReactIcon} 
                            title="Site de Cursos"
                            items={["Projeto de site de cursos presenciais de educação física"]}     
                            habilidades={["Figma", "React JS", "Tailwind CSS"]}  
                        />
                    </motion.div>

                    <motion.div variants={item} whileHover={{ scale: 1.04 }}>
                        <Projetos
                            icon={ReactIcon}
                            title="Joguinho"
                            items={["Joguinho feito num feriado de carnaval em Python, toda a arte e design foi feita por mim!"]}     
                            habilidades={["PyGame", "Python", "ui/ux design", "Ilustração", "Sprites","Aseprite"]}  
                        />
                    </motion.div>

                </motion.div>
            </div>
        </main>
    );
}