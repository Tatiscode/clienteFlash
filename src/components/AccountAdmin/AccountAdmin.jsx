import React, { useEffect, useState } from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import {useNavigate } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";
import swal from "sweetalert2";

function AccountAdmin() {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [stop, setStop] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (stop) {
        const response = await TodoGetApis.GetAccountAdmin();
        console.log(response);
        setAccount(response.data.rows);
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
          <h1>Mi Perfil</h1>
          <p>Administra tu cuenta</p>
        </div>
        <hr />

        <div className="boxAccount">
          {account.length > 0 ? (
            account.map((data) => (
              <div className="boxAccount1">
                <div className="containerBox">
                  <div className="name">
                    <label>Nombre de Usuario:</label>
                  </div>
                  <div className="containerName">
                    <span>{data.name_admin}</span>
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
                            const response = await TodoGetApis.UpdateAdmin(
                              data
                            );
                            if (response === 200) {
                              swal.fire("Categoria actualizada", {
                                icon: "success",
                              });
                            }
                          },
                        });
                              navigate("/AccountAdmin");
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
                    <span>{data.email_admin}</span>
                    <button
                      style={{
                        border: "#000 2px solid",
                      }}
                      onClick={() => {
                        swal.fire({
                          title: "Cambiar correo",
                          html: `<input id="correo" type="email" placeholder="Ingrese el correo " /> `,
                          focusConfirm: false,
                          focusCancel: false,
                          showCancelButton: true,
                          showConfirmButton: true,
                          confirmButtonText: "Guardar",
                          cancelButtonText: "Cancelar",
                          preConfirm: async () => {
                            let correo =
                              document.getElementById("correo").value;
                            let data = {
                              email: correo,
                            };
                            const response = await TodoGetApis.UpdateAdmin(
                              data
                            );
                            if (response === 200) {
                              swal.fire("Correo actualizado", {
                                icon: "success",
                              });
                              navigate("/AccountAdmin");
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
                    <label>Dirección:</label>
                  </div>
                  <div className="containerName">
                    <span>{data.dirrecion_administrator}</span>
                    <button
                      style={{
                        border: "#000 2px solid",
                      }}
                      onClick={() => {
                        swal.fire({
                          tittle: "Editar Direccion",
                          html: ` <input id="addres" type="text"
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
                              document.getElementById("addres").value;
                            let data = {
                              addres,
                            };
                            const response = await TodoGetApis.UpdateAdmin(
                              data
                            );
                            if (response === 200) {
                              swal.fire("Direccion actualizada", {
                                icon: "success",
                              });
                              navigate("/AccountAdmin");
                            }
                          },
                        });
                      }}
                    >
                      Editar
                    </button>
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

export default AccountAdmin;
