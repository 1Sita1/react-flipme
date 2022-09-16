import React, { useEffect, useState, useRef } from "react"
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
    width?: string
    height?: string
}

const defaultProps: FlipCardStyles = {
    variant: "light",
    size: "m",
    rounded: false
}

type ChildrenType =
    | [React.ReactElement<FrontProps>, React.ReactElement<BackProps>]
    | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>]

type FlipCardProps = FlipCardStyles & {
    children: ChildrenType
} & React.HTMLAttributes<HTMLDivElement>

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

    ${FrontCSS} {
    }
    ${BackCSS} {
    }

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
    const [flipped, setFlipped] = useState<boolean>(
        Boolean(props.flipped)
    )
    const ref = useRef({
        manualMode: props.flipped !== undefined
    })

    useEffect(() => {
        ref.current.manualMode = props.flipped !== undefined
        setFlipped(Boolean(props.flipped))
    }, [props.flipped])

    const flip = () => {
        if (ref.current.manualMode) return
        setFlipped((prev) => !prev)
    }

    return (
        <Card
            {...props}
            flipped={flipped}
            onMouseEnter={flip}
            onMouseLeave={flip}
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
