import PlusSvg from "../../svg/PlusSvg";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
  
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
  
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

export const RingsWithText = () => {
  const ringsRef = useRef([]);
  const texts = ["WEBDEVELOPMENT", "DESIGN", "MERN", "APP", "SEO", ""];

  useGSAP(() => {
    ringsRef.current.forEach((ring, index) => {
      if(ringsRef){
        gsap.fromTo(ring, 
          { attr: { startOffset: `${index * 10}%` }},
          { attr: { startOffset: `${100 + index * 10}%` }, 
            duration: 30,
            repeat: -1,
            ease: "linear",
          }
        );
      }
    });
  }, []);

  return (
    <>
      <div className="absolute w-full h-full top-0 left-0">
        <svg width="100%" height="100%" viewBox="0 0 800 800">
          {texts.map((text, index) => (
            <>
              <circle cx="400" cy="400" r={350 - 50 * index} fill="transparent" stroke="#FC2207" strokeWidth="2" />
              <path
                id={`text-path-${index}`}
                d={`M${100 + 50 * index},400 a${300 - 50 * index},${300 - 50 * index} 0 1,1 ${600 - 100 * index},0 a${300 - 50 * index},${300 - 50 * index} 0 1,1 -${600 - 100 * index},0`}
                fill="transparent"
              />
              <text>
                <textPath href={`#text-path-${index}`} startOffset={`${index * 10}%`} textAnchor="middle" dy="-10px" ref={el => ringsRef.current[index] = el} style={{ fontSize:'71px', fill:'#FC2207',fontFamily:"poppins"}}>
                  {Array(20).fill(text.split(' ').join(' ● ')).join(' ● ')}
                </textPath>
              </text>
            </>
          ))}
        </svg>
      </div>
    </>
  );
};