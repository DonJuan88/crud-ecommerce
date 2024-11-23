import api from "./axios";

export const getItem = () => {
  return api.get("/items");
};

export const deleteItem = (id) => {
  return api.delete(`/items/${id}`);
};

export const createItem = (Item) => {
  return api.post("/items", Item);
};

export const updateItem = (id, Item) => {
  return api.put(`/items/${id}`, Item);
};
