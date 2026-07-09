"use client";

import Image from "next/image";
import { useRef } from "react";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const awards = [
  {
    year: "2024",
    image: "/images/et.png",
    title: "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
  {
    year: "2025",
    image: "/images/award.png",
    title: "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
  {
    year: "2026",
    image: "/images/big.png",
    title: "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
  {
    year: "2027",
    image: "/images/big.png",
    title: "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
  {
    year: "2028",
    image: "/images/big.png",
    title: "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
];

export default function Award() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#11163A] py-24">
      <div className="max-w-[1700px] mx-auto px-6">
        <h1 className="text-center text-white uppercase font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] mb-16">
          Awards & Company
          <br />
          Recognition
        </h1>

        <Swiper
          modules={[Navigation]}
          loop
          centeredSlides
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
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
                  className={`relative rounded-[28px] overflow-hidden border border-[#2E3568] bg-[#171D49] transition-all duration-500 ${
                    isActive
                      ? "h-[500px] scale-100"
                      : "h-[420px] scale-95 opacity-80"
                  }`}
                >
                  {/* Year */}

                  <div className="absolute left-8 top-8 text-white text-4xl font-semibold">
                    {item.year}
                  </div>

                  {/* Plus */}

                  <button className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#303974] transition hover:bg-white hover:text-black">
                    <Plus size={28} />
                  </button>

                  {/* Logo */}

                  <div className="mt-32 flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>

                  {/* Text */}

                  <div className="absolute bottom-10 left-8 right-8">
                    <h3 className="text-center text-[20px] leading-8 text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}

        <div className="mt-16 flex justify-center gap-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-[#2E3568] text-white transition hover:bg-white hover:text-black"
          >
            <ChevronLeft size={34} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-[#2E3568] text-white transition hover:bg-white hover:text-black"
          >
            <ChevronRight size={34} />
          </button>
        </div>
      </div>
    </section>
  );
}