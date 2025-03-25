"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
function Home() {
    var _a = react_1.useState(0), currentRoleIndex = _a[0], setCurrentRoleIndex = _a[1]; // estado inicial
    var roles = [
        "Web Developer",
        "Frontend Developer",
        "UI/UX Designer",
        "React Developer",
    ];
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setCurrentRoleIndex(function (prev) { return (prev + 1) % roles.length; });
        }, 2000);
        return function () { return clearInterval(interval); }; // limpar o intervalo
    }, []);
    return (React.createElement("main", { className: "max-w-[1240px] mx-auto px-5 py-8 md:py-0" },
        React.createElement("div", { className: "bg-clip-border z-10 h-screen flex flex-col justify-center items-center text-2xl" },
            React.createElement("div", { className: "justify-start" }, "Hi I am"),
            React.createElement("div", { className: "font-typographica text-7xl items-center text-center\r\n          bg-gradient-to-r from-purple to-danger bg-clip-text text-transparent" }, "SAROLANDA"),
            React.createElement("div", { className: "flex items-center justify-center gap-2 mt-4 text-xl md:text-2xl" },
                React.createElement("div", { className: "relative h-10 inline-flex items-center" },
                    React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                        React.createElement(framer_motion_1.motion.span, { key: currentRoleIndex, initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 }, transition: { duration: 0.5 }, className: "inline-block " // Deixar o texto sem <br>
                         }, roles[currentRoleIndex]))))),
        React.createElement("div", { className: "h-screen flex items-center justify-between gap-16 flex-col md:flex-row" },
            React.createElement("div", { className: "font-typographica text-7xl\r\n          bg-gradient-to-r from-purple to-danger bg-clip-text text-transparent" }, "SKILLS"),
            React.createElement("div", { className: "flex flex-col gap-10 w-full max-w-[500px]" },
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("div", { className: "h-screen flex items-center justify-between gap-16 flex-col md:flex-row" },
                        React.createElement("div", { className: "grid gap-2 md:grid-cols-2" },
                            React.createElement("div", { className: "relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger" },
                                React.createElement("div", { className: "relative rounded-xl" },
                                    React.createElement("div", { className: "absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10" }),
                                    React.createElement("div", { className: "bg-[#1E1E1E] px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent" },
                                        React.createElement("span", { className: "font-heading text-2xl font-semibold text-gray-200 leading-none" },
                                            React.createElement(image_1["default"], { src: "./JS.svg", alt: "JAVASCRIPT", width: 70, height: 70 }),
                                            "Javascript"),
                                        React.createElement("ul", { className: "text-sm text-gray-300 leading-none text-justify" },
                                            React.createElement("li", null, "\u2022 L\u00F3gica de programa\u00E7\u00E3o"),
                                            React.createElement("li", null, "\u2022 Estrutura de dados"),
                                            React.createElement("li", null, "\u2022 API's"))))),
                            React.createElement("div", { className: "group relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger" },
                                React.createElement("div", { className: "relative rounded-xl" },
                                    React.createElement("div", { className: "absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10" }),
                                    React.createElement("div", { className: "group-hover:bg-[#000000] bg-[#1E1E1E]  px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent" },
                                        React.createElement("span", { className: " font-heading text-2xl font-semibold text-gray-200 leading-none" },
                                            React.createElement(image_1["default"], { src: "./JS.svg", alt: "JAVASCRIPT", width: 70, height: 70 }),
                                            "Javascript"),
                                        React.createElement("ul", { className: "text-sm text-gray-300 leading-none text-justify" },
                                            React.createElement("li", null, "\u2022 L\u00F3gica de programa\u00E7\u00E3o"),
                                            React.createElement("li", null, "\u2022 Estrutura de dados"),
                                            React.createElement("li", null, "\u2022 API's"))))),
                            React.createElement("div", { className: "relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger" },
                                React.createElement("div", { className: "relative rounded-xl" },
                                    React.createElement("div", { className: "absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10" }),
                                    React.createElement("div", { className: "bg-[#1E1E1E] px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent" },
                                        React.createElement("span", { className: "font-heading text-2xl font-semibold text-gray-200 leading-none" },
                                            React.createElement(image_1["default"], { src: "./JS.svg", alt: "JAVASCRIPT", width: 70, height: 70 }),
                                            "Javascript"),
                                        React.createElement("ul", { className: "text-sm text-gray-300 leading-none text-justify" },
                                            React.createElement("li", null, "\u2022 L\u00F3gica de programa\u00E7\u00E3o"),
                                            React.createElement("li", null, "\u2022 Estrutura de dados"),
                                            React.createElement("li", null, "\u2022 API's"))))))))))));
}
exports["default"] = Home;
