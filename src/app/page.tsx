"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SkillCard } from "@/app/components/skillcard";
import { SoftSkill } from "@/app/components/softskills";
import { Projetos } from "@/app/components/projetos";
import JSIcon from "./public/JS.svg";
import ReactIcon from "./public/reactlogo.svg";
import TailwindIcon from "./public/tailwind.svg";
import FigmaIcon from "./public/figma.svg";
import NodeIcon from "./public/nodejs.svg";
import TSIcon from "./public/typescript.svg";
import FlutterIcon from "./public/flutter.svg";
import GitIcon from "./public/git.svg";
import Aurora from "./public/aurora.svg";
import Curso from "./public/curso.svg";

const HeroSection = ({ roles, currentRoleIndex }: { roles: string[]; currentRoleIndex: number }) => (
    <div className="bg-clip-border z-10 h-screen flex flex-col justify-center items-center text-2xl">
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
);

const SkillsSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const skills = [
        { icon: JSIcon, title: "Javascript", items: ["Lógica de programação", "Estrutura de dados", "API's"] },
        { icon: ReactIcon, title: "React JS", items: ["UIX Design", "React Hooks", "Styled Components"] },
        { icon: TailwindIcon, title: "Tailwind CSS", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] },
        { icon: FigmaIcon, title: "Figma", items: ["Wireframes", "Prototipagem", "UI/UX Design", "Design System"] },
        { icon: NodeIcon, title: "Node.js", items: ["Servidores", "APIs REST", "Conexão com bancos de dados"] },
        { icon: TSIcon, title: "TypeScript", items: ["Interfaces", "Lógica de Programação", "Estrutura de Dados"] },
        { icon: GitIcon, title: "Git", items: ["Controle de versão", "Branches", "Pull Requests", "Issues"] },
        { icon: FlutterIcon, title: "Flutter", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-start md:items-top gap-8 mt-50">
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
                        <div className="bg-amber-50 h-1 w-10" />
                        Soft Skills
                    </div>
                    <SoftSkill title="Inglês Avançado" />
                    <SoftSkill title="Scrum" />
                    <SoftSkill title="Desenvolvimento ágil" />
                    <SoftSkill title="Comunicação" />
                    <SoftSkill title="Trabalho em equipe" />
                    <SoftSkill title="Proatividade" />
                </div>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6"
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard icon={skill.icon} title={skill.title} items={skill.items} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};



const ProjectsSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const projects = [
        {
            icon: Aurora,
            title: "Aurora",
            items: ["Projeto de aplicativo para mulheres vítima de violência doméstica"],
            habilidades: ["Figma", "Flutter", "ui/ux design"],
        },
        {
            icon: Curso,
            title: "Site de Cursos",
            items: ["Projeto de site de cursos presenciais de educação física"],
            habilidades: ["Figma", "React JS", "Tailwind CSS"],
        },
        {
            icon: ReactIcon,
            title: "Joguinho",
            items: ["Joguinho feito num feriado de carnaval em Python, toda a arte e design foi feita por mim!"],
            habilidades: ["PyGame", "Python", "ui/ux design", "Ilustração", "Sprites", "Aseprite"],
        },
    ];

    return (
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
                <div className="bg-amber-50 h-1 w-10" />
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6 px-4"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={item} whileHover={{ scale: 1.04 }}>
                        <Projetos
                            icon={project.icon}
                            title={project.title}
                            items={project.items}
                            habilidades={project.habilidades}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Home() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const roles = ["Web Developer", "Frontend Developer", "UI/UX Designer", "React Developer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
            <HeroSection roles={roles} currentRoleIndex={currentRoleIndex} />
            <SkillsSection />
            <ProjectsSection />
        </main>
    );
}
