import { ReactNode } from "react";

const CtaBanner = ({children}: {children: ReactNode}) => {
    return (
        <section>
            <div className="banner">
                {children}
            </div>
        </section>
    );
}
 
export default CtaBanner;