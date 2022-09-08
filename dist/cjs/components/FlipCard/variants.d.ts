declare type Variant = {
    name: string;
    foreColor: string;
    backColor: string;
};
declare type Variants = {
    [name: string]: Variant;
};
declare const variants: Variants;
declare const keys: string[];
declare type AvailableVariants = typeof keys[number];
export { variants, Variant, AvailableVariants };
