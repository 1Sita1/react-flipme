import React from "react"
import styled from "styled-components"

const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #bbb;
    color: black;
`

export type FrontProps = {
    children?: any
    style?: React.CSSProperties
    variant?: "light" | "dark"
}

const Front: React.FC<FrontProps> = ({
    children,
    style
}: FrontProps) => {
    return <CardFront style={style}>{children}</CardFront>
}

export default Front
export { CardFront as FrontCSS }
