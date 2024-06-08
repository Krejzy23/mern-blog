import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const AnimatedArrowDown = () => {
  const arrowRef = useRef(null);

  useGSAP(() => {
    if (arrowRef.current) {
      const tl = gsap.timeline({
        repeat: -1, // nekonečná opakování
        yoyo: true, // animace vpřed a vzad
        ease: "power1.inOut",
        duration: 0.5
      });

      tl.to(arrowRef.current, {
        y: "-=25", // posun nahoru o 25px
      });

      // Funkce pro čištění při odstranění komponenty
      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <div className="flex justify-center items-center" ref={arrowRef}>
      <svg width="59" height="69" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.99931 0C10.2645 0 10.5189 0.105357 10.7064 0.292893C10.894 0.48043 10.9993 0.734784 10.9993 1V24.586L17.2913 18.292C17.4791 18.1042 17.7338 17.9987 17.9993 17.9987C18.2649 17.9987 18.5195 18.1042 18.7073 18.292C18.8951 18.4798 19.0006 19.2656 19.0006 19C19.0006 19.2656 18.8951 19.5202 18.7073 19.708L10.7073 27.708C10.6144 27.8011 10.5041 27.875 10.3826 27.9254C10.2611 27.9758 10.1308 28.0018 9.99931 28.0018C9.86777 28.0018 9.73753 27.9758 9.61604 27.9254C9.49455 27.875 9.3842 27.8011 9.29131 27.708L1.29131 19.708C1.10354 19.5202 0.998047 19.2656 0.998047 19C0.998047 18.7344 1.10354 18.4798 1.29131 18.292C1.47908 18.1042 1.73376 17.9987 1.99931 17.9987C2.26486 17.9987 2.51954 18.1042 2.70731 18.292L8.99931 24.586V1C8.99931 0.734784 9.10467 0.48043 9.2922 0.292893C9.47974 0.105357 9.73409 0 9.99931 0Z" fill='#FC2207'/>
      </svg>
    </div>
  );
}

export default AnimatedArrowDown;