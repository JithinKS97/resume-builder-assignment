import { createStore } from "redux";
import resumeReducer from "../reducer/resume";

const store = createStore(resumeReducer);
export default store;