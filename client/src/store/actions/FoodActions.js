import {
  CREATE_FOOD,
  DELETE_FOOD,
  SET_FOOD,
  SET_SERVINGS,
  SET_SERVING_SIZE,
  SET_CALORIES,
  SET_PROTEIN,
  SET_CARBS,
  SET_FAT,
} from "../types";

import { __CreateFood, __DeleteFood } from "../../services/FoodServices";

export const createFood = (id, data) => async (dispatch) => {
  try {
    const res = await __CreateFood(id, data);
    dispatch({
      type: CREATE_FOOD,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteFood = (id) => async (dispatch) => {
  try {
    await __DeleteFood(id);
    dispatch({
      type: DELETE_FOOD,
    });
  } catch (error) {
    throw error;
  }
};

export const setFood = (data) => ({
  type: SET_FOOD,
  payload: data,
});

export const setServings = (data) => ({
  type: SET_SERVINGS,
  payload: data,
});

export const setServingSize = (data) => ({
  type: SET_SERVING_SIZE,
  payload: data,
});

export const setCalories = (data) => ({
  type: SET_CALORIES,
  payload: data,
});

export const setProtein = (data) => ({
  type: SET_PROTEIN,
  payload: data,
});

export const setCarbs = (data) => ({
  type: SET_CARBS,
  payload: data,
});

export const setFat = (data) => ({
  type: SET_FAT,
  payload: data,
});
