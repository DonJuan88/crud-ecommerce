import api from "./axios";

export const getCategories = () => {
  return api.get("/category");
};

export const deleteCategory = (id) => {
  return api.delete(`/category/${id}`);
};

export const createCategory = (category) => {
  return api.post("/category", category);
};

export const updateCategory = (id, category) => {
  return api.put(`/category/${id}`, category);
};
