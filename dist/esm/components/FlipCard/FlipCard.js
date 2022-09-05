import React from "react";
import Front from "./sides/Front";
import Back from "./sides/Back";
import { jss, createUseStyles } from "react-jss";
import isolate from "jss-plugin-isolate";
jss.use(isolate({
    isolate: true
}));
const useStyles = createUseStyles({
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
    return (React.createElement("div", { className: classes.flipCard, style: props.style },
        React.createElement("div", { className: classes.flipCardInner },
            props.children[0],
            props.children[1])));
};
FlipCard.Front = Front;
FlipCard.Back = Back;
export { FlipCard };
//# sourceMappingURL=FlipCard.js.map