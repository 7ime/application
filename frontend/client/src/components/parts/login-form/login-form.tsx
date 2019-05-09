import React from 'react';

import { Input } from '../../ui';
import { Form, FormField, FormFlash, FormSubmit } from '../../kit/form';

class LoginForm extends React.Component {
    render() {
        const fields = {
            email: {
                rules: [
                    { type: 'required', prompt: 'Введите email' },
                    { type: 'email', prompt: 'Введите корректный email' }
                ]
            },
            password: {
                rules: [
                    { type: 'required', prompt: 'Введите пароль' },
                    { type: 'minLength[6]', prompt: 'Пароль должен быть не менее 6 символов' }
                ]
            }
        }

        return(
            <Form
                fields={fields}>
                {() => {
                    return(
                        <React.Fragment>
                            <h1>Hello World</h1>
                            <FormField name="email">
                                <Input />
                            </FormField>
                            <FormField name="password">
                                <div>123</div>
                            </FormField>
                        </React.Fragment>
                    )
                }}
            </Form>
        )
    }
}

export default LoginForm;