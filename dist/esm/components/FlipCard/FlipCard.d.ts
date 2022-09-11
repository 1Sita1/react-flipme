import React from "react";
import { AvailableVariants } from "./preferences/variants";
import { AvailableSizes } from "./preferences/sizes";
import { FrontProps } from "./sides/Front";
import { BackProps } from "./sides/Back";
declare type FlipCardStyles = {
    style?: React.CSSProperties;
    variant?: AvailableVariants;
    size?: AvailableSizes;
    rounded?: boolean;
    width?: string;
    height?: string;
    flipped?: boolean;
    flipOnHover?: boolean;
};
declare type ChildrenType = [React.ReactElement<FrontProps>, React.ReactElement<BackProps>] | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>];
declare type FlipCardProps = FlipCardStyles & {
    children: ChildrenType;
};
declare const FlipCard: {
    ({ children, ...props }: FlipCardProps): JSX.Element;
    Front: React.FC<FrontProps>;
    Back: React.FC<BackProps>;
    defaultProps: {
        flipOnHover: boolean;
    };
};
export { FlipCard, FlipCardProps, FlipCardStyles, ChildrenType };
