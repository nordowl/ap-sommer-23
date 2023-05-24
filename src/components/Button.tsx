import clsx from "clsx";
import Link from "next/link";

interface Button {
    label: string,
    link?: string,
    primary?: boolean,
    secondary?: boolean,
    type?: "submit" | "button",
    className?: string,
}

const Button = ({
    label,
    link,
    primary,
    secondary,
    className,
    type = "button"
}: Button) => {
    
    if (link) return (
        <Link href={link}>
            <button
                className={clsx(
                    "button", className,
                    primary && "button--primary",
                    secondary && "button--secondary",
                )}
                type={type}
            >
                {label}
            </button>
        </Link>
    )

    return (
        <button
            className={clsx(
                "button", className,
                primary && "button--primary",
                secondary && "button--secondary",
            )}
            type={type}
        >
            {label}
        </button>
    );
}
 
export default Button;