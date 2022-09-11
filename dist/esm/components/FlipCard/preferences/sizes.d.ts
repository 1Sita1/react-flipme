declare type Size = {
    width: string;
    height: string;
};
declare const sizes: {
    readonly xl: {
        readonly width: "200px";
        readonly height: "300px";
    };
    readonly l: {
        readonly width: "180px";
        readonly height: "250px";
    };
    readonly m: {
        readonly width: "160px";
        readonly height: "220px";
    };
    readonly s: {
        readonly width: "120px";
        readonly height: "180px";
    };
};
declare type AvailableSizes = keyof typeof sizes;
export { sizes, AvailableSizes, Size };
