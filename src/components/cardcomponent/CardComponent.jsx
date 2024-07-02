import React from "react";
import ImageSrc from "../../images/card2.png";

const CardComponent = () => {
  return (
    <div className="mt-[-60px]">
      <div className="pb-6">
        <div className="grid grid-cols-4 gap-4 justify-center">
          <div className="flex jusity-center col-span-2 justify-end">
            <div
              className="px-6 bg-primary flex items-center rounded-[50px] h-24 shadow-lg "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h1 className="pl-2 font-medium text-xl">
                72k+ Happy <br />
                Customers
              </h1>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-start">
            <div
              className="px-6 flex items-center bg-primary rounded-[50px] h-24 shadow-lg "
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img src={ImageSrc} alt="" />
              <h1 className="pl-2 text-xl font-medium ">
                200+ New <br />
                Listings Everyday!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
