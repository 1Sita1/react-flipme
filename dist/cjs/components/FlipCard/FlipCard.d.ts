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
    flipped?: boolean;
    width?: string;
    height?: string;
};
declare type ChildrenType = [React.ReactElement<FrontProps>, React.ReactElement<BackProps>] | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>];
declare type FlipCardProps = FlipCardStyles & {
    children: ChildrenType;
};
declare const FlipCard: React.FC<FlipCardProps> & {
    Front: React.FC<FrontProps>;
    Back: React.FC<BackProps>;
};
export { FlipCard, FlipCardProps, FlipCardStyles, ChildrenType };
