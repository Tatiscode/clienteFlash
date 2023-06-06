import React from "react"
import "./style.css"
import '../../App.css'
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className="TopCate background bg-white">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M5 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zm15.16 1.8c-.09-.46-.5-.8-.98-.8H4.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H4v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1s1-.45 1-1v-5h.18c.63 0 1.1-.58.98-1.2l-1-5zM12 18H6v-4h6v4z"
                />
              </svg>
              <h2>Tiendas Oficiales</h2>
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
