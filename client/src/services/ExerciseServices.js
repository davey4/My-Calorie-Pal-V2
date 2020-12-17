import ApiClient from "./ApiClient";

export const __CreateExercise = async (id, data) => {
  try {
    const res = await ApiClient.post(`/exercise${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteExercise = async (id) => {
  try {
    const res = await ApiClient.delete(`/exercise/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetExerciseByDate = async (id, data) => {
  try {
    const res = await ApiClient.get(`/exercise/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
