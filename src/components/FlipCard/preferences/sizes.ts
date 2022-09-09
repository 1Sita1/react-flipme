type Size = {
    width: string
    height: string
}

type Sizes = {
    [name: string]: Size
}

const sizes: Sizes = {
    default: {
        width: "160px",
        height: "220px"
    },

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
}

const keys = Object.keys(sizes)
type AvailableSizes = typeof keys[number]

export { sizes, AvailableSizes, Sizes, Size }
