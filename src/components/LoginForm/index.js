import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text } from 'react-native'
import { Card, CardSection, Input, Button, LoadingSpinner } from '../common'
import { emailChanged, passwordChanged, loginUser } from '../auth/actions'

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

    renderError() {
        const { errorContainerStyle, errorTextStyle } = styles
        const { error } = this.props

        if (error) return (
            <CardSection style={errorContainerStyle}>
                <Text style={errorTextStyle}>
                    {error}
                </Text>
            </CardSection>
        )
    }

    render() {
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

                {this.renderError()}

                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    errorContainerStyle: {
        flex: 1
    },
    errorTextStyle: {
        flex: 1,
        fontSize: 20,
        lineHeight: 20,
        textAlign: 'center',
        color: 'red',
    }
})

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
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm)
