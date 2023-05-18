import React, { useState } from "react";
import "../../Login/user.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, NavLink, json } from "react-router-dom";
import { TodoGetApis } from "../../../Apis/Apis";
import MenuEmployed from "../../MenuEmployed/MenuEmployed";
import { ToastContainer, toast } from "react-toastify";

function CreateSubcategory() {
  const [imgCategory, setImgCategory] = useState([]);
  return (
    <>
      <ToastContainer />
      <MenuEmployed />
      <div className="form-register ml-[15%] absolute inset-0">
        <Formik
          initialValues={{
            nameCategory: "",
          }}
          onSubmit={async (values) => {
            let data = {
              name: values.nameCategory,
              image: imgCategory,
            };
            try {
              console.log(data);
              const response = await TodoGetApis.CreateCategory(data);
              console.log(response);
              toast.success("Categoria creada correctamente", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } catch (error) {
              toast.error("Error al crear el producto", {
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
          <Form className="w-[500px]">
            <h1 className="pb-3 text-2xl font-bold text-gray-700">
              Crear Categoria
            </h1>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
                />
              </svg>
              <Field
                className="input_forms"
                type="text"
                name="nameCategory"
                placeholder="Nombre"
              />
            </div>

            <div
              className="campus bg-gray-100
            cursor-pointer"
            >
              <div className="relative w-full">
                <div className="">
                  <input
                    className="input_forms z-50 icon  opacity-0 absolute w-full"
                    type="file"
                    name="imgCategory"
                    placeholder="Imagen"
                    onChange={(e) => setImgCategory(e.target.files[0])}
                  />
                </div>
                <div className="icon  w-full z-10 bg-gray-100 inset-0 h-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="gray"
                      stroke-linecap="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="2 4"
                        stroke-dashoffset="6"
                        d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          repeatCount="indefinite"
                          values="6;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="30"
                        stroke-dashoffset="30"
                        d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.1s"
                          dur="0.3s"
                          values="30;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="10"
                        stroke-dashoffset="10"
                        d="M12 16v-7.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.5s"
                          dur="0.2s"
                          values="10;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="6"
                        stroke-dashoffset="6"
                        d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.7s"
                          dur="0.2s"
                          values="6;0"
                        />
                      </path>
                    </g>
                  </svg>
                  <span>Subir Imagen</span>
                </div>
              </div>
            </div>

            <button className="pink">Crear</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default CreateSubcategory;
