import ApiClient from "./ApiClient";

export const __CreateMeal = async (id, data) => {
  try {
    const res = await ApiClient.post(`/meal/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteMeal = async (id) => {
  try {
    const res = await ApiClient.delete(`/meal/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateMeal = async (id, data) => {
  try {
    const res = await ApiClient.put(`/meal/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetMealByDate = async (id, data) => {
  try {
    const res = await ApiClient.get(`/meal/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
