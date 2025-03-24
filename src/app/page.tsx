"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
        }, 3000);

        return () => clearInterval(interval); // limpar o intervalo
    }, []);

    return (
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
            <div className="bg-clip-border z-10 min-h-dvh flex flex-col justify-center items-center text-2xl">
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
            <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
                <div className="grid gap-3 md:grid-cols-3">
                    <div className="relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger">
                        <div className="relative rounded-xl">
                            {/* BORDA DO GRADIENTE  */}
                            <div className="absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10"></div>

                            {/* COR DO CONTAINER */}

                            <div className="bg-[#1E1E1E] px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent">
                              
                                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                                  <Image src="./JS.svg" alt="JAVASCRIPT" width={70} height={70} />
                                    Javascript
                                </span>
                                <ul className="text-sm text-gray-300 leading-none text-justify">
                                    <li>• Lógica de programação</li>
                                    <li>• Estrutura de dados</li>
                                    <li>• API's</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger">
                        <div className="relative rounded-xl">
                            {/* BORDA DO GRADIENTE */}
                            <div className="absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10"></div>

                            {/* COR DO CONTAINER */}
                            <div className="bg-[#1E1E1E] px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent">
                                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                                <Image src="./JS.svg" alt="JAVASCRIPT" width={70} height={70} />
                                    Javascript
                                </span>
                                <ul className="text-sm text-gray-300 leading-none text-justify">
                                    <li>• Lógica de programação</li>
                                    <li>• Estrutura de dados</li>
                                    <li>• API's</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger">
                        <div className="relative rounded-xl">
                            {/* BORDA DO GRADIENTE  */}
                            <div className="absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10"></div>

                            {/* COR DO CONTAINER */}
                            <div className="bg-[#1E1E1E] px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent">
                                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                                <Image src="./JS.svg" alt="JAVASCRIPT" width={70} height={70} />
                                    Javascript
                                </span>
                                <ul className="text-sm text-gray-300 leading-none text-justify">
                                    <li>• Lógica de programação</li>
                                    <li>• Estrutura de dados</li>
                                    <li>• API's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
