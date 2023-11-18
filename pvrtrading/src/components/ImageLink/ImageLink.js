import React, { useEffect, useState } from 'react';
import './ImageLink.css'; 
import money from '../../images/money.jpg'

const ImageLink = () => {
 const [imageFadeIn, setImageFadeIn] = useState(false);
  const [textFadeIn, setTextFadeIn] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setImageFadeIn(true);
    }, 500);

    const textTimer = setTimeout(() => {
      setTextFadeIn(true);
    }, 900); // Adjust the delay for the text fade-in after the image

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);
  return (
    <div className={`image-link ${imageFadeIn ? 'fade-in' : ''}`}>
      <img src={money}  width={1485} height={630} alt="Full" />
      <div className={`text-overlay ${textFadeIn ? 'fade-in' : ''}`}>
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing content</p>
      </div>
    </div>
  );
};

export default ImageLink;
