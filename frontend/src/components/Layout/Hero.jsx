import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/updated_hero.png";
import heroback from "../../assets/heroback.jpeg";

const Hero = () => {
  return (
    <div className="mt-5 mb-15">
      <div className="container mx-auto border border-gray-300">
        {/* RESPONSIVE layout */}
        <div className="flex flex-col sm:flex-row min-h-[280px] sm:min-h-[400px]">
          {/* LEFT */}
          <div className="relative w-full sm:w-1/2 flex items-center justify-center bg-gray-50 px-6 py-6 sm:py-0 overflow-hidden">
            {/* Background Image */}
            <img
              src={heroback}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10 blur-[2px]"
            />

            <div className="relative z-10 text-[#414141] max-w-md text-center sm:text-left">
              {/* top line */}
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#414141]"></span>
                <button
                  onClick={() => {
                    document
                      .getElementById("bestseller")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-medium hover:text-[#B76E79]"
                >
                  Explore Our Bestseller
                </button>
              </div>

              {/* heading */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">
                Welcome Cutie!
              </h1>

              {/* CTA */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Link
                  to="/collection/all"
                  className="text-sm font-semibold hover:text-[#B76E79]"
                >
                  SHOP NOW
                </Link>
                <span className="w-8 h-[1px] bg-[#414141]"></span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full sm:w-1/2 flex justify-center items-center p-4">
            <img
              src={heroImg}
              alt="hero"
              className="w-full max-w-[240px] sm:max-w-[350px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
