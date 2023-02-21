import { createStore } from "redux";
import counterReducer from "./services/reducers/counterReducers";

const store = createStore(counterReducer);

export default store;