import React, { useRef } from 'react';
import gsap from 'gsap';
import { category } from '../constants';
import { useGSAP } from '@gsap/react';


const App = () => {
  const elementRefs = useRef([]);

  useGSAP(() => {
    elementRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref, 
          { x: 100, autoAlpha: 0 },
          {
            duration: 1,
            rotate: 360,
            x: 0,
            ease: "bounce.inOut",
            autoAlpha: 1,
            delay: index * 0.3, // zpoždění mezi prvky, závisí na jejich indexu
            scrollTrigger: {
              trigger: ref,
              start: "top 80%", // Spustí se, když je element 80% od horní části viewportu
              end: "bottom 20%", // Končí, když je element 20% od dolní části viewportu
              toggleActions: "restart none none none"
            }
          }
        );
      }
    });
  }, []);

  return (
    <div>
      <div className="w-full flex flex-wrap justify-center items-center mt-10">
        {category.map((cat, index) => (
          <div ref={el => elementRefs.current[index] = el} key={cat.id} className="m-1">
            <div className="w-[100px] h-[100px] border-2 relative rounded-full flex items-center justify-center font-serif font-semibold" style={{ borderColor: cat.color, color: cat.color }}>
              <p className='text-xl'>{cat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;