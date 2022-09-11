type Size = {
    width: string
    height: string
}

const sizes = {
    xl: {
        width: "200px",
        height: "300px"
    },

    l: {
        width: "180px",
        height: "250px"
    },

    m: {
        width: "160px",
        height: "220px"
    },

    s: {
        width: "120px",
        height: "180px"
    }
} as const

type AvailableSizes = keyof typeof sizes

export { sizes, AvailableSizes, Size }
