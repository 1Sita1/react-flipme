import React from "react"
import Front, { FrontProps } from "./sides/Front"
import Back, { BackProps } from "./sides/Back"
import { jss, createUseStyles } from "react-jss"
import isolate from "jss-plugin-isolate"

jss.use(
    isolate({
        isolate: true
    })
)

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
})

type ChildrenType =
    | [React.ReactElement<FrontProps>, React.ReactElement<BackProps>]
    | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>]
type FlipCardProps = {
    children: ChildrenType
    style?: React.CSSProperties
    variant?: "light" | "dark"
    width?: String
    height?: String
}

const FlipCard = (props: FlipCardProps) => {
    const classes = useStyles()

    return (
        <div className={classes.flipCard} style={props.style}>
            <div className={classes.flipCardInner}>
                {props.children[0]}
                {props.children[1]}
            </div>
        </div>
    )
}

FlipCard.Front = Front
FlipCard.Back = Back

export { FlipCard }
