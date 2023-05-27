import { React ,useState,useEffect} from "react";
import '../../App.css'
import {TodoGetApis} from "../../Apis/Apis"

function Malls() {
  const [malls, setMalls]= useState([]);

  // useEffect(()=>{
  //   (async () => {
  //     let response = await TodoGetApis.GetMalls();
  
      
  //   })()
  // }, [])
  return (
    <>
      <div className=" flex  items-center ml-[70px] mt-10">
        <svg className='mr-3'
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="gray"
            d="M19 2H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9.424c.618-.735 1-1.692 1-2.746V5c0-1.654-1.346-3-3-3zm1 3v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1zM10 8V4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831V5zm6 11H6v-3h4v3z"
          />
        </svg>
        <h2 className="text-[25px]  ">Centros Comerciales</h2>
      </div>
      <div className="flex justify-center items-center gap-6 my-10">
        <div className="boxMalls ">
          <div className="imgMalls ">
            <img
              src="https://res.cloudinary.com/anonimous/image/upload/c_scale,h_300,w_300/v1684930351/descarga_1_ugcbif.jpg"
              alt=""
            />
          </div>
          <h4>Nombre</h4>
        </div>
        <div className="boxMalls ">
          <div className="imgMalls ">
            <img
              src="https://res.cloudinary.com/anonimous/image/upload/c_scale,h_300,w_300/v1684930351/descarga_1_ugcbif.jpg"
              alt=""
            />
          </div>
          <h4>Nombre</h4>
        </div>
        <div className="boxMalls ">
          <div className="imgMalls ">
            <img
              src="https://res.cloudinary.com/anonimous/image/upload/c_scale,h_300,w_300/v1684930351/descarga_1_ugcbif.jpg"
              alt=""
            />
          </div>
          <h4>Nombre</h4>
        </div>
        <div className="boxMalls ">
          <div className="imgMalls ">
            <img
              src="https://res.cloudinary.com/anonimous/image/upload/c_scale,h_300,w_300/v1684930351/descarga_1_ugcbif.jpg"
              alt=""
            />
          </div>
          <h4>Nombre</h4>
        </div>
        <div className="boxMalls ">
          <div className="imgMalls ">
            <img
              src="https://res.cloudinary.com/anonimous/image/upload/c_scale,h_300,w_300/v1684930351/descarga_1_ugcbif.jpg"
              alt=""
            />
          </div>

          <h4>Nombre</h4>
        </div>
        <div className="boxMalls ">
          <div className="imgMalls ">
            <img
              src="https://res.cloudinary.com/anonimous/image/upload/c_scale,h_300,w_300/v1684930351/descarga_1_ugcbif.jpg"
              alt=""
            />
          </div>

          <h4>Nombre</h4>
        </div>
        <div className="boxMalls ">
          <div className="imgMalls ">
            <img
              src="https://res.cloudinary.com/anonimous/image/upload/c_scale,h_300,w_300/v1684930351/descarga_1_ugcbif.jpg"
              alt=""
            />
          </div>
          <h4>Nombre</h4>
        </div>
        <div className="boxMalls ">
          <div className="imgMalls ">
            <img
              src="https://res.cloudinary.com/anonimous/image/upload/c_scale,h_300,w_300/v1684930351/descarga_1_ugcbif.jpg"
              alt=""
            />
          </div>
          <h4>Nombre</h4>
        </div>
      </div>
    </>
  );
}

export default Malls
