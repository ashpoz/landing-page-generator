import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import updateHTMLState from "./updateHTMLOutput";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  html: updateHTMLState
});

export default createStore(reducer);