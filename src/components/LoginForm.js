import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'redux'
import { emailChanged } from '../actions'


class LoginForm extends Component {
    onEmailChange(text) {
        
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={(text) => this.onEmailChange(text)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={() => null}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default connect(null, { emailChanged })(LoginForm)
