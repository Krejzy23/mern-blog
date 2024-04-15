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
            scrub: 4,
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
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          >
            {Array.from({ length: 15 }, (_, innerIndex) => (
              <React.Fragment key={innerIndex}>
                <span
                  className="tech-item text-6xl font-extrabold uppercase tracking-tighter"
                  style={{
                    color: innerIndex === 7 && item.color ? item.color : "inherit",
                  }}
                >
                  {item.title}
                </span>
                <span className="text-2xl">
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