import api from "./axios";

export const getBrands = () => {
  return api.get("/images");
};

export const deleteBrand = (id) => {
  return api.delete(`/images/${id}`);
};

export const createBrand = (brand) => {
  return api.post("/images", brand);
};

