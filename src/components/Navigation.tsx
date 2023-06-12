"use client"

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { IconBrandGithubFilled, IconMenu2, IconX } from "@tabler/icons-react";
import clsx from "clsx";

const Navigation = () => {

    const [menuIsOpen, setOpen] = useState(false)

    return (
        <>
            <div className="flex justify-center px-4 py-2 gap-4 infobar">
                <span>Dies ist ein Ergebnis der Abschlussprüfung Mediengestalter Digital 2023.</span>
                <span>
                    <a href="https://github.com/nordowl/ap-sommer-23" target="blank" className="flex gap-2 items-center text-white">
                        Quellcode auf Github <IconBrandGithubFilled/>
                    </a>
                </span>
            </div>
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
                        <li onClick={()=> setOpen(false)}><a href="#">News</a></li>
                        <li onClick={()=> setOpen(false)}><Link href="/angebote-events">Angebote + Events</Link></li>
                        <li onClick={()=> setOpen(false)}><Link href="/oeffnungszeiten-preise">Öffnungszeiten + Preise</Link></li>
                        <li onClick={()=> setOpen(false)}><Link href="/kontakt">Kontakt</Link></li>
                        <li onClick={()=> setOpen(false)}><Link href="/impressum">Impressum</Link></li>
                        <li onClick={()=> setOpen(false)}><a href="#">Datenschutz</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
 
export default Navigation;