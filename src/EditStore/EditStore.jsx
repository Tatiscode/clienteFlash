import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { TodoGetApis } from "../Apis/Apis";
import swal from "sweetalert2";

function EditStore() {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [stop, setStop] = useState(true);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (stop) {
        const response = await TodoGetApis.GetStore();
        console.log(response.data);
        setAccount(response.data.data);
        setStop(false);
      }
    };

    fetchData();
  }, [stop]);

  return (
    <Formik
      initialValues={account}
      validationSchema={Yup.object({
        nameUser: Yup.string().required("Campo obligatorio"),
        email: Yup.string()
          .email("Email no válido")
          .required("Campo obligatorio"),
        password: Yup.string().required("Campo obligatorio"),
      })}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form className="formRegister">
        <div className="tittleAccount">
          <h1>Mi Tienda</h1>
          <p>Administra tu cuenta</p>
        </div>
        <hr />

        <div className="boxAccount">
          {account.length > 0 ? (
            account.map((data) => (
              <div className="boxAccount1">
                <div className="containerBox">
                  <div className="name">
                    <label>Nombre:</label>
                  </div>
                  <div className="containerName">
                    <span>{data.name_store}</span>
                    <button
                      style={{
                        border: "#000 2px solid",
                      }}
                      onClick={() => {
                        swal.fire({
                          title: "cambiar nombre",
                          html: `
                        <input id="name" type="text"
                        placeholder="Ingrese el nuevo nombre"/>
                        `,
                          focusConfirm: false,
                          focusCancel: false,
                          showCancelButton: true,
                          showConfirmButton: true,
                          confirmButtonText: "Guardar",
                          cancelButtonText: "Cancelar",
                          preConfirm: async () => {
                            let name = document.getElementById("name").value;
                            let data = {
                              name,
                            };
                            const response = await TodoGetApis.UpdateStore(
                              data
                            );
                            console.log(response);
                            if (response === 200) {
                              swal.fire("Nombre actualizado", {
                                icon: "success",
                              });
                            }
                          },
                        });
                      }}
                    >
                      editar
                    </button>
                  </div>
                </div>
                <div className="containerBox">
                  <div className="name">
                    <label>Correo electrónico:</label>
                  </div>
                  <div className="containerName">
                    <span>{data.email_store}</span>
                  </div>
                </div>
                <div className="containerBox">
                  <div className="name">
                    <label>Dirección:</label>
                  </div>
                  <div className="containerName">
                    <span>{data.location_store}</span>
                    <button
                      style={{
                        border: "#000 2px solid",
                      }}
                      onClick={() => {
                        swal.fire({
                          tittle: "Editar Direccion",
                          html: ` <input id="addresStore" type="text"
                        placeholder="Ingrese la nueva direccion"/>
                        `,
                          focusConfirm: false,
                          focusCancel: false,
                          showCancelButton: true,
                          showConfirmButton: true,
                          confirmButtonText: "Guardar",
                          cancelButtonText: "Cancelar",
                          preConfirm: async () => {
                            let addres =
                              document.getElementById("addresStore").value;
                            let data = {
                              addres,
                            };
                            const response = await TodoGetApis.UpdateStore(
                              data
                            );
                            if (response === 200) {
                              swal.fire("Direccion actualizada", {
                                icon: "success",
                              });
                            }
                          },
                        });
                      }}
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="containerBox">
                  <div className="name">
                    <label>Telefono:</label>
                  </div>
                  <div className="containerName">
                    <span>{data.phone_number_store}</span>
                    <button
                      style={{
                        border: "#000 2px solid",
                      }}
                      onClick={() => {
                        swal.fire({
                          title: "Editar Telefono",
                          html: ` <input id="phone" type="text"
                        placeholder="Ingrese el nuevo telefono"/>
                        `,
                          focusConfirm: false,
                          focusCancel: false,
                          showCancelButton: true,
                          showConfirmButton: true,
                          confirmButtonText: "Guardar",
                          cancelButtonText: "Cancelar",
                          preConfirm: async () => {
                            let phone = document.getElementById("phone").value;
                            let data = {
                              phone,
                            };
                            const response = await TodoGetApis.UpdateStore(
                              data
                            );
                            if (response === 200) {
                              swal.fire("Direccion actualizada", {
                                icon: "success",
                              });
                            }
                          },
                        });
                      }}
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="containerBox">
                  <div className="name">
                    <label>Descripcion:</label>
                  </div>
                  <div className="containerName">
                    <span>{data.description_store}</span>
                    <button
                      style={{
                        border: "#000 2px solid",
                      }}
                      onClick={() => {
                        swal.fire({
                          title: "Editar Descripcion",
                          html: ` <input id="description" type="text"
                        placeholder="Ingrese la descripcion"/>
                        `,
                          focusConfirm: false,
                          focusCancel: false,
                          showCancelButton: true,
                          showConfirmButton: true,
                          confirmButtonText: "Guardar",
                          cancelButtonText: "Cancelar",
                          preConfirm: async () => {
                            let description =
                              document.getElementById("description").value;
                            let data = {
                              description,
                            };
                            const response = await TodoGetApis.UpdateStore(
                              data
                            );
                            if (response === 200) {
                              swal.fire("Direccion actualizada", {
                                icon: "success",
                              });
                            }
                          },
                        });
                      }}
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="containerBox">
                  <div className="name">
                    <label>imagen:</label>
                  </div>
                  <div className="containerName">
                    {data.img_store != null ? (
                      <div>
                        <img src={data.img_store} alt="" />
                        <input
                          type="file"
                          name="imgStore"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                        />
                        <button
                          style={{
                            border: "#000 2px solid",
                          }}
                          onClick={async () => {
                            const response = await TodoGetApis.UpdateStore(
                              image
                            );
                          }}
                        >
                          Actualizar
                        </button>
                      </div>
                    ) : (
                      <div>
                        <input
                          type="file"
                          name="imgStore"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                        />
                        <button
                          style={{
                            border: "#000 2px solid",
                          }}
                          onClick={async () => {
                            const response = await TodoGetApis.UpdateStore(
                              image

                            );
                            if(response.status===200){
                              swal.fire("Imagen actualizada", {
                                icon: "success",
                              });
                            }else{
                              swal.fire("Error al actualizar la imagen", {
                                icon: "error",
                              });
                            }
                          }}
                        >
                          Actualizar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <button className="buttonAccount">Guardar</button>
              </div>
            ))
          ) : (
            <h1>No hay data</h1>
          )}

          {/* <div className="boxAccount2">
              {account.length > 0 ? (
                <div className="imagen">
                  {account.map((data) => (
                    <img
                      key={data.id}
                      src={data.img_admin || "https://via.placeholder.com/150"}
                      alt=""
                    />
                  ))}
                </div>
              ) : (
                <div>No tiene imagen</div>
              )}
            </div>

          </div>
        ) : (
          <div>No hay datos disponibles</div>
        )} */}
        </div>
      </Form>
    </Formik>
  );
}

export default EditStore;
