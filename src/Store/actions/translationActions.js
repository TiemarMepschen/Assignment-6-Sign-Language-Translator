export const ACTION_TRANSLATION_ATTEMPTING = '[translation] ATTEMPT'
export const ACTION_TRANSLATION_SUCCESS = '[translation] SUCCESS'
export const ACTION_TRANSLATION_ERROR = '[translation] ERROR'

export const translationAttemptAction = credentials => ({
    type: ACTION_TRANSLATION_ATTEMPTING,
    payload: credentials
})
export const translationSuccessAction = profile => ({
    type: ACTION_TRANSLATION_SUCCESS,
    payload: profile
})

export const translationErrorAction = error => ({
    type: ACTION_TRANSLATION_ERROR,
    payload: error
})