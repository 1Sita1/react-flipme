type Variant = {
    name: string
    foreColor: string
    backColor: string
}

type Variants = {
    [name: string]: Variant
}

const variants: Variants = {
    default: {
        name: "default",
        foreColor: "#000",
        backColor: "#fff"
    },

    light: {
        name: "light",
        foreColor: "#000",
        backColor: "#fff"
    },

    dark: {
        name: "dark",
        foreColor: "#fff",
        backColor: "#292929"
    }
}

const keys = Object.keys(variants)
type AvailableVariants = typeof keys[number]

export { variants, AvailableVariants, Variants, Variant }
