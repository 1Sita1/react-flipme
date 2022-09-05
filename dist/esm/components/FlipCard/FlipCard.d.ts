import React from "react";
declare type FlipCardProps = {
    children: React.ReactElement[];
};
declare const FlipCard: {
    ({ children }: FlipCardProps): JSX.Element;
    Front: React.FC<{}>;
    Back: React.FC<{}>;
};
export { FlipCard };
