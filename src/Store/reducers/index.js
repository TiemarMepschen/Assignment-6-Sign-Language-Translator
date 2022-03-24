import { combineReducers } from 'redux'
import { loginReducer } from "./loginReducer";
import { sessionReducer } from './sessionReducer';
import { translationReducer } from './translationReducer';

const appReducer = combineReducers({
    loginReducer,
    sessionReducer,
    translationReducer    
})

export default appReducer