import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Button } from '../common'
import { clearEmployeeForm, employeeCreate } from './actions'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.clearEmployeeForm()
    }

    onSaveButtonPress() {
        const {
            name,
            phone,
            shift
        } = this.props

        if (name && phone && shift) {
            this.props.employeeCreate({
                name,
                phone,
                // Default value for shift
                shift: shift || 'Monday'
            })
            return
        }
        alert('You must fill in every field.')
    }

    render() {
        // this.props.employee is only populated if we access this view
        // by passing `employee` into it via Actions.employeeCreate()

        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={() => this.onSaveButtonPress()} >
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm

    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, {
    clearEmployeeForm,
    employeeCreate
})(EmployeeCreate)
