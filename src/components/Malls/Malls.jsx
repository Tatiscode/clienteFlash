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
      let response = await TodoGetApis.GetMalls(10);
      setMalls(response.data.rows);
      setLoad(false);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row  f_flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 32 32"
            >
              <path
                fill="gray"
                d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08Z"
              />
            </svg>
            <h2>Centros Comerciales</h2>
          </div>
          <div
            className="container-see "
            onClick={() => {
              window.location.href = "/AllMalls";
            }}
          >
            {/* <NavLink to="/AllStore"> */}
            <span>Ver Todas </span>
            {/* </NavLink> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.7 15.3q-.475.475-1.087.213T10 14.575v-5.15q0-.675.613-.938T11.7 8.7l2.6 2.6q.15.15.225.325T14.6 12q0 .2-.075.375t-.225.325l-2.6 2.6Z"
              />
            </svg>
          </div>
        </div>
      </div>
      {load ? (
        <div className=" flex justify-center items-center gap-6 my-10 ">
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
            <div className="mallsResponsive  flex justify-center items-center gap-6 my-10">
              {malls.map((x) => (
                <div className="boxMalls flex flex-col items-center ">
                  <div
                    className="imgMalls object-cover"
                    onClick={() => {
                      navigate(
                        `/OfficialStores/${x.id_admin}/0/${x.name_admin}`
                      );
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
