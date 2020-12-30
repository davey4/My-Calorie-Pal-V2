import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./reducers/UserReducer";
import DiaryReducer from "./reducers/DiaryReducer";
import AuthReducer from "./reducers/AuthReducer";

const store = createStore(
  combineReducers({
    userState: UserReducer,
    authState: AuthReducer,
    diaryState: DiaryReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
