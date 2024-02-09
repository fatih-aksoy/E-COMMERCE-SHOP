import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              Most Qualified Shoes here...
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
              itaque quae! Soluta libero tempora nulla hic iusto quam, fugit
              eaque odio natus repellendus dolor nam fugiat deserunt a
              laboriosam obcaecati!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 text-red-800">
              Details
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ae50d01-91ae-4738-bcfa-4de51c8a4d04/dunk-low-big-kids-shoes-RZGMsR.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              Most Qualified Shoes here...
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
              itaque quae! Soluta libero tempora nulla hic iusto quam, fugit
              eaque odio natus repellendus dolor nam fugiat deserunt a
              laboriosam obcaecati!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 text-red-800">
              Details
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d5edc475-2201-4294-b86b-e59fb64d8ce0/air-jordan-1-elevate-low-womens-shoes-Q630Pk.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
