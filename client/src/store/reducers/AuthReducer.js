import {
  REFRESH,
  SET_CURRENT_USER,
  SET_AUTHENTICATED,
  SET_PAGE_LOADING,
} from "../types";

const iState = {
  authenticated: false,
  currentUser: null,
  pageLoading: true,
};

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case REFRESH:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        authenticated: action.payload.authenticated,
      };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_AUTHENTICATED:
      return { ...state, authenticated: action.payload };
    case SET_PAGE_LOADING:
      return { ...state, pageLoading: action.payload };
    default:
      return { ...state };
  }
};

export default AuthReducer;
