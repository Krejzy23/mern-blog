import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const AnimatedUmbrella = () => {
  const umbrella = useRef(null);

  useGSAP(() => {
    gsap.to(umbrella.current, {
      rotation: 720,
      duration: 1,
      repeat: -1,
      ease: "none",
      marker:true,
      scrollTrigger: {
        trigger: umbrella.current,
        scrub: true,  // Použije rychlost skrolování pro kontrolu rychlosti animace
        start: "left right",  // Start animace, když SVG vstoupí do viewportu
        end: "right left",  // Konec animace, když SVG opustí viewport
        horizontal: true,
        invalidateOnRefresh: true,
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    
  }, []);

  return (
    <div ref={umbrella}>
      <svg
        width="60px"
        height="60px"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        strokeWidth="2"
      >
        <radialGradient
          id="red"
          cx="150"
          cy="150"
          r="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c00" offset=".3" />
          <stop stopColor="#a11" offset=".7" />
        </radialGradient>
        <radialGradient
          id="white"
          cx="150"
          cy="150"
          r="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ddd" offset=".3" />
          <stop stopColor="#fff" offset=".6" />
          <stop stopColor="#ddd" offset=".9" />
        </radialGradient>
        <g id="a">
          <g id="b">
            <path
              d="m206 5s-28 14-56 14-56-14-56-14l56 135z"
              fill="url(#red)"
              stroke="#870200"
            />
            <path
              d="m87 8s-10 30-30 50c-19 19-49 29-49 29l135 56z"
              fill="url(#white)"
              stroke="#bdbdbd"
            />
          </g>
          <use transform="rotate(90,150,150)" xlinkHref="#b" />
        </g>
        <use transform="rotate(180,150,150)" xlinkHref="#a" />
      </svg>
    </div>
  );
};

export default AnimatedUmbrella;
