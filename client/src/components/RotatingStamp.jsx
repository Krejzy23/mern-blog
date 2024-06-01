import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnimatedHandDown from '../svg/AnimatedHandDown';

gsap.registerPlugin(ScrollTrigger);

const RotatingTextCircle = ({ text }) => {
  const radius = 100; // Poloměr kružnice
  const angleIncrement = (2 * Math.PI) / text.length; // Úhel mezi znaky
  const circleRef = useRef(null); // Ref pro celý kruh

  useEffect(() => {
    // Define a ScrollTrigger timeline for both rotating and bouncing animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top center", // Start animace když kruh vjede do středu obrazovky
        end: "bottom center", // Konec animace, když kruh opustí střed obrazovky
        toggleActions: "restart pause resume pause", // Actions on scroll enter/leave
        onEnter: () => { startBouncing(); },
        onLeave: () => { stopBouncing(); },
        onEnterBack: () => { startBouncing(); },
        onLeaveBack: () => { stopBouncing(); }
      }
    });

    // Add rotation to the timeline
    tl.to(circleRef.current, {
      rotation: 360,
      duration: 7,
      ease: "none",
      repeat: -1 // Infinite rotation
    });

    // Function to start the bouncing animation
    function startBouncing() {
      gsap.to(circleRef.current, {
        y: "-=20", // move up 20px
        repeat: -1, // repeat indefinitely
        yoyo: true, // go back and forth
        ease: "power1.inOut",
        duration: 1
      });
    }

    // Function to stop the bouncing animation
    function stopBouncing() {
      gsap.killTweensOf(circleRef.current, 'y');
    }

    // Cleanup function to kill GSAP timelines and ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(circleRef.current);
    };
  }, [text]);

  return (
    <div ref={circleRef} className="w-[230px] h-[230px] flex items-center justify-center relative border-1 border-gray-400 font-semibold rounded-full">
      {/* Vnitřní kruh zmrde */}
      <div className="absolute w-[170px] h-[170px] border-1 border-gray-400 rounded-full">
        <AnimatedHandDown />
      </div>
      {text.split("").map((char, index) => {
        const angle = angleIncrement * index;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <span
            key={index}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${angle - Math.PI / 2}rad) rotateZ(180deg)`,
              transformOrigin: 'center',
              fontSize: '1.5rem',
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default RotatingTextCircle;