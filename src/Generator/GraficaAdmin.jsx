import React, { useEffect, useState } from 'react'
import { CChart } from '@coreui/react-chartjs'
import { TodoGetApis } from '../Apis/Apis';
import moment from 'moment-with-locales-es6';



function GraficaAdmin() {
  const [buys, setBuys] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetStoreGrafic();
      setBuys(response.data.rows);
      console.log("graficaaaaaaaaaaa",response);
    })();
  }, []);

  const getTotal = buys.map(i => i.total)
  console.log("precio",getTotal);

  const getPrices= buys.map(i=> i.price_product)
  console.log("total:", getPrices);

  const getNameStore = buys.map(i => i.nombre_tienda)
  console.log("nombre tienda:", getNameStore);

  const getAmountProduct = buys.map(i=> i.amount_product)
  console.log(getAmountProduct);


  return (
   <>
   <div className="flex flex-col justify-center">
   <div className="w-[60rem] mx-auto  shadow-lg border m-3 rounded-md ">

   
   <CChart
  type="line" 
  data={{
    labels: getNameStore,
    datasets: [
      {
        label: "Ventas",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: getTotal
      },
      {
        label: "Precios",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: getPrices
      },
    ],
  }}
/>
</div>
<div className="w-[60rem] mx-auto shadow-lg border m-3 rounded-md ">
<CChart
  type="bar"
  data={{
    labels: getNameStore,
    datasets: [
      {
        label: 'Productos',
        backgroundColor: '#f87979',
        data: getAmountProduct,
      },
    ],
  }}
  labels="months"
/>
</div>
</div>
   </>
  )
}

export default GraficaAdmin