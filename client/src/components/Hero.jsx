import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP );

// Nastavení GSAP animace s ScrollTrigger

export default function Hero() {
  
  useGSAP(() => {
    gsap.to("#headerTitle", {
      duration: 2,
      text: "Ahoj 👋<br/>",
      delay: 2,
      fontFamily: "Poppins",
      fontWeight: "bold",
    },[]);

    gsap.to("#headerText", {
      duration: 2,
      text: "Vítejte na mém<br/>",
      fontFamily: "DMSerif",
      delay: 3,
    },[]);

    gsap.to("#headerStyle", {
      duration: 2,
      text: "BLOGU",
      delay: 4,
      color: "red",
      fontFamily: "Poppins",
      fontWeight: "bold",
      

    },[]);

    gsap.defaults({ease: "none"});
      const tl = gsap.timeline({repeat: 3 ,repeatDelay: 0.2, yoyo:true});
      tl.to(".green", {x: 0, duration: 0.2, rotation: 0})
        .to(".green",{x: 450, duration : 1, rotation: 360})
        .set(".green",  {text:""})
  },[]);

  return (
    <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
      <div className='flex flex-col gap-6 p-20 px-3 max-w-8xl mx-auto '>
        <h1 className='text-4xl font-semibold lg:text-10xl md:text-8xl'>
          <span id="headerTitle" className='font-bold ml-10'>
            {`<h1>Ahoj 👋</h1>`}<br/>
          </span>
          <span id='headerText' className="ml-20">
            {'<h2>Vítejte na mém<br />'} {' '}
          </span>
          <span id='headerStyle' className="ml-40">
            {'BLOGU</h2>'}
          </span>
          <div className='wrapper text-xl lg:text-2xl'>
            <div className="box green"></div>
          </div>
        </h1>
        <p className='max-w-2xl text-gray-500 sm:text-xl'>
          Prozkoumejte s námi fascinující svět filmů, tajemství přírody, a historických skvostů. Objevte nejnovější trendy v cestování, kulinářských receptech, kryptoměnách a programování. Připojte se k nám a nechte se pohltit každým novým příspěvkem!
        </p>
      </div>
    </div>
  );
}