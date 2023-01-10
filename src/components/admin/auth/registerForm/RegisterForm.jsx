import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import './RegisterForm.scss';

export function RegisterForm() {
    const [error, setError] = useState('');

    return (
        <Form className="register-form">
            <Form.Input name="email" placeholder="Email" />
            <Form.Input name="password" placeholder="Password" type='password' />
            <Form.Input name="repeatPassword" placeholder="Repeat Password" type='password' />
            <Form.Checkbox name='conditionsAccepted' label='I accept privacity policies' />
            <Form.Button type='submit' primary fluid>
                Create Account
            </Form.Button>
            <p className="register-form__error">{error}</p>
        </Form>
    );
}
