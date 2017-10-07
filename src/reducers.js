import { combineReducers } from 'redux'
import authReducer from './components/auth/reducer'
import EmployeeFormReducer from './components/EmployeeCreate/reducer'

export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFormReducer
})
