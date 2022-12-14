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
exports.FrontCSS = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const SideBase_1 = __importDefault(require("./SideBase"));
const variants_1 = require("../preferences/variants");
const CardFront = (0, styled_components_1.default)(SideBase_1.default) `
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
exports.FrontCSS = CardFront;
const Front = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(CardFront, Object.assign({}, props), children);
};
exports.default = Front;
//# sourceMappingURL=Front.js.map