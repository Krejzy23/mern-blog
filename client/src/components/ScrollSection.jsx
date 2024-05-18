import React, { useRef } from "react";
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

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const MyComponent = () => {
  const containerRef = useRef(null);
  const text = "CodingTips";
  const letters = text.split("");
  const textRef = useRef(null);

  useGSAP(() => {
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
    sections.forEach((section, index) => {
      gsap.from(section.querySelectorAll(".anim"), {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
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

    tl.to(".span1", {
      duration: 2,
      rotation: 10,
      transformOrigin: "bottom right",
      ease: "sine.inOut",
    });

    // Animace pro druhý span '&'
    tl.to(
      ".span2",
      {
        duration: 2,
        rotation: -8,
        transformOrigin: "top left",
        ease: "sine.inOut",
      },
      "<"
    );

    // Animace pro třetí span 'Bright'
    tl.to(
      ".span3",
      {
        duration: 2,
        rotation: 12,
        transformOrigin: "top left",
        ease: "sine.inOut",
      },
      "<"
    );

  }, []);

  return (
    <div className="wrapper max-w-[77.5rem] overflow-x-hidden relative">
      <div className="px-5 md:px-10 lg:px-16 xl:max-w-[90rem]">
        <Tagline className="mt-20">Explore Posts Theme</Tagline>
        <div className="container scrollx flex w-[100vw]" ref={containerRef}>
          <section className="sec1 anim relative flex-row pin p-10">
            <div className="">
              <LeftLine />
            </div>
            <div className="flex justify-center ml-20">
              <div className="flex justify-center items-center pt-36">
                <AnimatedStars />
              </div>
              <h1 className="flex mt-10 text-8xl font-serif font-bold">
                BLOG POSTS CATEGORIES
              </h1>
              <div className="flex justify-center items-center pt-24 rotate-180">
                <AnimatedStars color="#2A3240" />
              </div>
            </div>
            <RightLine />
            <div className="flex-col p-5 ml-20">
              <AnimatedPath />
              <AnimatedPlane />
            </div>
          </section>

          <section className="sec2 flex anim relative pin p-10">
            <div className="mt-64 mr-44">
              <div className="flex flex-row gap-3">
                <AnimatedHeart />
                <span className="text-lg text-stroke-2">Healthy</span>
                <h1 className="text-8xl text-stroke-2">Li</h1>
                <h1 className="text-8xl -ml-4">f</h1>
                <h1 className="text-8xl -ml-4 text-stroke-2">eS</h1>
                <span className="text-8xl -ml-4 font-serif">tyle</span>
              </div>
            </div>
          </section>

          <section className="sec3 anim relative mt-10 -ml-72 flex pin p-8">
            <span className="mb-10">The Advanced</span>
            <h1 className="flex text-8xl font-serif font-bold">Bi</h1>
            <div className="col flex gap-3">
              <div className="mt-3">
                <AnimatedUmbrella />
              </div>
            </div>
            <h1 className="flex text-8xl font-serif">Engineering</h1>
            <span className="flex mt-10">Friendly</span>
          </section>

          <section className="sec4 anim flex-row pin p-10">
            <div className="relative mr-64 mt-20">
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
          </section>
        </div>
        <div className="flex relative w-full" ref={textRef}>
          <div className="flex mb-20 p-20">
            <h1 className="relative text-center text-8xl font-semibold">
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
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
