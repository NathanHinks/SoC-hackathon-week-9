import { createStore } from "redux";
import { defaultState } from '../libs/dependencies';
import rootReducer from "./reducers";

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;