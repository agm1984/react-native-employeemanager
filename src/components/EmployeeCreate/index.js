import React, { Component } from 'react'
import { StyleSheet, Picker, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from '../common'
import { employeeUpdate, employeeCreate } from './actions'

class EmployeeCreate extends Component {
    onSaveChanges() {
        const { name, phone, shift } = this.props

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    }

    renderPickerDays() {
        const daysOfTheWeek = [
            { id: 0, label: 'Sunday' },
            { id: 1, label: 'Monday' },
            { id: 2, label: 'Tuesday' },
            { id: 3, label: 'Wednesday' },
            { id: 4, label: 'Thursday' },
            { id: 5, label: 'Friday' },
            { id: 6, label: 'Saturday' }
        ]

        return daysOfTheWeek.map((day) => <Picker.Item key={day.id} label={day.label} value={day.label} />)
    }

    render() {
        const { pickerCardSectionStyle, pickerTextStyle, pickerStyle } = styles

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={pickerCardSectionStyle}>
                    <Text style={pickerTextStyle}>
                        Shift
                    </Text>
                    <Picker
                        style={pickerStyle}
                        selectedValue={this.props.shift}
                        onValueChange={(value) => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        {this.renderPickerDays()}
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.onSaveChanges()}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    pickerCardSectionStyle: {
        height: 55,
        alignItems: 'center'
    },
    pickerTextStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    },
    pickerStyle: {
        flex: 2,
        marginLeft: -8
    }
})

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm

    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeCreate
})(EmployeeCreate)
