import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TodoGetApis } from "../../Apis/Apis";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";



const Categories = () => {
  const [category, setCategory]=useState([])
  
  const [load, setLoad] = useState(false);
  useEffect(() => {
  (async () => {
    setLoad(true);
    let response = await TodoGetApis.getCategory();
    setCategory(response.data.rows);
    setLoad(false);
  })();
}, []);

  return (
    <>
      {load ? (
        <div className="category flex">
          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />
        </div>
      ) : category.length > 0 ? (
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

            {category.map((items) => (
              <SwiperSlide>
                <div
                  className="box f_flex"
                  onClick={()=>{
                    window.location.href =
                      "/SingleCategory/" + items.id_category+"/" + items.name_category;
                  }}
                >
                  {/* <img src="" alt="" /> */}
                  <span>{items.name_category}</span>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
      ) : (
        <h1>No hay categorias</h1>
      )}
    </>
  );
};

export default Categories;
