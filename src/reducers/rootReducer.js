import { combineReducers } from "redux";
import tempsReducer from "./tempReducer";

const rootReducer = combineReducers({
    temps: tempsReducer
})

export default rootReducer;