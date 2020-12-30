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

const iState = {
  name: "",
  totalCals: null,
  totalProtein: null,
  totalCarbs: null,
  totalFat: null,
};

const MealReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_MEAL:
      return { ...state };
    case DELETE_MEAL:
      return { ...state };
    case UPDATE_MEAL:
      return {
        ...state,
        name: action.payload.name,
        totalCals: action.payload.total_cals,
        totalProtein: action.payload.total_protein,
        totalCarbs: action.payload.total_carbs,
        totalFat: action.payload.total_fat,
      };
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_TOTAL_CALS:
      return { ...state, totalCals: action.payload };
    case SET_TOTAL_PROTEIN:
      return { ...state, totalProtein: action.payload };
    case SET_TOTAL_CARBS:
      return { ...state, totalCarbs: action.payload };
    case SET_TOTAL_FAT:
      return { ...state, totalFat: action.payload };
    default:
      return { ...state };
  }
};

export default MealReducer;
