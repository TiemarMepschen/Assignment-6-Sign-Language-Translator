import { TranslationAPI } from "../../API/translationAPI";
import {
  ACTION_TRANSLATION_ATTEMPTING,
  ACTION_TRANSLATION_SUCCESS,
  translationErrorAction,
  translationSuccessAction,
} from "../actions/translationActions";
import { sessionExpiredAction } from "../actions/sessionActions"

export const translationMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_TRANSLATION_ATTEMPTING)
      TranslationAPI.updateTranslations(action.payload)
        .then((profile) => {
          dispatch(translationSuccessAction(profile));
        })
        .catch(({ message }) => {
          if (message === "INVALID_AUTH_TOKEN") {
            dispatch(sessionExpiredAction());
          } else {
            dispatch(translationErrorAction(message));
          }
        });

    if (action.type === ACTION_TRANSLATION_SUCCESS) {
      // update local storage
      localStorage.setItem("user-session", JSON.stringify(action.payload));
    }
  };