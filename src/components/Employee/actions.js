import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    EMPLOYEE_UPDATE,
    CLEAR_EMPLOYEE_FORM
} from './types'

export const clearEmployeeForm = () => {
    return (dispatch) => dispatch({
        type: CLEAR_EMPLOYEE_FORM
    })
}

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: CLEAR_EMPLOYEE_FORM
                })

                Actions.pop()
            })
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: CLEAR_EMPLOYEE_FORM
                })

                Actions.pop()
            })
    }
}

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth()

    return () => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => Actions.pop())
    }
}

// not used
export const signOut = () => {
    return () => {
        firebase
            .auth()
            .signOut()
    }
}
