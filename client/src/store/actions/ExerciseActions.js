import {
  CREATE_EXERCISE,
  DELETE_EXERCISE,
  SET_DESCRITPTION,
  SET_CALS_BURNED,
  SET_ACTIVITY_LEVEL,
  SET_DURATION,
} from "../types";

import {
  __CreateExercise,
  __DeleteExercise,
} from "../../services/ExerciseServices";

export const createExercise = (id, data) => async (dispatch) => {
  try {
    const exercise = await __CreateExercise(id, data);
    dispatch({
      type: CREATE_EXERCISE,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteExercise = (id) => async (dispatch) => {
  try {
    await __DeleteExercise(id);
    dispatch({
      type: DELETE_EXERCISE,
    });
  } catch (error) {
    throw error;
  }
};

export const setDescription = (data) => ({
  type: SET_DESCRITPTION,
  payload: data,
});

export const setCalsBurned = (data) => ({
  type: SET_CALS_BURNED,
  payload: data,
});

export const setActivityLevel = (data) => ({
  type: SET_ACTIVITY_LEVEL,
  payload: data,
});

export const setDuration = (data) => ({
  type: SET_DURATION,
  payload: data,
});
