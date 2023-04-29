import React from "react";

export default function Campaigns() {
  return (
    <div className="">
      <div className="bg-[#D4CED0] mt-10">
        <div className=" flex md:flex-row flex-col  max-w-[1140px] mx-auto md:justify-between">
          <div className="w-full ">
            <img
              className="h-[300px] md:block hidden mx-auto w-[1200px] object-contain"
              src="	https://html.design/demo/famms/images/arrival-bg.png"
              alt=""
            />
          </div>
          <div className="flex-col my-auto">
            <h2 className=" text-4xl md:text-5xl font-bold text-center text-gray-800">
              #NEW Arrivals
            </h2>
            <p className="mt-6 text-sm md:text-lg text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aspernatur animi nihil nobis, accusamus accusantium qui
              architecto. Accusantium minus rerum quam in provident, odit
              facilis?
            </p>
            <button className="bg-red-500 w-36 sm:w-44 text-white  border border-red-500 mt-6 h-12 hover:bg-gray-300 hover:text-red-500 transition-all font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
