import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const listAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

listAPI.getAllCategories = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}categories/`));
};

listAPI.getCategoryById = async (categoryId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}categories/${categoryId}/`)
  );
};

listAPI.addCategory = async (categoryData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}categories/`, categoryData)
  );
};

listAPI.updateCategory = async (categoryId, categoryData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}categories/${categoryId}/`, categoryData)
  );
};

listAPI.deleteCategory = async (categoryId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}categories/${categoryId}/`)
  );
};

listAPI.getItemById = async (itemId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}items/${itemId}/`));
};

listAPI.addItem = async (itemData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}items/`, itemData));
};

listAPI.updateItem = async (itemId, updatedData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}items/${itemId}/`, updatedData)
  );
};

listAPI.deleteItem = async (itemId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}items/${itemId}/`));
};

export default listAPI;
