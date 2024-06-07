import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger,useGSAP);

const AnimatedLogo = () => {
  const pathsRef = useRef(null);

  useGSAP(() => {
    const paths = pathsRef.current.querySelectorAll("path");
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: pathsRef.current,
        start: "top botttom",
        end: "bottom top",
        toggleActions: "play",
      }
    });

    tl.fromTo(
      paths,
      { scale: 0, transformOrigin: "50% 50%", ease: "power1.in" },
      { scale: 1, duration: 1 }
    );
    return () => {
      tl.kill();
    }
  }, []);

  return (
    <div>
      <svg
        ref={pathsRef}
        width="86px"
        height="83px"
        viewBox="0 0 256 253"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g fill="#39FF14">
          <path d="M225.851155,150.373343 C214.647609,156.66347 202.455049,159.654247 190.460291,159.654247 C182.643127,159.654247 174.905085,158.356661 168.369682,155.753577 C156.422398,166.52987 143.56522,174.078022 137.093115,177.583086 C146.468964,192.457852 161.375378,203.890849 179.794768,208.479873 C185.491487,209.904052 191.211942,210.568669 196.821627,210.568669 C209.417705,210.568669 221.539056,207.11899 231.840622,201.572601 C233.367659,195.685992 234.127222,189.633229 234.127222,183.517168 C234.127222,172.266149 231.437104,160.896448 225.851155,150.373343"></path>
          <path d="M211.253314,61.6706874 C209.132869,75.8175386 203.008896,88.3977921 194.43217,97.7578172 C194.88316,100.242219 195.191732,102.963985 195.191732,105.812344 C195.152172,122.356565 186.615006,136.748691 175.949483,148.332019 C179.003557,148.7118 182.081368,148.925427 185.135442,148.925427 C200.342516,148.925427 215.668271,144.051568 228.636218,133.947804 C243.61384,122.198322 252.625733,105.622454 255.228817,88.7221886 C245.140877,75.4535816 230.321497,65.9353143 213.808925,61.781457 C212.954417,61.5994784 212.171119,61.2592578 211.300787,61.1089277 L211.253314,61.6706874"></path>
          <path d="M199.994383,49.5730726 C199.994383,30.5207138 192.493703,13.2564916 180.752133,0.755359169 L179.731471,0.755359169 C162.878679,0.755359169 148.114683,6.74482579 134.727394,18.8582649 C147.521275,32.4591805 152.11821,49.7075784 152.11821,66.9480642 C152.11821,68.3405954 152.070738,69.7173024 152.031177,71.0544489 C154.919097,70.3265348 157.830753,69.978402 160.694937,69.978402 L161.454499,69.978402 C172.460243,70.1999411 183.55302,75.6672085 189.914356,85.9687746 C196.291516,75.3190757 199.994383,62.8970643 199.994383,49.5730726"></path>
          <path d="M72.8467888,2.01338452 C71.7944783,2.01338452 70.7896405,2.01338452 70.4177713,1.80766968 C58.9056525,14.4512201 51.9904692,31.1536825 51.9904692,49.3515335 C51.9904692,49.6126331 51.9904692,49.8341722 51.8955238,49.9765901 C52.6946469,49.9765901 53.501682,49.9528538 54.3245413,49.9528538 C73.7171208,49.9528538 91.4639816,57.6750723 104.036323,70.1049958 C114.591077,70.848734 125.391106,76.4505073 131.079912,87.5670206 C134.133986,81.5933782 138.667625,77.225894 143.454451,74.9946792 C143.454451,74.2034683 143.486099,73.3726968 143.486099,72.5577496 C143.486099,53.0781369 135.42366,33.6459969 119.74186,19.7602453 C106.259626,7.81296052 89.5176028,2.01338452 72.8467888,2.01338452"></path>
          <path d="M92.6191496,71.1019215 C82.0248354,64.9225643 69.8560116,61.4570605 57.0779553,61.4570605 C52.9794828,61.4570605 48.8018892,61.8131054 44.6717682,62.5647558 C25.8963332,65.9353143 10.1987087,76.3792983 0,90.1147198 C2.7692382,107.10993 11.7494821,123.108215 26.2523781,134.414619 C36.8466923,120.204471 51.689809,111.026424 67.0313886,108.08312 C67.0313886,107.363118 66.9997402,106.556083 66.9997402,105.79652 C66.9680918,86.5463586 78.9312008,74.6228101 92.6191496,71.1019215"></path>
          <path d="M30.4932686,150.539497 C24.8835832,161.094251 22.2092904,172.384831 22.2092904,183.548817 C22.2092904,190.226637 23.1508313,196.817424 24.6066594,202.688209 C34.8844892,208.32163 46.5073775,211.351968 58.5179592,211.351968 C64.1909414,211.351968 69.9430448,210.671527 75.7426208,209.255259 C73.9623962,202.838539 73.0999763,196.437642 73.0999763,190.084219 C73.0999763,174.97209 77.8947145,160.469194 86.3923197,148.458613 C78.2032867,139.620787 71.2564549,129.160978 68.4001835,117.332375 C52.6550863,123.1636 38.9434012,134.564949 30.4932686,150.539497"></path>
          <path d="M128.48474,252.637354 C144.332695,245.785467 157.719984,233.205214 165.149454,216.352421 C147.078197,208.867566 133.730469,194.81566 126.973527,178.595836 C121.197688,175.612971 106.291274,167.265696 92.7061828,154.772476 C87.571224,164.733821 84.8415463,175.842422 84.8415463,187.172563 C84.8415463,196.769951 86.7483646,206.533494 90.9892551,215.869782 C98.7747705,233.315983 112.747555,245.999094 128.48474,252.637354"></path>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
