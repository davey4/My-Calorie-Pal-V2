import { GET_DIARY } from "../types";

import { __GetDiary } from "../../services/UserServices";

export const getDiary = (id) => async (dispatch) => {
  try {
    const res = await __GetDiary(id);
    console.log(res);
    dispatch({
      type: GET_DIARY,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};
