import React,{ useState }  from "react";
import "../Login/user.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";
import { ToastContainer, toast } from "react-toastify";

function NewPassword() {
  const [status, setStatus] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  return (
    <div className="form-register">
      <ToastContainer />
      <Formik
        initialValues={{
          password: "",
          newPassword: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string().required("Campo obligatorio"),
          newPassword: Yup.string().required("Campo obligatorio"),
        })}
        onSubmit={async (values) => {
          try {
            let data = {
              email: id,
              password: values.password,
            };
            const response = await TodoGetApis.NewPassword(data);
            console.log(response);

            console.log(data);

            if (response.status === 200) {
              toast.success("Codigo valido", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              navigate("/Login");
            } else {
              toast.error("Codigo invalido", {
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
            toast.error("Error", {
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
          <h1>Crear una nueva contraseña para:</h1>
          <p style={{ color: "blue", fontSize: "15px" }}> {id}</p>
          <div className="campus">
            <span className="icons-forms">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  fill-rule="evenodd"
                  d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-.452 0-.867 0-1.25.004V8ZM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <Field type={status ? "text" : "password"} name="password" placeholder="Contaseña" />
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
          <div className="campus">
            <span className="icons-forms">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  fill-rule="evenodd"
                  d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-.452 0-.867 0-1.25.004V8ZM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <Field
              type={status ? "text" : "password"}
              name="newPassword"
              placeholder="Confirmar contraseña"
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
          <span style={{ color: "red", fontSize: "18px" }}>
            <ErrorMessage component="p" name="code" className="error" />
          </span>
          <ul className="li-password">
            <li>Al menos un carácter en minúscula</li>
            <li>Al menos un carácter en mayúscula</li>
            <li>8-16 caracteres</li>
            <li>
              Solo letras, números y signos de puntuación comunes pueden ser
              utilizados
            </li>
          </ul>
          <button className="pink" type="submit">
            Actualizar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default NewPassword;
