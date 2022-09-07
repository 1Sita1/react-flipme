import React from "react";
import styled from "styled-components";
const CardFront = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #bbb;
    color: black;
`;
const Front = ({ children, style }) => {
    return React.createElement(CardFront, { style: style }, children);
};
export default Front;
export { CardFront as FrontCSS };
//# sourceMappingURL=Front.js.map