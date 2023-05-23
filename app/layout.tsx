import { ReactNode } from "react";
import Navigation from "@/src/components/Navigation";
import { headingFont, bodyFont } from "@/src/fonts";
import clsx from "clsx";
import "@/src/styles/__styles.scss"

const RootLayout = ({children}: {children: ReactNode}) => {
    return (
        <html>
            <head></head>
            <body className={clsx("schwimmspass", headingFont.variable, bodyFont.variable)}>
                <Navigation/>
                {children}
            </body>
        </html>
    );
}
 
export default RootLayout;