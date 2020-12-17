import ApiClient from "./ApiClient";

export const __CreateProfile = async (id, data) => {
  try {
    const res = await ApiClient.post(`/info/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
