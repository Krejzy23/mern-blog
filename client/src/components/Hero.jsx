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
      text: "AHOJ👋<br/>",
      delay: 2,
    },[]);

    gsap.to("#headerText", {
      duration: 2,
      text: "Vítejte na mém<br/>",
      delay: 3,
    },[]);

    gsap.to("#headerStyle", {
      duration: 2,
      text: "BLOGU",
      delay: 4,
      color: "red",

    },[]);

    gsap.defaults({ease: "none"});
      const tl = gsap.timeline({repeat: 3 ,repeatDelay: 0.2, yoyo:true});
      tl.to(".green", {x: 0, duration: 0.2, rotation: 0})
        .to(".green",{x: 450, duration : 1, rotation: 360})
        .set(".green",  {text:""})
  },[]);

  return (
    <div>
      <div className='flex flex-col gap-6 p-20 px-3 max-w-8xl mx-auto '>
        <h1 className='text-6xl font-semibold lg:text-10xl md:text-8xl'>
          <span id="headerTitle" className='font-bold'>
            {`<h1>Ahoj 👋</h1>`}<br/>
          </span>
          <span id='headerText'>
            {'<h2>Vítejte na mém<br />'}{' '}
          </span>
          <span id='headerStyle'>
            {'BLOGU</h2>'}
          </span>
          <div className='wrapper text-xl lg:text-2xl'>
            <div className="box green"></div>
          </div>
        </h1>
        <p className='text-gray-500  sm:text-xl'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
      </div>
    </div>
  );
}