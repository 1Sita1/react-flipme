declare type Variant = {
    name: string;
    foreColor: string;
    backColor: string;
};
declare const variants: {
    readonly light: {
        readonly name: "light";
        readonly foreColor: "#000";
        readonly backColor: "#fff";
    };
    readonly dark: {
        readonly name: "dark";
        readonly foreColor: "#fff";
        readonly backColor: "#292929";
    };
};
declare type AvailableVariants = keyof typeof variants;
export { variants, AvailableVariants, Variant };
