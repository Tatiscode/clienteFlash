import React from 'react'
import Header from '../common/header/Header'
import AllStore from '../AllStore/AllStore'
import { useParams } from 'react-router-dom'

function PageAllStore() {
  
  return (

    <>
   
    <Header/>
    <div className="flex justify-center">
     
    <AllStore/>
    </div>
    </>
  )
}

export default PageAllStore