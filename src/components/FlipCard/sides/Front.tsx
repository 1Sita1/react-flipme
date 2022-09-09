import React from "react"
import styled from "styled-components"
import { variants, AvailableVariants } from "../preferences/variants"

type FrontStyles = {
    style?: React.CSSProperties
    variant?: AvailableVariants
}

const CardFront = styled.div<FrontStyles>`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
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

export type FrontProps = {
    children?: any
} & FrontStyles

const Front: React.FC<FrontProps> = ({
    children,
    ...props
}: FrontProps) => {
    return <CardFront {...props}>{children}</CardFront>
}

export default Front
export { CardFront as FrontCSS }
