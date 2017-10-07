import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types'

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    isLoggingIn: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            }

        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            }

        case LOGIN_USER:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,     // spread in initial state settings
                user: action.payload
            }

        case LOGIN_USER_FAIL:
            return {
                ...state,
                password: '',
                isLoggingIn: false,
                error: 'Authentication failed.'
            }

        default:
            return state
    }
}
