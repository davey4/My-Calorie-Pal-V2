import ApiClient from "./ApiClient";

export const __CreateUser = async (data) => {
  try {
    const res = await ApiClient.post("/user/register", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (data) => {
  try {
    const res = await ApiClient.post("user/login", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateUser = async (id, data) => {
  try {
    const res = await ApiClient.put(`/user/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __RefreshSession = async () => {
  try {
    const res = await ApiClient.get("/user/refresh/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetDiary = async (id, data) => {
  try {
    const res = await ApiClient.get(`/user/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
