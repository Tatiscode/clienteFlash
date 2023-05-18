import React, { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
import swal from "sweetalert2";
import { TodoGetApis } from "../Apis/Apis";
import { useNavigate } from "react-router-dom";

const ImageRenderer = (props) => {
  return (
    <div className="h-[10rem]">
      <img src={props.value} className="   cover" alt="t" height={300} />
    </div>
  );
};

function Options(e) {
  const navigate = useNavigate();
  const handleDelete = () => {
    let data = JSON.stringify(e.data.id_product);
    swal.fire({
      text: "¿Estas seguro de eliminar el producto?",
      buttons: {
        cancel: true,
        confirm: true,
      },
    }).then(async (value) => {
      if (value) {
        const response = await TodoGetApis.DeleteProduct(data);
        window.location.reload(true);
        if (response.status === 200) {
          swal.fire("Producto eliminado", {
            icon: "success",
          });
          e.data.delete();
        }
      }
    });
  };

  const handleUpdate = () => {
    let idProduct = e.data.id_product;

    swal.fire({
        title: "Editar Producto",
        html: `
        <input type="text" id="nameProduct" class="swal2-input" placeholder="Username" value="${e.data.name_product}" name="nameProduct">
        <input type="text" id="description" class="swal2-input" placeholder="Username" value="${e.data.description_product}" name="nameProduct">
         <input type="text" id="availability" class="swal2-input" placeholder="Username" value="${e.data.availability_product}" name="nameProduct">
          <input type="text" id="amount" class="swal2-input" placeholder="Username" value="${e.data.amount_poduct}" name="nameProduct">
           <input type="text" id="price" class="swal2-input" placeholder="Username" value="${e.data.price_product}" name="nameProduct">
        `,
        focusConfirm: false,
        focusCancel: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        preConfirm: async () => {
          let nameProduct = document.getElementById("nameProduct").value;
          let descriptionProduct = document.getElementById("description").value;
          let availabilityProduct = document.getElementById("availability").value;
          let amount = document.getElementById("amount").value;
          let price = document.getElementById("price").value;
          let data = {
            name: nameProduct,
            descrption: descriptionProduct,
            availability: availabilityProduct,
            amount:amount,
            price:price,

          };
          console.log(data);
          const response = await TodoGetApis.UpdateProduct(data, idProduct);
          console.log(response);
        }
      })
      .then((values) => {
        window.location.reload(true);
        swal.fire("Producto actualizado actualizada", {
          icon: "success",
        });
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

function DataTableProducts({ data }) {
  console.log(data);

  const [column, setColumn] = useState([
    {
      headerName: "Id",
      field: "id_product",
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    {
      headerName: "Nombre",
      field: "name_product",
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    {
      headerName: "Descripcion",
      field: "description_product",
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    {
      headerName: "Imagen",
      field: "img_product",
      cellRenderer: ImageRenderer,
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    {
      headerName: "Precio",
      field: "price_product",
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    {
      headerName: "Cantidad",
      field: "amount_poduct",
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    {
      headerName: "Estado",
      field: "availability_product",
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    {
      headerName: "Fecha",
      field: "data_product",
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    {
      headerName: "Acciones",
      field: "actions",
      cellRenderer: Options,
      enablePivot: true,
      cellStyle: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
  ]);
  const rowHeight = 200;
  return (
    <div>
      <div
        className="ag-theme-alpine shadow-md mx-auto "
        id="myGrid"
        style={{ height: 600, width: "100%" }}
      >
        <AgGridReact
          rowHeight={rowHeight}
          columnDefs={column}
          rowData={data.map((item) => {
            return {
              id_product: item.id_product,
              name_product: item.name_product,
              description_product: item.description_product,
              img_product: item.img_product,
              price_product: ("$ " + item.price_product).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1,"
              ),
              amount_poduct: ("" + item.amount_poduct).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1."
              ),
              availability_product: item.availability_product,
              data_product: item.data_product,
            };
          })}
          pagination={true}
          paginationPageSize={15}
        />
      </div>
    </div>
  );
}

export default DataTableProducts;
