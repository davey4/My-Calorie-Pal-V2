import {
  REFRESH,
  SET_CURRENT_USER,
  SET_AUTHENTICATED,
  SET_PAGE_LOADING,
} from "../types";

import { __RefreshSession } from "../../services/UserServices";

export const refresh = (props) => async (dispatch) => {
  try {
    const session = await __RefreshSession();
    let auth = {
      currentUser: session.user,
      authenticated: true,
    };
    dispatch({
      type: REFRESH,
      payload: auth,
    }),
      () => props.history.push("/diary");
  } catch (error) {
    let auth = {
      currentUser: null,
      authenticated: false,
    };
    dispatch({
      type: REFRESH,
      payload: auth,
    }),
      localStorage.clear();
  }
};

export const pageLoading = (data) => ({
  type: SET_PAGE_LOADING,
  payload: data,
});

export const setCurrentUser = (data) => ({
  type: SET_CURRENT_USER,
  payload: data,
});

export const setAuthenticated = (data) => ({
  type: SET_AUTHENTICATED,
  payload: data,
});
