import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
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
    return (React.createElement("div", { className: classes.flipCardBack, style: style }, children));
};
export default Back;
//# sourceMappingURL=Back.js.map