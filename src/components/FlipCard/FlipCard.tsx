import React from "react"
import styled from "styled-components"
import { variants, AvailableVariants } from "./preferences/variants"
import { AvailableSizes, sizes } from "./preferences/sizes"
import Front, { FrontProps } from "./sides/Front"
import Back, { BackProps } from "./sides/Back"

type FlipCardStyles = {
    style?: React.CSSProperties
    variant?: AvailableVariants
    size?: AvailableSizes
    rounded?: boolean
    width?: string
    height?: string
}

type ChildrenType =
    | [React.ReactElement<FrontProps>, React.ReactElement<BackProps>]
    | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>]

type FlipCardProps = FlipCardStyles & { children: ChildrenType }

const Card = styled.div<FlipCardStyles>`
    background-color: transparent;
    perspective: 1000px;
    width: ${({ size }) => sizes[size ?? "default"].width};
    height: ${({ size }) => sizes[size ?? "default"].height};
    ${({ height, width }) => {
        return `
            ${width && "width: " + width + ";"}
            ${height && "height: " + height + ";"}

        `
    }}
    &:hover > * {
        transform: rotateY(180deg);
    }
`

const CardInner = styled.div<FlipCardStyles>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover {
        transform: rotateY(180deg);
    }
    & > * {
        display: flex;
        align-items: center;
        justify-content: center;
        ${({ variant }) => {
            if (!variant) return
            return `
                background-color: ${variants[variant].backColor};
                color: ${variants[variant].foreColor};
            `
        }}
    }
`

const FlipCard = ({ children, ...props }: FlipCardProps) => {
    return (
        <Card {...props}>
            <CardInner {...props}>
                {children[0]}
                {children[1]}
            </CardInner>
        </Card>
    )
}

FlipCard.Front = Front
FlipCard.Back = Back

export { FlipCard }
