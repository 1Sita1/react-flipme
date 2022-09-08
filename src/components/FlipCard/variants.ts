type Variant = {
    name: string
    foreColor: string
    backColor: string
}

type Variants = {
    [name: string]: Variant
}

const variants: Variants = {
    light: {
        name: "light",
        foreColor: "#000",
        backColor: "#fff"
    },

    dark: {
        name: "dark",
        foreColor: "#fff",
        backColor: "#292929"
    },

    default: {
        name: "default",
        foreColor: "#000",
        backColor: "#fff"
    }
}

const keys = Object.keys(variants)
type AvailableVariants = typeof keys[number]

export { variants, Variant, AvailableVariants }
