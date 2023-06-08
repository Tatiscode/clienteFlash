import React from 'react'

import MenuUserF from './MenuUserF'
import FormPorfileUser from './FormPorfileUser'
import Header from '../../common/header/Header'

export default function DasboharUser() {
  return (
    <>
    <Header/>
   <div className="g">
    <MenuUserF/>
    <FormPorfileUser/>
   </div>
    </>
  )
}
