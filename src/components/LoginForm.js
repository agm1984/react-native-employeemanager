import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button, LoadingSpinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onLoginAttempt() {
        const { email, password } = this.props

        this.props.loginUser({ email, password })
    }

    renderLoginButton() {
        if (this.props.isLoggingIn) return (
            <LoadingSpinner size="large" />
        )

        return (
            <Button onPress={() => this.onLoginAttempt()}>
                Login
            </Button>
        )
    }

    render() {
        const { errorTextStyle } = styles

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={(text) => this.onEmailChange(text)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        onChangeText={(text) => this.onPasswordChange(text)}
                        value={this.props.password}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, isLoggingIn, error } = auth

    return {
        email,
        password,
        isLoggingIn,
        error
    }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm)
