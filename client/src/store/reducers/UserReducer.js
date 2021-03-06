import {
  SET_LASTNAME,
  SET_FIRSTNAME,
  SET_EMAIL,
  SET_PASSWORD,
  CONFIRM_PASSWORD,
  REGISTER_USER,
  SIGNIN_USER,
  UPDATE_USER,
} from "../types";

const iState = {
  lastName: "",
  firstName: "",
  email: "",
  password: "",
  confirmPassord: "",
};

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_LASTNAME:
      return { ...state, lastName: action.payload };
    case SET_FIRSTNAME:
      return { ...state, firstName: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case CONFIRM_PASSWORD:
      return { ...state, confirmPassord: action.payload };
    case REGISTER_USER:
      return { ...state };
    case SIGNIN_USER:
      return { ...state };
    case UPDATE_USER:
      return { ...state };
    default:
      return { ...state };
  }
};

export default UserReducer;
