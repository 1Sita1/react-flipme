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
import Front from "./sides/Front";
import Back from "./sides/Back";
const Card = styled.div `
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
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
    &:hover {
        transform: rotateY(180deg);
    }
    & > * {
        backgroundcolor: red;
    }
`;
const defaultProps = {
    variant: "light"
};
const FlipCard = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Card, { style: props.style },
        React.createElement(CardInner, null,
            children[0],
            children[1])));
};
FlipCard.defaultProps = defaultProps;
FlipCard.Front = Front;
FlipCard.Back = Back;
export { FlipCard };
//# sourceMappingURL=FlipCard.js.map