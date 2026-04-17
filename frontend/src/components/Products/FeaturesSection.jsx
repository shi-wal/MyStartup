import React from "react";
import { HiShoppingBag, HiSparkles, HiOutlineGift } from "react-icons/hi";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10 pb-10 bg-gradient-to-r from-[#F8EDEB] to-[#E8CFCB] ">

        {/* Feature 1 */}
        <div className="flex flex-col items-center hover:scale-105 transition">
        <div className="p-4 bg-white rounded-full shadow-md mb-4">
            <HiShoppingBag className="text-2xl text-[#B76E79]" />
        </div>
        <h4 className="tracking-tight mb-2 font-semibold text-gray-800">
            FREE SHIPPING
        </h4>
        <p className="text-gray-600 text-sm">
            On all orders above ₹499
        </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center hover:scale-105 transition">
        <div className="p-4 bg-white rounded-full shadow-md mb-4">
            <HiSparkles className="text-2xl text-[#B76E79]" />
        </div>
        <h4 className="tracking-tight mb-2 font-semibold text-gray-800">
            HANDMADE WITH LOVE
        </h4>
        <p className="text-gray-600 text-sm">
            Every product is uniquely crafted
        </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center hover:scale-105 transition">
        <div className="p-4 bg-white rounded-full shadow-md mb-4">
            <HiOutlineGift className="text-2xl text-[#B76E79]" />
        </div>
        <h4 className="tracking-tight mb-2 font-semibold text-gray-800">
            PERFECT FOR GIFTING
        </h4>
        <p className="text-gray-600 text-sm">
            Thoughtful gifts for every occasion
        </p>
        </div>

    </div>
    </section>
  );
};

export default FeaturesSection;