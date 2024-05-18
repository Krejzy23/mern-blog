import React, { useLayoutEffect, useRef } from "react";
import { category } from "../constants";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
    const component = useRef(null);
  
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        // create as many GSAP animations and/or ScrollTriggers here as you want...
        const tl = gsap.timeline({
          scrollTrigger: {
            pin: true, // pin the trigger element while active
            start: "top bottom",
            end: "bottom top",
            scrub: 8,
          },
        });
  
        tl.fromTo(
          ".tech-row",
          {
            x: (index) => {
              return index % 2 === 0
                ? gsap.utils.random(600, 400)
                : gsap.utils.random(-600, -400);
            },
          },
          {
            x: (index) => {
              return index % 2 === 0
                ? gsap.utils.random(-600, -400)
                : gsap.utils.random(600, 400);
            },
            ease: "power1.inOut",
          },
        );
      }, component);
      return () => ctx.revert(); // cleanup!
    }, []);
  
    return (
      <section
        className="wrapper overflow-hidden"
        ref={component}
      >
        {category.map((item, index) => (
          <div
            key={index}
            className="tech-row mb-3 flex items-center justify-center gap-3 text-slate-500"
          >
            {Array.from({ length: 15 }, (_, innerIndex) => (
              <React.Fragment key={innerIndex}>
                <span
                  className="tech-item text-xl font-extrabold uppercase tracking-tighter md:text-4xl lg:text-6xl"
                  style={{
                    color: innerIndex === 7 && item.color ? item.color : "inherit",
                  }}
                >
                  {item.title}
                </span>
                <span className="text-sm md:text-xl lg:text-2xl">
                  <MdCircle />
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </section>
    );
  };
  
  export default TechList;