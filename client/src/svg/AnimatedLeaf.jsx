import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Leaf = ({ rotation }) => {
  const leafRef = useRef(null);

  useGSAP(() => {
    gsap.to(leafRef.current, {
      rotation: `+=720`,  // Rotace o 360 stupňů
      duration: 1,
      ease: "none",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: leafRef.current,
        scrub: true,  // Použije rychlost skrolování pro kontrolu rychlosti animace
        start: "top bottom",  // Start animace, když SVG vstoupí do viewportu
        end: "bottom+=600 top"    // Konec animace, když SVG opustí viewport
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex justify-start items-center " ref={leafRef} style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg
        fill="#39FF14"
        width="64px"
        height="64px"
        viewBox="-51.2 -51.2 614.40 614.40"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#39FF14"
        strokeWidth="5.12"
        style={{ display: "block", margin: "auto" }} // Zajistí, že SVG je ve středu a rotuje kolem svého středu
        className="m-2"
      >
        <path d="M252.66,481.66a6,6,0,0,1-1.8-.28c-1.52-.48-151.39-50.1-121.31-227.39C150,133.61,244.93,82,284.79,65.32,344.93,40.25,408.1,39.37,442,63.18c23.79,16.72,35.09,38.38,31,59.4-3.31,17-16.24,30.81-32.2,34.51-13.63,3.15-26.58-1.82-35.5-13.62a6,6,0,1,1,9.5-7.2c6.05,8,14.31,11.27,23.31,9.2,11.27-2.6,20.81-13,23.18-25.18,3.22-16.44-6.08-33.25-26.16-47.36-30.61-21.53-89.15-20.16-145.72,3.4-38,15.87-128.61,65.12-148,179.64C112.94,423.17,253.05,469.57,254.46,470a6,6,0,0,1-1.8,11.64Z"/>
        <path d="M177.82,399.58a211.46,211.46,0,0,1-24.38-1.27,5.94,5.94,0,0,1-5.16-6.64,5.85,5.85,0,0,1,6.64-5.19c1.13.13,113.12,13.15,139.16-57.53,7.69-20.94,6.93-53,6.13-87-1.34-56.51-2.84-120.53,34.13-156.86,21.35-20.95,52.58-30.24,95.12-28.47a6,6,0,0,1,5.71,6.21c-.14,3.29-3.29,5.26-6.21,5.71-39.2-1.61-67.39,6.56-86.26,25.06-33.3,32.71-31.84,94-30.57,148.05.84,35.13,1.61,68.31-6.88,91.39C283.81,391.33,215.07,399.58,177.82,399.58Z"/>
        <path d="M154.19,398.36a6.3,6.3,0,0,1-.75-.05C152.2,398.16,30,381,38.66,237.72c3.43-56.6,55.75-123,130.18-165.3,88.58-50.25,184.49-55.76,263.1-15.09a6,6,0,0,1-5.46,10.59c-75-38.8-166.77-33.39-251.75,14.87-71.07,40.36-121,102.91-124.18,155.64-8,132,99.81,147.46,104.4,148.05a6,6,0,0,1-.76,11.88Z"/>
      </svg>
    </div>
  )
};

export default Leaf;