import Image from "next/image";
import React from "react";

const Deliver = () => {
  return (
    <section className="w-full bg-[#F4F4F4] py-12">
      <div className="max-w-[1700px] mx-auto px-6">
        <h1 className="text-[40px] text-center sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold text-[#333] mb-10">
            What We Deliver
        </h1>
        <div className="grid lg:grid-cols-[0.9fr_1.8fr_0.9fr] gap-6">
          {/* LEFT CARD */}

          <div className="relative h-[780px] rounded-[28px] overflow-hidden group cursor-pointer">
            <Image
              src="/images/image.png"
              fill
              alt=""
              className="object-cover duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8">
              {/* <h2 className="text-white text-[52px] font-semibold leading-[0.9] uppercase">
                LIVE,
                <br />
                WORK,
                <br />
                CREATE
              </h2> */}

              <p className="text-white text-4xl mt-10 tracking-wide">GROWTH</p>
            </div>
          </div>

          {/* CENTER VIDEO */}

          <div className="relative h-[780px] rounded-[28px] overflow-hidden group">
            <Image
              src="/images/image2.png"
              fill
              alt=""
              className="absolute w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-8 right-8 flex justify-between items-end">
              <div>
                <h1 className="text-white text-[50px] text-center font-normal leading-[1.3] uppercase">
                  STA
                  <br />
                  ND
                  <br />
                  OUT
                </h1>
              </div>

              <div className="max-w-[320px]">
                <h3 className="text-slate-200 text-[24px] leading-[1.6] font-semibold uppercase">
                  HOW TOBLERONE
                  <br />
                  SUPERCHARGED BRAND
                  <br />
                  RECALL BY 29%
                </h3>

                <div className="flex items-center gap-3 mt-8">
                  <span className="text-white text-[18px] font-medium uppercase">
                    Case Study
                  </span>

                  <div className="w-10 h-10 rounded-full bg-[#F5C443] flex items-center justify-center text-black text-xl">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}

          <div className="relative h-[780px] rounded-[28px] overflow-hidden group">
            <Image
              src="/images/image3.png"
              fill
              alt=""
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <h2 className="text-white text-5xl uppercase tracking-wide">
                FANDOM
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliver;
