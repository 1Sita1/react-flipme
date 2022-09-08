import React from "react";
import { AvailableVariants } from "./variants";
import { FrontProps } from "./sides/Front";
import { BackProps } from "./sides/Back";
declare type FlipCardStyles = {
    style?: React.CSSProperties;
    variant?: AvailableVariants;
    width?: string;
    height?: string;
};
declare type ChildrenType = [React.ReactElement<FrontProps>, React.ReactElement<BackProps>] | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>];
declare type FlipCardProps = FlipCardStyles & {
    children: ChildrenType;
};
declare const FlipCard: {
    ({ children, ...props }: FlipCardProps): JSX.Element;
    Front: React.FC<FrontProps>;
    Back: React.FC<BackProps>;
};
export { FlipCard };
