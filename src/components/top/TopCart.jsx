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

  useEffect(() => {
    (async () => {
      setLoad(true);
      const response = await TodoGetApis.GetStores(10);
      setStores(response.data.data);
      setLoad(false);
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
          <div className="my-10">
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

            <div className=" w-full gap-6 flex justify-center  pr-7 flex-col items-center" onClick={() => {
              window.location.href = `/Offers/${value.id_store}/${value.name_store}`;
            }}>
              
                
             
              <div className="">
                <div className="rounded-full overflow-hidden imgMalls object-cover mb-5 boxShadow">
                  <img
                    className=""
                    src={value.img_store}
                    alt=""
                  />
                </div>
              
              <span className="flex justify-center mt-4 text-gray-700 text-lg">
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
