import Image from "next/image";
import React from "react";

const Think = () => {
  return (
    <section className="w-full bg-[#F4F4F4] py-12">
      <div className="max-w-[1700px] mx-auto px-6">
        <h1 className="text-[40px] text-center sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold text-[#333] mb-10 uppercase">
          Think, create, celebrate
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT */}

          <div className="relative h-[806px] overflow-hidden rounded-[28px] group">
            <Image
              src="/images/image7.png"
              fill
              alt=""
              className="transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* RIGHT */}

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-[210px] rounded-[28px] overflow-hidden group">
                <Image
                  src="/images/image8.png"
                  fill
                  alt=""
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative h-[210px] rounded-[28px] overflow-hidden group">
                <Image
                  src="/images/image6.png"
                  fill
                  alt=""
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="relative flex-1 min-h-[460px] rounded-[28px] overflow-hidden group">
              <Image
                src="/images/image5.png"
                fill
                alt=""
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Button */}

        <div className="flex justify-center mt-14">
          <button className="border border-black rounded-full px-12 py-5 uppercase tracking-[3px] text-lg flex items-center gap-4 hover:bg-black hover:text-white transition">
            LOAD MORE IMAGES
            <span className="text-2xl">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Think;
