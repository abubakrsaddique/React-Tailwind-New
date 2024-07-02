import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Rezila from "../../images/rezila.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex w-full h-24 bg-primary justify-between items-center max-w-[1263px]">
      <div className="mob:flex hidden items-center px-4 ">
        <img src={Rezila} alt="Rezila" />
      </div>
      <div className="flex w-[65%] items-center mob:hidden">
        <div className="px-16">
          <button className="text-base font-medium px-4">Home</button>
          <button className="text-base font-medium px-4">About</button>
          <button className="text-base font-medium px-4">Listings</button>
          <button className="text-base font-medium px-4">Services</button>
          <button className="text-base font-medium px-4">Blogs</button>
        </div>
        <div>
          <img src={Rezila} className=" " alt="Rezila" />
        </div>
      </div>
      <div className="flex w-[35%] items-center mob:hidden">
        <div className="flex mr-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="none"
            className="mr-2"
          >
            <path
              d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5"
              stroke="#2B2B2B"
              strokeWidth="1.6"
              strokeLinecap="round"
            ></path>
            <path
              d="M9.99999 10.0001C11.4912 10.0001 12.7 8.79131 12.7 7.3001C12.7 5.80893 11.4912 4.6001 9.99999 4.6001C8.50878 4.6001 7.29999 5.80893 7.29999 7.3001C7.29999 8.79131 8.50878 10.0001 9.99999 10.0001Z"
              stroke="#2B2B2B"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
              stroke="#2B2B2B"
              strokeWidth="1.6"
            ></path>
          </svg>
          <span className="text-base font-medium">Login/Register</span>
        </div>
        <button className="bg-[#3a0ca3] text-white rounded-full px-8 py-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_19_3)">
              <path
                d="M19.7625 7.6376L10.3875 0.137598C10.2766 0.0488457 10.1389 0.000488281 9.99686 0.000488281C9.85486 0.000488281 9.71709 0.0488457 9.60624 0.137598L0.23124 7.6376C0.130102 7.71874 0.0567036 7.82932 0.0212132 7.95403C-0.0142772 8.07874 -0.0101023 8.2114 0.0331596 8.33364C0.0764215 8.45587 0.156628 8.56162 0.262668 8.63624C0.368707 8.71086 0.495329 8.75065 0.62499 8.7501H1.87499V19.3751C1.87499 19.5409 1.94084 19.6998 2.05805 19.817C2.17526 19.9342 2.33423 20.0001 2.49999 20.0001H15V18.7501H12.5V13.1251C12.5 12.9593 12.4341 12.8004 12.3169 12.6832C12.1997 12.5659 12.0408 12.5001 11.875 12.5001H8.12499C7.95923 12.5001 7.80026 12.5659 7.68305 12.6832C7.56584 12.8004 7.49999 12.9593 7.49999 13.1251V18.7501H3.12499V8.7501H13.75V7.5001H2.40624L9.99999 1.4251L17.5937 7.5001H17.5C17.3342 7.5001 17.1753 7.56595 17.058 7.68316C16.9408 7.80037 16.875 7.95934 16.875 8.1251V11.8751H18.125V8.7501H19.375C19.5041 8.74935 19.6298 8.70863 19.7349 8.63353C19.8399 8.55843 19.9191 8.45263 19.9616 8.33069C20.0041 8.20875 20.0077 8.07664 19.9721 7.95253C19.9364 7.82842 19.8632 7.7184 19.7625 7.6376ZM8.74999 13.7501H11.25V18.7501H8.74999V13.7501Z"
                fill="white"
              ></path>
              <path
                d="M15.625 16.6188L14.8187 15.8125L13.9375 16.6937L15.1875 17.9437C15.3046 18.0602 15.463 18.1255 15.6281 18.1255C15.7932 18.1255 15.9516 18.0602 16.0687 17.9437L19.8187 14.1937L18.9375 13.3125L15.625 16.6188Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_19_3">
                <rect width="20" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <span className="text-base ml-2 text-primary">Add Listing</span>
        </button>
      </div>
      <div className="mob:flex items-center px-4 hidden ">
        <button onClick={toggleMobileMenu} className="">
          {isMobileMenuOpen ? (
            <FaTimes className="text-white" size={30} />
          ) : (
            <FaBars className="text-white" size={30} />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className=" absolute top-0 left-0 w-full h-[20%] bg-primary  flex-row items-center justify-center mt-[100px]">
          <button
            onClick={toggleMobileMenu}
            className="absolute -top-16 right-4 "
          >
            <FaTimes className="text-white" size={30} />
          </button>
          <div className="w-full hidden mob:block">
            <button className="text-xl font-medium px-4 py-2">Home</button>
            <button className="text-xl font-medium px-4 py-2">About</button>
            <button className="text-xl font-medium px-4 py-2">Listings</button>
            <button className="text-xl font-medium px-4 py-2">Services</button>
            <button className="text-xl font-medium px-4 py-2">Blogs</button>
            <div className="flex">
              <button className="text-xl font-medium px-4 py-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5"
                    stroke="#2B2B2B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M9.99999 10.0001C11.4912 10.0001 12.7 8.79131 12.7 7.3001C12.7 5.80893 11.4912 4.6001 9.99999 4.6001C8.50878 4.6001 7.29999 5.80893 7.29999 7.3001C7.29999 8.79131 8.50878 10.0001 9.99999 10.0001Z"
                    stroke="#2B2B2B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                    stroke="#2B2B2B"
                    strokeWidth="1.6"
                  ></path>
                </svg>
                <span>Login/Register</span>
              </button>
              <button className="bg-[#3a0ca3] text-white rounded-full px-8 py-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_19_3)">
                    <path
                      d="M19.7625 7.6376L10.3875 0.137598C10.2766 0.0488457 10.1389 0.000488281 9.99686 0.000488281C9.85486 0.000488281 9.71709 0.0488457 9.60624 0.137598L0.23124 7.6376C0.130102 7.71874 0.0567036 7.82932 0.0212132 7.95403C-0.0142772 8.07874 -0.0101023 8.2114 0.0331596 8.33364C0.0764215 8.45587 0.156628 8.56162 0.262668 8.63624C0.368707 8.71086 0.495329 8.75065 0.62499 8.7501H1.87499V19.3751C1.87499 19.5409 1.94084 19.6998 2.05805 19.817C2.17526 19.9342 2.33423 20.0001 2.49999 20.0001H15V18.7501H12.5V13.1251C12.5 12.9593 12.4341 12.8004 12.3169 12.6832C12.1997 12.5659 12.0408 12.5001 11.875 12.5001H8.12499C7.95923 12.5001 7.80026 12.5659 7.68305 12.6832C7.56584 12.8004 7.49999 12.9593 7.49999 13.1251V18.7501H3.12499V8.7501H13.75V7.5001H2.40624L9.99999 1.4251L17.5937 7.5001H17.5C17.3342 7.5001 17.1753 7.56595 17.058 7.68316C16.9408 7.80037 16.875 7.95934 16.875 8.1251V11.8751H18.125V8.7501H19.375C19.5041 8.74935 19.6298 8.70863 19.7349 8.63353C19.8399 8.55843 19.9191 8.45263 19.9616 8.33069C20.0041 8.20875 20.0077 8.07664 19.9721 7.95253C19.9364 7.82842 19.8632 7.7184 19.7625 7.6376ZM8.74999 13.7501H11.25V18.7501H8.74999V13.7501Z"
                      fill="white"
                    ></path>
                    <path
                      d="M15.625 16.6188L14.8187 15.8125L13.9375 16.6937L15.1875 17.9437C15.3046 18.0602 15.463 18.1255 15.6281 18.1255C15.7932 18.1255 15.9516 18.0602 16.0687 17.9437L19.8187 14.1937L18.9375 13.3125L15.625 16.6188Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_3">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base ml-2 text-primary">Add Listing</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
