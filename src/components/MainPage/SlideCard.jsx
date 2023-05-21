import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function SlideCard() {
  return (
    <>
    <Swiper

spaceBetween={30}
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

      <div className="">
      <SwiperSlide  className="hadow_slider">
        <div className="relative   w-full flex flex-col">
        <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/c_scale,w_1200/v1684619195/Banner_de_moda_geom%C3%A9trico_rosa_y_azul_nwbwlf.png" alt="" 
        className="z-100"
        />
       <h1 className="shadow_slider">.</h1>
       
        </div>

      </SwiperSlide>
      </div>
      <SwiperSlide>
        <div className="relative   w-full flex flex-col">
        <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/c_scale,w_1200/v1684619368/banner_horizontal_promo_hamburguesa_anaranjado_ofmabe.png" alt="" />
        
        <h1 className="shadow_slider1">.</h1>
       
       </div>
      
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative   w-full flex flex-col">
        <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/c_scale,w_1200/v1684619519/Banner_horizontal_web_50_OFF_tienda_de_tecnolog%C3%ADa_gradiente_y_moderno_turquesa_y_azul_gndgmq.png" alt="" />
        <h1 className="shadow_slider2">.</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative   w-full flex flex-col">
        <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/c_scale,w_1200/v1684619594/Banner_Ropa_Y_Accesorios_Descuento_Rosado_rbfnrm.png" alt="" />
        <h1 className="shadow_slider3">.</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default SlideCard