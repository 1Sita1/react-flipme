"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlipCard = void 0;
const react_1 = __importDefault(require("react"));
const Front_1 = __importDefault(require("./sides/Front"));
const Back_1 = __importDefault(require("./sides/Back"));
const react_jss_1 = require("react-jss");
const useStyles = (0, react_jss_1.createUseStyles)({
    flipCard: {
        backgroundColor: "transparent",
        width: "300px",
        height: "200px",
        border: "1px solid #f1f1f1",
        perspective: "1000px"
    },
    flipCardInner: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        transition: "transform 0.8",
        transformStyle: "preserve-3d",
        "&:hover": {
            transform: "rotateY(180deg)"
        }
    },
    myButton: {
        color: "green",
        margin: {
            // jss-expand gives more readable syntax
            top: 5,
            right: 0,
            bottom: 0,
            left: "1rem"
        },
        "& span": {
            // jss-nested applies this to a child span
            fontWeight: "bold" // jss-camel-case turns this into 'font-weight'
        }
    },
    myLabel: {
        fontStyle: "italic"
    }
});
console.log(useStyles);
const FlipCard = ({ children }) => {
    const classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.flipCard },
        react_1.default.createElement("div", { className: classes.flipCardInner }, ...children)));
};
exports.FlipCard = FlipCard;
FlipCard.Front = Front_1.default;
FlipCard.Back = Back_1.default;
//# sourceMappingURL=FlipCard.js.map