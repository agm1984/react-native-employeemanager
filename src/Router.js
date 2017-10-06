// in this file, we are going to define all
// the different screens a user can navigate to
import React from 'react'
import { Stack, Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

// If there is no initial prop passed, the first scene will be loaded first.
const RouterComponent = () => {
    // Any CSS applied to sceneStyle will be passed
    // to all scenes in the application.
    return (
        <Router sceneStyle={null}>
            <Stack key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList" component={EmployeeList} title="Employees" />
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent
