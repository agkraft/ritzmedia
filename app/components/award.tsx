"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useRef } from "react";

const awards = [
  {
    year: "2024",
    image: "/images/et.png",
    title:
      "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
  {
    year: "2025",
    image: "/images/award.png",
    title:
      "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
  {
    year: "2026",
    image: "/images/big.png",
    title:
      "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
   {
    year: "2026",
    image: "/images/big.png",
    title:
      "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
   {
    year: "2026",
    image: "/images/big.png",
    title:
      "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
];

export default function Award() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#11163A] py-24">

      <div className="max-w-[1700px] mx-auto px-6">
        <h1 className="text-[40px] text-center sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold text-white mb-10 uppercase">
            Awards & Company <br /> Recognition
        </h1>

        <Swiper
          modules={[Navigation]}
          centeredSlides
          loop
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {awards.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`relative rounded-[28px] border border-[#2E3568]
                  bg-[#171D49]
                  overflow-hidden
                  transition-all duration-500
                  ${
                    isActive
                      ? "h-[500px] scale-100"
                      : "h-[416px] scale-95 opacity-90"
                  }`}
                >
                  {/* Year */}

                  <div className="absolute left-8 top-8 text-white text-4xl font-medium">
                    {item.year}
                  </div>

                  {/* Plus */}

                  <button className="absolute right-8 top-8 w-14 h-14 rounded-full bg-[#303974] flex items-center justify-center">

                    <Plus className="text-white w-8 h-8" />

                  </button>

                  {/* Laurel */}

                  {/* <Image
                    src="/awards/laurel.png"
                    alt=""
                    width={380}
                    height={200}
                    className="absolute opacity-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  /> */}

                  {/* Logo */}

                  <div className="flex justify-center mt-36">

                    <Image
                      src={item.image}
                      alt=""
                      width={180}
                      height={180}
                    />

                  </div>

                  {/* Text */}

                  <div className="absolute bottom-14 left-8 right-8">

                    <h3 className="text-white text-[18px] leading-tight text-center">
                      {item.title}
                    </h3>

                  </div>

                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}

        <div className="flex justify-center gap-6 mt-16">

          <button
            ref={prevRef}
            className="w-24 h-24 rounded-full border border-[#2D3468] text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <ChevronLeft size={38} />
          </button>

          <button
            ref={nextRef}
            className="w-24 h-24 rounded-full border border-[#2D3468] text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <ChevronRight size={38} />
          </button>

        </div>

      </div>

    </section>
  );
}