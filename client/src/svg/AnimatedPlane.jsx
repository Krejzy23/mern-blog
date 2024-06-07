import React from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MotionPathPlugin,useGSAP);

const AnimatedPlane = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // První horizontální sinusoidní cesta
    const fullPath = Array.from({ length: 38 }, (_, i) => ({
      x: i * 80, // Horizontální postup
      y: Math.sin(i * 0.2 * Math.PI) * 130 // Sinusoidní výkyvy nahoru a dolů + delka a rychlost 
    }));

    gsap.timeline({
      scrollTrigger: {
        trigger: ".plane-container",
        start: "bottom right",
        end: "bottom left",
        scrub: 10,
        markers: true
      }
    }).to('.plane', {
      duration: 30,
      ease: "none",
      motionPath: {
        path: fullPath,
        curviness: 1,
        autoRotate: true,
      }
    });

    return () => {timeline.kill()};
  }, []);

  return (
    <div className="frame">
      <div className="plane-container">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="113.153px" height="37.9304px" viewBox="0 0 1131.53 379.304" enableBackground="new 0 0 1131.53 379.304"
            className="plane">
            <polygon fill="#FC2207" points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223" />
            <polygon fill="#930801" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102" />
          </svg>
      </div>
    </div>
  );
};

export default AnimatedPlane;