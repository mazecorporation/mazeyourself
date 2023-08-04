import { combineReducers } from "redux";
import toast from "./toast/index";
import modalReducer from "./modal/index";
import loader from "./loader/index";

const rootReducer = combineReducers({
  // customizer,
  // auth,
  // navbar,
  toast,
  modalReducer,
  loader
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
