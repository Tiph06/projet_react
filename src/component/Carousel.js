
import "../assets/Carousel.css";
import React, { useState } from "react";


function Carousel({images}) {
    return( 
        <div className="carou">
            {images.map((image,index)=>(
                <img 
                key={index} className="carou_image" src={image.src} alt={image.alt|| `Image ${index + 1}`} //mets un texte alternatif pour img
                />
            ))};
        </div>
    );
};
export default Carousel;