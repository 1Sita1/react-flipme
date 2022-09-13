import React from "react"
import styled from "styled-components"
import SideBase from "./SideBase"
import { variants, AvailableVariants } from "../preferences/variants"

type BackStyles = {
    style?: React.CSSProperties
    variant?: AvailableVariants
}

const CardBack = styled(SideBase)<BackStyles>`
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
