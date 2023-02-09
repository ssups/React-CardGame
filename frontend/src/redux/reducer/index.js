import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import cardReducer from "./cardReducer";
import itemReducer from "./itemReducer";
import postReducer from "./postReducer";
import pointReducer from "./pointReducer";

const rootReducer = combineReducers({
  loginReducer,
  cardReducer,
  itemReducer,
  postReducer,
  pointReducer,
});

export default rootReducer;
