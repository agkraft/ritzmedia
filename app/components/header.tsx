import React from "react";
import { Menu } from "lucide-react";
import Hero from "./hero";

const Header = () => {
  return (
    <main className="min-h-screen bg-[#0D123B] text-white relative overflow-hidden">
      <div className="top-0 left-0 w-full h-full">
        <div className="max-w-[1500px] mx-auto px-10 md:px-14 py-10 flex items-center justify-between">
          {/* Logo */}

          <h1 className="text-[20px] md:text-[40px] font-bold tracking-tight">
            <span className="text-[#D79A2B]">RITZ</span>{" "}
            <span className="text-[#D79A2B]">MEDIA</span>{" "}
            <span className="font-light text-[#D79A2B]">WORLD</span>
          </h1>

          {/* Navigation */}

          <div className="flex items-center gap-16">
            <nav className="hidden lg:flex gap-14 uppercase text-[18px] tracking-widest">
              <a href="#" className="hover:text-[#D79A2B] duration-300">
                Work
              </a>

              <a href="#" className="hover:text-[#D79A2B] duration-300">
                About
              </a>

              <a href="#" className="hover:text-[#D79A2B] duration-300">
                Get In Touch
              </a>
            </nav>

            <button>
              <Menu size={42} />
            </button>
          </div>
        </div>
      </div>
      
      <Hero />
    </main>
  );
};

export default Header;
