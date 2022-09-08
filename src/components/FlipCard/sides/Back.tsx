import React from "react"
import styled from "styled-components"
import { variants, AvailableVariants } from "../variants"

type BackStyles = {
    style?: React.CSSProperties
    variant?: AvailableVariants
}

const CardBack = styled.div<BackStyles>`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    &&& {
        ${({ variant }) => {
            if (!variant) return
            return `
                background-color: ${variants[variant].backColor};
                color: ${variants[variant].foreColor};
            `
        }}
    }
`

export type BackProps = {
    children?: any
} & BackStyles

const Back: React.FC<BackProps> = ({
    children,
    ...props
}: BackProps) => {
    return <CardBack {...props}>{children}</CardBack>
}

export default Back
export { CardBack as BackCSS }
