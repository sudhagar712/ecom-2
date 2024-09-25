import React from "react";
import video1 from "../assets/Videos/bannervideo.mp4";
import video2 from "../assets/Videos/bannervideo2.mp4";
import video3 from "../assets/Videos/bannervideo3.mp4";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  // Use the actual imported video variables
  const heroVideos = [video1, video2, video3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="flex flex-col sm:flex-row border border-gray-200">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#4141413c]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Our Best Sellers</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 mt-5">
            <Link to="/collections">
              <p className="font-semibold px-8 py-4 text-sm bg-black text-white">
                SHOP NOW
              </p>
            </Link>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full sm:w-1/2 ">
        <Slider {...settings}>
          {heroVideos.map((videoSrc, index) => (
            <div key={index}>
              <video
                src={videoSrc}
                className="w-full   sm:w-full overflow-hidden"
                autoPlay
                loop
                muted // Optional: To prevent sound during autoplay
                style={{
                  filter: "brightness(1) contrast(1.5)", // Adjust these values as per your needs
                  transition: "filter 0.3s ease", // Smooth transition effect
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
