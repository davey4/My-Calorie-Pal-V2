import {
  CREATE_EXERCISE,
  DELETE_EXERCISE,
  SET_DESCRITPTION,
  SET_CALS_BURNED,
  SET_ACTIVITY_LEVEL,
  SET_DURATION,
} from "../types";

const iState = {
  description: "",
  activityLevel: "",
  duration: "",
  calsBurned: null,
};

const ExerciseReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_EXERCISE:
      return { ...state };
    case DELETE_EXERCISE:
      return { ...state };
    case SET_DESCRITPTION:
      return { ...state, description: action.payload };
    case SET_CALS_BURNED:
      return { ...state, calsBurned: action.payload };
    case SET_ACTIVITY_LEVEL:
      return { ...state, activityLevel: action.payload };
    case SET_DURATION:
      return { ...state, duration: action.payload };
    default:
      return { ...state };
  }
};

export default ExerciseReducer;
