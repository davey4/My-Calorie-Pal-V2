import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./reducers/UserReducer";
import AuthReducer from "./reducers/AuthReducer";
import DiaryReducer from "./reducers/DiaryReducer";
import MealReducer from "./reducers/MealReducer";

const store = createStore(
  combineReducers({
    userState: UserReducer,
    authState: AuthReducer,
    diaryState: DiaryReducer,
    mealState: MealReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
