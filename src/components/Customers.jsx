import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Customers() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="h-[600px]">
      <div className="text-center text-6xl mt-8 text-black font-bold">
        <h1>Customer's Testimonial</h1>
      </div>
      <div className="mt-16">
        <Slider {...settings}>
          <div className="">
            <div className="text-center  ">
              <div className="flex justify-center">
                <img
                  className="rounded-full w-40"
                  src="https://html.design/demo/famms/images/client.jpg"
                  alt=""
                />
              </div>
              <h2 className="mt-4 text-black font-semibold text-2xl">
                Anna Trevor
              </h2>
              <p className="text-gray-500">Customer</p>
              <div className="">
                <p className="text-gray-600 text-center">
                  Dignissimos reprehenderit repellendus nobis error <br />{" "}
                  quibusdam? Atque animi sint unde quis reprehenderit, et,
                  perspiciatis, debitis totam est deserunt eius officiis ipsum
                  ducimus ad labore modi <br /> voluptatibus accusantium
                  sapiente nam! Quaerat.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-center  ">
              <div className="flex justify-center">
                <img
                  className="rounded-full w-40"
                  src="https://html.design/demo/famms/images/client.jpg"
                  alt=""
                />
              </div>
              <h2 className="mt-4 text-black font-semibold text-2xl">
                Anna Trevor
              </h2>
              <p className="text-gray-500">Customer</p>
              <div className="">
                <p className="text-gray-600 text-center">
                  Dignissimos reprehenderit repellendus nobis error <br />{" "}
                  quibusdam? Atque animi sint unde quis reprehenderit, et,
                  perspiciatis, debitis totam est deserunt eius officiis ipsum
                  ducimus ad labore modi <br /> voluptatibus accusantium
                  sapiente nam! Quaerat.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-center  ">
              <div className="flex justify-center">
                <img
                  className="rounded-full w-40"
                  src="https://html.design/demo/famms/images/client.jpg"
                  alt=""
                />
              </div>
              <h2 className="mt-4 text-black font-semibold text-2xl">
                Anna Trevor
              </h2>
              <p className="text-gray-500">Customer</p>
              <div className="">
                <p className="text-gray-600 text-center">
                  Dignissimos reprehenderit repellendus nobis error <br />{" "}
                  quibusdam? Atque animi sint unde quis reprehenderit, et,
                  perspiciatis, debitis totam est deserunt eius officiis ipsum
                  ducimus ad labore modi <br /> voluptatibus accusantium
                  sapiente nam! Quaerat.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
