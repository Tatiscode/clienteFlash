import React from 'react'
import '../../Login/user.css'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, NavLink, json } from 'react-router-dom'
import MenuEmployed from '../../MenuEmployed/MenuEmployed'


function DeleteSubcategory() {
  return (
    <>
    <MenuEmployed/>
 
    <div className="form-register">
    
    <Formik 
     
     initialValues={{
      nameUser:'',
      email:'',
      password:'',
     }}
     validationSchema={Yup.object({
      nameUser:Yup.string().required('Campo obligatorio') ,
      email:Yup.string().email('Email no valido').required('Campo obligatorio'),
      password:Yup.string().required('Campo obligatorio'),
     })}
     onSubmit={async (values)=>{
      
      alert(JSON.stringify(values.nameUser))
     }}

    >
      <Form>
      <h1>Eliminar Subcategoria</h1>
   
        <div className="campus">
        <span className="icons-from">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/></svg></span>
        <Field  className='input_forms' type='text' name='email' placeholder='E-mail Empleado'  />
        </div>
        <ErrorMessage component='p' name='email' className='error'/>
        <div className="campus">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></svg></span>
        <Field className='input_forms' type='password' name='password' placeholder='Contraseña Empleado'  />
        <span className='icons-forms'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"/></svg></span>
        {/* <span className='icons-forms'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></span> */}
        </div>
        <ErrorMessage component='p' name='password' className='error'/>
         <button className='pink'>Eliminar</button>
    


      </Form>
    </Formik>
   
   </div>

   </>
  )
}

export default DeleteSubcategory