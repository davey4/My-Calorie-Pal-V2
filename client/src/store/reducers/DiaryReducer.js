import { GET_DIARY, GET_EXERCISE_BY_DATE, GET_MEAL_BY_DATE } from "../types";

const iState = {
  personalInfo: {},
  exercise: [],
  meals: [],
};

const DiaryReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_DIARY:
      return {
        ...state,
        personalInfo: action.payload.PersonalInfo,
        exercise: action.payload.Exercise,
        meals: action.payload.Meal,
      };
    case GET_EXERCISE_BY_DATE:
      return { ...state, exercise: action.payload };
    case GET_MEAL_BY_DATE:
      return { ...state, meals: action.payload };
    default:
      return { ...state };
  }
};

export default DiaryReducer;
