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
import React from "react";
import styled from "styled-components";
import { variants } from "./preferences/variants";
import { sizes } from "./preferences/sizes";
import Front from "./sides/Front";
import Back from "./sides/Back";
const Card = styled.div `
    background-color: transparent;
    perspective: 1000px;
    width: ${({ size }) => sizes[size !== null && size !== void 0 ? size : "m"].width};
    height: ${({ size }) => sizes[size !== null && size !== void 0 ? size : "m"].height};
    ${({ height, width }) => {
    return `
            ${width && "width: " + width + ";"}
            ${height && "height: " + height + ";"}

        `;
}}
    ${({ rounded }) => {
    if (!rounded)
        return;
    return `
            border-radius: 10px;
        `;
}} 
    &:hover > * {
        transform: rotateY(180deg);
    }
`;
const CardInner = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    ${({ flipped }) => flipped ? "transform: rotateY(180deg);" : null}
    &:hover {
        ${({ flipped, flipOnHover }) => {
    if (flipOnHover && flipped)
        return "transform: rotateY(360deg);";
    if (flipOnHover && !flipped)
        return "transform: rotateY(180deg);";
}}
    }
    & > * {
        display: flex;
        align-items: center;
        justify-content: center;
        ${({ variant }) => {
    if (!variant)
        return;
    return `
                background-color: ${variants[variant].backColor};
                color: ${variants[variant].foreColor};
            `;
}}
        ${({ rounded }) => {
    if (!rounded)
        return;
    return `
                border-radius: 10px;
            `;
}}
    }
`;
const FlipCard = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Card, Object.assign({}, props),
        React.createElement(CardInner, Object.assign({}, props),
            children[0],
            children[1])));
};
FlipCard.Front = Front;
FlipCard.Back = Back;
FlipCard.defaultProps = {
    flipOnHover: true
};
export { FlipCard };
//# sourceMappingURL=FlipCard.js.map