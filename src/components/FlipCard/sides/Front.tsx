import React from "react"
import styled from "styled-components"
import SideBase from "./SideBase"
import { variants, AvailableVariants } from "../preferences/variants"

type FrontStyles = {
    style?: React.CSSProperties
    variant?: AvailableVariants
}

const CardFront = styled(SideBase)<FrontStyles>`
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
} & FrontStyles &
    React.HTMLAttributes<HTMLDivElement>

const Front: React.FC<FrontProps> = ({
    children,
    ...props
}: FrontProps) => {
    return <CardFront {...props}>{children}</CardFront>
}

export default Front
export { CardFront as FrontCSS }
