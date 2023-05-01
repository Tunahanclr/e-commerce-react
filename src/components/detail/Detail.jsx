import React, { useState } from "react";

export default function Detail({ productDetail }) {
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };
  const addBasket = () => {};
  return (
    <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid items-center space-x-16 lg:grid-cols-2 lg:gap-8">
        <div className="aspect-w-3 flex justify-center aspect-h-4">
          <img
            className="object-contain h-[600px] rounded-lg shadow-lg"
            src={productDetail?.image}
            alt=""
          />
        </div>
        <div className="mt-8  lg:mt-0">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {productDetail?.title}
          </h2>
          <p className="mt-2 text-lg md:text-xl text-gray-500">
            {productDetail?.description}
          </p>
          <div className="mt-2 text-red-500">
            Count:{productDetail?.rating?.count}
          </div>
          <p className="mt-4 font-extrabold text-base md:text-4xl text-gray-900 ">
            {productDetail?.price}$
          </p>
          <div className="flex mt-2 gap-4 text-4xl">
            <span onClick={decrement} className="cursor-pointer font-bold">
              -
            </span>
            <input className="w-14 text-center" type="text" value={quantity} />
            <span onClick={increment} className="cursor-pointer font-bold">
              +
            </span>
          </div>
          <button
            onClick={addBasket}
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
