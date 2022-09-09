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
import { variants } from "../preferences/variants";
const CardFront = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    &&& {
        ${({ variant }) => {
    if (!variant)
        return;
    return `
                background-color: ${variants[variant].backColor};
                color: ${variants[variant].foreColor};
            `;
}}
    }
`;
const Front = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return React.createElement(CardFront, Object.assign({}, props), children);
};
export default Front;
export { CardFront as FrontCSS };
//# sourceMappingURL=Front.js.map