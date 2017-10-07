import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from './types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE: {
            // action.payload === { prop: 'name', value: 'Jane' }
            const { prop, value } = action.payload
            return {
                ...state,
                [prop]: value
            }
        }

        case EMPLOYEE_CREATE:
            return INITIAL_STATE

        default:
            return state
    }
}