import { ReactNode } from "react";
import Navigation from "@/src/components/Navigation";
import { headingFont, bodyFont } from "@/src/fonts";
import clsx from "clsx";
import "@/src/styles/__styles.scss"
import { Metadata } from "next";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
    robots: { index: false, follow: false }
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