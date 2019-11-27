import { createStore } from "redux";
import AuthenticationReducer from "./reducers/AuthenticationReducer";

export const store = createStore(AuthenticationReducer);