"use strict";
exports.__esModule = true;
exports.SoftSkill = void 0;
// components/softskills/SkillCard.tsx
var framer_motion_1 = require("framer-motion");
exports.SoftSkill = function (_a) {
    var title = _a.title;
    return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, whileHover: { scale: 1.1 }, className: "group " },
        React.createElement("div", { className: "relative rounded-xl shadow-xl " },
            React.createElement("span", { className: " border-1 border-gray-400 group-hover:bg-purple group-hover:border-purple group-hover:text-white delay-20 \r\n          text-gray-200 text-xs font-medium  px-2.5 py-0.5  rounded-xl dark:bg-gray-600" }, title))));
};
