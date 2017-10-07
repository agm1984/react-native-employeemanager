import firebase from 'firebase'
import {
    FETCH_EMPLOYEES_SUCCESS
} from './types'

export const employeesFetch = () => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employees`)
            .on('value', (snapshot) => {
                dispatch({
                    type: FETCH_EMPLOYEES_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}
