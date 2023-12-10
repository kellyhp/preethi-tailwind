import React from 'react';
import Slider from 'react-slick';

import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="md:max-h-[400px] md:max-w-[728px] max-h-[200px] max-w-[350px] rounded-sm">
        <Slider {...settings} className ="md:max-h-[400px] md:max-w-[728px] max-h-[250px] max-w-[350px] rounded-sm">
          {images.map((image, index) => (
            <div key={index}>
              <Image
              src={require(`../assets/${image}`)} 
              alt={`Slide ${index + 1}`} 
              className = "md:max-h-[400px] md:max-w-[728px] max-h-[250px] max-w-[350px] rounded-sm p-[40px]"/>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Carousel;