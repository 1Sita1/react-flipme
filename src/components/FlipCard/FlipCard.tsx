import React from "react"
import styled from "styled-components"
import { variants, AvailableVariants } from "./variants"
import Front, { FrontProps } from "./sides/Front"
import Back, { BackProps } from "./sides/Back"

type FlipCardStyles = {
    style?: React.CSSProperties
    variant?: AvailableVariants
    width?: string
    height?: string
}

type ChildrenType =
    | [React.ReactElement<FrontProps>, React.ReactElement<BackProps>]
    | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>]

type FlipCardProps = FlipCardStyles & { children: ChildrenType }

const Card = styled.div`
    background-color: transparent;
    width: 160px;
    height: 220px;
    perspective: 1000px;
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
        <Card>
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
