import axios from "axios";
import Cookie from "js-cookie";

const BASE_URL = "http://localhost:8000/api/";

const listAPI = {};

const getCsrfConfig = () => {
  return {
    withCredentials: true,
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken"),
    },
  };
};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

listAPI.login = async (loginData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}login/`, loginData, getCsrfConfig())
  );
};

listAPI.logout = async () => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}logout/`, getCsrfConfig())
  );
};

listAPI.signup = async (signpuData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}users/`, signpuData, getCsrfConfig())
  );
};

listAPI.getAllCategories = async () => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}categories/`, getCsrfConfig())
  );
};

listAPI.getCategoryById = async (categoryId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}categories/${categoryId}/`, getCsrfConfig())
  );
};

listAPI.addCategory = async (categoryData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}categories/`, categoryData, getCsrfConfig())
  );
};

listAPI.updateCategory = async (categoryId, categoryData) => {
  return await tryCatchFetch(() =>
    axios.put(
      `${BASE_URL}categories/${categoryId}/`,
      categoryData,
      getCsrfConfig()
    )
  );
};

listAPI.deleteCategory = async (categoryId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}categories/${categoryId}/`, getCsrfConfig())
  );
};

listAPI.getItemById = async (itemId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}items/${itemId}/`, getCsrfConfig())
  );
};

listAPI.addItem = async (itemData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}items/`, itemData, getCsrfConfig())
  );
};

listAPI.updateItem = async (itemId, updatedData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}items/${itemId}/`, updatedData, getCsrfConfig())
  );
};

listAPI.deleteItem = async (itemId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}items/${itemId}/`, getCsrfConfig())
  );
};

export default listAPI;
