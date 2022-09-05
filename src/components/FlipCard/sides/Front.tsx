import React from "react"

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    flipCardFront: {
        position: "absolute",
        width: "100%",
        height: "100%",
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        backgroundColor: "#bbb",
        color: "black"
    }
})

type FrontProps = {}

const Front: React.FC<FrontProps> = (props: FrontProps) => {
    const classes = useStyles()

    return <div className={classes.flipCardFront}>Front</div>
}

export default Front
