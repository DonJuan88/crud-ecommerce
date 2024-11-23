import api from "./axios";

export const getBrands = () => {
  return api.get("/brands");
};

export const deleteBrand = (id) => {
  return api.delete(`/brands/${id}`);
};

export const createBrand = (brand) => {
  return api.post("/brands", brand);
};

export const updateBrand = (id, brand) => {
  return api.put(`/brands/${id}`, brand);
};
