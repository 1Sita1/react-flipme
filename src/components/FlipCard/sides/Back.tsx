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
        transform: "rotateY(180deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

export type BackProps = {
    children?: any
    style?: React.CSSProperties
    variant?: "light" | "dark"
}

const Back: React.FC<BackProps> = ({ children, style }: BackProps) => {
    const classes = useStyles()

    return (
        <div className={classes.flipCardBack} style={style}>
            {children}
        </div>
    )
}

export default Back
