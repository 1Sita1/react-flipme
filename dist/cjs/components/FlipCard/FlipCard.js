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
const variants_1 = require("./preferences/variants");
const sizes_1 = require("./preferences/sizes");
const Front_1 = __importDefault(require("./sides/Front"));
const Back_1 = __importDefault(require("./sides/Back"));
const Card = styled_components_1.default.div `
    background-color: transparent;
    perspective: 1000px;
    width: ${({ size }) => sizes_1.sizes[size !== null && size !== void 0 ? size : "m"].width};
    height: ${({ size }) => sizes_1.sizes[size !== null && size !== void 0 ? size : "m"].height};
    ${({ height, width }) => {
    return `
            ${width && "width: " + width + ";"}
            ${height && "height: " + height + ";"}

        `;
}}
    ${({ rounded }) => {
    if (!rounded)
        return;
    return `
            border-radius: 10px;
        `;
}} 
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
    ${({ flipped }) => flipped ? "transform: rotateY(180deg);" : null}
    &:hover {
        ${({ flipped, flipOnHover }) => {
    if (flipOnHover && flipped)
        return "transform: rotateY(360deg);";
    if (flipOnHover && !flipped)
        return "transform: rotateY(180deg);";
}}
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
        ${({ rounded }) => {
    if (!rounded)
        return;
    return `
                border-radius: 10px;
            `;
}}
    }
`;
const FlipCard = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(Card, Object.assign({}, props),
        react_1.default.createElement(CardInner, Object.assign({}, props),
            children[0],
            children[1])));
};
exports.FlipCard = FlipCard;
FlipCard.Front = Front_1.default;
FlipCard.Back = Back_1.default;
FlipCard.defaultProps = {
    flipOnHover: true
};
//# sourceMappingURL=FlipCard.js.map