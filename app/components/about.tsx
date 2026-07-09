"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {

      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".about-logo-desktop", {
        scrollTrigger: {
          trigger: ".about-logo-desktop",
          start: "top 80%",
          once: true,
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".about-logo-mobile", {
        scrollTrigger: {
          trigger: ".about-logo-mobile",
          start: "top 85%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      const disRupTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      disRupTl.from(".dis-rup-word", {
        y: 60,
        opacity: 0,
        rotate: 2,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".dis-rup-row",
          start: "top 70%",
          once: true,
        },
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".dis-rup-row",
          start: "top 60%",
          end: "+=120%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })
        .fromTo(
          ".dis-rup-video",
          { scale: 0.45, opacity: 0.6 },
          { scale: 1, opacity: 1, ease: "none" },
          0
        )
        .fromTo(
          ".dis-word-left",
          { x: 0 },
          { x: -60, ease: "none" },
          0
        )
        .fromTo(
          ".dis-word-right",
          { x: 0 },
          { x: 60, ease: "none" },
          0
        );

      gsap.from(".about-tion", {
        scrollTrigger: {
          trigger: ".about-tion",
          start: "top 85%",
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F4F4F4] overflow-hidden py-16 md:py-24"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        {/* Top Heading */}
        <div className="about-heading text-center max-w-5xl mx-auto">
          <h2 className="text-[24px] sm:text-[34px] md:text-[48px] lg:text-[60px] font-light leading-tight text-[#333]">
            The world&apos;s largest independent brand agency,
            <br />
            17 years in the making.
          </h2>

          <h3 className="mt-8 text-[22px] sm:text-[34px] md:text-[52px] lg:text-[70px] font-bold uppercase text-[#333]">
            We Create Desire Through
          </h3>
        </div>

        {/* Main Content */}
        <div className="relative mt-10 lg:mt-16">
          {/* Left Logo */}
          <div className="about-logo-desktop hidden lg:block absolute left-0 top-0">
            <Image
              src="/images/ritz.png"
              alt="Logo"
              width={220}
              height={320}
              className="object-contain"
            />
          </div>

          {/* Mobile Logo */}
          <div className="about-logo-mobile flex justify-center lg:hidden mb-10">
            <Image src="/images/ritz.png" alt="Logo" width={130} height={170} />
          </div>

          {/* DIS + VIDEO + RUP */}
          <div className="dis-rup-row flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
            <span className="dis-rup-word dis-word-left inline-block text-[60px] sm:text-[90px] md:text-[130px] lg:text-[170px] xl:text-[220px] font-bold uppercase leading-none tracking-tight text-[#333]">
              DIS
            </span>

            <video
              width="320"
              height="240"
              controls
              preload="none"
              className="dis-rup-video w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-auto rounded-xl object-cover"
            >
              <source src="/images/desktop-vd.mp4" type="video/mp4" />
              <track
                src="/images/desktop-vd.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>

            <span className="dis-rup-word dis-word-right inline-block text-[60px] sm:text-[90px] md:text-[170px] font-bold uppercase leading-none tracking-tight text-[#333]">
              RUP
            </span>
          </div>

          {/* TION */}
          <div className="about-tion flex justify-center mt-2 lg:mt-4">
            <span className="text-[60px] sm:text-[90px] md:text-[170px] font-bold uppercase leading-none tracking-tight text-[#333]">
              TION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;