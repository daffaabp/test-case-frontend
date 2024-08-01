import React from 'react';
import Slider from 'react-slick';
import attentive from '/images/brands/Tech Logos Attentive.svg';
import eventbrite from '/images/brands/Tech Logos Eventbrite.svg';
import hotjar from '/images/brands/Tech Logos Hotjar.svg';
import intercom from '/images/brands/Tech Logos Intercom.svg';
import podium from '/images/brands/Tech Logos Podium.svg';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const brandImages = [
  attentive,
  eventbrite,
  hotjar,
  intercom,
  podium,
];

export const BrandText = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full py-2">
      <div className="container mx-auto px-4 -mt-20">
        <Slider {...settings} className="h-[50px]">
          {brandImages.map((src, index) => (
            <div key={index} className="p-2 flex justify-center items-center h-full">
              <img
                src={src}
                alt={`Brand ${index}`}
                className="object-contain h-[50px] max-w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
