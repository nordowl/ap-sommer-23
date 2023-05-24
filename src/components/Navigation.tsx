import Link from "next/link";
import Logo from "./Logo";

const Navigation = () => {
    return (
        <div className="navigation-wrapper">
            <nav className="navigation">
                <div className="navigation__logo">
                    <a href="/">
                        <Logo/>
                    </a>
                </div>
                <ul className="navigation__links">
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