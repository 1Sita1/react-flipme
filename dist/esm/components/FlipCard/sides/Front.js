import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    flipCardFront: {
        position: "absolute",
        width: "100%",
        height: "100%",
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        backgroundColor: "#bbb",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
const Front = ({ children, style }) => {
    const classes = useStyles();
    return (React.createElement("div", { className: classes.flipCardFront, style: style }, children));
};
export default Front;
//# sourceMappingURL=Front.js.map