"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_jss_1 = require("react-jss");
const useStyles = (0, react_jss_1.createUseStyles)({
    flipCardBack: {
        position: "absolute",
        width: "100%",
        height: "100%",
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        backgroundColor: "dodgerblue",
        color: "white",
        transform: "rotateY(180deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
const Back = ({ children, style }) => {
    const classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.flipCardBack, style: style }, children));
};
exports.default = Back;
//# sourceMappingURL=Back.js.map