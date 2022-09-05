import React from "react"

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    flipCardBack: {
        position: "absolute",
        width: "100%",
        height: "100%",
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        backgroundColor: "dodgerblue",
        color: "white",
        transform: "rotateY(180deg)"
    }
})

type BackProps = {}

const Back: React.FC<BackProps> = () => {
    const classes = useStyles()
    return <div className={classes.flipCardBack}>Back</div>
}

export default Back
