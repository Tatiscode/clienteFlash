import React, { useState } from "react";
import "./user.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useParams } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";
import { ToastContainer, toast } from "react-toastify";

export default function User() {
  let token = useParams();
  console.log(token);
  const [status, setStatus] = useState(false);
  return (
    <div className="form-register">
      <ToastContainer />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email no valido")
            .required("Campo obligatorio"),
          password: Yup.string().required("Campo obligatorio"),
        })}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await TodoGetApis.SingIn(values);
            if (response.status === 200) {
              toast.success("Se ha iniciado correctamente", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

              localStorage.setItem("token", response.data.accessToken);
              localStorage.setItem("rol", response.data.rolAdmin);

              if (response.data.rolAdmin === "administrador") {
                window.location.href = "/Admin";
              } else if (response.data.rolAdmin === "empleado") {
                window.location.href = "/Employed";
              } else if (response.data.rolAdmin === "cliente") {
                window.location.href = "/";
              } else if (response.data.rolAdmin === "superAdministrador"){
                window.location.href = "/overAdmin";
              }
            } else{
              toast.error("El correo o contraseña no es valido", {
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
            toast.error("ERROR: El correo o contraseña no es valido", {
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
        <Form>
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
          <h1>Inicio de Sesión</h1>
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
          <ErrorMessage component="p" name="email" className="error" />
          <div className="campus">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
                />
              </svg>
            </span>
            <Field
              className="input_forms"
              type={status ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
            />
            <div className="containerEye" onClick={() => setStatus(!status)}>
              {status ? (
                <span className="icons-forms1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="gray"
                      d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
                    />
                  </svg>
                </span>
              ) : (
                <span className="icons-forms1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="gray"
                      d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
          <ErrorMessage component="p" name="password" className="error" />
          <button className="pink">Iniciar Sesión</button>
          <NavLink to="/RecoverPassword">
            <span className="blue pass">¿Olvidaste tu contraseña?</span>
          </NavLink>
          <p>
            ¿No tienes una cuenta?{" "}
            <NavLink to="/Register">
              <span className="blue">Registrate</span>
            </NavLink>{" "}
          </p>
        </Form>
      </Formik>
    </div>
  );
}
