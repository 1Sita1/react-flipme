"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const variants_1 = require("./preferences/variants");
const sizes_1 = require("./preferences/sizes");
const Front_1 = __importStar(require("./sides/Front"));
const Back_1 = __importStar(require("./sides/Back"));
const defaultProps = {
    variant: "light",
    size: "m",
    rounded: false
};
const Card = styled_components_1.default.div `
    perspective: 1000px;
    position: relative;
    width: ${({ size }) => sizes_1.sizes[size !== null && size !== void 0 ? size : "m"].width};
    height: ${({ size }) => sizes_1.sizes[size !== null && size !== void 0 ? size : "m"].height};
    ${({ height, width }) => {
    return `
            ${width && "width: " + width + ";"}
            ${height && "height: " + height + ";"}

        `;
}}
    ${({ rounded }) => {
    if (rounded)
        return `
                border-radius: 10px;
            `;
}} 

    ${Front_1.FrontCSS} {
    }
    ${Back_1.BackCSS} {
    }

    ${({ flipped }) => {
    console.log("in css ", flipped);
    if (flipped) {
        return `
                ${Front_1.FrontCSS} {
                    transform: rotateY(-180deg);
                }
                ${Back_1.BackCSS} {
                    transform: rotateY(0);
                }
            `;
    }
}}

    ${({ variant }) => {
    if (variant) {
        return `
                ${Back_1.BackCSS} {
                    background-color: ${variants_1.variants[variant].backColor};
                    color: ${variants_1.variants[variant].foreColor};
                };
                ${Front_1.FrontCSS} {
                    background-color: ${variants_1.variants[variant].backColor};
                    color: ${variants_1.variants[variant].foreColor};
                };
            `;
    }
}}
    ${({ rounded }) => {
    if (!rounded)
        return;
    return `
            ${Front_1.FrontCSS} {
                border-radius: 10px;
            }
            ${Back_1.BackCSS} {
                border-radius: 10px;
            }
        `;
}}
`;
const FlipCard = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    console.log(props.flipped);
    const [flipped, setFlipped] = (0, react_1.useState)(Boolean(props.flipped));
    const ref = (0, react_1.useRef)({
        manualMode: props.flipped !== undefined
    });
    (0, react_1.useEffect)(() => {
        ref.current.manualMode = props.flipped !== undefined;
    });
    console.log(flipped);
    const flip = () => {
        if (!ref.current.manualMode)
            return;
        setFlipped((prev) => !prev);
    };
    return (react_1.default.createElement(Card, Object.assign({}, props, { flipped: flipped, onMouseEnter: flip, onMouseLeave: flip }),
        children[0],
        children[1]));
};
exports.FlipCard = FlipCard;
FlipCard.Front = Front_1.default;
FlipCard.Back = Back_1.default;
FlipCard.defaultProps = defaultProps;
//# sourceMappingURL=FlipCard.js.map