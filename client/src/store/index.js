import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./reducers/UserReducer";
import AuthReducer from "./reducers/AuthReducer";
import DiaryReducer from "./reducers/DiaryReducer";
import MealReducer from "./reducers/MealReducer";
import ExerciseReducer from "./reducers/ExerciseReducer";
import FoodReducer from "./reducers/FoodReducer";

const store = createStore(
  combineReducers({
    userState: UserReducer,
    authState: AuthReducer,
    diaryState: DiaryReducer,
    mealState: MealReducer,
    exerciseState: ExerciseReducer,
    foodState: FoodReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
