import { GET_DIARY } from "../types";

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
    default:
      return { ...state };
  }
};

export default DiaryReducer;
