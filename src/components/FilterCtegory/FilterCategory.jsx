import React from 'react'

function FilterCategory() {
  return (
    <div className="">
    <div class=" bg-white-300">
               
                    <div class="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg ">
                        <div class="flex flex-col md:flex-row gap-8 ">
                            <div class="">
                                <select class="border p-2 rounded">
                                    <option>Precio</option>
                                    <option>Mayor a Menor</option>
                                    <option>Menor a Mayor</option>
                                </select>
                            </div>
    
                            <div class="pt-6 md:pt-0 md:pl-6">
                                <select class="border p-2 rounded">
                                    <option>Top Ventas</option>
                                    <option>Mas vendidos</option>
                                    <option>Menos Vendidos</option>
                                </select>
                            </div>
    
                                <div class="flex flex-col md:flex-row pt-6 md:pt-0 p-1 border rounded bg-gray-300 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><path fill="gray" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"/></svg>
                                    <input type="text" placeholder="Buscar"
                                           class="bg-gray-300 focus:outline-none text-gray-700 "/>
                                </div>
                                <div class="  flex flex-col md:flex-row pt-6 md:pt-0 md:pl-0 text-white"><button class="">Buscar</button></div>
                        </div>
                       
             
                            
                            <div class=""><button class="p-2 border w-1/4 rounded-md text-white bg-red-500">Search</button></div>
                    </div>
                   
         
                        
                     
                    </div>
               
            </div>
    
        
  )
}

export default FilterCategory