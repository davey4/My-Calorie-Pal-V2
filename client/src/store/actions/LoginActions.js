import {
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_EMAIL,
  SET_PASSWORD,
  REGISTER_USER,
  SIGNIN_USER,
} from "../types";

import { __CreateUser, __LoginUser } from "../../services/UserServices";

export const setFirstName = (data) => ({
  type: SET_FIRSTNAME,
  payload: data,
});

export const setLastName = (data) => ({
  type: SET_LASTNAME,
  payload: data,
});

export const setEmail = (data) => ({
  type: SET_EMAIL,
  payload: data,
});

export const setPassword = (data) => ({
  type: SET_PASSWORD,
  payload: data,
});

export const registerUser = (data) => async (dispatch) => {
  try {
    await __CreateUser(data);
    dispatch({
      type: REGISTER_USER,
    });
  } catch (error) {
    throw error;
  }
};

export const signInUser = (data) => async (dispatch) => {
  try {
    const res = await __LoginUser(data);
    dispatch({
      type: SIGNIN_USER,
    });
  } catch (error) {
    throw error;
  }
};
