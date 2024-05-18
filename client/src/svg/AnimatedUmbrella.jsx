import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

const AnimatedUmbrella = () => {
  const umbrella = useRef(null);

  useGSAP(() => {
    gsap.to(umbrella.current, {
      rotation: "+=360",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    
  }, []);

  return (
    <div ref={umbrella}>
      <svg
        width="80px"
        height="80px"
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
