"use client"

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import clsx from "clsx";

const Navigation = () => {

    const [menuIsOpen, setOpen] = useState(false)

    return (
        <div className="navigation-wrapper">
            <nav className="navigation">
                <div className="navigation__logo">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>
                <div className="navigation__burger">
                    { menuIsOpen && (
                        <IconX onClick={()=> setOpen(c => !c)}/>
                    )}
                    { !menuIsOpen && (
                        <IconMenu2 onClick={()=> setOpen(c => !c)}/>
                    )}
                </div>
                <ul className={clsx(
                    "navigation__links",
                    menuIsOpen && "is-open",
                    !menuIsOpen && "is-closed"
                )}>
                    <li><a href="#">News</a></li>
                    <li><Link href="/angebote-events">Angebote + Events</Link></li>
                    <li><Link href="/oeffnungszeiten-preise">Öffnungszeiten + Preise</Link></li>
                    <li><Link href="/kontakt">Kontakt</Link></li>
                    <li><Link href="/impressum">Impressum</Link></li>
                    <li><a href="#">Datenschutz</a></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navigation;