import React, { useState } from "react"
import styled from "styled-components"
import { variants, AvailableVariants } from "./preferences/variants"
import { AvailableSizes, sizes } from "./preferences/sizes"
import Front, { FrontProps, FrontCSS } from "./sides/Front"
import Back, { BackProps, BackCSS } from "./sides/Back"

type FlipCardStyles = {
    style?: React.CSSProperties
    variant?: AvailableVariants
    size?: AvailableSizes
    rounded?: boolean
    flipped?: boolean
    flipOnHover?: boolean
    width?: string
    height?: string
}

const defaultProps: FlipCardStyles = {
    variant: "light",
    size: "m",
    rounded: false,
    flipped: false,
    flipOnHover: true
}

type ChildrenType =
    | [React.ReactElement<FrontProps>, React.ReactElement<BackProps>]
    | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>]

type FlipCardProps = FlipCardStyles & { children: ChildrenType }

const Card = styled.div<FlipCardProps>`
    perspective: 1000px;
    position: relative;
    width: ${({ size }) => sizes[size ?? "m"].width};
    height: ${({ size }) => sizes[size ?? "m"].height};
    ${({ height, width }) => {
        return `
            ${width && "width: " + width + ";"}
            ${height && "height: " + height + ";"}

        `
    }}
    ${({ rounded }) => {
        if (rounded)
            return `
                border-radius: 10px;
            `
    }} 

    ${({ flipped }) => {
        if (flipped) {
            return `
                ${FrontCSS} {
                    transform: rotateY(-180deg);
                }
                ${BackCSS} {
                    transform: rotateY(0);
                }
            `
        }
    }}

    ${({ variant }) => {
        console.log(variant)
        if (variant) {
            return `
                ${BackCSS} {
                    background-color: ${variants[variant].backColor};
                    color: ${variants[variant].foreColor};
                };
                ${FrontCSS} {
                    background-color: ${variants[variant].backColor};
                    color: ${variants[variant].foreColor};
                };
            `
        }
    }}
    ${({ rounded }) => {
        if (!rounded) return
        return `
            ${FrontCSS} {
                border-radius: 10px;
            }
            ${BackCSS} {
                border-radius: 10px;
            }
        `
    }}
`

const FlipCard: React.FC<FlipCardProps> & {
    Front: React.FC<FrontProps>
    Back: React.FC<BackProps>
} = ({ children, ...props }: FlipCardProps) => {
    const [flipped, setFlipped] = useState(Boolean(props.flipped))

    const switchState = () => {
        setFlipped((prev) => !prev)
    }

    return (
        <Card
            {...props}
            flipped={flipped}
            onMouseEnter={switchState}
            onMouseLeave={switchState}
        >
            {children[0]}
            {children[1]}
        </Card>
    )
}

FlipCard.Front = Front
FlipCard.Back = Back
FlipCard.defaultProps = defaultProps

export { FlipCard, FlipCardProps, FlipCardStyles, ChildrenType }
