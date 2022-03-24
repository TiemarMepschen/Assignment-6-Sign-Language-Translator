import {
    ACTION_TRANSLATION_ATTEMPTING,
    ACTION_TRANSLATION_ERROR,
    ACTION_TRANSLATION_SUCCESS,
  } from "../actions/translationActions";
  
  const initialState = {
    translationAttempting: false,
    translationError: "",
  };
  
  export const translationReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TRANSLATION_ATTEMPTING:
        return {
          ...state,
          translationAttempting: true,
          translationError: "",
        };
      case ACTION_TRANSLATION_SUCCESS:
        return {
          ...initialState,
        };
      case ACTION_TRANSLATION_ERROR:
        return {
          ...state,
          translationAttempting: false,
          translationError: action.payload,
        };
      default:
        return state;
    }
  };
  