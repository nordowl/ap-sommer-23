import Logo from "./Logo";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer className="columns columns--4">
                <div><Logo/></div>
                <div>
                    <p>Schwimmspaß GmbH</p>
                    <p>Badstraße<br/>
                        550555 Wasserland
                    </p>
                    <p>Tel: 0011/2200-0</p>
                    <p><a href="mailto:info@schwimmspass-wasserland.de" className="link">info@schwimmspass-wasserland.de</a></p>
                </div>
                <ul>
                    <li><a href="#">News</a></li>
                    <li><a href="">Angebote + Events</a></li>
                    <li><a href="">Öffnungszeiten + Preise</a></li>
                </ul>
                <ul>
                    <li><a href="">Kontakt</a></li>
                    <li><a href="">Impressum</a></li>
                    <li><a href="#">Datenschutz</a></li>
                </ul>
            </footer>
        </div>
    );
}
 
export default Footer;