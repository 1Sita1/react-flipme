import React from "react";
import styled from "styled-components";
const CardBack = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
`;
const Back = ({ children, style }) => {
    return React.createElement(CardBack, { style: style }, children);
};
export default Back;
export { CardBack as BackCSS };
//# sourceMappingURL=Back.js.map