import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>HELLO</Text>
                </View>
            </Provider>
        )
    }
}

export default App