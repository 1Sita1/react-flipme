var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import styled from "styled-components";
import { variants } from "./preferences/variants";
import { sizes } from "./preferences/sizes";
import Front, { FrontCSS } from "./sides/Front";
import Back, { BackCSS } from "./sides/Back";
const defaultProps = {
    variant: "light",
    size: "m",
    rounded: false,
    flipped: false,
    flipOnHover: true
};
const Card = styled.div `
    perspective: 1000px;
    position: relative;
    width: ${({ size }) => sizes[size !== null && size !== void 0 ? size : "m"].width};
    height: ${({ size }) => sizes[size !== null && size !== void 0 ? size : "m"].height};
    ${({ height, width }) => {
    return `
            ${width && "width: " + width + ";"}
            ${height && "height: " + height + ";"}

        `;
}}
    ${({ rounded }) => {
    if (rounded)
        return `
                border-radius: 10px;
            `;
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
            `;
    }
}}

    ${({ variant }) => {
    console.log(variant);
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
            `;
    }
}}
    ${({ rounded }) => {
    if (!rounded)
        return;
    return `
            ${FrontCSS} {
                border-radius: 10px;
            }
            ${BackCSS} {
                border-radius: 10px;
            }
        `;
}}
`;
const FlipCard = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [flipped, setFlipped] = useState(Boolean(props.flipped));
    const switchState = () => {
        setFlipped((prev) => !prev);
    };
    return (React.createElement(Card, Object.assign({}, props, { flipped: flipped, onMouseEnter: switchState, onMouseLeave: switchState }),
        children[0],
        children[1]));
};
FlipCard.Front = Front;
FlipCard.Back = Back;
FlipCard.defaultProps = defaultProps;
export { FlipCard };
//# sourceMappingURL=FlipCard.js.map