import React from "react"
import Front from "./sides/Front"
import Back from "./sides/Back"

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
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
    }
})

type FlipCardProps = {
    children: React.ReactElement[]
}

const FlipCard = ({ children }: FlipCardProps) => {
    const classes = useStyles()

    return (
        <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>{...children}</div>
        </div>
    )
}

FlipCard.Front = Front
FlipCard.Back = Back

export { FlipCard }
