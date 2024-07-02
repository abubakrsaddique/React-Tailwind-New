import React, { useEffect } from "react";
import RoundImage from "../../images/round.png";
import Image1 from "../../images/about1.png";
import Image2 from "../../images/about2.png";
import Image3 from "../../images/about3.png";
import AOS from "aos";
import "aos/dist/aos.css";

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinningRoundImage = styled.img`
  animation: ${spin} 20s linear infinite;
`;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="mx-auto w-full max-w-[1263px] ">
      <div className="grid grid-cols-4 gap-4 justify-center items-center mob:grid-cols-1">
        <div className="col-span-2 flex justify-center">
          <div className="pt-20 w-[80%]">
            <h1 className="text-xl font-medium text-secondary tracking-widest ">
              WHO ARE WE
            </h1>
            <h2 className="my-6 text-[40px] font-semibold leading-[47px]">
              Assisting individuals in locating the appropriate real estate.
            </h2>
            <p className="text-gray text-base font-normal">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
              malesuada leo volutpat.
            </p>
            {/* Images Part for small screen*/}
            <div className="lg:flex col-span-2 items-center justify-start mob:mt-5 hidden">
              <div className="second">
                <div className="flex justify-center">
                  <h1 className="absolute z-[1]">
                    <SpinningRoundImage
                      src={RoundImage}
                      alt=""
                      className="max-w-[75%] ml-5 mt-3"
                    />
                  </h1>
                </div>
                <div className="flex pt-20">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="mt-10"
                  >
                    <img src={Image1} alt="" />
                  </div>
                  <div>
                    <div
                      data-aos="fade-down"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <img src={Image2} alt="" />
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <img src={Image3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* First Card */}
            <div className="mb-20 mt-6 w-[80%] mob:w-full">
              <div
                className="mb-6 max-w bg-primary rounded-[30px] shadow-lg "
                data-aos="fade-right"
              >
                <div className="flex items-center justify-center px-6 py-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M30.531 38.8827H19.1277C18.3736 38.8827 17.7483 38.2573 17.7483 37.5032C17.7483 36.7491 18.3736 36.1238 19.1277 36.1238H30.531C32.499 36.1238 34.4301 34.4867 34.7612 32.5371L37.2074 17.897C37.4281 16.5727 36.6926 14.6781 35.6626 13.8505L22.9165 3.66125C21.4451 2.48414 18.999 2.48412 17.546 3.64284L4.8001 13.8505C3.75174 14.6965 3.03444 16.5727 3.25514 17.897L3.77013 21.0051C3.89888 21.7592 3.38391 22.4765 2.62982 22.5869C1.87574 22.734 1.17685 22.2006 1.0481 21.4465L0.533113 18.3568C0.146873 16.0761 1.25043 13.1517 3.07128 11.6987L15.8172 1.49086C18.2817 -0.495513 22.1624 -0.477102 24.6454 1.50927L37.3913 11.6987C39.1938 13.1517 40.2973 16.0761 39.9295 18.3568L37.4833 32.9969C36.9315 36.2524 33.8232 38.8827 30.531 38.8827Z"
                        fill="#4361EE"
                      ></path>
                      <path
                        d="M7.35738 39.2324C6.60329 39.2324 5.99634 38.6254 5.97795 37.8897C5.92277 35.4068 4.28587 33.7698 1.80291 33.7147C1.04882 33.6963 0.441854 33.0709 0.460246 32.2985C0.478638 31.5444 1.08559 30.9558 1.83967 30.9558H1.87644C5.8308 31.0478 8.66324 33.8618 8.7368 37.8162C8.7552 38.5702 8.14823 39.214 7.39415 39.2324C7.37575 39.2324 7.37577 39.2324 7.35738 39.2324Z"
                        fill="#4361EE"
                      ></path>
                      <path
                        d="M12.8751 39.2323C12.121 39.2323 11.4956 38.6253 11.4956 37.8712C11.4772 36.6573 11.2749 35.4986 10.9071 34.4135C9.96906 31.7282 7.9643 29.7416 5.27901 28.7852C4.19386 28.399 3.03515 28.1968 1.82125 28.1968C1.06716 28.1968 0.441842 27.5715 0.460235 26.799C0.460235 26.0449 1.08557 25.438 1.83966 25.438H1.85805C3.38462 25.4564 4.8376 25.7139 6.19863 26.1921C9.67479 27.4244 12.2681 30.0177 13.5004 33.4938C13.9786 34.8549 14.2361 36.3263 14.2545 37.8344C14.2545 38.6069 13.6476 39.2323 12.8751 39.2323Z"
                        fill="#4361EE"
                      ></path>
                      <path
                        d="M1.83924 39.6921C0.809264 39.6921 0 38.8645 0 37.8529C0 36.8413 0.827656 36.0137 1.83924 36.0137C2.85082 36.0137 3.67847 36.8413 3.67847 37.8529C3.67847 38.8645 2.86921 39.6921 1.83924 39.6921Z"
                        fill="#4361EE"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h1 className="text-xl font-medium text-secondary">
                      Donec porttitor euismod
                    </h1>
                    <p className="text-base font-normal text-gray">
                      Nullam a lacinia ipsum, nec dignissim purus. Nulla
                    </p>
                  </div>
                </div>
              </div>
              {/* Second card */}
              <div
                className="mb-6 max-w bg-primary rounded-[30px] shadow-lg"
                data-aos="fade-right"
              >
                <div className="flex items-center justify-center px-6 py-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M30.531 38.8827H19.1277C18.3736 38.8827 17.7483 38.2573 17.7483 37.5032C17.7483 36.7491 18.3736 36.1238 19.1277 36.1238H30.531C32.499 36.1238 34.4301 34.4867 34.7612 32.5371L37.2074 17.897C37.4281 16.5727 36.6926 14.6781 35.6626 13.8505L22.9165 3.66125C21.4451 2.48414 18.999 2.48412 17.546 3.64284L4.8001 13.8505C3.75174 14.6965 3.03444 16.5727 3.25514 17.897L3.77013 21.0051C3.89888 21.7592 3.38391 22.4765 2.62982 22.5869C1.87574 22.734 1.17685 22.2006 1.0481 21.4465L0.533113 18.3568C0.146873 16.0761 1.25043 13.1517 3.07128 11.6987L15.8172 1.49086C18.2817 -0.495513 22.1624 -0.477102 24.6454 1.50927L37.3913 11.6987C39.1938 13.1517 40.2973 16.0761 39.9295 18.3568L37.4833 32.9969C36.9315 36.2524 33.8232 38.8827 30.531 38.8827Z"
                        fill="#4361EE"
                      ></path>
                      <path
                        d="M7.35738 39.2324C6.60329 39.2324 5.99634 38.6254 5.97795 37.8897C5.92277 35.4068 4.28587 33.7698 1.80291 33.7147C1.04882 33.6963 0.441854 33.0709 0.460246 32.2985C0.478638 31.5444 1.08559 30.9558 1.83967 30.9558H1.87644C5.8308 31.0478 8.66324 33.8618 8.7368 37.8162C8.7552 38.5702 8.14823 39.214 7.39415 39.2324C7.37575 39.2324 7.37577 39.2324 7.35738 39.2324Z"
                        fill="#4361EE"
                      ></path>
                      <path
                        d="M12.8751 39.2323C12.121 39.2323 11.4956 38.6253 11.4956 37.8712C11.4772 36.6573 11.2749 35.4986 10.9071 34.4135C9.96906 31.7282 7.9643 29.7416 5.27901 28.7852C4.19386 28.399 3.03515 28.1968 1.82125 28.1968C1.06716 28.1968 0.441842 27.5715 0.460235 26.799C0.460235 26.0449 1.08557 25.438 1.83966 25.438H1.85805C3.38462 25.4564 4.8376 25.7139 6.19863 26.1921C9.67479 27.4244 12.2681 30.0177 13.5004 33.4938C13.9786 34.8549 14.2361 36.3263 14.2545 37.8344C14.2545 38.6069 13.6476 39.2323 12.8751 39.2323Z"
                        fill="#4361EE"
                      ></path>
                      <path
                        d="M1.83924 39.6921C0.809264 39.6921 0 38.8645 0 37.8529C0 36.8413 0.827656 36.0137 1.83924 36.0137C2.85082 36.0137 3.67847 36.8413 3.67847 37.8529C3.67847 38.8645 2.86921 39.6921 1.83924 39.6921Z"
                        fill="#4361EE"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h1 className="text-xl font-medium text-secondary">
                      Donec porttitor euismod
                    </h1>
                    <p className="text-base font-normal text-gray">
                      Nullam a lacinia ipsum, nec dignissim purus. Nulla
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Images Part for large screen */}
        <div className="flex col-span-2 items-center justify-start mob:hidden">
          <div className="second">
            <div className="flex justify-center">
              <h1 className="absolute z-[1]">
                <SpinningRoundImage src={RoundImage} alt="" />
              </h1>
            </div>
            <div className="flex pt-20">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mt-10"
              >
                <img src={Image1} alt="" />
              </div>
              <div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <img src={Image2} alt="" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <img src={Image3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
