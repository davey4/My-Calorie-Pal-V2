import { GET_DIARY, GET_EXERCISE_BY_DATE, GET_MEAL_BY_DATE } from "../types";

import { __GetDiary } from "../../services/UserServices";
import { __GetExerciseByDate } from "../../services/ExerciseServices";
import { __GetMealByDate } from "../../services/MealServices";

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

export const getExerciseByDate = (id, data) => async (dispatch) => {
  try {
    const res = await __GetExerciseByDate(id, data);
    console.log(res);
    dispatch({
      type: GET_EXERCISE_BY_DATE,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const getMealByDate = (id, data) => async (dispatch) => {
  try {
    const res = await __GetMealByDate(id, data);
    dispatch({
      type: GET_MEAL_BY_DATE,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};
