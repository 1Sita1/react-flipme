import React from "react"
import styled from "styled-components"

const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
`

export type BackProps = {
    children?: any
    style?: React.CSSProperties
    variant?: "light" | "dark"
}

const Back: React.FC<BackProps> = ({
    children,
    style
}: BackProps) => {
    return <CardBack style={style}>{children}</CardBack>
}

export default Back
export { CardBack as BackCSS }
