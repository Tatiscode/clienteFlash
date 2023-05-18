import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, json } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";
import { ToastContainer, toast } from "react-toastify";

function FormCreateStore() {
  return (
    <>
      <div className="form-register">
        <Formik
          initialValues={{
            email: "",
            nameStore: "",
            ubicacion: "",
            idEmpleado: "",
            nombreEmpleado: "",
          }}
          // validationSchema={Yup.object({
          //   email: Yup.string().required("Email no valido"),
          //   nameStore: Yup.string().required("Campo obligatorio"),
          //   ubicacion: Yup.string().required("Campo obligatorio"),
          //   idEmpleado: Yup.string().required("Campo obligatorio"),
          //   nombreEmpleado: Yup.string().required("Campo obligatorio"),
          // })}
          onSubmit={async (values) => {
            console.log(values);
            try {
              const response = await TodoGetApis.CreateStore(values);
              console.log(response);
              if (response.status === 200 || response.status === 202) {
                toast.success("Tienda creada correctamente", {
                  position: "top-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            } catch (error) {
              toast.error("Error al crear tienda", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                window.location.href = "/StoresInfo";
              }, 2000);
            }
          }}
        >
          <Form>
            <h1>Crear Tienda</h1>
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
                    d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
                  />
                </svg>
              </span>
              <Field
                className="input_forms"
                type="text"
                name="idEmpleado"
                placeholder="Id empleado"
              />
            </div>
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
                    d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
                  />
                </svg>
              </span>
              <Field
                className="input_forms"
                type="text"
                name="nombreEmpleado"
                placeholder="Nombre empleado"
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M5 6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h14q.425 0 .713.288T20 5q0 .425-.288.713T19 6H5Zm0 14q-.425 0-.713-.288T4 19v-5h-.175q-.475 0-.775-.363t-.2-.837l1-5q.075-.35.35-.575T4.825 7h14.35q.35 0 .625.225t.35.575l1 5q.1.475-.2.837t-.775.363H20v5q0 .425-.288.713T19 20q-.425 0-.713-.288T18 19v-5h-4v5q0 .425-.288.713T13 20H5Zm1-2h6v-4H6v4Z"
                />
              </svg>

              <Field
                className="input_forms"
                type="text"
                name="email"
                placeholder="Correo"
              />
            </div>
            <ErrorMessage component="p" name="email" className="error" />
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M5 6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h14q.425 0 .713.288T20 5q0 .425-.288.713T19 6H5Zm0 14q-.425 0-.713-.288T4 19v-5h-.175q-.475 0-.775-.363t-.2-.837l1-5q.075-.35.35-.575T4.825 7h14.35q.35 0 .625.225t.35.575l1 5q.1.475-.2.837t-.775.363H20v5q0 .425-.288.713T19 20q-.425 0-.713-.288T18 19v-5h-4v5q0 .425-.288.713T13 20H5Zm1-2h6v-4H6v4Z"
                />
              </svg>
              <Field
                className="input_forms"
                type="text"
                name="nameStore"
                placeholder="Nombre"
              />
            </div>
            <ErrorMessage component="p" name="nameStore" className="error" />
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
                    d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
                  />
                </svg>
              </span>
              <Field
                className="input_forms"
                type="text"
                name="ubicacion"
                placeholder="Ubicacion"
              />
            </div>

            <ErrorMessage component="p" name="ubicacion" className="error" />

            <button className="pink" type="submit">
              Crear
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default FormCreateStore;
