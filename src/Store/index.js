import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import middleware from "./middleware";
import appReducer from "./reducers";

// create redux store
export default createStore(
    appReducer,
    composeWithDevTools(middleware)
)