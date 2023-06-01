import { React, useState, useEffect } from "react";
import "../../App.css";
import { TodoGetApis } from "../../Apis/Apis";
import { NavLink, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Malls() {
  const [malls, setMalls] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoad(true);
      let response = await TodoGetApis.GetMalls();
      setMalls(response.data.rows);
      setLoad(false);
    })();
  }, []);

  return (
    <>
      <div className=" flex  items-center ml-[70px] mt-10">
        <svg
          className="mr-3"
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
      {load  ? (
        <div className="flex justify-center items-center gap-6 my-10 ">
          <div className="boxMalls flex flex-col items-center ">
            <div className="rounded-full h-full overflow-clip  ">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden ">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
        </div>
      ) : (
        <>
          {malls.length > 0 ? (
            <div className="flex justify-center items-center gap-6 my-10">
              {malls.map((x) => (
                <div className="boxMalls flex flex-col items-center">
                  <div
                    className="imgMalls object-cover"
                    onClick={() => {
                      navigate(`/OfficialStores/${x.id_admin}/0`);
                    }}
                  >
                    <img src={x.img_admin} alt="" />
                  </div>
                  <h4 className="mt-4 text-gray-700 text-lg">{x.name_admin}</h4>
                </div>
              ))}
            </div>
          ) : (
            <h1>No hay centros comerciales</h1>
          )}
        </>
      )}
    </>
  );
}

export default Malls;
