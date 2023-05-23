import { Bree_Serif, Source_Sans_Pro } from "next/font/google"

const headingFont = Bree_Serif({
    weight: "400",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-heading"
})

const bodyFont = Source_Sans_Pro({
    weight: ["400", "600", "700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-body"
})

export { headingFont, bodyFont }