import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeart from "../svg/AnimatedHeart";
import Tagline from "./Tagline";
import AnimatedUmbrella from "../svg/AnimatedUmbrella";
import { RightLine, LeftLine } from "../components/design/MiniMap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import AnimatedPlane from "../svg/AnimatedPlane";
import VaultBoy from "../svg/VaultBoy";
import { RightCurve, LeftCurve } from "./design/ScrollSection";
import AnimatedPath from "../svg/AnimatedPath";
import AnimatedStars from "../svg/AnimatedStars";
import Mark from "../svg/Mark";
import { bioContent, bioIcons } from "../constants";
import { lifeContent, lifeHackText } from "../constants";
import { healthyBackground, bioBackground2, grid } from "../assets";
import { ANIM_DURATION, ANIM_EASE } from "../constants";
import { animations } from "../constants";
import Leaf from "../svg/AnimatedLeaf";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MyComponent = () => {
  const containerRef = useRef(null);
  const text = "CodingTips";
  const letters = text.split("");
  const textRef = useRef(null);

  const leaves = Array.from({ length: 8 },(_,index) =>(
    <Leaf key={index} rotation={index * 45 } />
  ));

  useEffect(() => {
    const sections = gsap.utils.toArray(containerRef.current.children);
    const mask = containerRef.current.querySelector(".mask");
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Horizontal scrolling
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: "+=3000",
      },
    });

    // Animation for each section
    sections.forEach((section) => {
      gsap.from(section.querySelectorAll(".anim"), {
        y: -120,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          marker: true,
          trigger: section,
          start: "top center",
          containerAnimation: scrollTween,
        },
      });
    });
    // Mask animation
    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top bottom",
        scrub: 1,
      },
    });

    animations.forEach((anim, index) => {
      tl.to(
        anim.selector,
        {
          duration: ANIM_DURATION,
          rotation: anim.rotation,
          transformOrigin: anim.transformOrigin,
          ease: ANIM_EASE,
        },
        index === 0 ? undefined : "<"
      );
    });
  }, []);

  return (
    <div className="wrapper max-w-[77.5rem] overflow-x-hidden relative">
      <div className="px-5 md:px-10 lg:px-16 xl:max-w-[90rem]">
        <Tagline className="mt-20">Explore Posts Theme</Tagline>
        <div className="scrollx flex w-[100vw]" ref={containerRef}>
          <section className="sec1 anim relative flex-row pin p-10">
            <div className="">
              <LeftLine />
              <RightLine />
            </div>
            <div className="flex justify-center ml-20">
              <div className="flex justify-center items-center pt-36">
                <AnimatedStars />
              </div>
              <h1 className="h1 flex mt-10 font-serif font-bold">
                BLOG POSTS CATEGORIES
              </h1>
              <div className="flex justify-center items-center pt-24 rotate-180">
                <AnimatedStars color="#2A3240" />
              </div>
            </div>
            <div className="flex-col p-5 ml-20">
              <AnimatedPath />
              <AnimatedPlane />
            </div>
          </section>

          <section className="sec2 flex flex-col ml-20 mt-52 anim relative pin rounded-br-3xl !rounded-tl-3xl">
            <img 
              src={grid}
              alt="grid"
              className="absolute border-2 border-stroke-2 rounded-br-3xl !rounded-tl-3xl overflow-hidden inset-0 w-full h-full z-0"
            />
            <div className="w-[48rem] h-[20rem] z-10">
              <div className="flex flex-row justify-center items-center gap-3 mt-4 pb-2">
                <h6 className="absolute top-5 left-5 h6 text-xs font-poppins text-stroke-2">
                  Healthy
                </h6>
                <AnimatedHeart />
                <h1 className="h1 font-poppins text-stroke-2">Li</h1>
                <h1 className="h1 font-poppins -ml-4">f</h1>
                <h1 className="h1 -ml-4 font-poppins text-stroke-2">eS</h1>
                <h1 className="h1 -ml-4 font-poppins">tyle</h1>
                <h6 className="absolute bottom-3 right-5 h6 font-poppins text-stroke-2">
                  Contributions
                </h6>
              </div>
              <div className="p-5 flex flex-row ">
                <ul className="flex flex-col">
                  {lifeContent.map((item) => (
                    <li
                      key={item.id}
                      className="mb-2 ml-1 border-b-1 border-n-3"
                    >
                      <div className="flex">
                        <h6 className="h6 items-center font-semibold body-1">
                          {item.title}
                        </h6>
                      </div>
                      {item.text && (
                        <p className="body-2 font-poppins text-n-3">
                          {item.text}
                        </p>
                      )}
                      {item.id && (
                        <p className="body-2 font-poppins text-n-3">
                          {item.note}
                        </p>
                      )}
                    </li>
                  ))}
                  <div className="flex justify-center items-center">
                    {leaves}
                  </div>
                </ul>
                <img
                  src={healthyBackground}
                  alt="healthy"
                  className="w-[300px] h-[300px] object-cover mt-[30px] rounded-br-3xl border-2 border-stroke-2 z-0"
                />
              </div>
            </div>
          </section>

          <section className="sec3 anim flex flex-col items-center w-full h-full border-1 border-stroke-1 relative bg-white">
            <div className="flex flex-col items-center p-5 relative z-10">
              <h2 className="flex items-center h2 font-poppins text-gray-700 font-bold mb-4">
                Bi
                <div className="flex justify-center items-center mx-2">
                  <AnimatedUmbrella />
                </div>
                Genetics
              </h2>
              <ul className="flex-col ml-96">
                {bioIcons.map((icon) => (
                  <li key={icon.id}>
                    <img
                      src={icon.src}
                      alt={`icon-${icon.id}`}
                      className="w-[60px] h-[60px]"
                    />
                    <p className="flex items-center justify-center body-2 text-gray-700">
                      {icon.text}
                    </p>
                  </li>
                ))}
              </ul>

              <ul className="">
                {bioContent.map((item) => (
                  <li key={item.id} className="mb-2">
                    <div className="flex items-center mb-2">
                      <Mark />
                      <h6 className="h6 body-1 ml-5 font-poppins text-gray-700">
                        {item.title}
                      </h6>
                    </div>
                    {item.text && (
                      <p className="body-2 font-poppins text-gray-700">
                        {item.text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={bioBackground2}
              alt="dna"
              className="absolute inset-0 w-full h-full opacity-30"
            />
          </section>

          <section className="sec4 anim relative mt-28" ref={textRef}>
            <div className="flex mb-20 p-5">
              <h1 className="h1 relative text-center font-poppins">
                {letters.map((letter, index) => (
                  <span
                    key={index}
                    style={{
                      color: letter === "i" ? "#FC2207" : "",
                    }}
                    className={letter === "i" ? "flip-i" : ""}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            </div>
          </section>
        </div>

        <div className="flex ml-[22rem] mb-[15rem] w-[200px]">
          <div className="relative">
            <RightCurve />
            <span className="span1 absolute p-3 -ml-24 -mt-8 text-center text-white text-4xl font-thin rounded-tl-2xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 shadow-lg">
              Shine
            </span>
            <span className="span2 absolute mt-20 ml-48 p-3 text-center font-thin text-4xl text-white rounded bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-600 shadow-lg">
              &
            </span>
            <span className="span3 absolute ml-96 p-3 mt-52 text-center text-4xl text-white font-thin rounded-br-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-700 shadow-lg">
              Bright
            </span>
            <h1 className="flex text-8xl font-serif leading-tight font-extralight">
              THE FUTURE
            </h1>
            <div className="ml-64 -mt-60">
              <VaultBoy />
            </div>
            <LeftCurve />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
