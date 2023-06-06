import React, { useEffect, useState } from 'react'
import { TodoGetApis } from '../Apis/Apis';

function AllStore() {
    const [store,setStores] = useState([])
    let limit = 0;
    useEffect(() => {
        (async () => {
         
          const response = await TodoGetApis.GetStores(limit);
          setStores(response.data.data);
         console.log("________________",response.data);
        })();
      }, []);
  return (
    <>
    <div className="">
    <div className="">
    <p className='text-3xl text-gray-600 ml-6 my-5'> Tiendas</p>
    </div>
    <div className="grid gap-6 grid-cols-7 ">
   
     {store.map((value) => {
        return (

          
            <div className=" w-[180px] flex justify-center  items-center" onClick={() => {
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
           
            
        
        );
      })}
    </div>
    </div>
    </>
  )
}

export default AllStore