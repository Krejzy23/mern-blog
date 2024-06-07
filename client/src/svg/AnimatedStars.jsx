import React, { useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedStars = ({ color = '#FC2207' }) => {
  const starRef = useRef(null);

  useGSAP(() => {
    gsap.to(starRef.current, {
      rotation: 720,  // Rotace o 360 stupňů
      duration: 1,
      ease: "none",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: starRef.current,
        scrub: true,  // Použije rychlost skrolování pro kontrolu rychlosti animace
        start: "top bottom",  // Start animace, když SVG vstoupí do viewportu
        end: "bottom top"    // Konec animace, když SVG opustí viewport
      }
    });
  }, []);

  return (
    <div className="flex justify-end w-full h-full" ref={starRef}>
      <svg
        width="96"
        height="96"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", margin: "auto" }} // Zajistí, že SVG je ve středu a rotuje kolem svého středu
      >
        <path
          d="M18.1631 12.6427C17.9521 12.7224 17.8115 12.9239 17.8115 13.1489C17.8115 13.3739 17.9521 13.5755 18.1631 13.6552L20.8115 14.6489L21.8053 17.2974C21.885 17.5083 22.0865 17.6489 22.3115 17.6489C22.5365 17.6489 22.7381 17.5083 22.8178 17.2974L23.8115 14.6489L26.46 13.6552C26.6709 13.5755 26.8115 13.3739 26.8115 13.1489C26.8115 12.9239 26.6709 12.7224 26.46 12.6427L23.8115 11.6489L22.8178 9.00049C22.7381 8.78955 22.5365 8.64893 22.3115 8.64893C22.0865 8.64893 21.885 8.78955 21.8053 9.00049L20.8115 11.6489L18.1631 12.6427ZM12.4256 12.0849C12.3037 11.8177 12.0365 11.6489 11.7459 11.6489C11.4553 11.6489 11.1881 11.8177 11.0662 12.0849L8.59121 17.4286L3.24746 19.8989C2.98027 20.0208 2.81152 20.288 2.81152 20.5833C2.81152 20.8786 2.98027 21.1411 3.24746 21.263L8.5959 23.7333L11.0615 29.0771C11.1834 29.3442 11.4506 29.513 11.7412 29.513C12.0318 29.513 12.299 29.3442 12.4209 29.0771L14.8912 23.7286L20.2396 21.2583C20.5068 21.1364 20.6756 20.8692 20.6756 20.5786C20.6756 20.288 20.5068 20.0208 20.2396 19.8989L14.8959 17.4333L12.4256 12.0849ZM20.8115 26.6489L18.1631 27.6427C17.9521 27.7224 17.8115 27.9239 17.8115 28.1489C17.8115 28.3739 17.9521 28.5755 18.1631 28.6552L20.8115 29.6489L21.8053 32.2974C21.885 32.5083 22.0865 32.6489 22.3115 32.6489C22.5365 32.6489 22.7381 32.5083 22.8178 32.2974L23.8115 29.6489L26.46 28.6552C26.6709 28.5755 26.8115 28.3739 26.8115 28.1489C26.8115 27.9239 26.6709 27.7224 26.46 27.6427L23.8115 26.6489L22.8178 24.0005C22.7381 23.7896 22.5365 23.6489 22.3115 23.6489C22.0865 23.6489 21.885 23.7896 21.8053 24.0005L20.8115 26.6489Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default AnimatedStars;