import React, { Component } from "react";
import Slider from "react-slick";
import CarouselButton from './CarouselButton'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      variableWidth: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: true,

      responsive: [
        {
            breakpoint: 1300,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
         {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return (
      <div>
        <Slider {...settings}>
            <CarouselButton caption="Syrup Room"/>
            <CarouselButton caption="Blower"/>
            <CarouselButton caption="Mixer"/>
            <CarouselButton caption="Filler"/>
            <CarouselButton caption="Labeller"/>
            <CarouselButton caption="Packer"/>
            <CarouselButton caption="Palletizer"/>
            <CarouselButton caption="Stretcher"/>
        </Slider>
      </div>
    );
  }
}

