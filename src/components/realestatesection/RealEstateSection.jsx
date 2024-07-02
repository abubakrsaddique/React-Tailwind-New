import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import slider from "../../images/slider.png";

const RealEstateSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleNextButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (currentSlide === 1) {
        swiperRef.current.swiper.slidePrev();
        setCurrentSlide(0);
      }
    }
  };

  const handleSlideChange = () => {
    setCurrentSlide(swiperRef.current.swiper.realIndex);
  };
  return (
    <div className="w-full flex bg-custom-gradient rounded-b-[800px] h-[800px]">
      <div className="w-[50%]">
        {/* Heading + Para */}
        <div className="flex flex-col items-start space-y-5 mt-12 ml-28">
          <h1 className="text-secondary text-xl font-medium tracking-widest ">
            REAL ESTATE
          </h1>
          <h2 className="text-6xl font-semibold leading-tight">
            Find a perfect home you love..!
          </h2>
          <p className="text-base font-normal text-gray">
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </p>
        </div>
        {/* Slider */}
        <div className="w-[90%] relative ml-20">
          <Swiper
            ref={swiperRef}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true }}
            className="w-full"
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <img src={slider} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt="Slide 2" />
            </SwiperSlide>
          </Swiper>
          <div
            className="swiper-button-prev mt-36 left-[12px] bg-primary w-7 h-7 cursor-pointer z-[1000] rounded-[50%] transform -translate-y-1/2 "
            onClick={handlePrevButtonClick}
          ></div>
          <div
            className="swiper-button-next mt-36 right-7 bg-primary w-7 h-7 cursor-pointer z-[1000] rounded-[50%] transform -translate-y-1/2 "
            onClick={handleNextButtonClick}
          ></div>
          <div className="swiper-pagination"></div>
          <div className="relative top-0 left-[134%] transform -translate-x-1/2 -mt-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
            >
              <circle
                cx="30.1698"
                cy="30.17"
                r="30"
                transform="rotate(30 30.1698 30.17)"
                fill="url(#paint0_linear_1_189)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_1_189"
                  x1="30.1698"
                  y1="0.169971"
                  x2="30.1698"
                  y2="60.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4361EE"></stop>
                  <stop offset="1" stopColor="#4361EE" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></div>
        </div>
      </div>

      <div className="w-[50%]">Form</div>
    </div>
  );
};

export default RealEstateSection;
