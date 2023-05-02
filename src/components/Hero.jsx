import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full relative h-screen">
      <img
        className="  object-cover w-full h-full lg:h-screen"
        src="https://html.design/demo/famms/images/slider-bg.jpg"
        alt=""
      />
      <div className="absolute top-[24%] md:top-1/3  left-[50%] sm:left-[32%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-[1140px] text-center">
          <Slider {...settings}>
            <div>
              <div className="text-center">
                <h1 className="flex flex-col text-red-500 font-bold text-4xl sm:text-5xl md:text-7xl">
                  Sale 20% Off
                  <span className="text-blue-950 font-bold ">On Everything</span>
                </h1>
                <p className="w-full max-w-[400px] md:max-w-[600px] mx-auto mt-2 text-gray-600 text-sm sm:text-lg md:text-xl font-bold">
                  Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="bg-red-500 w-36 sm:w-44 text-white  border border-red-500 mt-2 h-12 hover:bg-gray-300 hover:text-red-500 transition-all font-bold">Shop Now</button>
              </div>
            </div>
            <div>
              <div className="text-center">
                <h1 className="flex flex-col text-red-500 font-bold text-4xl sm:text-5xl md:text-7xl">
                  Sale 20% Off
                  <span className="text-blue-950 font-bold ">On Everything</span>
                </h1>
                <p className="w-full max-w-[430px] md:max-w-[600px] mx-auto mt-2 text-gray-600 text-sm sm:text-lg md:text-xl font-bold">
                  Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="bg-red-500 w-36 sm:w-44 text-white  border border-red-500 mt-2 h-12 hover:bg-gray-300 hover:text-red-500 transition-all font-bold">Shop Now</button>

              </div>
              
            </div>
            <div className="text-center">
                <h1 className="flex flex-col text-red-500 font-bold text-4xl sm:text-5xl md:text-7xl">
                  Sale 20% Off
                  <span className="text-blue-950 font-bold ">On Everything</span>
                </h1>
                <p className="w-full max-w-[400px] md:max-w-[600px] mx-auto mt-2 text-gray-600 text-sm sm:text-lg md:text-xl font-bold">
                  Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="bg-red-500 w-36 sm:w-44 text-white  border border-red-500 mt-2 h-12 hover:bg-gray-300 hover:text-red-500 transition-all font-bold">Shop Now</button>
              </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
