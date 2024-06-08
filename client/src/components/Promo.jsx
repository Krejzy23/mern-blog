import React from "react";
import Tagline from "./Tagline";
import AnimatedArrowDown from "../svg/AnimatedArrowDown";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);

const Promo = () => {
  useGSAP(() => {
    Draggable.create(".draggable-svg", {
      type: "x,y",
      bounds: ".draggable"
    });
  }, []);

  return (
    <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-16 xl:max-w-[87.5rem]">
      <div className="flex">
        <div className="flex flex-col">
          <Tagline className="mt-20 text-xl">Welcome</Tagline>
          <h1 className="h1 pl-10 mt-20 font-semibold font-poppins text-transparent text-stroker-1 text-stroke-custom">
            About Blog
          </h1>
          <div className="pl-16 mt-10">
            <p className="max-w-xl text-gray-400 sm:text-xl">
              Welcome to my blog, where you can enjoy your free time reading
              interesting articles on selected topics, mainly programming,
              cryptocurrencies, and artificial intelligence. For lighter
              reading, you will find posts dedicated to nature, ecology, and a
              healthy lifestyle, always with a touch of irony and perspective.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex border border-stroke-1">
            <div className="flex draggable max-w-screen-sm p-10">
              <svg
                className="draggable-svg"
                width="100"
                height="100"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="red"
                    d="M480.25 156.355c0 161.24-224.25 324.43-224.25 324.43S31.75 317.595 31.75 156.355c0-91.41 70.63-125.13 107.77-125.13 77.65 0 116.48 65.72 116.48 65.72s38.83-65.73 116.48-65.73c37.14.01 107.77 33.72 107.77 125.14z"
                  ></path>
                </g>
              </svg>
              <svg
                className="draggable-svg"
                width="100"
                height="100"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="black"
                    d="M458.915 307.705c0 62.63-54 91.32-91.34 91.34-41.64 0-73.1-18.86-91.83-34.26 2.47 50.95 14.53 87.35 68.65 116h-176.79c54.12-28.65 66.18-65.05 68.65-116-18.73 15.39-50.2 34.28-91.83 34.26-37.29 0-91.34-28.71-91.34-91.34 0-114.47 80.64-83.32 202.91-276.49 122.28 193.17 202.92 162.03 202.92 276.49z"
                  ></path>
                </g>
              </svg>
              <svg
                className="draggable-svg"
                width="100"
                height="100"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="red"
                    d="M431.76 256c-69 42.24-137.27 126.89-175.76 224.78C217.51 382.89 149.25 298.24 80.24 256c69-42.24 137.27-126.89 175.76-224.78C294.49 129.11 362.75 213.76 431.76 256z"
                  ></path>
                </g>
              </svg>
              <svg
                className="draggable-svg"
                width="100"
                height="100"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#000000"
                    d="M477.443 295.143a104.45 104.45 0 0 1-202.26 36.67c-.08 68.73 4.33 114.46 69.55 149h-177.57c65.22-34.53 69.63-80.25 69.55-149a104.41 104.41 0 1 1-66.34-136.28 104.45 104.45 0 1 1 171.14 0 104.5 104.5 0 0 1 135.93 99.61z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row pb-10">
        <AnimatedArrowDown />
      </div>
    </div>
  );
};

export default Promo;