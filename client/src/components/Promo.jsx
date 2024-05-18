import React from "react";
import Tagline from "./Tagline";
import AnimatedArrowDown from "../svg/AnimatedArrowDown";
import RotatingTextCircle from "./RotatingStamp";
import { dottedPattern } from "../assets";

const Promo = () => {
  return (
    <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-16 xl:max-w-[87.5rem]">
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${dottedPattern})` }} />
      <div className="flex flex-row">
        <div className="flex-col">
          <Tagline className="mt-20 text-xl">Welcome</Tagline>
          <h1 className="pl-10 mt-20 text-8xl font-semibold font-poppins text-transparent text-stroker-1 text-stroke-custom">About Blog</h1>
          <div className="pl-16 mt-10">
            <p className="max-w-xl text-gray-400 sm:text-xl">
              Explore with us the fascinating world of movies, the mysteries of nature, and
              historical gems. Discover the latest travel trends,
              culinary recipes, cryptocurrencies and programming. Join
              and be immersed in every new post!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-20 mt-10">
        <RotatingTextCircle text={`No Politics! No War! No Fake News!`}/>
      </div>
      <div className="flex-row pb-10">
        <AnimatedArrowDown />
      </div>
    </div>
  );
};

export default Promo;
