import React from "react"
import styled from "styled-components"
import Front, { FrontProps } from "./sides/Front"
import Back, { BackProps } from "./sides/Back"

const Card = styled.div`
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    &:hover > * {
        transform: rotateY(180deg);
    }
`

const CardInner = styled.div`
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
        backgroundcolor: red;
    }
`

type ChildrenType =
    | [React.ReactElement<FrontProps>, React.ReactElement<BackProps>]
    | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>]
type FlipCardProps = {
    children: ChildrenType
    style?: React.CSSProperties
    variant?: "light" | "dark"
    width?: String
    height?: String
}

const defaultProps = {
    variant: "light"
}

const FlipCard = ({ children, ...props }: FlipCardProps) => {
    return (
        <Card style={props.style}>
            <CardInner>
                {children[0]}
                {children[1]}
            </CardInner>
        </Card>
    )
}

FlipCard.defaultProps = defaultProps

FlipCard.Front = Front
FlipCard.Back = Back

export { FlipCard }
