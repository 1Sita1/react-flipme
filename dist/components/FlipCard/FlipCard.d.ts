import React from "react";
import { FrontProps } from "./sides/Front";
import { BackProps } from "./sides/Back";
declare type ChildrenType = [React.ReactElement<FrontProps>, React.ReactElement<BackProps>] | [React.ReactElement<BackProps>, React.ReactElement<FrontProps>];
declare type FlipCardProps = {
    children: ChildrenType;
    style?: React.CSSProperties;
    variant?: "light" | "dark";
    width?: String;
    height?: String;
};
declare const FlipCard: {
    (props: FlipCardProps): JSX.Element;
    Front: React.FC<FrontProps>;
    Back: React.FC<BackProps>;
};
export { FlipCard };
