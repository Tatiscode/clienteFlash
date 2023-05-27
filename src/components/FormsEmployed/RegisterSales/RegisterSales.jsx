import React, { useState, useEffect } from "react";
import "../../Login/user.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, NavLink, json } from "react-router-dom";
import { TodoGetApis } from "../../../Apis/Apis";
import { ToastContainer, toast } from "react-toastify";
import MenuEmployed from "../../MenuEmployed/MenuEmployed";

function RegisterSales() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProductsStore();
      console.log("tatiana",response);
      setProduct(response.data.rows);
    })();
  }, []);
  return (
    <>
      <ToastContainer />
      <MenuEmployed />
      <div className="form-register ml-[15%] absolute inset-0 ">
        <Formik
          initialValues={{
            nameProduct: "",
            amountProduct: "",
           
          }}
          // validationSchema={Yup.object({
          //   nameProduct: Yup.string().required("Campo Obligatorio"),
          //   descriptionProduct: Yup.string().require("Campo Obligatorio"),
          //   stateProduct: Yup.string().require("Campo Obligatorio"),
          //   amountProduct: Yup.string().require("Campo obligatorio"),
          //   priceProduct: Yup.string().required("Campo Obligatorio"),
          //   imgProduct: Yup.string(),
          //   categoryProduct: Yup.string().required("Campo obliagtorio"),
          // })}

          onSubmit={async (values) => {
            setLoading(true);

            const data = {
              name: values.nameProduct,
              amount: values.amountProduct,
             
            };

            alert(values);

            try {
              const response = await TodoGetApis.GetProduct();

              setLoading(false);
              if (response.status === 200) {
                toast.success("Producto registrado como vendido con exito", {
                  position: "top-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
                toast.error("Error en el sistema", {
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
              setLoading(false);
              toast.error("Error en el sistema", {
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
          <Form className="">
            <h1 className="pb-3 text-2xl font-bold text-gray-700">
              Regitrar Venta Presencial
            </h1>
            <div className="grid grid-cols-2 gap-2">
              <div className="campus overflow-x-auto">
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
                {product.length > 0 ? (
                  <>
                    {
                      <Field
                        className="input_forms"
                        type="text"
                        name="nameProduct"
                        placeholder="Nombre"
                        id="categoryId"
                        as="select"
                      >
                        {product.map((i) => (
                          <option
                            value={i.id_product}
                            className="bg-gray-200 p-2 m-1 cursor-pointer"
                            onClick={() => setId(i.id_product)}
                          >
                            {i.name_product}
                          </option>
                        ))}
                      </Field>
                    }
                  </>
                ) : (
                  <h6
                    className="pl-1 truncate whitespaces-nowrap "
                    title="No se encotraron productos."
                  >
                    No se encotraron productos.
                  </h6>
                )}
              </div>

              <div className="campus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="gray"
                    d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                  />
                </svg>
                <Field
                  className="input_forms"
                  type="number"
                  name="amountProduct"
                  placeholder="Cantidad"
                />
              </div>
              <ErrorMessage
                component="p"
                name="amountProduct"
                className="error"
              />
            </div>
            {loading === true ? (
              <div className="pink flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g stroke="white">
                    <circle
                      cx="12"
                      cy="12"
                      r="9.5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-width="3"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="1.5s"
                        keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                        keyTimes="0;0.475;0.95;1"
                        repeatCount="indefinite"
                        values="0 150;42 150;42 150;42 150"
                      />
                      <animate
                        attributeName="stroke-dashoffset"
                        calcMode="spline"
                        dur="1.5s"
                        keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                        keyTimes="0;0.475;0.95;1"
                        repeatCount="indefinite"
                        values="0;-16;-59;-59"
                      />
                    </circle>
                    <animateTransform
                      attributeName="transform"
                      dur="2s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </g>
                </svg>
              </div>
            ) : (
              <button className="pink">Registrar</button>
            )}
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default RegisterSales;
