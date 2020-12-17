import ApiClient from "./ApiClient";

export const __CreateFood = async (id, data) => {
  try {
    const res = await ApiClient.post(`/food/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteFood = async (id) => {
  try {
    const res = await ApiClient.delete(`/food/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
