import axios from "axios";

let urlServer = "http://localhost:3105/authUser";
let urlServerStores = "http://localhost:3105/stores";
let urlServerCategory = "http://localhost:3105/category";
let urlProducts = "http://localhost:3105/products";
let token = localStorage.getItem("token");

export const TodoGetApis = {
  SingUp: async (data, code) =>
    await axios.post(`${urlServer}/signUpAdmin/${code}`, { data }),
    
  // CreateProduct: async(data) => await axios.post(`${urlServer}/CreateProduct`,{data})
  SingIn: async (data) => await axios.post(`${urlServer}/signInUser`, { data }),

  RecoverPasword: async (data) =>
    await axios.put(`${urlServer}/recoverPassword`, { data }),

  NewPassword: async (data) =>
    await axios.put(`${urlServer}/updatePassword`, { data }),

  CodeRecoverPassword: async (data) =>
    await axios.put(`${urlServer}/newPassword`, { data }),

  GetAccountCustomer: async () =>
    await axios.get(`${urlServer}/gatDataCustomer`, {
      headers: {
        token,
      },
    }),
  UpdateCustomer: async (data) =>
    await axios.put(
      `${urlServer}/updateCustomer`,
      { data },
      {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      }
    ),

  GetAccountAdmin: async () =>
    await axios.get(`${urlServer}/gatDataAccount`, {
      headers: {
        token: `${token}`,
      },
    }),

  GetDataCustomer: async () =>
    await axios.get(`${urlServer}/gatDataCustomer`, {
      headers: {
        token,
      },
    }),

  UpdateAdmin: async (data) =>
    await axios.put(
      `${urlServer}/updateData`,
      { data },
      {
        headers: {
          token,
        },
      }
    ),

  ValidateToken: async (data) =>
    await axios.post(
      `${urlServer}/validateToken`,
      { data },
      {
        headers: {
          token,
        },
      }
    ),

  CreateStore: async (data) =>
    await axios.post(
      `${urlServerStores}/addStore`,
      { data },
      {
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
      }
    ),

  getStoresAdmin: async () =>
    await axios.get(`${urlServerStores}/getStoreAdmin`, {
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    }),

  GetStore: async () =>
    await axios.get(`${urlServerStores}/getDataStore`, {
      headers: {
        token,
      },
    }),
  UpdateStore: async (data) =>
    await axios.put(
      `${urlServerStores}/updateStore`,
      { data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token,
        },
      }
    ),

  DeleteStore: async (code) =>
    await axios.delete(`${urlServerStores}/deleteStore/${code}`, {
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    }),

  CreateCustomer: async (data) =>
    await axios.post(`${urlServer}/signUpCustomer`, { data }),

  CreateCategory: async (data) =>
    await axios.post(
      `${urlServerCategory}/addCategory`,
      { data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: `${token}`,
        },
      }
    ),
  UpdateCategory: async (data, code) => {
    await axios.put(
      `${urlServerCategory}/updateCategory/${code}`,
      { data },
      {
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
      }
    );
  },

  DeleteCategory: async (code) =>
    await axios.delete(`${urlServerCategory}/deleteCategory/${code}`, {
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    }),

  getCategoryStore: async () =>
    await axios.get(`${urlServerCategory}/getCategoryStore`, {
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    }),

  GetCategoryStore: async () =>
    await axios.get(`${urlServerCategory}/getCategoriesStore`, {
      headers: {
        token: `${token}`,
      },
    }),

  // APIS PRODUCTS EMPLOYED FLASH

  CreateProduct: async (data) =>
    await axios.post(
      `${urlProducts}/addProducts`,
      { data },
      {
        headers: {
          token: `${token}`,
          "Content-Type": "multipart/form-data",

          // "Content-Type": "application/json",
        },
      }
    ),

  UpdateProduct: async (data, id) =>
    await axios.put(
      `${urlProducts}/updateProducts/${id}`,
      { data },
      {
        headers: {
          token,
        },
      }
    ),

  DeleteProduct: async (code) =>
    await axios.delete(`${urlProducts}/deleteProducts/${code}`, {
      headers: {
        token: `${token}`,
      },
    }),

  GetProductsStore: async (data) =>
    await axios.get(`${urlProducts}/getProductsStore`, {
      headers: {
        token: `${token}`,
      },
    }),
};
