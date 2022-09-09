import React from "react";
import { AvailableVariants } from "../preferences/variants";
declare type FrontStyles = {
    style?: React.CSSProperties;
    variant?: AvailableVariants;
};
declare const CardFront: import("styled-components").StyledComponent<"div", any, FrontStyles, never>;
export declare type FrontProps = {
    children?: any;
} & FrontStyles;
declare const Front: React.FC<FrontProps>;
export default Front;
export { CardFront as FrontCSS };
