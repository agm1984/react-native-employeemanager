import { combineReducers } from 'redux'
import authReducer from './components/auth/reducer'
import EmployeeFormReducer from './components/EmployeeCreate/reducer'
import EmployeesReducer from './components/EmployeeList/reducer'

export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeesReducer
})
