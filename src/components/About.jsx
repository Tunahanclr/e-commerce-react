import React from "react";
import {FaShippingFast,FaRegMoneyBillAlt} from "react-icons/fa"
import {MdHighQuality} from "react-icons/md"
export default function About() {
  return (
    <div className="max-w-[1140px] mx-auto bg-white mt-20">
      <h1 className="text-black text-6xl font-bold text-center">
        Why Shop With Us
      </h1>
      <div className="grid gap-4 md:gap-9  text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-[#002C3E] rounded flex flex-col justify-center items-center w-[257] h-60 mt-10">
            <FaShippingFast className="text-white text-3xl"/>
          <h3 className="text-white text-2xl font-bold mt-4">Fast Delivery</h3>
          <p className="text-white/90 text-xl w-60">variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="bg-[#002C3E] rounded flex flex-col justify-center items-center w-[257] h-60 mt-10">
            <FaRegMoneyBillAlt className="text-white text-3xl"/>
          <h3 className="text-white text-2xl font-bold mt-4">Free Shipping</h3>
          <p className="text-white/90 text-xl w-60">variations of passages of Lorem Ipsum available
</p>
        </div>
        <div className="bg-[#002C3E] rounded flex flex-col justify-center items-center w-[257] h-60 mt-10">
            <MdHighQuality className="text-white text-3xl"/>
          <h3 className="text-white text-2xl font-bold mt-4">Best Quality
</h3>
          <p className="text-white/90 text-xl w-60">variations of passages of Lorem Ipsum available</p>
        </div>
      </div>
    </div>
  );
}
