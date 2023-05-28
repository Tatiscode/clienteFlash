import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";
import { TodoGetApis } from "../../Apis/Apis";
import '../../App.css'

const TopCart = () => {
  const [store, setStores] = useState([]);
  console.log("tiendas", store)

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetStores();
      console.log("respuesta", response);
      setStores(response.data.data);
    })();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      {/* <Slider {...settings}> */}
        {store.map((value) => {
          return (
            <div className="">
              <div className="">
                <div className="">
                  {/* <div className="">{value.location_store}</div> */}
                </div>
                <div className="homeStoreMalls  p-4 h-[200px] w-[200px] flex items-center justify-center">
                  <div className="rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={value.img_store}
                      alt=""
                    />
                  </div>
                </div>
                <span className="flex justify-center text-gray-600 font-bold">{value.name_store}</span>
              </div>
            </div>
          );
        })}
      {/* </Slider> */}
    </>
  );
};

export default TopCart;
