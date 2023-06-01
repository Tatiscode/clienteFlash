import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";
import { TodoGetApis } from "../../Apis/Apis";
import "../../App.css";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TopCart = () => {
  const [store, setStores] = useState([]);
  const [load, setLoad] = useState(false);
  console.log("tiendas", store);

  useEffect(() => {
    (async () => {
      setLoad(true)
      const response = await TodoGetApis.GetStores();
      console.log("respuesta", response);
      setStores(response.data.data);
      setLoad(false)
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
            {load  ?(
               <div className="flex justify-center items-center  my-10 ">
               
               <div className="boxMalls   flex flex-col justify-center items-center">
                 <div className="rounded-full overflow-hidden  m-2">
                   <Skeleton width={180} height={180}   />
                 </div>
                 <div className="flex  ">
                 <Skeleton width={100} />
                 </div>
               </div>

             </div>
            ):(

            <div className="storesResponsive" onClick={() => {
              window.location.href = `/Offers/${value.id_store}`;
            }}>
              <div className="stoeeee">
                {/* <div className="">{value.location_store}</div> */}
             
              <div className="homeStoreMalls  p-4 h-[200px] w-[200px] flex items-center justify-center">
                <div className="rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={value.img_store}
                    alt=""
                  />
                </div>
              </div>
              <span className="flex justify-center text-gray-600 font-bold">
                {value.name_store}
              </span>
              </div>
            </div>
            )}
          </div>
        );
      })}
      {/* </Slider> */}
    </>
  );
};

export default TopCart;
