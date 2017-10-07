import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from '../common'

class EmployeeListItem extends Component {
    onRowPress() {
        // This form needs to know what employee is being loaded
        const { employee } = this.props
        Actions.employeeCreate({ employee })
    }

    render() {
        const { titleStyle } = styles
        const { name } = this.props.employee

        return (
            <TouchableWithoutFeedback onPress={() => this.onRowPress()}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

export default EmployeeListItem
