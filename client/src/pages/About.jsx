import React from "react";
import Section from "../components/Section";
import { BottomLine } from "../components/design/Hero";
import TextSlider from "../components/TextSlider";

export default function About() {
  return (
    <div>
    <Section className="pt-[5rem] mt-[2.25rem]" crosses paddings>
      <div className="relative max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
        <div className="flex justify-center items-center">
          <TextSlider />
        </div>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center">
          <h1 className="text-transparent text-stroker-1 text-stroke-custom mt-20 font-semibold text-4xl tracking-wider font-poppins">
            About Me
          </h1>
          <p className="font-semibold px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            doloribus debitis odit vero at eligendi dolorum dolor cupiditate
            aliquam, accusantium eveniet?
          </p>
        </div>
      </div>
      <BottomLine crosses paddings customPaddings/>
    </Section>
    <Section crosses>

    </Section>
    </div>
  );
}
