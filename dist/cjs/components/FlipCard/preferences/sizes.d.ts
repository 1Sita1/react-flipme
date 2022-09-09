declare type Size = {
    width: string;
    height: string;
};
declare type Sizes = {
    [name: string]: Size;
};
declare const sizes: Sizes;
declare const keys: string[];
declare type AvailableSizes = typeof keys[number];
export { sizes, AvailableSizes, Sizes, Size };
