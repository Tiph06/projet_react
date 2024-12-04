import "../assets/Hero.css";
import hero from "../assets/img/hero_bg.png";
import soustitre from "../assets/img/netflixOriginal.png";
import titre from "../assets/img/narcos.png";
import play from "../assets/img/btn-play.png";
import liste from "../assets/img/btn-my-list.png";
// import data from "../assets/Hero.json";
import { useEffect, useState } from "react";

function Hero(){
    const [result, setMovie] = useState(null);

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGY2ZTcxYWE2YWQ4ZjYwZmJiNjI1Y2Q0NWJmNGZmOSIsIm5iZiI6MTczMzMxNjQxNS4wNTksInN1YiI6IjY3NTA0ZjNmMjFlMWVhY2FjNmYwMjg2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SnRFoG-kZEHdKwkrL6VP_oRrSLkEwiv05RmCBnWfO2U'
            },
        };
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/trending/movie/day?language=en-US', options
                );
            const result = await response.json();
            setMovie(result.results[0]);
        }
        catch (error) {
            console.error ('Erreur:',error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="hero">
         <img className="hero_bgd" src={hero} alt="Narcos" />
            <div className="hero_container">
                <div className="hero__titres">
                    <img className="hero__soustitre" src={soustitre}/>
                    {result ? (
                    <p>{result.original_title}</p>
                    ): (<p>chasgeùent</p>)}
                </div>
                <div className="hero__texte">
                    <h2>Regardez la saison 3 maintenant</h2>
                    <p>Le cartel de Cali reprend le pouvoir en 
                        Colombie. Les successeurs d'Escobar passent à l'action et déclarent la guerre au gouvernement.</p>
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