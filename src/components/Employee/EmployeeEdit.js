import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import { employeeUpdate, employeeSave, employeeDelete } from './actions'
import { Card, CardSection, Button, ConfirmModal } from '../common'
import EmployeeForm from './EmployeeForm'

// this.props.employee is the Employee we are trying to edit
class EmployeeEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    componentWillMount() {
        const { employee } = this.props

        Object.keys(employee).forEach((prop) => {
            const value = employee[prop]
            this.props.employeeUpdate({ prop, value })
        })
    }

    onSaveButtonPress() {
        const {
            name,
            phone,
            shift,
            employee: { uid }
        } = this.props

        this.props.employeeSave({
            name,
            phone,
            shift,
            uid
        })
    }

    onTextButtonPress() {
        const { phone, shift } = this.props
        // eslint-disable-next-line
        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    onAccept() {
        const { uid } = this.props.employee
        this.props.employeeDelete({ uid })
    }

    onDecline() {
        this.setState({ showModal: false })
    }

    toggleFireEmployeeModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={() => this.onSaveButtonPress()}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.onTextButtonPress()}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.toggleFireEmployeeModal()}>
                        Fire Employee
                    </Button>
                </CardSection>

                <ConfirmModal
                    visible={this.state.showModal}
                    onAccept={() => this.onAccept()}
                    onDecline={() => this.onDecline()}
                >
                    Are you sure you want to delete this?
                </ConfirmModal>
            </Card>
        )
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm

    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeSave,
    employeeDelete
})(EmployeeEdit)
