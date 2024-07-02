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
    <div className="w-full flex bg-custom-gradient rounded-b-[800px] h-[800px] mob:flex-col mob-h-[860px]">
      <div className="w-[50%] mob:w-full">
        {/* Heading + Para */}
        <div className="flex flex-col items-start space-y-5 mt-12 ml-28 mob:ml-4">
          <h1 className="text-secondary text-xl font-medium tracking-widest ">
            REAL ESTATE
          </h1>
          <h2 className="text-6xl font-semibold leading-tight mob:font-medium">
            Find a perfect home you love..!
          </h2>
          <p className="text-base font-normal text-gray">
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </p>
        </div>
        {/* Slider */}
        <div className="w-[90%] relative ml-20  mob:ml-8">
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
            className="swiper-button-prev mt-36 left-[12px] bg-primary w-7 h-7 cursor-pointer z-[1000] rounded-[50%] transform -translate-y-1/2 mob:mt-0 mob:-m-3 "
            onClick={handlePrevButtonClick}
          ></div>
          <div
            className="swiper-button-next mt-36 right-7 bg-primary w-7 h-7 cursor-pointer z-[1000] rounded-[50%] transform -translate-y-1/2 mob:mt-0 mob:m-3 "
            onClick={handleNextButtonClick}
          ></div>
          <div className="swiper-pagination"></div>
          <div className="relative top-0 left-[134%] transform -translate-x-1/2 -mt-96 mob:hidden ">
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
      {/* Form */}
      <div className="w-[50%] flex justify-center items-center col-span-2 mob:w-full mob:mt-24">
        <div className="justify-center">
          <form className="flex flex-col bg-primary rounded-[30px] shadow-[10px_30px_50px_rgba(0,0,0,0.05)] h-[582px]  w-[420px] -mt-20 mob:w-[392px]">
            <h1 className="text-base text-secondary font-medium text-center py-6">
              Contact Us Now
            </h1>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="344"
                height="5"
                viewBox="0 0 344 5"
                fill="none"
              >
                <path
                  d="M2 1.5L342 2.97399"
                  stroke="#3A0CA3"
                  stroke-width="3"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <hr className=""></hr>

            <div className="flex justify-center items-center h-[90%]">
              <div className="max-w-[340px] w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required=""
                  class=" bg-[hsla(0,0%,83%,0.2)] border-none rounded-[20px] h-[59px] w-full my-2 px-6 focus:outline-none "
                  placeholder="Full Name"
                  value=""
                />
                <input
                  id="email"
                  name="email"
                  required=""
                  class="bg-[hsla(0,0%,83%,0.2)] border-none rounded-[20px] h-[59px] w-full my-2 px-6 focus:outline-none"
                  type="text"
                  placeholder="Email Address"
                  value=""
                />
                <textarea
                  id="message"
                  name="message"
                  required=""
                  class="bg-[hsla(0,0%,83%,0.2)] border-none w-full rounded-[20px] my-2 py-6 px-6"
                  placeholder="Message"
                  cols="30"
                  rows="5"
                ></textarea>
                <button
                  type="btn button"
                  class="my-4 text-primary bg-secondary rounded-[50px] text-base font-medium w-full h-[60px] hover:bg-[#6d28d9]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSection;
