import React, { useRef, useState, useCallback, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
import swal from "sweetalert2";
import { TodoGetApis } from "../Apis/Apis";
import { useNavigate } from "react-router-dom";
import moment from "moment-with-locales-es6";
moment.locale("es");
const ImageRenderer = (props) => {
  const handdleImg = () => {
    swal.fire({
      title: "Imagen del producto",
      html: `<img src=${props.value} className="   cover" alt="t" style="width: 190px; heigth:190px; border-radius:8px; text-align:center ; display:block; margin:auto;" />`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      showConfirmButton: false,
    });
  };
  return (
    <div className="h-[10rem]">
      <span onClick={handdleImg}>Ver imagen</span>
      {/* <img src={props.value} className="   cover" alt="t" height={300} /> */}
    </div>
  );
};

function Options(e) {
  const navigate = useNavigate();
  const handleDelete = () => {
    let data = JSON.stringify(e.data.id_product);
    swal
      .fire({
        text: "¿Estas seguro de eliminar el producto?",
        buttons: {
          cancel: true,
          confirm: true,
        },
      })
      .then(async (value) => {
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

    swal
      .fire({
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
          let availabilityProduct =
            document.getElementById("availability").value;
          let amount = document.getElementById("amount").value;
          let price = document.getElementById("price").value;
          let data = {
            name: nameProduct,
            descrption: descriptionProduct,
            availability: availabilityProduct,
            amount: amount,
            price: price,
          };

          const response = await TodoGetApis.UpdateProduct(data, idProduct);
        },
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
            fill="#1daf53"
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
            fill="#ea4335"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
          />
        </svg>
      </button>
    </>
  );
}

function DataTableProducts({ data }) {
  const [column, setColumn] = useState([
    {
      headerName: "Codigo",
      field: "id_product",
    },
    {
      headerName: "Nombre",
      field: "name_product",
    },
  
    {
      headerName: "Precio Unitario",
      field: "price_product",
    },
    {
      headerName: "Cantidad",
      field: "amount_poduct",
    },
    
    {
      headerName: "Total",
      field: "total",
    },
  
    {
      headerName: "Acciones",
      field: "actions",
      cellRenderer: Options,
      enablePivot: true,
    },
  ]);
  const gridRef = useRef();
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);
  return (
    <div>
      <div
        className="ag-theme-alpine shadow-md mx-auto w-[50%] rounded-md overflow-hidden shadow-lg"
        id="myGrid"
        style={{ height: 500, width: "80%" }}
      >
        <AgGridReact
          ref={gridRef}
          columnDefs={column}
          // rowData={data}
          pagination={true}
          paginationPageSize={15}
        />
      </div>
    </div>
  );
}

export default DataTableProducts;
