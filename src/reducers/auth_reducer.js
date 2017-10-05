import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types'

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
                user: action.payload,
                isLoggingIn: false,
                error: '',
                email: '',
                password: ''
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
