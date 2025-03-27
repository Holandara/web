"use strict";
exports.__esModule = true;
exports.Projetos = void 0;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var softskills_1 = require("@/app/components/softskills");
exports.Projetos = function (_a) {
    var title = _a.title, icon = _a.icon, _b = _a.items, items = _b === void 0 ? [] : _b, habilidades = _a.habilidades;
    return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, whileHover: { scale: 1.04 }, className: "group relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger aspect-auto" },
        React.createElement("div", { className: "relative rounded-xl h-full" },
            React.createElement("div", { className: "absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10" }),
            React.createElement("div", { className: "group-hover:bg-black bg-[#1E1E1E] h-full px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent" },
                React.createElement("span", { className: "font-heading text-2xl font-semibold text-gray-200 leading-none flex flex-col gap-3" },
                    React.createElement(image_1["default"], { src: icon, alt: title, width: 265, height: 265, className: "inline-block object-contain" }),
                    title),
                React.createElement("ul", { className: "text-sm text-gray-300 leading-none text-justify mt-2" },
                    items.map(function (item, index) { return (React.createElement("li", { key: index, className: "mb-1" }, item)); }),
                    React.createElement("div", { className: "pt-4 flex flex-wrap gap-2" }, habilidades.map(function (habilidade, index) { return (React.createElement(softskills_1.SoftSkill, { key: index, title: habilidade })); })))))));
};
