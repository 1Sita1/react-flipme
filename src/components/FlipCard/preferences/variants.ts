type Variant = {
    name: string
    foreColor: string
    backColor: string
}

const variants = {
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
} as const

type AvailableVariants = keyof typeof variants

export { variants, AvailableVariants, Variant }
