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
const jss_plugin_isolate_1 = __importDefault(require("jss-plugin-isolate"));
react_jss_1.jss.use((0, jss_plugin_isolate_1.default)({
    isolate: true
}));
const useStyles = (0, react_jss_1.createUseStyles)({
    flipCard: {
        backgroundColor: "transparent",
        width: "300px",
        height: "300px",
        perspective: "1000px",
        "&:hover > div": {
            transform: "rotateY(180deg)"
        }
    },
    flipCardInner: {
        position: "relative",
        width: "100%",
        height: "100%",
        transition: "transform 0.8s",
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        "&:hover": {
            transform: "rotateY(180deg)"
        }
    }
});
const FlipCard = (props) => {
    const classes = useStyles(props);
    return (react_1.default.createElement("div", { className: classes.flipCard, style: props.style },
        react_1.default.createElement("div", { className: classes.flipCardInner },
            props.children[0],
            props.children[1])));
};
exports.FlipCard = FlipCard;
FlipCard.Front = Front_1.default;
FlipCard.Back = Back_1.default;
//# sourceMappingURL=FlipCard.js.map