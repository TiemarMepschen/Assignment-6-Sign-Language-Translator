import { LoginAPI } from "../../API/loginAPI";
import {
  ACTION_LOGIN_ATTEMPTING,
  ACTION_LOGIN_SUCCESS,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";
import { sessionSetAction } from "../actions/sessionActions"

export const loginMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_LOGIN_ATTEMPTING) {
      LoginAPI.checkIfInAPI(action.payload)
        .then((profile) => {
          dispatch(loginSuccessAction(profile));
        })
        .catch((error) => {
          dispatch(loginErrorAction(error.message));
        });
      // make an http request to try and login
    }

    if (action.type === ACTION_LOGIN_SUCCESS) {
      // will set the action for the session and it'll create a local storage entry
      dispatch(sessionSetAction(action.payload));
    }
  };
