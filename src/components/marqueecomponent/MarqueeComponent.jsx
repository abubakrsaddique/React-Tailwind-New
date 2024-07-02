import React from "react";
import Google from "../../images/google.png";
import Amazon from "../../images/amazon.png";
import Logitech from "../../images/logitech.png";
import Netflix from "../../images/netflix.png";
import Samsung from "../../images/samsung.png";
import Spotify from "../../images/spotify.png";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div className="w-full">
      <div className="pb-20 w-full relative">
        <div className=" relative left-[10%] top-4 mob:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
          >
            <circle
              opacity="0.5"
              cx="50.3013"
              cy="50.3013"
              r="50"
              transform="rotate(-30 50.3013 50.3013)"
              fill="url(#paint0_linear_1_491)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_1_491"
                x1="50.3013"
                y1="0.30127"
                x2="50.3013"
                y2="100.301"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4361EE"></stop>
                <stop offset="1" stopColor="#4361EE" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="text-gray-500 text-center mt-[-38px] text-gray font-medium mb-4 mr-4 mob:mt-8">
          Trusted by 100+ Companies across the globe
        </p>
        <div className="flex justify-center pt-12 overflow-hidden w-[87%] mx-auto">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            direction="left"
          >
            <div className="mx-6">
              <img src={Google} alt="Google" className="h-auto mx-16" />
            </div>
            <div className="mx-6">
              <img src={Amazon} alt="Amazon" className="h-auto mx-16" />
            </div>
            <div className="mx-6">
              <img src={Logitech} alt="Logitech" className="h-auto mx-16" />
            </div>
            <div className="mx-6">
              <img src={Netflix} alt="Netflix" className="h-auto mx-16" />
            </div>
            <div className="mx-6">
              <img src={Samsung} alt="Samsung" className="h-auto mx-16" />
            </div>
            <div className="mx-6">
              <img src={Spotify} alt="Spotify" className="h-auto mx-16" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
