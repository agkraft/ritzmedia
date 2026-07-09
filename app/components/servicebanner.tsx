"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const services = [
  { text: "DIGITAL MARKETING", x: "4%", y: "5%" },
  { text: "CREATIVE SERVICE", x: "52%", y: "6%" },
  { text: "PRINT ADVERTISEMENT", x: "10%", y: "18%" },
  { text: "RADIO ADVERTISEMENT", x: "61%", y: "18%" },
  { text: "CONTENT MARKETING", x: "13%", y: "33%" },
  { text: "WEB DEVELOPMENT", x: "60%", y: "33%" },
  { text: "INFLUENCER MARKETING", x: "0%", y: "46%" },
  { text: "CELEBRITY ENDORSEMENT", x: "48%", y: "46%" },
  { text: "CREATIVE SERVICE", x: "16%", y: "59%" },
  { text: "PRINT ADVERTISEMENT", x: "54%", y: "59%" },
  { text: "CELEBRITY ENDORSEMENT", x: "4%", y: "76%" },
  { text: "RADIO ADVERTISEMENT", x: "56%", y: "76%" },
  { text: "INFLUENCER MARKETING", x: "0%", y: "90%" },
  { text: "DIGITAL MARKETING", x: "50%", y: "96%" },
  { text: "CONTENT MARKETING", x: "4%", y: "65%" },
  { text: "WEB DEVELOPMENT", x: "60%", y: "65%" },
  { text: "PRINT ADVERTISEMENT", x: "10%", y: "80%" },
  { text: "RADIO ADVERTISEMENT", x: "61%", y: "80%" },

  
  
];

export default function ServicesHero() {
  const container = useRef<HTMLDivElement>(null);

  const bg = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState("PRINT ADVERTISEMENT");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bg.current, {
        scale: 1.15,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      gsap.utils.toArray<HTMLElement>(".service-item").forEach((item) => {
        gsap.to(item, {
          y: "+=12",
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.from(".service-item", {
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        y: 30,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div
        ref={bg}
        className="absolute inset-0"
      >
        <Image
          src="/images/banner.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#79230d]/75 backdrop-blur-[1px]" />

      {services.map((item, index) => (
        <h2
          key={index}
          onMouseEnter={() => setActive(item.text)}
          style={{
            left: item.x,
            top: item.y,
          }}
          className={`
              service-item
              absolute
              cursor-pointer
              uppercase
              whitespace-nowrap
              font-bold
              tracking-tight
              transition-all
              duration-500

              text-[22px]
              md:text-[40px]
              lg:text-[64px]

              ${
                active === item.text
                  ? "text-white"
                  : "text-white/25 hover:text-white"
              }
            `}
        >
          {item.text}
        </h2>
      ))}
    </section>
  );
}