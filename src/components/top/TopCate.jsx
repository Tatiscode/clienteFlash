import React from "react"
import "./style.css"
import '../../App.css'
import TopCart from "./TopCart"
import { NavLink, useNavigate } from "react-router-dom"

const TopCate = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="TopCate background bg-white">
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
              <h2>Tiendas Oficiales</h2>
            </div>
            <div className="container-see " onClick={()=>{
  window.location.href = "/AllStores"
            }}>
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
          <div className="flex z-auto  stoeeee">
            <TopCart />
          </div>
        </div>
      </section>
    </>
  );
}

export default TopCate
