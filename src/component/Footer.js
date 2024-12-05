import socials from "../assets/img/socials.PNG";
import "../assets/Footer.css";

function Footer(){
    return(
        <footer>
            <img className="socials" src={socials} alt="Résaux Sociaux"/>
            <div className="footer-links">
                <ul>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#help">Aide</a></li>
                    <li><a href="#terms">Conditions d'utilisation</a></li>
                    <li><a href="#privacy">Politique de confidentialité</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;