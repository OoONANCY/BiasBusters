import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../images/Logo1-min.png";
import logo1 from "../images/Logo2-min.png";
import logo2 from "../images/Logo3-min.png";
import logo3 from "../images/Logo4-min.png";
import logo4 from "../images/Logo5-min.png";

class Logoslider extends Component {
  render() {
    const logos = [logo, logo1, logo2, logo3, logo4];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };

    return (
      <div className="home-logoslider-mainContainer">
        <Slider {...settings}>
          {logos.map((logoSrc, index) => (
            <div className="home-logoslider-container" key={index}>
              <img src={logoSrc} alt={`Logo ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Logoslider;
