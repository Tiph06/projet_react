import "../assets/Hero.css"
import hero from "../assets/img/hero_bg.png"
import soustitre from "../assets/img/netflixOriginal.png"
import titre from "../assets/img/narcos.png"
import play from "../assets/img/btn-play.png"
import liste from "../assets/img/btn-my-list.png"


function Hero(){
    return (
        <section className="hero">
         <img className="hero_bgd" src={hero} alt="Narcos" />
            <div className="hero_container">
                <div className="hero__titres">
                    <img className="hero__soustitre" src={soustitre}/>
                    <img className="hero__titre" src={titre}/>
                </div>
                <div className="hero__texte">
                    <h2>Regardez la saison 3 maintenant</h2>
                    <p>Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d'Escobar passent à l'action et déclarent la guerre au gouvernement.</p>
                </div>
            </div>
            <div>
                <div className="hero__boutons">
                    <a href="">
                        <img src={play} />
                    </a>
                    <a href="">
                        <img src={liste} />
                    </a>
                </div>
            </div>
        </section>
        
    );
};
export default Hero;