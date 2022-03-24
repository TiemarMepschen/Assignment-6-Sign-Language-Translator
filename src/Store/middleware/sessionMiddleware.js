import { ACTION_SESSION_CLEAR, ACTION_SESSION_EXPIRED, ACTION_SESSION_INIT, ACTION_SESSION_LOGOUT, ACTION_SESSION_SET, sessionClearAction, sessionLogoutAction, sessionSetAction } from "../actions/sessionActions"

export const sessionMiddleware = ({ dispatch }) => next => action => {

    next(action)

    if (action.type === ACTION_SESSION_INIT) {
        // read localStorage
        const storedSession = localStorage.getItem('user-session')

        // check if session exists
        if (!storedSession) {
            return
        }
        const session = JSON.parse(storedSession)
        dispatch(sessionSetAction(session))
    }
    
    if (action.type === ACTION_SESSION_SET) {
        // store the session somewhere (token should be stored in cookies)
        localStorage.setItem('user-session', JSON.stringify(action.payload))
    }

    if (action.type === ACTION_SESSION_CLEAR) {
        localStorage.removeItem('user-session')
    }

    if (action.type === ACTION_SESSION_LOGOUT) {
        dispatch(sessionClearAction())
    }

    if (action.type === ACTION_SESSION_EXPIRED) {
        dispatch(sessionLogoutAction())
    }
}