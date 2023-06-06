import { ReactNode } from "react";
import Navigation from "@/src/components/Navigation";
import { headingFont, bodyFont } from "@/src/fonts";
import clsx from "clsx";
import "@/public/styles/__styles.scss"
import { Metadata } from "next";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
    title: "Schwimmspaß Freibad und Schwimmhalle | Badespaß in Wasserland"
}

const RootLayout = ({children}: {children: ReactNode}) => {
    return (
        <html>
            <head></head>
            <body className={clsx("schwimmspass", headingFont.variable, bodyFont.variable)}>
                <Navigation/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
 
export default RootLayout;