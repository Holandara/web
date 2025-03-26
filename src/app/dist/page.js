"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var skillcard_1 = require("@/app/components/skillcard");
var JS_svg_1 = require("./public/JS.svg");
var reactlogo_svg_1 = require("./public/reactlogo.svg");
var tailwind_svg_1 = require("./public/tailwind.svg");
var figma_svg_1 = require("./public/figma.svg");
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
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    var item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };
    return (React.createElement("main", { className: "max-w-[1240px] mx-auto px-5 py-8 md:py-0" },
        React.createElement("div", { className: "bg-clip-border z-10 h-screen flex flex-col justify-center items-center text-2xl" },
            React.createElement("div", { className: "justify-start" }, "Hi I am"),
            React.createElement("div", { className: "font-typographica text-7xl items-center text-center bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent" }, "SAROLANDA"),
            React.createElement("div", { className: "flex items-center justify-center gap-2 mt-4 text-xl md:text-2xl" },
                React.createElement("div", { className: "relative h-10 inline-flex items-center" },
                    React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                        React.createElement(framer_motion_1.motion.span, { key: currentRoleIndex, initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 }, transition: { duration: 0.5 }, className: "inline-block" }, roles[currentRoleIndex]))))),
        React.createElement("div", { className: "min-h-screen flex flex-col md:flex-row items-start md:items-center gap-8 py-12" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "md:sticky md:top-1/2 md:-translate-y-1/2 md:w-1/3 px-4" },
                React.createElement("div", { className: "font-typographica text-5xl md:text-7xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent" }, "SKILLS"),
                React.createElement("div", { className: "font-sans text-gray-300 mt-4 text-base" }, "Algumas das minhas habilidades envolvem desenvolvimento web e design de interfaces. Al\u00E9m disso, tenho experi\u00EAncia com ferramentas de design como o Figma, e desenvolvimento de aplica\u00E7\u00F5es web com React JS.")),
            React.createElement(framer_motion_1.motion.div, { variants: container, initial: "hidden", whileInView: "show", viewport: { once: true }, className: "w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6 px-4" },
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: JS_svg_1["default"], title: "Javascript", items: ["Lógica de programação", "Estrutura de dados", "API's"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: reactlogo_svg_1["default"], title: "React JS", items: ["UIX Design", "React Hooks", "Styled Components"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: tailwind_svg_1["default"], title: "Tailwind CSS", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: figma_svg_1["default"], title: "Figma", items: ["Wireframes", "Prototipagem", "UI/UX Design", "Design System"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: figma_svg_1["default"], title: "Node.js", items: ["Servidores", "APIs REST", "Conexão com bancos de dados"] })),
                React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { scale: 1.04 } },
                    React.createElement(skillcard_1.SkillCard, { icon: figma_svg_1["default"], title: "TypeScript", items: ["Tipagem estática", "Interfaces", "Generics"] }))))));
}
exports["default"] = Home;
