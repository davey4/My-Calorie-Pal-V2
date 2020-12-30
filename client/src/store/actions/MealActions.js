import {
  CREATE_MEAL,
  DELETE_MEAL,
  UPDATE_MEAL,
  SET_NAME,
  SET_TOTAL_CALS,
  SET_TOTAL_PROTEIN,
  SET_TOTAL_CARBS,
  SET_TOTAL_FAT,
} from "../types";

import {
  __CreateMeal,
  __DeleteMeal,
  __UpdateMeal,
} from "../../services/MealServices";

export const createMeal = (id, data) => async (dispatch) => {
  try {
    await __CreateMeal(id, data);
    dispatch({
      type: CREATE_MEAL,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteMeal = (id) => async (dispatch) => {
  try {
    await __DeleteMeal(id);
    dispatch({
      type: DELETE_MEAL,
    });
  } catch (error) {
    throw error;
  }
};

export const updateMeal = (id, data) => async (dispatch) => {
  try {
    const meal = await __UpdateMeal(id, data);
    dispatch({
      type: UPDATE_MEAL,
      payload: meal,
    });
  } catch (error) {
    throw error;
  }
};

export const setName = (data) => ({
  type: SET_NAME,
  payload: data,
});

export const setTotalCals = (data) => ({
  type: SET_TOTAL_CALS,
  payload: data,
});

export const setTotalProtein = (data) => ({
  type: SET_TOTAL_PROTEIN,
  payload: data,
});

export const setTotalCarbs = (data) => ({
  type: SET_TOTAL_CARBS,
  payload: data,
});

export const setTotalFat = (data) => ({
  type: SET_TOTAL_FAT,
  payload: data,
});
