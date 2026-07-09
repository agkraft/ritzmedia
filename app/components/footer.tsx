"use client";

import Image from "next/image";

const connectLinks = [
  "GET IN TOUCH",
  "INSTAGRAM",
  "LINKEDIN",
  "TWITTER",
  "YOUTUBE",
];

const menu = ["HOME", "WORK", "ABOUT", "SERVICES"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111633] text-white">
      {/* Watermark */}

      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt=""
          width={431}
          height={518}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-20">
        {/* Top */}

        <div className="grid lg:grid-cols-3 px-24">
          {/* Left */}

          <div className="flex flex-col items-center">
            <p className="text-[18px] font-medium text-gray-400">Connect</p>

            <div className="space-y-4 text-center mt-6">
              {connectLinks.map((item) => (
                <p
                  key={item}
                  className="block font-bold text-[18px] text-gray-400 transition text-center"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Center */}

          <div className="flex flex-col items-center">
            <div className="space-y-4 text-center">
              {menu.map((item) => (
                <p
                  key={item}
                  className="block mx-auto text-[40px] font-semibold text-gray-400 transition"
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Partner Logos */}

            <div className="mt-20 border border-white p-2">
              <div className="grid grid-cols-4 items-center gap-8">
                <Image src="/images/ins.png" width={120} height={60} alt="" />

                <Image src="/images/meta.png" width={140} height={60} alt="" />

                <Image src="/images/g.png" width={80} height={60} alt="" />

                <Image src="/images/ms.png" width={130} height={60} alt="" />
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="text-center lg:text-right">
            <div className="flex flex-col items-center">
              <p className="text-[18px] font-medium text-gray-400">Email</p>

              <h3 className="mt-5 text-[18px] font-bold text-gray-400">
                info@ritzmediaworld.com
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-[18px] font-medium mt-14 text-gray-400">
                Phone No.
              </p>

              <h3 className="mt-5 text-[18px] font-bold text-gray-400">
                +91 9220516777
                <span className="mx-4 text-gray-400 text-[18px]">|</span>
                +91 7290002168
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}

      <div className="border-t border-white/10" />

      {/* Middle */}

      <div className="relative z-10 py-4">
        <div className="grid grid-cols-[260px_1fr_420px] items-center">
          <div className="pl-16">
            <h2 className="text-[74px] font-bold leading-none">RITZ</h2>
          </div>

          <div className="text-center">
            <p className="uppercase text-[#B6B7C2] text-[18px] tracking-wide leading-[2]">
              DIGITAL MARKETING • CONTENT MARKETING • INFLUENCER MARKETING
              <br />
              WEB DEVELOPMENT • CREATIVE SERVICES • PRINT ADVERTISEMENT
            </p>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-[74px] font-bold whitespace-nowrap">
              MEDIAWORLD
            </h2>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10" />

      {/* Bottom */}

      <div className="relative z-10 py-2 pb-2 text-center text-2xl text-gray-500">
        © 2026 Ritz Media World. All rights reserved.
      </div>
    </footer>
  );
}
