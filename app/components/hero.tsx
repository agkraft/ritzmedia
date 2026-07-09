"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-word", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
      })
   
        .from(
          ".hero-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        )
        .from(
          ".hero-logo",
          {
            scale: 0.85,
            opacity: 0,
            duration: 1,
          },
          "-=0.4"
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-[1500px] w-full px-5 sm:px-8 md:px-10 lg:px-12 flex flex-col items-center justify-center gap-6">
        {/* Heading */}
        <div className="space-y-2 md:space-y-3 text-center uppercase font-light leading-[1]">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-x-8 md:gap-x-12 lg:gap-x-24 xl:gap-x-36">
            <span className="hero-word inline-block text-[42px] sm:text-[55px] md:text-[65px] lg:text-[80px] xl:text-[95px]">
              17
            </span>

            <span className="hero-word inline-block text-[42px] sm:text-[55px] md:text-[65px] lg:text-[80px] xl:text-[95px]">
              Years
            </span>

            <span className="hero-word inline-block text-[42px] sm:text-[55px] md:text-[65px] lg:text-[80px] xl:text-[95px] text-[#D79A2B]">
              Of
            </span>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-x-8 md:gap-x-10 lg:gap-x-20 xl:gap-x-28">
            <span className="hero-word inline-block text-[42px] sm:text-[55px] md:text-[65px] lg:text-[80px] xl:text-[95px]">
              Making
            </span>

            <span className="hero-word inline-block text-[42px] sm:text-[55px] md:text-[65px] lg:text-[80px] xl:text-[95px]">
              Brands
            </span>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-x-8 md:gap-x-10 lg:gap-x-16 xl:gap-x-24">
            <span className="hero-word inline-block text-[42px] sm:text-[55px] md:text-[65px] lg:text-[80px] xl:text-[95px]">
              <span className="text-[#D79A2B]">Im</span>possible
            </span>

            <span className="hero-word inline-block text-[42px] sm:text-[55px] md:text-[65px] lg:text-[80px] xl:text-[95px]">
              To
            </span>

            <span className="hero-word inline-block text-[42px] sm:text-[55px] md:text-[65px] lg:text-[80px] xl:text-[95px]">
              Ignore
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="hero-subtitle text-center">
          <p className="max-w-5xl mx-auto text-white italic font-normal leading-relaxed text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] px-4">
            Fuelled by a magnetic culture of hustle and heart,
            <br className="hidden sm:block" />
            backed by the belief that great ideas change the world
          </p>
        </div>

        {/* Background Shape */}
        <div className="hero-logo">
          <Image
            src="/images/logo.png"
            alt=""
            className="w-[180px] sm:w-[260px] md:w-[350px] lg:w-[450px] xl:w-[550px]"
            width={550}
            height={550}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;