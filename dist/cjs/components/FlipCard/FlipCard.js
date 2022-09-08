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
exports.FlipCard = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const variants_1 = require("./variants");
const Front_1 = __importDefault(require("./sides/Front"));
const Back_1 = __importDefault(require("./sides/Back"));
const Card = styled_components_1.default.div `
    background-color: transparent;
    width: 160px;
    height: 220px;
    perspective: 1000px;
    &:hover > * {
        transform: rotateY(180deg);
    }
`;
const CardInner = styled_components_1.default.div `
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover {
        transform: rotateY(180deg);
    }
    & > * {
        display: flex;
        align-items: center;
        justify-content: center;
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
const FlipCard = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(Card, null,
        react_1.default.createElement(CardInner, Object.assign({}, props),
            children[0],
            children[1])));
};
exports.FlipCard = FlipCard;
FlipCard.Front = Front_1.default;
FlipCard.Back = Back_1.default;
//# sourceMappingURL=FlipCard.js.map