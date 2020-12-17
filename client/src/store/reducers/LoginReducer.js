import {
  SET_LASTNAME,
  SET_FIRSTNAME,
  SET_EMAIL,
  SET_PASSWORD,
  REGISTER_USER,
  SIGNIN_USER,
} from "../types";

const iState = {
  lastName: "",
  firstName: "",
  email: "",
  password: "",
};

const LoginReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_LASTNAME:
      return { ...state, lastName: action.payload };
    case SET_FIRSTNAME:
      return { ...state, firstName: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case REGISTER_USER:
      return { ...state };
    case SIGNIN_USER:
      return { ...state };
    default:
      return { ...state };
  }
};

export default LoginReducer;
