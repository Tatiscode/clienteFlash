import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";
import { TodoGetApis } from "../../Apis/Apis";

const TopCart = () => {
  const [store, setStores] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetStores();
      console.log("store:  ", response.data);
      setStores(response.data.error);
    })();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {store.map((value) => {
          return (
            <>
              <div className="box product h-[300px] border relative">
                <div className="h-full flex flex-col ">
                  <div className="nametop d_flex">
                    <span className="tleft">{value.name_store}</span>
                    <div className="bg-gray-100 text-black absolute  m-auto right-0 m-3 rounded-md p-1 z-50 top-[14rem]">{value.location_store}</div>
                  </div>
                  <div className="img bg-red-400">
                    <img
                      src={value.img_store}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
