import React from 'react'
import Chart from "react-apexcharts";

function GraficHeaderAdmin() {


    let options = {

        series: [50],
        chart: {
            height: 250,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70',
              }
            },
          },
          // quitar porcentaje en el nuemro de serie

          labels: ['Total de tiendas'],
          
      
    }

    
  return (
    <>
    <div className="flex w-[1500px] p-4 justify-between">
    <div className="flex items-center justify-between w-[1500px]">
    
    <div id="chart">
  <Chart options={options} series={options.series} type="radialBar" height={250} />
</div>
<div className="">
    

      <h3 class="text-2xl mb-5">
        Tiendas Top
        <p class="text-gray-400 text-base">
          Las tiendas con mejores ventas
        </p>
      </h3>

     

      <div class="flex flex-col lg:flex-row gap-5 mt-8">
        <div class="w-full lg:w-1/5">
          <div class="p-2 rounded text-center bg-teal-500 text-white">
            Total
          </div>
          <div class="border border-gray-300 rounded text-center py-8 mt-2 w-[100px]">
            <h2 class="text-4xl font-bold pb-2">0</h2>
            <h4 class="inline text-gray-500 text-sm">Total </h4>
          </div>
        </div>

        <div class="w-full lg:w-2/5">
          <div class="p-2 rounded text-center bg-teal-500 text-white">
            Año pasado
          </div>
          <div class="flex gap-5 mt-2">
            
            <div
              class="flex-grow border border-gray-300 rounded text-center py-8"
            >
              <h2 class="text-4xl font-bold pb-2">10%</h2>
              <h4 class="inline text-gray-500 text-sm p-2">% año pasado</h4>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-2/5">
          <div class="p-2 rounded text-center bg-teal-500 text-white">
            Este año
          </div>
          <div class="flex gap-5 mt-2">
            <div
              class="flex-grow border border-gray-300 rounded text-center py-8 w-[300px]"
            >
              <h2 class="text-4xl font-bold pb-2">200</h2>
              <h4 class="inline text-gray-500 text-sm">Cantidad</h4>
            </div>
          
          </div>
        </div>
      </div>
    
    </div>
</div>
</div>
    </>
  )
}

export default GraficHeaderAdmin