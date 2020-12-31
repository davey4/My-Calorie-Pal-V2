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

const iState = {
  description: "",
  servings: null,
  servingSize: null,
  calories: null,
  protein: null,
  carbs: null,
  fat: null,
};

const FoodReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_FOOD:
      return { ...state };
    case DELETE_FOOD:
      return { ...state };
    case SET_FOOD:
      return { ...state, description: action.payload };
    case SET_SERVINGS:
      return { ...state, servings: action.payload };
    case SET_SERVING_SIZE:
      return { ...state, servingSize: action.payload };
    case SET_CALORIES:
      return { ...state, calories: action.payload };
    case SET_PROTEIN:
      return { ...state, protein: action.payload };
    case SET_CARBS:
      return { ...state, carbs: action.payload };
    case SET_FAT:
      return { ...state, fat: action.payload };
    default:
      return { ...state };
  }
};

export default FoodReducer;
