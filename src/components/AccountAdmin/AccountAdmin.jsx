import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";
import swal from "sweetalert2";

function AccountAdmin() {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [stop, setStop] = useState(true);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (stop) {
        const response = await TodoGetApis.GetAccountAdmin();
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
      onSubmit={async (values) => {}}
    >
      <Form className="formRegister">
        <div className="tittleAccount">
          <h1>Mi Perfil</h1>
          <p>Administra tu cuenta</p>
        </div>
        <hr />

        <div className="boxAccount">
          {account.length > 0 ? (
            <>
              {account.map((data) => (
                <>
                  <div>
                    {data.img_admin !== null ? (
                      <div className="boxAccount2">
                        <div className="imagen ">
                          <img
                            className="w-44 bg-contain"
                            src={data.img_admin}
                            alt=""
                          />
                        </div>
                        <button className="buttonImage">
                          Seleccionar Imagen
                        </button>
                        <p>
                          Tamaño de archivo: máximo 1 MB <br />
                          Extensión de archivo: .JPEG, .PNG
                        </p>
                      </div>
                    ) : (
                      <div>
                        <input
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                          type="file"
                          name="img_customer"
                          id="img_customer"
                        />
                        <button>Subir</button>
                      </div>
                    )}
                  </div>

                  <div className="boxAccount1">
                    <div className="containerBox flex items-center">
                      <div className="name">
                        <label>Nombre:</label>
                        <span className="mx-2 ">{data.name_admin}</span>
                      </div>
                      <div className="containerName">
                        <button
                          className="bg-gray-100 border rounded-md my-2 p-2 text-gray-800 "
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
                                let name =
                                  document.getElementById("name").value;
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
                          <div className="flex p-1 ">
                            <span className="ml-4">Editar</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="gray"
                                d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="containerBox flex items-center">
                      <div className="name">
                        <label>Email:</label>
                        <span className="ml-2 w-36 truncate">
                          {data.email_admin}
                        </span>
                      </div>
                      <div className="containerName">
                        <button
                          className="bg-gray-100 border rounded-md my-2 p-2 text-gray-800 "
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
                          <div className="flex p-1 ">
                            <span className="ml-4">Editar</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="gray"
                                d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="containerBox flex items-center">
                      <div className="name">
                        <label>Contraseña:</label>
                        <span className="ml-2 w-36 truncate">*****</span>
                      </div>
                      <div className="containerName">
                        <button
                          className="bg-gray-100 border rounded-md my-2 p-2 text-gray-800 "
                          onClick={() => {
                            swal.fire({
                              html: `
                          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .red {
        color: red;
      }
      .green {
        color: green;
      }
    </style>
    <title>Document</title>
  </head>
  <body>
    <form id="form">
      <input type="text" name="contra" placeholder="contrseña" /><br />
      <input type="text" name="contra1" placeholder="contraseña 2" />
      <div>
        <p id="numeros" class="red">debe de tener un numero</p>
        <p id="mayuscula" class="red">debe de tener una Mayuscula</p>
        <p id="tamano" class="red">bede de ser 5 caracteres, minimo</p>
      </div>
    </form>
    <script>
      let validaMayuscula = /^(?=.*[A-Z])/
      let validaetNum = /^(?=.*\d)/
      let validateTamano = /^.{4, 10}$/
      let mayuscula = document.getElementById('mayuscula')
      let numeros = document.getElementById('numeros')
      let tamaño =  document.getElementById('tamano')
      const validaPassword = (e) => {
        e.target.name
        switch (e.target.name) {
          case 'contra':
            if (validaMayuscula.test(e.target.value)) {
              mayuscula.classList.remove('red')
              mayuscula.classList.add('green')
            } else {
              mayuscula.classList.remove('green')
              mayuscula.classList.add('red')
            }
            if ( validaetNum.test(e.target.value)) {
              numeros.classList.remove('red')
              numeros.classList.add('green')
            } else {
              numeros.classList.remove('green')
              numeros.classList.add('red')
            }
            if(validateTamano.test(e.target.value)) {
              tamaño.classList.remove('red')
              tamaño.classList.add('green')
            } else {
              tamaño.classList.remove('green')
              tamaño.classList.add('red')
            }
            break;
          case 'contra1':

            break;
        }
      }
      let formulario = document.getElementById('form');
      let inputs = document.querySelectorAll('#form input');
      inputs.forEach((input) => {
        input.addEventListener('keyup', validaPassword)
        input.addEventListener('blur', validaPassword)
      })
    </script>
  </body>
</html>

                          `,
                              customClass: {
                                container: "custom-dialog-size",
                              },
                              focusConfirm: false,
                              focusCancel: false,
                              showCancelButton: true,
                              showConfirmButton: true,
                              confirmButtonText: "Atucalizar",
                              cancelButtonText: "Cancelar",
                              preConfirm: async () => {
                                let passworBefore =
                                  document.getElementById(
                                    "passwordBefore"
                                  ).value;
                              },
                            });
                            //   preConfirm: async () => {
                            //     let password =
                            //       document.getElementById("password").value;
                            //     let data = {
                            //       email: password,
                            //     };
                            //     const response = await TodoGetApis.UpdateAdmin(
                            //       data
                            //     );
                            //     if (response === 200) {
                            //       swal.fire("Contraseña atualizada", {
                            //         icon: "success",
                            //       });
                            //       navigate("/AccountAdmin");
                            //     }
                            //   },
                            // });
                          }}
                        >
                          <div className="flex p-1 ">
                            <span className="ml-4">Editar</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="gray"
                                d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="containerBox flex items-center">
                      <div className="name">
                        <label>Dirección:</label>
                        <span className="mx-2">
                          {data.dirrecion_administrator}
                        </span>
                      </div>
                      <div className="containerName">
                        <button
                          className="bg-gray-100 border rounded-md my-2 p-2 text-gray-800 "
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
                          <div className="flex p-1 ">
                            <span className="ml-4">Editar</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="gray"
                                d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>

                    <a
                      href="/AccountAdmin"
                      className="pink mx-auto w-full block text-center"
                    >
                      Guardar
                    </a>
                  </div>
                </>
              ))}
            </>
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
