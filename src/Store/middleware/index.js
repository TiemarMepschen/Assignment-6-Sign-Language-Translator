import { applyMiddleware } from 'redux'
import { loginMiddleware } from "./loginMiddleware";
import { sessionMiddleware } from './sessionMiddleware';
import { translationMiddleware } from './translationMiddleware';

export default applyMiddleware(
    loginMiddleware,
    sessionMiddleware,
    translationMiddleware
)