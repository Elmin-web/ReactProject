import { combineReducers } from "redux";
import basketReducer from "./basket/reducer";
const rootReducer = combineReducers({ basketReducer });
export default rootReducer;
