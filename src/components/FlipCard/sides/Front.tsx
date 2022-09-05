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
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

export type FrontProps = {
    children?: any
    style?: React.CSSProperties
    variant?: "light" | "dark"
}

const Front: React.FC<FrontProps> = ({ children, style }: FrontProps) => {
    const classes = useStyles()

    return (
        <div className={classes.flipCardFront} style={style}>
            {children}
        </div>
    )
}

export default Front
