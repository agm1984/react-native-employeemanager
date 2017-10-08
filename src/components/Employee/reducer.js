import {
    EMPLOYEE_UPDATE,
    CLEAR_EMPLOYEE_FORM
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
                // Mutate single property only
                [prop]: value
            }
        }

        case CLEAR_EMPLOYEE_FORM:
            return INITIAL_STATE

        default:
            return state
    }
}
