"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var skillcard_1 = require("@/app/components/skillcard");
var JS_svg_1 = require("@/assets/JS.svg");
var reactlogo_svg_1 = require("@/assets/reactlogo.svg");
var tailwind_svg_1 = require("@/assets/tailwind.svg");
var figma_svg_1 = require("@/assets/figma.svg");
var softskills_1 = require("@/app/components/softskills");
var nodejs_svg_1 = require("@/assets/nodejs.svg");
var typescript_svg_1 = require("@/assets/typescript.svg");
var flutter_svg_1 = require("@/assets/flutter.svg");
var git_svg_1 = require("@/assets/git.svg");
var projetos_1 = require("@/app/components/projetos");
var aurora_svg_1 = require("@/assets/aurora.svg");
function Home() {
    var _a = react_1.useState(0), currentRoleIndex = _a[0], setCurrentRoleIndex = _a[1];
    var roles = ["Web Developer", "Frontend Developer", "UI/UX Designer", "React Developer"];
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setCurrentRoleIndex(function (prev) { return (prev + 1) % roles.length; });
        }, 2000);
        return function () { return clearInterval(interval); };
    }, []);
    // Animação para a seção de skills
    var container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };
    var item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };
    return (React.createElement("main", { className: "max-w-[1240px] mx-auto px-5 py-8 md:py-0" },
        React.createElement("div", { className: "bg-clip-border z-10 h-screen flex flex-col justify-center items-center text-2xl " },
            React.createElement("div", { className: "justify-start" }, "Oie! Eu me chamo"),
            React.createElement("div", { className: "font-typographica text-7xl items-center text-center bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent" }, "SAROLANDA teste"),
            React.createElement("div", { className: "flex items-center justify-center gap-2 mt-4 text-xl md:text-2xl" },
                React.createElement("div", { className: "relative h-10 inline-flex items-center" },
                    React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                        React.createElement(framer_motion_1.motion.span, { key: currentRoleIndex, initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 }, transition: { duration: 0.5 }, className: "inline-block" }, roles[currentRoleIndex]))))),
        React.createElement("div", { className: "min-h-screen flex flex-col md:flex-row items-start md:items-top gap-8  mt-50" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.01 }, viewport: { once: true }, className: "md:sticky md:top-1/2 md:-translate-y-1/2 md:w-1/3 px-4" },
                React.createElement("div", { className: "font-typographica text-5xl md:text-7xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent" }, "HARD SKILLS"),
                React.createElement("div", { className: "grid-flow-row-dense w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-1 px-1" },
                    React.createElement("div", { className: "pt-4 col-span-2 text-2xl" },
                        React.createElement("div", { className: "bg-amber-50 h-1 w-10" }),
                        "Soft Skills"),
                    React.createElement("div", { className: "col-span-2" },
                        React.createElement(softskills_1.SoftSkill, { title: "Ingl\u00EAs Avan\u00E7ado" })),
                    React.createElement(softskills_1.SoftSkill, { title: "Scrum" }),
                    React.createElement("div", { className: "col-span-2" },
                        React.createElement(softskills_1.SoftSkill, { title: "Desenvolvimento \u00E1gil" })),
                    React.createElement(softskills_1.SoftSkill, { title: "Comunica\u00E7\u00E3o" }),
                    React.createElement("div", { className: "col-span-full" },
                        React.createElement(softskills_1.SoftSkill, { title: "Trabalho em equipe" })),
                    React.createElement("div", { className: "col-span-full" },
                        React.createElement(softskills_1.SoftSkill, { title: "Proatividade" })))),
            React.createElement(framer_motion_1.motion.div, { variants: container, initial: "hidden", whileInView: "show", viewport: { once: true }, className: "w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6" },
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: JS_svg_1["default"], title: "Javascript", items: ["Lógica de programação", "Estrutura de dados", "API's"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: reactlogo_svg_1["default"], title: "React JS", items: ["UIX Design", "React Hooks", "Styled Components"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: tailwind_svg_1["default"], title: "Tailwind CSS", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: figma_svg_1["default"], title: "Figma", items: ["Wireframes", "Prototipagem", "UI/UX Design", "Design System"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: nodejs_svg_1["default"], title: "Node.js", items: ["Servidores", "APIs REST", "Conexão com bancos de dados"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: typescript_svg_1["default"], title: "TypeScript", items: ["Interfaces", "Lógica de Programação, ", "Estrutura de Dados"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: git_svg_1["default"], title: "Git", items: ["Controle de versão", "Branches", "Pull Requests", "Issues"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: flutter_svg_1["default"], title: "Flutter", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] })))),
        React.createElement("div", { className: "min-h-screen flex flex-col md:flex-row items-start md:items-top gap-8 py-12 mt-50" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "md:sticky md:top-1/2 md:-translate-y-1/2 md:w-1/3 px-4 py-5 mb-1" },
                React.createElement("div", { className: "font-typographica text-5xl md:text-7xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent" }, "PROJETOS"),
                React.createElement("div", { className: "bg-amber-50 h-1 w-10" }),
                React.createElement("div", { className: "grid-flow-row-dense w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-1 px-1" })),
            React.createElement(framer_motion_1.motion.div, { variants: container, initial: "hidden", whileInView: "show", viewport: { once: true }, className: "w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6 px-4" },
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(projetos_1.Projetos, { icon: aurora_svg_1["default"], title: "Aurora", items: ["Projeto de aplicativo para mulheres vítima de violência doméstica"], habilidades: ["Figma", "Flutter", "ui/ux design"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(projetos_1.Projetos, { icon: reactlogo_svg_1["default"], title: "Site de Cursos", items: ["Projeto de site de cursos presenciais de educação física"], habilidades: ["Figma", "React JS", "Tailwind CSS"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(projetos_1.Projetos, { icon: reactlogo_svg_1["default"], title: "Joguinho", items: ["Joguinho feito num feriado de carnaval em Python, toda a arte e design foi feita por mim!"], habilidades: ["PyGame", "Python", "ui/ux design", "Ilustração", "Sprites", "Aseprite"] }))))));
}
exports["default"] = Home;
