import Carousel from '../component/Carousel.js';
import serie6 from "../assets/img/serie6.png";
import serie7 from "../assets/img/serie7.png";
import serie8 from "../assets/img/serie8.png";
import serie9 from "../assets/img/serie9.png";
import serie10 from "../assets/img/serie10.png";
import serie11 from "../assets/img/serie11.png";
import serie12 from "../assets/img/serie12.png";

function Content(){
    const imagesRevoir = [
        { src: serie6, alt: "Série 6" },
        { src: serie7, alt: "Série 7" },
        { src: serie8, alt: "Série 8" },
        { src: serie9, alt: "Série 9" },
        { src: serie10, alt: "Série 10" },
        { src: serie11, alt: "Série 11" },
        { src: serie12, alt: "Série 12" },
        { src: serie9, alt: "Série 9" },
        { src: serie7, alt: "Série 7" },
        { src: serie10, alt: "Série 10" },
        { src: serie11, alt: "Série 11" },
    ];
    
    const imagesTendances = [
        { src: serie6, alt: "Série 6" },
        { src: serie7, alt: "Série 7" },
        { src: serie8, alt: "Série 8" },
        { src: serie9, alt: "Série 9" },
        { src: serie10, alt: "Série 10" },
        { src: serie11, alt: "Série 11" },
        { src: serie12, alt: "Série 12" },
        { src: serie12, alt: "Série 12" },
        { src: serie9, alt: "Série 9" },
        { src: serie7, alt: "Série 7" },
        { src: serie10, alt: "Série 10" },
    ];

    return(
        <div>
            <h2>Revoir</h2>
            <div className="carousel-container">
                <Carousel images={imagesRevoir}/>
            </div>
            <h2>Tendances Actuelles</h2>
            <div className="carousel-container">
            <Carousel images={imagesTendances}/>
            </div>
        </div>
    );
};

export default Content;
