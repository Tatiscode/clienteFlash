import React, { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
import swal from "sweetalert2";
import { TodoGetApis } from "../Apis/Apis";
import { useNavigate } from "react-router-dom";
import EditProduct from "../components/FormsEmployed/EditProduct/EditProduct";

const ImageRenderer = (props) => {
  return (
    <div className="h-[10rem]">
      <img src={props.value} className="   cover" alt="t" height={300} />
    </div>
  );
};

function Options(e) {
  const navigate = useNavigate();
  let idCategory = e.data.id_category
  const handleUpdate = () => {
    swal.fire({
      title: "Editar Categoria",
        html: `
        <input type="text" id="nameCategory" class="swal2-input" placeholder="Username" value="${e.data.name_category}" name="nameCategory">
        `,
      focusConfirm: false,
      focusCancel: false,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      preConfirm: async () => {
        let nameCategory = document.getElementById("nameCategory").value;
        let data = {

          name: nameCategory,
        };
        console.log(data);
        const response = await TodoGetApis.UpdateCategory(data, idCategory);
        console.log(response);
      }

    }).then((values) => {
      window.location.reload(true);
      swal.fire("Categoria actualizada", {
          icon: "success",
        });
      
    });
  };
  
  const handleDelete = () => {
    let data = JSON.stringify(e.data.id_category);
    swal.fire({
      text: "¿Estas seguro de eliminar el producto?",
      buttons: {
        cancel: true,
        confirm: true,
      },
    }).then(async (value) => {
      if (value) {
        const response = await TodoGetApis.DeleteCategory(data);
        window.location.reload(true);
        if (response.status === 200) {
          swal.fire("Producto eliminado", {
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <>
      <button onClick={handleUpdate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
          />
        </svg>
      </button>

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

function DataTableCategory({ data }) {
  const [column, setColumn] = useState([
    {
      headerName: "Id",
      field: "id_category",
    },
    {
      headerName: "Nombre",
      field: "name_category",
    },
    {
      headerName: "Imagen",
      field: "img_category",
      cellRenderer: ImageRenderer,
    },
    {
      headerName: "Id Store",
      field: "id_Store",
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
        style={{ height: 600, width: "80%" }}
      >
        <AgGridReact
          columnDefs={column}
          rowData={data.map((item) => {
            return {
              id_category: item.id_category,
              name_category: item.name_category,
              img_category: item.img_category,
              id_Store: item.id_Store,
            };
          })}
          pagination={true}
          paginationPageSize={15}
        />
      </div>
    </div>
  );
}

export default DataTableCategory;
