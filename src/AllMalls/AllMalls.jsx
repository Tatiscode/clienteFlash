import React, { useEffect, useState } from 'react'
import { TodoGetApis } from '../Apis/Apis';

function AllMalls() {
    const [store,setStores] = useState([])
    let limit = 0;
    useEffect(() => {
        (async () => {
         
          const response = await TodoGetApis.GetMalls(limit);
          setStores(response.data.rows);
         console.log("________________",response.data);
        })();
      }, []);
  return (
    <>
    <div className="">
    <div className="">
    <p className='text-3xl text-gray-600 ml-6 my-5'> Centros Comerciales</p>
    </div>
    <div className="grid gap-6 grid-cols-7 ">
   
     {store.map((value) => {
        return (

          
            <div className=" w-[180px] flex justify-center  items-center" onClick={() => {
              window.location.href = `/OfficialStores/${value.id_admin}/0/${value.name_admin}`;
            }}>
              
                
             
              <div className="">
                <div className="rounded-full overflow-hidden imgMalls object-cover mb-5 boxShadow">
                  <img
                    className=""
                    src={value.img_admin}
                    alt=""
                  />
                </div>
              
              <span className="flex justify-center mt-4 text-gray-700 text-lg">
                {value.name_admin}
              </span>
              </div>
              </div>
           
            
        
        );
      })}
    </div>
    </div>
    </>
  )
}

export default AllMalls;