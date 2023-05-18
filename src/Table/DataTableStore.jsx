import React, { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
import swal from "sweetalert2";
import { TodoGetApis } from "../Apis/Apis";
import { useNavigate } from "react-router-dom";

function Options(e) {
  const navigate = useNavigate();
  const handleDelete = () => {
    let data = JSON.stringify(e.data.id_store);
    swal
      .fire({
        text: "¿Estas seguro de eliminar la tienda?",
        buttons: {
          cancel: true,
          confirm: true,
        },
      })
      .then(async (value) => {
        if (value) {
          const response = await TodoGetApis.DeleteStore(data);
          window.location.reload(true);
          if (response.status === 200) {
            swal.fire("Tienda eliminada", {
              icon: "success",
            });
            e.data.delete();
          }
        }
      });
  };

  return (
    <>
      <button onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="red"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
          />
        </svg>
      </button>
    </>
  );
}

function DataTableStore({ data }) {
  const [column, setColumn] = useState([
    {
      headerName: "Id",
      field: "id_store",
    },
    {
      headerName: "Nombre Empleado",
      field: "name_employee",
    },
    {
      headerName: "Correo Empleado",
      field: "email_employee",
    },
    {
      headerName: "Estado",
      field: "state_employee",
    },

    {
      headerName: "Tienda",
      field: "name_store",
    },
    {
      headerName: "Ubicacion",
      field: "location_store",
    },
    {
      headerName: "Correo Tienda",
      field: "email_store",
    },

    {
      headerName: "Acciones",
      field: "actions",
      cellRenderer: Options,
      enablePivot: true,
    },
  ]);
  return (
    <div>
      <div
        className="ag-theme-alpine shadow-md mx-auto "
        id="myGrid"
        style={{ height: 600, width: "100%" }}
      >
        <AgGridReact
          columnDefs={column}
          rowData={data.map((item) => {
            console.log("df", data);
            console.log(item.id_store);
            return {
              id_store: item.id_store,
              name_employee: item.name_employee,
              email_employee: item.email_employee,
              state_employee: item.state_employee,
              name_store: item.name_store,
              location_store: item.location_store,
              email_store: item.email_store,
            };
          })}
          pagination={true}
          paginationPageSize={15}
        />
      </div>
    </div>
  );
}

export default DataTableStore;
