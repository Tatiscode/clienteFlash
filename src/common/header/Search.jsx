import React, {useEffect} from "react"
//  import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import UserAfter from "./UserAfter"
// import {useState} from "react";
import UserBefore from "./UserBefore";

const Search = ({ CartItem }) => {
  // fixed Header
  // useEffect(() => {
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })
    
  // }, []);

  let getRol = localStorage.getItem("rol")

  console.log(getRol);
  return (
    <>
      <section className='search'>
        
        <div className='container c_flex'>
          <div className='logo width '>
           <img src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1684617706/logo-flash_mfb6x7.png" alt="" />
          </div>

          <div className='search-box'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="gray" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"/></svg>
            </span>
            <input type='text' placeholder='Buscar' />
            
          </div>

          

          <div className='icon f_flex width'>
            {

              getRol === null ? <UserBefore/> : <UserAfter/>
            }

          
          {/* <UserAfter/> */}
            {/* </Link> */}
            <div className='cart'>
              <Link to='/cart'>
                <span className=' icon-circle2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/></svg>
                </span>
                
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




export default Search