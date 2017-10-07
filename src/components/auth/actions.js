import { Keyboard } from 'react-native'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

const loginUserSuccess = (dispatch, user) => {
    Keyboard.dismiss()
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })

    Actions.main()
}

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })
    }
}
