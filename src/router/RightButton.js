import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const RightButton = () => {
    const { addButtonStyle } = styles

    return (
        <TouchableOpacity>
            <Text style={addButtonStyle} onPress={() => Actions.employeeCreate()}>
                Add
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButtonStyle: {
        paddingRight: 10,
        color: 'blue'
    }
})

export default RightButton
