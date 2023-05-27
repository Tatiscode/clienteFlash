import React, { useState } from "react"
import "./App.css"

import Header from "./common/header/Header"

import Pages from "./pages/Pages"
import Data from "./components/Data"
 import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import PageLogin from "./pages/PageLogin"
import { Route, Routes } from "react-router-dom"
import PageRegister from "./pages/PageRegister"
import PageOffer from "./pages/PageOffer"
import PageStores from "./pages/PageStores"
import PageNewProduct from "./pages/PageNewProduct"
import RecoverPasword from "./components/RecoverPassword/RecoverPasword"
import CodeRecoverPassword from "./components/RecoverPassword/CodeRecoverPassword"
import ConcludeBuy from "./components/ConcludeBuy/ConcludeBuy"
import CategoryUnitarie from "./components/CategoryUnitarie/CategoryUnitarie"
import Account from "./components/Account/Account"
// import CardProduct from "./components/CardProduct/CardProduct"

import PageAdmin from "./pages/PageAdmin"
import PageNotFound from "./pages/PageNotFound"
import PageStireInfo from "./pages/PageStoreInfo"
import PageStoreInfo from "./pages/PageStoreInfo"
import PageCreateStore from "./pages/PageCreateStore"
import PageDeleteStore from "./pages/PageDeleteStore"

import PageAccountAdmin from "./pages/PageAccountAdmin"
import PageInfoCategory from "./pages/PageInfoCategory"
import PageCreateCategory from "./pages/PageCreateCategory"
import PageDeleteCategory from "./pages/PageDeleteCategory"
import PageUpdateCategory from "./pages/PageUpdateCategory"

import PageSingleShop from "./pages/PageSingleShop"
// import PageEmployed from "./pages/PageEmployed"
import PageCreateAdmin from "./pages/PageCreateAdmin"
// import PageEmployed from "./components/MenuEmployed/PageEmployed"
import CreateProduct from "./components/FormsEmployed/CreateProduct/CreateProduct"
import PageEmployed2 from "./pages/PageEmployed2"
import EditProduct from "./components/FormsEmployed/EditProduct/EditProduct"
import DeleteProduct from "./components/FormsEmployed/DeleteProduct/DeleteProduct"
import ProductsEmployed from "./components/ProductsEmployed/ProductsEmployed"
import MyStoreEmployed from "./components/MyStoreEmployed/MyStoreEmployed"
import EditStore from "./components/FormsEmployed/EditStore/EditStore"
import Estadisticas from "./components/Estaditicas/Estadisticas"


import AccountAdmin from "./components/AccountAdmin/AccountAdmin"
import CreateSubcategory from "./components/FormsEmployed/CreateSubcategory/CreateSubcategory"
import EditSubCategory from "./components/FormsEmployed/EditSubcategory/EditSubCategory"
import DeleteSubcategory from "./components/FormsEmployed/DeleteSubcategory/DeleteSubcategory"
import PageEditPorfileEmployed from "./pages/PageEditPorfileEmployed"
import PageSubcategorys from "./pages/PageSubcategorys"
import Products from "./components/SubCategorys/Products"
// import DeleteCategory from "./components/FormsEmployed/DeleteCategory/DeleteCategory"
// import EditCategory from "./components/FormsEmployed/EditCategory/EditCategory"
import PageEmployed from "./components/MenuEmployed/PageEmployed"
import CardProductBig from "./components/CardProductBig/CardProductBig"
// import NewPassword from "./components/NewPassword/NewPassword.jsx"
import PageViewOverAdmin from "./pages/PageViewOverAdmin"
import FormPorfileUser from "./components/MenuUser/FormPorfileUser"
import DataTableBuysUser from "./components/MenuUser/DataTableBuysUser"
import DasboharUser from "./components/MenuUser/DasboharUser"
import Table from "./components/MenuUser/Table"
import { UseContextShop } from "./Hook/UseContextShop" 
import CreateMalls from "./CreateMalls/CreateMalls"
import DataTableMalls from "./Table/DataTableMalls"
import PageDiscountAll from "./pages/PageDiscountAll"


function App() {

  const { productItems } = Data
  const { shopItems } = Sdata


  const [CartItem, setCartItem] = useState([])


  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {

      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)


    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>

    <UseContextShop>
    <Routes>
        <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
        <Route path='/Login' element={<PageLogin />} />
        <Route path='/Register' element={<PageRegister />} />
        <Route path='/Offers' element={<PageOffer productItems={productItems} addToCart={addToCart} />} />
        <Route path='/OfficialStores/:code' element={<PageStores  />}>
          <Route path="tienda" element={<PageStores addToCart={addToCart} shopItems={shopItems} />} />
        </Route>
        <Route path='/NewProducts' element={<PageNewProduct productItems={productItems} addToCart={addToCart} />} />
        <Route path='/BigDiscount' element={<PageNewProduct productItems={productItems} addToCart={addToCart} />} />
        <Route path='/RecoverPassword' element={<RecoverPasword />} />
        <Route path='/CodeRecoverPassword/:id' element={<CodeRecoverPassword />} />
        <Route path='/ConcludeBuy' element={<ConcludeBuy />} />
        <Route path='/Category' element={<CategoryUnitarie />} />
        <Route path='/Account' element={<Account />} />
        {/* <Route path='/CardProduct' element={<CardProduct />} /> */}
        <Route path='/Admin' element={<PageAdmin />} />
        <Route path='/StoresInfo' element={<PageStoreInfo />} />
        <Route path='/CreateStore' element={<PageCreateStore />} />
        <Route path='/DeleteStore/:code' element={<PageDeleteStore />} />
        <Route path='/CategoryInfo' element={<PageInfoCategory />} />
        <Route path='/CreateCategory' element={<PageCreateCategory />} />
        <Route path='/DeleteCategory' element={<PageDeleteCategory />} />
        <Route path='/UpdateCategory' element={<PageUpdateCategory />} />
        <Route path='/AccountAdmin' element={<PageAccountAdmin />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/SingleShop' element={<PageSingleShop productItems={productItems} addToCart={addToCart} />} />
        <Route path='/SingleCategory' element={<CategoryUnitarie productItems={productItems} addToCart={addToCart} />} />
        <Route path='/Employed' element={<PageEmployed />} />

        <Route path='/CreateAdmin' element={<PageCreateAdmin />} />
        <Route path='/CardProducts/:code' element={<CardProductBig />} />

        <Route path='*' element={<PageNotFound />} />

        <Route path='/Employed' element={<PageEmployed2 />} />
        <Route path='*' element={<PageNotFound />} />
        {/* ROUTES CRUD PRODUCT */}
        <Route path='/Products' element={<ProductsEmployed/>} />
        <Route path='/CreateProduct' element={<CreateProduct />} />
        <Route path='/EditProduct/:code' element={<EditProduct />} />
        <Route path='/DeleteProduct' element={<DeleteProduct />} />
        {/* ROUTES CRUD STORE */}
        <Route path='/MyStore' element={<MyStoreEmployed />} />
        <Route path='/EditStore' element={<EditStore />} />
        {/* ROUTES CRUD ESTADISTICAS */}
        <Route path='/Estaditicas' element={<PageEmployed />} />
        {/* ROUTES CRUD CATEGORYS */}
        <Route path='/Categorys' element={<Estadisticas />} />
        {/* <Route to='/CreateCategory' element={<CreateCategory/>}/> */}
        {/* <Route to='/EditCategory' element={<EditCategory/>}/> */}
        {/* <Route to='/DeleteCategory'  element={<DeleteCategory/>}/> */}
        {/* ROUTES CRUD SUBCATEGORYS */}
        <Route path='/EditPorfileEmployed' element={<PageEditPorfileEmployed />} />
        <Route path='/CreateSubcategory' element={<CreateSubcategory />} />
        <Route path='/EditSubcategory/:code' element={<EditSubCategory />} />
        <Route path='/DeleteSubcategory' element={<DeleteSubcategory />} />
        <Route path='/SubCategorys' element={<PageSubcategorys />} />
        <Route path='/ProductsCategorys' element={<Products productItems={productItems} addToCart={addToCart} />} />
        {/* <Route path="/NewPassword/:id" element={<NewPassword />} /> */}
        <Route path="/overAdmin" element={<PageViewOverAdmin/>} />

        <Route path="/PageUser" element={<DasboharUser/>}/>
       <Route path="/FormProfileUser" element={<FormPorfileUser/>}/>
       <Route path="/DataTableBuysUser" element={<Table/>}/>
       <Route path="/CreateMalls" element={<CreateMalls/>}/>
       <Route path="/Malls" element={<DataTableMalls/>}/>
          <Route path="/DiscountCard" element={<PageDiscountAll />} />
      </Routes>

    </UseContextShop>
      
      {/* <Footer />  */}
    </>
  )
}

export default App