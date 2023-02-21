import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./services/reducers/counterReducers";
import todoReducer from "./services/reducers/todoReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;