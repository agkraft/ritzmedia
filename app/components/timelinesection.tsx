"use client";

import Image from "next/image";

const timeline = [
  {
    year: "2008",
    title: "Foundation",
    image: "/images/ritz.png",
    description:
      "Ritz Media World launched with a mission to reimagine brand communication for India's growth markets.",
  },
  {
    year: "2012",
    title: "Innovation Leadership",
    image: "/images/mask.png",
    description:
      "Pioneered centrespread storytelling in Hindustan Times, setting new creative benchmarks for print.",
  },
  {
    year: "2016",
    title: "Digital Expansion",
    image: "/images/elips.png",
    description:
      "Scaled into 360° digital marketing, unifying performance, content, and automation for premium brands.",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-[36px] md:text-[56px] font-bold uppercase tracking-tight text-[#222]">
            17 YEARS OF BRAND EXCELLENCE
          </h2>

          <p className="mt-8 text-[28px] md:text-[36px] leading-tight font-serif text-[#2d2d2d]">
            From pioneering print innovations to 360° Digital Marketing,
            <br />
            our journey reflects our commitment to excellence.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-28">
          {/* Line */}

          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-gray-300" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative flex flex-col items-center text-center"
              >
                {/* Year */}

                <div className="bg-white px-4 relative z-10">
                  <h3 className="text-4xl font-bold">{item.year}</h3>
                </div>

                {/* Image */}

                <div className="relative mt-10">
                  <div className="w-[190px] h-[190px] rounded-full border border-gray-300 p-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        fill
                        alt={item.title}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}

                <h4 className="mt-8 text-[40px] md:text-[24px] font-medium text-[#333]">
                  {item.title}
                </h4>

                <p className="mt-5 max-w-sm text-[18px] text-[#777] leading-9 md:leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
