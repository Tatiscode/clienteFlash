import React from "react";
import { TodoGetApis } from "../Apis/Apis";
import swal from "sweetalert2";
import MenuSuperAdmin from "../MenuSuperAmin/MenuSuperAdmin";
import DataTableMalls from "../Table/DataTableMalls";

function PageViewOverAdmin() {
  return (
    <>
    <MenuSuperAdmin/>
    {/* <div className="flex">
      
      <div className="flex-wrap w-[75%]">
        <div></div>
        <div className="w-64 h-72 bg-slate-100 flex items-center justify-center shadow-indigo-200">
          <button
            onClick={() => {
              swal.fire({
                title: "Ingrese el token:",
                html: `
              <input id="token" type="password" placeholder="Ingrese el token" />
              `,
                focusConfirm: false,
                focusCancel: false,
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: "Enviar",
                cancelButtonText: "Cancelar",
                preConfirm: async () => {
                  try {
                    let token = document.getElementById("token").value;
                    const response = await TodoGetApis.ValidateToken(token);
                    if (response.status === 200) {
                      swal.fire({
                        title: "Token correcto",
                        text: "Registrar centro comercial",
                        html: `
                        <input id="name" type="text" placeholder="Nombre" />
                        <input id="address" type="text" placeholder="Dirección" />
                        <input id="email" type="text" placeholder="Correo eletronico" />
                        `,
                        focusConfirm: false,
                        focusCancel: false,
                        showCancelButton: true,
                        showConfirmButton: true,
                        confirmButtonText: "Enviar",
                        cancelButtonText: "Cancelar",
                        preConfirm: async () => {
                          try {
                            let name = document.getElementById("name").value;
                            let address =document.getElementById("address").value;
                            let email = document.getElementById("email").value;
                            let data = {
                              nameUser: name,
                              email,
                              direccion: address,
                            };
                            const response = await TodoGetApis.SingUp(
                              data,
                              token
                            );
                            if (response.status === 200) {
                              swal.fire({
                                title: "Centro comercial registrado",
                                text: "Se ha registrado el centro comercial",
                                icon: "success",
                              });
                            }
                          } catch (error) {
                            swal.fire({
                              title: "Error",
                              text: "Ingrese los datos correctamente",
                              icon: "error",
                            });
                          }
                        },
                      });
                    }
                    return response;
                  } catch (error) {
                    swal.fire({
                      title: "Token incorrecto",
                    });
                  }
                },
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="96"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm-6 8q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div> */}
    <DataTableMalls/>
    </>
  );
}

export default PageViewOverAdmin;
