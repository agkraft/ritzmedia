"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function HustleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
  
      gsap.from(".hustle-heading-word", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hustle-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".hustle-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hustle-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".hustle-card", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hustle-cards",
          start: "top 80%",
          once: true,
        },
      });
      gsap.to(".hustle-heading", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hustle-image-left", {
        y: -140,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hustle-image-mid", {
        y: -90,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hustle-image-right", {
        y: -110,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Heading */}

        <div className="text-center">
          <h2
            className="
            hustle-heading
            uppercase
            leading-none
            tracking-[10px]
            text-[58px]
            sm:text-[80px]
            md:text-[150px]
            font-semibold
            "
          >
            <span className="hustle-heading-word inline-block text-[#222]">HUSTLE</span>

            <span className="hustle-heading-word inline-block text-[#BBBBBB]"> &amp; HEA</span>
          </h2>

          <p
            className="
            hustle-subtitle
            mt-8
            max-w-4xl
            mx-auto
            text-[#3d3d3d]
            text-xl
            md:text-3xl
            leading-relaxed
            px-6
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          hustle-cards
          mt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          {/* Left */}

          <div className="hustle-card relative h-[520px] overflow-hidden rounded-[28px] group">
            <Image
              src="/images/maskgroup.png"
              fill
              alt=""
              className="hustle-image-left object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* CTA */}

          <div
            className="
            hustle-card
            bg-[#11163A]
            rounded-[28px]
            p-10
            flex
            flex-col
            justify-between
            h-[520px]
            "
          >
            <div>
              <h3
                className="
                text-white
                font-bold
                uppercase
                leading-none
                text-5xl
                md:text-6xl
                "
              >
                NEWS &
                <br />
                VIEWS
              </h3>
            </div>

            <button
              className="bg-white inline-flex items-center
              gap-4
              rounded-md
              px-6
              py-4
              text-xl
              w-fit
              hover:bg-gray-100
              transition
              "
            >
              Linkedin
              <ArrowUpRight size={24} />
            </button>
          </div>

          {/* Middle */}

          <div className="hustle-card relative h-[520px] rounded-[28px] overflow-hidden group">
            <Image
              src="/images/group.png"
              fill
              alt=""
              className="hustle-image-mid object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right */}

          <div className="hustle-card relative h-[520px] rounded-[28px] overflow-hidden group">
            <Image
              src="/images/group1.png"
              fill
              alt=""
              className="hustle-image-right object-cover transition duration-700 group-hover:scale-105 grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}