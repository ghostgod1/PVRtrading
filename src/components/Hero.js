import "./HeroStyles.css";
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function Hero(props){
  const [imageFadeIn, setImageFadeIn] = useState(false);
  const [textFadeIn, setTextFadeIn] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setImageFadeIn(true);
    }, 300);

    const textTimer = setTimeout(() => {
      setTextFadeIn(true);
    }, 800); // Adjust the delay for the text fade-in after the image

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);

    return (
        <>
            <div className={props.cName}>
            <img className={`image-link ${imageFadeIn ? 'fade-in' : ''}`}alt="heroImg" src={props.heroImg}/>
            <div className={`hero-text ${textFadeIn ? 'fade-in':'' }`}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            </div>
            </div>
        </>
    );
}

export default Hero;