"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackCSS = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const SideBase_1 = __importDefault(require("./SideBase"));
const variants_1 = require("../preferences/variants");
const CardBack = (0, styled_components_1.default)(SideBase_1.default) `
    transform: rotateY(180deg);
    &&& {
        ${({ variant }) => {
    if (!variant)
        return;
    return `
                background-color: ${variants_1.variants[variant].backColor};
                color: ${variants_1.variants[variant].foreColor};
            `;
}}
    }
`;
exports.BackCSS = CardBack;
const Back = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(CardBack, Object.assign({}, props), children);
};
exports.default = Back;
//# sourceMappingURL=Back.js.map