// used to set our session --> provide the profile to this action and use this to identify that we're now setting a new session
export const ACTION_SESSION_SET = '[session] SET';
export const ACTION_SESSION_INIT = '[session] INIT'
export const ACTION_SESSION_EXPIRED = '[session] EXPIRED'
export const ACTION_SESSION_LOGOUT = '[session] LOGOUT'
export const ACTION_SESSION_CLEAR = '[session] CLEAR'

export const sessionSetAction = profile => ({
    type: ACTION_SESSION_SET,
    payload: profile
})

export const sessionInitAction = () => ({
    type: ACTION_SESSION_INIT
    // no payload because we're actually not sure if the session exists,
    // we want to trigger an initialization action and allow a middleware
    // to create side-effects
    // middleware checks whether there is a session
})

export const sessionExpiredAction = () => ({
    type: ACTION_SESSION_EXPIRED
})

export const sessionLogoutAction = () => ({
    type: ACTION_SESSION_LOGOUT
})

export const sessionClearAction = () => ({
    type: ACTION_SESSION_CLEAR
})