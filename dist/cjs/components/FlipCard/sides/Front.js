"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontCSS = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const CardFront = styled_components_1.default.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #bbb;
    color: black;
`;
exports.FrontCSS = CardFront;
const Front = ({ children, style }) => {
    return react_1.default.createElement(CardFront, { style: style }, children);
};
exports.default = Front;
//# sourceMappingURL=Front.js.map