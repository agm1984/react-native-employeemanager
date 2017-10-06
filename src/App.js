import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import Router from './Router'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBq6mC5i1TnRWzc6OnR1Xeh1lTjeflpFsc',
            authDomain: 'employeemanager-913ef.firebaseapp.com',
            databaseURL: 'https://employeemanager-913ef.firebaseio.com',
            projectId: 'employeemanager-913ef',
            storageBucket: 'employeemanager-913ef.appspot.com',
            messagingSenderId: '566648609210'
        }

        firebase.initializeApp(config)
    }
    render() {
        // if we want to preload some initial state,
        // we can pass it into the empty object here
        // ex: pre-populate email/password fields with some values
        // mostly applicable to server-side rendering
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App