import React from "react";
import "../Login/user.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";
import { ToastContainer, toast } from "react-toastify";

function RecoverPasword() {
  const navigate = useNavigate();
  return (
    <div className="form-register1">
      <ToastContainer />
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email no valido")
            .required("Campo obligatorio"),
        })}
        onSubmit={async (values) => {
          try {
            const response = await TodoGetApis.RecoverPasword(values);

            if (response.status === 200) {
              toast.success("Email valido", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              navigate("/CodeRecoverPassword/" + values.email);
            } else {
              toast.error("Correo invalido", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          } catch (error) {
            toast.error("Correo invalido", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // setTimeout(()=>{
            //   window.location.href="/Login"
            // },2000)
          }
        }}
      >
        <Form className="form-horizontal"> 
          <div className="container-flecha">
            <svg
              className="flecha"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path
                fill="gray"
                d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"
              />
            </svg>
          </div>
          <h1>Recuperar Contraseña</h1>
         
          <ErrorMessage component="p" name="email" className="error" />
          <div className="campus">
            <span className="icons-from">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
                />
              </svg>
            </span>
            <Field
              className="input_forms"
              type="text"
              name="email"
              placeholder="E-mail"
            />
          </div>
          
          <button className="pink" style={{ color: "white" }}>
            Enviar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default RecoverPasword;
