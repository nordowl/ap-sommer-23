import Logo from "./Logo";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="mb-8 md:mb-0"><Logo/></div>
                <div className="mb-8 md:mb-0">
                    <p>Schwimmspaß GmbH</p>
                    <p>Badstraße<br/>
                        550555 Wasserland
                    </p>
                    <p>Tel: 0011/2200-0</p>
                    <p><a href="mailto:info@schwimmspass-wasserland.de" className="link">info@schwimmspass-wasserland.de</a></p>
                </div>
                <ul className="md:mt-8 lg:mt-0">
                    <li><a href="#">News</a></li>
                    <li><a href="/angebote-events">Angebote + Events</a></li>
                    <li><a href="/oeffnungszeiten-preise">Öffnungszeiten + Preise</a></li>
                </ul>
                <ul className="md:mt-8 lg:mt-0">
                    <li><a href="/kontakt">Kontakt</a></li>
                    <li><a href="/impressum">Impressum</a></li>
                    <li><a href="#">Datenschutz</a></li>
                </ul>
            </footer>
        </div>
    );
}
 
export default Footer;