import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducer from "./reducers/LoginReducer";

const store = createStore(
  combineReducers({
    loginState: LoginReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
